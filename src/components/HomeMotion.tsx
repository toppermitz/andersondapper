'use client'

import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import type { StoryMaterial } from '../lib/story-material'

gsap.registerPlugin(useGSAP, ScrollToPlugin, ScrollTrigger, CustomEase)

export default function HomeMotion({ children, className }: { children: ReactNode; className: string }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP((_, contextSafe) => {
    const page = root.current
    if (!page || !contextSafe) return

    const header = page.querySelector<HTMLElement>('[data-masthead]')!
    const nav = page.querySelector<HTMLElement>('nav[aria-label="Navegação principal"]')!
    const indicator = page.querySelector<HTMLElement>('[data-nav-indicator]')!
    const progress = page.querySelector<HTMLElement>('[data-scroll-progress]')!
    const story = page.querySelector<HTMLElement>('[data-story]')!
    const stage = page.querySelector<HTMLElement>('[data-story-stage]')!
    const visual = page.querySelector<HTMLElement>('[data-story-visual]')!
    const chapters = [...page.querySelectorAll<HTMLElement>('[data-chapter]')]
    const chapterLinks = [...page.querySelectorAll<HTMLAnchorElement>('[data-chapter-link]')]
    const projects = page.querySelector<HTMLElement>('[data-projects]')!
    const projectStage = page.querySelector<HTMLElement>('[data-project-stage]')!
    const cards = [...page.querySelectorAll<HTMLElement>('[data-project]')]
    const counter = page.querySelector<HTMLElement>('[data-project-counter]')!
    const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
    const sections = links.map(link => document.getElementById(link.hash.slice(1))!)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const ease = CustomEase.create('portfolio-out', '0.23,1,0.32,1')
    const media = gsap.matchMedia()
    let storyTimeline: gsap.core.Timeline | undefined
    let material: StoryMaterial | undefined
    let projectTimeline: gsap.core.Timeline | undefined
    let scrollTween: gsap.core.Tween | undefined
    let current: HTMLAnchorElement | undefined
    let offsets: number[] = []
    let keyboardNavigation = false
    let disposed = false
    const setProgress = gsap.quickSetter(progress, 'scaleX')
    const previousBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'

    const positionIndicator = contextSafe((animate = true) => {
      const rect = current?.getBoundingClientRect()
      gsap.to(indicator, {
        x: rect ? rect.left - nav.getBoundingClientRect().left : 0,
        scaleX: rect?.width ?? 0,
        opacity: rect ? 1 : 0,
        duration: reduce.matches || keyboardNavigation || !animate ? 0 : 0.24,
        ease,
        overwrite: true,
      })
    })
    const update = () => {
      const max = ScrollTrigger.maxScroll(window)
      const y = window.scrollY
      setProgress(max > 0 ? y / max : 0)
      const index = max > 0 && y >= max - 2
        ? sections.findIndex(section => section.id === 'contato')
        : offsets.reduce((best, offset, i) => offset <= y + header.offsetHeight + 80 && (best < 0 || offset > offsets[best]) ? i : best, -1)
      const next = index >= 0 ? links[index] : undefined
      if (next === current) return
      current = next
      links.forEach(link => {
        if (link === current) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
      positionIndicator()
    }
    const measure = () => {
      offsets = sections.map(section => section.getBoundingClientRect().top + window.scrollY)
      update()
      positionIndicator(false)
    }

    media.add({
      desktop: '(min-width: 701px)',
      mobile: '(max-width: 700px)',
      tall: '(min-height: 700px)',
      tallMobile: '(min-height: 780px)',
      reduced: '(prefers-reduced-motion: reduce)',
    }, context => {
      if (!context.conditions?.tall || context.conditions.reduced) return
      const mobile = Boolean(context.conditions.mobile)
      if (mobile && !context.conditions.tallMobile) return
      story.dataset.enhanced = 'true'
      const times = [0, 1.55, 3.25, 4.95]
      let active = -1
      const camera = mobile
        ? [{ scale: 1.35, xPercent: 9, yPercent: -3 }, { scale: 1.3, xPercent: -13, yPercent: -3 }, { scale: 1.18, xPercent: -12, yPercent: -1 }]
        : [{ scale: 1.23, xPercent: 8, yPercent: 2 }, { scale: 1.25, xPercent: -10, yPercent: -2 }, { scale: 1.12, xPercent: -8, yPercent: 0 }]
      gsap.set(chapters.slice(1), { autoAlpha: 0, y: 45 })
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: story,
          pin: stage,
          start: () => `top top+=${header.offsetHeight}`,
          end: () => `+=${window.innerHeight * (mobile ? 3.2 : 3.8)}`,
          scrub: 0.55,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          material?.render(timeline.time())
          const next = times.reduce((best, time, index) => timeline.time() >= time - 0.25 ? index : best, 0)
          if (next === active) return
          active = next
          chapterLinks.forEach((link, index) => {
            if (index === active) link.setAttribute('aria-current', 'step')
            else link.removeAttribute('aria-current')
          })
        },
      })
      storyTimeline = timeline
      timeline.addLabel('hero-title', 0)
      chapterLinks[0].setAttribute('aria-current', 'step')
      chapters.slice(1).forEach((chapter, index) => {
        const start = 0.75 + index * 1.7
        timeline.to(chapters[index], { autoAlpha: 0, y: -35, duration: 0.45 }, start)
          .to(chapter, { autoAlpha: 1, y: 0, duration: 0.55 }, start + 0.25)
          .addLabel(chapterLinks[index + 1].hash.slice(1), times[index + 1])
      })
      timeline.to(visual, { ...camera[0], duration: 2.05, ease: 'sine.inOut' }, 0)
        .to(visual, { ...camera[1], duration: 1.55, ease: 'sine.inOut' }, 2.05)
        .to(visual, { ...camera[2], duration: 2.3, ease: 'sine.inOut' }, 3.6)
      return () => {
        storyTimeline = undefined
        material?.render(5.9)
        delete story.dataset.enhanced
        chapterLinks.forEach(link => link.removeAttribute('aria-current'))
      }
    })

    media.add('(prefers-reduced-motion: no-preference) and (min-width: 900px) and (min-height: 800px)', () => {
      projects.dataset.enhanced = 'true'
      gsap.set(cards.slice(1), { autoAlpha: 0, yPercent: 105 })
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: projectStage,
          pin: projectStage,
          start: () => `top top+=${header.offsetHeight + 12}`,
          end: () => `+=${window.innerHeight * 2}`,
          scrub: 0.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          const index = timeline.time() < 1.2 ? 1 : timeline.time() < 2.6 ? 2 : 3
          counter.textContent = `0${index} / 0${cards.length}`
        },
      })
      projectTimeline = timeline
      cards.slice(1).forEach((card, index) => {
        const start = 0.5 + index * 1.4
        timeline.to(cards[index], { scale: 0.95, autoAlpha: 0, duration: 0.8 }, start)
          .to(card, { autoAlpha: 1, yPercent: 0, duration: 0.9 }, start + 0.1)
      })
      timeline.to(cards[cards.length - 1], { scale: 1, duration: 0.6 })
      return () => {
        projectTimeline = undefined
        delete projects.dataset.enhanced
        counter.textContent = `01 / 0${cards.length}`
      }
    })

    media.add('(prefers-reduced-motion: no-preference)', () => {
      let cancelled = false
      void import('../lib/story-material')
        .then(({ createStoryMaterial }) => cancelled ? undefined : createStoryMaterial(visual))
        .then(scene => {
          if (!scene) return
          if (cancelled) { scene.destroy(); return }
          material = scene
          material.render(storyTimeline?.time() ?? 5.9)
        })
        .catch(error => { if (!cancelled) console.warn('A cena continua com a imagem estática.', error) })
      const words = page.querySelectorAll('[data-statement] span')
      gsap.fromTo(words, { opacity: 0.2 }, {
        opacity: 1,
        stagger: 0.5,
        ease: 'none',
        scrollTrigger: { trigger: page.querySelector('[data-statement]'), start: 'top 80%', end: 'bottom 45%', scrub: true },
      })
      return () => {
        cancelled = true
        material?.destroy()
        material = undefined
      }
    })

    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: update, onRefresh: measure })
    const resize = new ResizeObserver(measure)
    resize.observe(page)
    resize.observe(header)
    measure()

    const settleScenes = () => {
      ScrollTrigger.update()
      storyTimeline?.scrollTrigger?.getTween()?.progress(1)
      projectTimeline?.scrollTrigger?.getTween()?.progress(1)
    }
    const destination = (target: HTMLElement) => {
      const trigger = storyTimeline?.scrollTrigger
      if (trigger && storyTimeline && target.id in storyTimeline.labels) return trigger.labelToScroll(target.id)
      if (target === projects && projectTimeline?.scrollTrigger) return projectTimeline.scrollTrigger.start
      return Math.max(0, target.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 24)
    }
    const cancelScroll = () => { scrollTween?.kill(); keyboardNavigation = false }
    const onKey = (event: KeyboardEvent) => {
      if (['Escape', 'Tab', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) cancelScroll()
    }
    const onClick = contextSafe((event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null
      if (!link) return
      const target = document.getElementById(link.hash.slice(1))
      if (!target) return
      event.preventDefault()
      cancelScroll()
      keyboardNavigation = event.detail === 0
      scrollTween = gsap.to(window, {
        scrollTo: { y: destination(target), autoKill: true },
        duration: reduce.matches || keyboardNavigation ? 0 : 0.85,
        ease,
        onComplete: () => {
          settleScenes()
          if (window.location.hash !== link.hash) window.history.pushState(window.history.state, '', link.hash)
          target.setAttribute('tabindex', '-1')
          target.focus({ preventScroll: true })
          keyboardNavigation = false
        },
      })
    })
    const restoreHash = () => {
      const target = document.getElementById(window.location.hash.slice(1))
      if (!target) return
      window.scrollTo({ top: destination(target), behavior: 'instant' })
      settleScenes()
    }
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      restoreHash()
    })
    document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh() })
    page.addEventListener('click', onClick)
    window.addEventListener('wheel', cancelScroll, { passive: true })
    window.addEventListener('touchstart', cancelScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', restoreHash)
    window.addEventListener('popstate', restoreHash)
    reduce.addEventListener('change', cancelScroll)

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      cancelScroll()
      media.revert()
      resize.disconnect()
      page.removeEventListener('click', onClick)
      window.removeEventListener('wheel', cancelScroll)
      window.removeEventListener('touchstart', cancelScroll)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('hashchange', restoreHash)
      window.removeEventListener('popstate', restoreHash)
      reduce.removeEventListener('change', cancelScroll)
      document.documentElement.style.scrollBehavior = previousBehavior
      links.forEach(link => link.removeAttribute('aria-current'))
    }
  }, { scope: root })

  return <div ref={root} className={className}>{children}</div>
}
