import { Application, Filter, GlProgram, Rectangle, Sprite, Texture } from 'pixi.js'

const WIDTH = 1536
const HEIGHT = 1024

const vertex = `
precision highp float;
in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vSceneCoord;
uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
void main() {
  vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
  position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
  position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
  gl_Position = vec4(position, 0.0, 1.0);
  vTextureCoord = aPosition * uOutputFrame.zw * uInputSize.zw;
  vSceneCoord = aPosition;
}`

const fragment = `
precision highp float;
in vec2 vTextureCoord;
in vec2 vSceneCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform sampler2D uLettering;
uniform vec4 uInputSize;
uniform float uSceneTime;

const vec2 sceneSize = vec2(1536.0, 1024.0);
float luminance(vec3 color) { return dot(color, vec3(.2126, .7152, .0722)); }
float enter(float start, float duration) { return smoothstep(start, start + duration, uSceneTime); }

vec3 lettering(vec2 uv) {
  vec2 p = uv * sceneSize;
  vec3 early = texture(uLettering, vec2(uv.x, uv.y * .5)).rgb;
  float late = texture(uLettering, vec2(uv.x, uv.y * .5 + .5)).b;
  float stoneRow = p.y < 400.0 ? 0.0 : (p.y + .25 * (p.x - 454.0) < 575.0 ? 1.0 : 2.0);
  float bridgeRow = p.x < 830.0 ? 0.0 : 1.0;
  float buildingRow = clamp(floor((p.y + .4 * (p.x - 1190.0) - 660.0) / 46.0), 0.0, 2.0);
  float foundation = enter(.4 + stoneRow * .24, .5);
  foundation *= 1.0 - .45 * enter(2.15, .8) + .25 * enter(4.25, 1.0);
  float bridge = enter(2.0 + bridgeRow * .28, .6);
  float building = enter(2.7 + buildingRow * .16, .5) * (1.0 - enter(4.05, .35));
  float present = enter(4.4 + buildingRow * .12, .45);
  return vec3(early.r * foundation, early.g * bridge, early.b * building + late * present);
}

void main() {
  vec2 p = vSceneCoord * sceneSize;
  vec2 pixel = uInputSize.zw;
  vec3 base = texture(uTexture, vTextureCoord).rgb;
  float height = luminance(base);
  float reliefX = luminance(texture(uTexture, vTextureCoord + vec2(pixel.x, 0.0)).rgb) - height;
  float reliefY = luminance(texture(uTexture, vTextureCoord + vec2(0.0, pixel.y)).rgb) - height;
  vec2 relief = vec2(reliefX, reliefY) * 16.0 / sceneSize;
  vec2 engravedUV = vSceneCoord + relief;
  vec3 ink = lettering(engravedUV);
  vec2 bevelStep = vec2(.65, 1.2) / sceneSize;
  vec3 bevel = lettering(engravedUV - bevelStep) - lettering(engravedUV + bevelStep);
  float grain = smoothstep(.07, .4, height);
  float cut = ink.r * mix(.6, 1.0, grain) + ink.b;
  float rim = bevel.r + bevel.b;
  float grazingLight = exp(-pow((p.x + p.y * .25 - (350.0 + uSceneTime * 160.0)) / 105.0, 2.0));
  vec3 material = base * (1.0 - cut * .42);
  material += vec3(.58, .69, .8) * max(rim, 0.0) * (.36 + grazingLight * .2);
  material -= base * max(-rim, 0.0) * .65;

  vec3 frosted = (texture(uTexture, vTextureCoord + pixel * 1.4).rgb + texture(uTexture, vTextureCoord - pixel * 1.4).rgb) * .5;
  material = mix(material, frosted * .76 + vec3(.16, .23, .28), ink.g * .78);
  material += vec3(.1, .16, .22) * max(bevel.g, 0.0) * .35;

  vec2 bridgeStart = vec2(619.0, 406.0);
  vec2 bridgeVector = vec2(525.0, 193.0);
  float along = clamp(dot(p - bridgeStart, bridgeVector) / dot(bridgeVector, bridgeVector), 0.0, 1.0);
  float distanceToBridge = length(p - bridgeStart - along * bridgeVector);
  float signalProgress = clamp((uSceneTime - 1.7) / 2.25, 0.0, 1.0);
  float signal = exp(-pow(distanceToBridge / 3.4, 2.0)) * exp(-pow((along - signalProgress) / .075, 2.0));
  signal *= enter(1.7, .2) * (1.0 - enter(3.8, .3));
  material += vec3(.3, .65, .85) * signal;
  finalColor = vec4(clamp(material, 0.0, 1.0), 1.0);
}`

