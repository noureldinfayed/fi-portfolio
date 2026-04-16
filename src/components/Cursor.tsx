'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.left = mouseX - 4 + 'px'
        dot.current.style.top = mouseY - 4 + 'px'
      }
    }

    function animate() {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring.current) {
        ring.current.style.left = ringX - 16 + 'px'
        ring.current.style.top = ringY - 16 + 'px'
      }
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', move)
    animate()

    const hoverEls = document.querySelectorAll('a, button, [data-hover]')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (ring.current) ring.current.style.transform = 'scale(2.5)'
        if (dot.current) dot.current.style.opacity = '0'
      })
      el.addEventListener('mouseleave', () => {
        if (ring.current) ring.current.style.transform = 'scale(1)'
        if (dot.current) dot.current.style.opacity = '1'
      })
    })

    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot} className="cursor" style={{ position:'fixed', pointerEvents:'none', zIndex:9999 }} />
      <div ref={ring} className="cursor-follower" style={{ position:'fixed', pointerEvents:'none', zIndex:9998 }} />
    </>
  )
}
