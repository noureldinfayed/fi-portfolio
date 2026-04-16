'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ProjectSceneProps {
  project: {
    index: string
    name: string
    subtitle: string
    location: string
    category: string
    tagline: string
    url: string
    bgImage: string
    bgTint: string
    accentColor: string
  }
  isEven: boolean
}

export default function ProjectScene({ project, isEven }: ProjectSceneProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        src={project.bgImage}
        alt=""
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.55) saturate(0.7)',
          transform: 'scale(1.05)',
          transition: 'transform 8s ease',
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: project.bgTint,
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: isEven
          ? 'linear-gradient(to right, rgba(6,6,8,0.92) 0%, rgba(6,6,8,0.5) 50%, rgba(6,6,8,0.1) 100%)'
          : 'linear-gradient(to left, rgba(6,6,8,0.92) 0%, rgba(6,6,8,0.5) 50%, rgba(6,6,8,0.1) 100%)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        padding: 'clamp(24px, 5vw, 80px)',
        display: 'flex',
        justifyContent: isEven ? 'flex-start' : 'flex-end',
      }}>
        <div style={{ maxWidth: 'min(560px, 100%)' }}>

          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <span style={{
              fontFamily: 'Cormorant, serif',
              fontSize: '13px',
              fontStyle: 'italic',
              color: project.accentColor,
              opacity: 0.7,
            }}>{project.index}</span>
            <div style={{
              width: '40px',
              height: '1px',
              background: project.accentColor,
              opacity: 0.4,
            }} />
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: project.accentColor,
              fontWeight: 300,
            }}>{project.category}</span>
          </motion.div>

          <div style={{ overflow: 'hidden', marginBottom: '6px' }}>
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Cormorant, serif',
                fontSize: 'clamp(48px, 7vw, 96px)',
                fontWeight: 300,
                color: '#F2EDE4',
                lineHeight: 0.95,
              }}
            >
              {project.name}
            </motion.h2>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
            <motion.p
              initial={{ y: '105%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Cormorant, serif',
                fontSize: 'clamp(24px, 3.5vw, 42px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: project.accentColor,
                lineHeight: 1.2,
              }}
            >
              {project.subtitle}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.3)',
              marginBottom: '20px',
            }}
          >
            {project.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              fontWeight: 200,
              color: 'rgba(242,237,228,0.5)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '380px',
            }}
          >
            &ldquo;{project.tagline}&rdquo;
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              width: '100%',
              height: '1px',
              background: `linear-gradient(to right, ${project.accentColor}60, transparent)`,
              transformOrigin: 'left',
              marginBottom: '32px',
            }}
          />

          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#F2EDE4',
              textDecoration: 'none',
              transition: 'gap 0.3s, color 0.3s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.gap = '20px'
              e.currentTarget.style.color = project.accentColor
            }}
            onMouseOut={e => {
              e.currentTarget.style.gap = '12px'
              e.currentTarget.style.color = '#F2EDE4'
            }}
          >
            View project
            <span style={{ fontSize: '18px' }}>→</span>
          </motion.a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: isEven ? 'auto' : 'clamp(24px, 5vw, 80px)',
        left: isEven ? 'clamp(24px, 5vw, 80px)' : 'auto',
        fontFamily: 'Cormorant, serif',
        fontSize: 'clamp(100px, 18vw, 220px)',
        fontWeight: 300,
        color: 'rgba(242,237,228,0.03)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {project.index}
      </div>
    </section>
  )
}
