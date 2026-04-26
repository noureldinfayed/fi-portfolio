'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      height: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 'clamp(40px, 6vw, 80px)',
      paddingTop: 'clamp(160px, 24vh, 240px)',
      overflow: 'hidden',
      background: '#060608',
    }}>
      <img
        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=90"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.72) saturate(0.8)',
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(6,6,8,0.70) 0%, rgba(6,6,8,0.10) 50%, rgba(6,6,8,0.25) 100%)',
      }} />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: 'clamp(100px, 12vh, 140px)',
          left: 'clamp(24px, 5vw, 80px)',
          fontFamily: 'Outfit, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          fontWeight: 300,
        }}
      >
        AI-Native Digital Studio
      </motion.p>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <div style={{ overflow: 'hidden', marginBottom: '8px', paddingBottom: '0.3em' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(52px, 9vw, 130px)',
              fontWeight: 300,
              color: '#F2EDE4',
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
            }}
          >
            We build
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '36px', paddingBottom: '0.3em' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(52px, 9vw, 130px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#C9A84C',
              lineHeight: 1.0,
            }}
          >
            experiences.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(15px, 1.8vw, 19px)',
            fontWeight: 300,
            color: 'rgba(242,237,228,0.65)',
            maxWidth: '420px',
            lineHeight: 1.7,
          }}>
            Eleven live products across healthcare, hospitality,
            legal, real estate, and AI. Cairo to Düsseldorf.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          position: 'absolute',
          bottom: 'clamp(40px, 6vw, 80px)',
          right: 'clamp(40px, 6vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 1,
        }}
      >
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'rgba(242,237,228,0.35)',
        }}>
          Scroll to discover
        </p>
        <div style={{
          width: '1px',
          height: '50px',
          background: 'linear-gradient(to bottom, #C9A84C, transparent)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
      </motion.div>
    </section>
  )
}
