'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function StudioInterlude() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section ref={ref} style={{
      minHeight: '80vh',
      background: '#060608',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(60px, 10vh, 120px) clamp(24px, 8vw, 120px)',
      borderTop: '1px solid rgba(201,168,76,0.06)',
      borderBottom: '1px solid rgba(201,168,76,0.06)',
    }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '40px',
          }}
        >
          The Studio
        </motion.p>
        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16,1,0.3,1] }}
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(26px, 4vw, 52px)',
              fontWeight: 300,
              color: '#F2EDE4',
              lineHeight: 1.45,
            }}
          >
            Fayed Intelligence is an AI-native digital studio
            delivering <em style={{ color:'#C9A84C', fontStyle:'italic' }}>
            premium web experiences</em> in days, not months.
            From Alexandria to Düsseldorf — we build for businesses
            that understand the value of a first impression.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export function StatsInterlude() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  const stats = [
    { number: '11', label: 'Live Products' },
    { number: '48H', label: 'Average Delivery' },
    { number: '4', label: 'Active Markets' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section ref={ref} style={{
      background: '#060608',
      padding: 'clamp(60px, 10vh, 100px) clamp(24px, 8vw, 120px)',
      borderBottom: '1px solid rgba(201,168,76,0.06)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '2px',
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            style={{
              padding: 'clamp(32px, 4vw, 56px) clamp(20px, 3vw, 40px)',
              borderTop: '1px solid rgba(201,168,76,0.12)',
            }}
          >
            <p style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 300,
              color: '#C9A84C',
              lineHeight: 1,
              marginBottom: '10px',
            }}>{s.number}</p>
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.3)',
            }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
