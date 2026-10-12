import { existsSync } from 'node:fs'
import path from 'node:path'

export const photos = {
  mesa: {
    src: '/img/mesa.jpg',
    alt: 'Mesa iluminada pelo sol, com notebook, caderno aberto, caneca e plantas junto à janela.',
  },
  anos: {
    src: '/img/anos-1999-2026.jpg',
    alt: 'Os números 1999 em metal escovado e 2026 em vidro, lado a lado.',
  },
  serra: {
    src: '/img/serra.jpg',
    alt: 'Colinas da Serra Gaúcha com araucárias e neblina ao amanhecer.',
  },
  croche: {
    src: '/img/croche.jpg',
    alt: 'Peça de crochê em listras verde e cru, com agulha, ao lado de um tablet com um diagrama.',
  },
} as const

export function photoAvailable(src: string) {
  return existsSync(path.join(process.cwd(), 'public', src))
}
