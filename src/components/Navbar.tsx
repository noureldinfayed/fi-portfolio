'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: '70px',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 clamp(24px, 5vw, 80px)',
      background: scrolled ? 'rgba(6,6,8,0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.07)' : 'none',
      transition: 'all 0.5s ease',
    }}>
      <div>
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          color: '#F2EDE4',
          fontWeight: 300,
        }}>
          Fayed Intelligence
        </p>
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '8px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          fontWeight: 200,
          marginTop: '2px',
        }}>
          Cairo · Berlin
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <a href="#work" style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(242,237,228,0.45)',
          textDecoration: 'none',
          transition: 'color 0.3s',
        }}
        onMouseOver={e => e.currentTarget.style.color = '#C9A84C'}
        onMouseOut={e => e.currentTarget.style.color = 'rgba(242,237,228,0.45)'}
        >
          Work
        </a>
        <a href="https://www.fayedintelligence.com/#team"
          target="_blank"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(242,237,228,0.45)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseOver={e => e.currentTarget.style.color = '#C9A84C'}
          onMouseOut={e => e.currentTarget.style.color = 'rgba(242,237,228,0.45)'}
        >
          Team
        </a>
        <a href="https://fayedintelligence.com"
          target="_blank"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            textDecoration: 'none',
            border: '1px solid rgba(201,168,76,0.3)',
            padding: '8px 18px',
            borderRadius: '100px',
            transition: 'all 0.3s',
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
          Contact
        </a>
      </div>
    </nav>
  )
}