function createLettering(font: string) {
  const atlas = document.createElement('canvas')
  atlas.width = WIDTH
  atlas.height = HEIGHT * 2
  const context = atlas.getContext('2d')
  if (!context) throw new Error('Lettering canvas unavailable')
  const write = (text: string, x: number, y: number, skew: number, size: number, color: string) => {
    context.setTransform(1, skew, 0, 1, x, y)
    context.font = `600 ${size}px ${font}`
    context.fillStyle = color
    context.fillText(text, 0, 0)
  }
  write('Delphi', 453, 320, -.23, 31, '#ff0000')
  write('Regras', 454, 553, -.25, 31, '#ff0000')
  write('Dados', 454, 610, -.25, 31, '#ff0000')
  write('APIs', 714, 396, .34, 25, '#00ff00')
  write('Conexões', 844, 440.2, .34, 25, '#00ff00')
  ;['Node.js', 'Next.js', 'Golang'].forEach((term, index) => write(term, 1190, 697 + index * 46, -.4, 30, '#0000ff'))
  ;['Web', 'Infra', 'Operação'].forEach((term, index) => write(term, 1190, HEIGHT + 697 + index * 46, -.4, 30, '#0000ff'))
  return atlas
}

export type StoryMaterial = { render: (time: number) => void; destroy: () => void }

export async function createStoryMaterial(host: HTMLElement): Promise<StoryMaterial> {
  const app = new Application()
  const image = host.querySelector('img')
  if (!(image instanceof HTMLImageElement)) throw new Error('Story image unavailable')
  await Promise.all([image.decode(), document.fonts.ready])
  const font = getComputedStyle(host).getPropertyValue('--font-display').trim() || 'sans-serif'
  const picture = Texture.from(image, true)
  const lettering = Texture.from(createLettering(font), true)
  let initialized = false
  let filter: Filter | undefined
  let destroyed = false
  let contextAvailable = true
  let lastTime = 0
  const destroy = () => {
    if (destroyed) return
    destroyed = true
    delete host.dataset.material
    // Release the renderer's filter inputs before its texture pool is destroyed.
    filter?.groups[0]?.destroy()
    filter?.destroy(true)
    if (initialized) {
      app.canvas.removeEventListener('webglcontextlost', contextLost)
      app.canvas.removeEventListener('webglcontextrestored', contextRestored)
      app.destroy({ removeView: true }, { children: true })
    }
    picture.destroy(true)
    lettering.destroy(true)
  }
  const render = (time: number) => {
    if (destroyed || !filter) return
    lastTime = time
    if (!contextAvailable) return
    filter.resources.sceneUniforms.uniforms.uSceneTime = time
    app.render()
  }
  const contextLost = (event: Event) => {
    event.preventDefault()
    contextAvailable = false
    delete host.dataset.material
  }
  const contextRestored = () => {
    contextAvailable = true
    render(lastTime)
    host.dataset.material = 'pixi'
  }
  try {
    await app.init({
      width: WIDTH, height: HEIGHT, resolution: 1,
      preference: 'webgl', autoStart: false, antialias: false,
      backgroundAlpha: 0, powerPreference: 'low-power',
    })
    initialized = true
    filter = new Filter({
      glProgram: new GlProgram({ vertex, fragment, name: 'story-engraved-material' }),
      padding: 0,
      resources: {
        uLettering: lettering.source,
        sceneUniforms: { uSceneTime: { value: 0, type: 'f32' } },
      },
    })
    const sculpture = new Sprite(picture)
    sculpture.filters = [filter]
    sculpture.filterArea = new Rectangle(0, 0, WIDTH, HEIGHT)
    app.stage.addChild(sculpture)
    app.canvas.setAttribute('aria-hidden', 'true')
    app.canvas.dataset.storyCanvas = ''
    app.canvas.addEventListener('webglcontextlost', contextLost)
    app.canvas.addEventListener('webglcontextrestored', contextRestored)
    host.appendChild(app.canvas)
    render(0)
    host.dataset.material = 'pixi'
    return { render, destroy }
  } catch (error) {
    destroy()
    throw error
  }
}
