'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FooterSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <footer ref={ref} style={{
      position: 'relative',
      minHeight: '70vh',
      background: '#040406',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(60px, 10vh, 100px) clamp(24px, 5vw, 80px)',
      overflow: 'hidden',
      borderTop: '1px solid rgba(201,168,76,0.06)',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant, serif',
        fontSize: 'clamp(60px, 14vw, 180px)',
        fontWeight: 300,
        color: 'rgba(201,168,76,0.04)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        Let&apos;s build.
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ overflow: 'hidden', marginBottom: '12px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, ease: [0.16,1,0.3,1] }}
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(40px, 7vw, 100px)',
              fontWeight: 300,
              color: '#F2EDE4',
              lineHeight: 0.95,
            }}
          >
            Ready to start?
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(242,237,228,0.07)',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.25)',
              marginBottom: '6px',
            }}>Fayed Intelligence</p>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.15)',
            }}>© 2026 · All rights reserved</p>
          </div>

          <a
            href="https://fayedintelligence.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              textDecoration: 'none',
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '14px 32px',
              borderRadius: '100px',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#C9A84C'
              e.currentTarget.style.color = '#060608'
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#C9A84C'
            }}
          >
            Visit Studio ↗
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
