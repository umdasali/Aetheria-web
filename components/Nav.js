'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/',        label: 'Home'    },
  { href: '/heroes',  label: 'Heroes'  },
  { href: '/enemies', label: 'Enemies' },
  { href: '/lore',    label: 'Lore'    },
  { href: '/world',   label: 'World'   },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Body scroll is locked on homepage (full-page snap); listen on the fp container instead
    const fp = document.getElementById('fp');
    const target = fp || window;
    const onScroll = () => setScrolled((fp ? fp.scrollTop : window.scrollY) > 40);
    target.addEventListener('scroll', onScroll, { passive: true });
    // Always show backdrop on pages that lock body scroll
    if (fp) setScrolled(true);
    return () => target.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Don't fight the body-lock on the full-page scroll homepage
    const fp = document.getElementById('fp');
    if (fp) return;
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Faction-color rainbow strip at very top */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 1001,
        background: 'linear-gradient(90deg, #FF4500 0%, #D4A017 25%, #2ECC71 50%, #00B4D8 75%, #9B59B6 100%)',
      }} />

      <nav style={{
        position: 'fixed', top: 2, left: 0, right: 0, zIndex: 1000,
        padding: '0 clamp(20px, 5vw, 60px)',
        height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(8,3,26,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(167,139,250,0.15)' : '1px solid transparent',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 900, color: '#fff',
            boxShadow: '0 0 14px rgba(124,58,237,0.55)',
          }}>A</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#F0EAFF', letterSpacing: 1, lineHeight: 1.1 }}>AETHERIA</div>
            <div style={{ fontSize: 9, color: '#8B7EC8', letterSpacing: 2.5, fontWeight: 600 }}>LEGENDS UNBOUND</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {LINKS.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link key={href} href={href} style={{
                padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                color: active ? '#fff' : '#C4B5FD',
                background: active ? 'rgba(124,58,237,0.28)' : 'transparent',
                border: active ? '1px solid rgba(124,58,237,0.5)' : '1px solid transparent',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(124,58,237,0.12)'; e.currentTarget.style.color = '#fff'; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C4B5FD'; } }}
              >
                {label}
              </Link>
            );
          })}
          <a href="#download" onClick={e=>{const fp=document.getElementById('fp');if(fp){e.preventDefault();fp.scrollTo({top:7*fp.clientHeight,behavior:'smooth'});}}} style={{
            padding: '8px 22px', borderRadius: 8, fontSize: 13, fontWeight: 700,
            background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
            color: '#fff', textDecoration: 'none',
            boxShadow: '0 0 16px rgba(124,58,237,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            marginLeft: 10,
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 22px rgba(124,58,237,0.65)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 16px rgba(124,58,237,0.4)'; }}
          >
            Download
          </a>
        </div>

        {/* Hamburger button — hidden on desktop via CSS */}
        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile full-screen overlay menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(8,3,26,0.97)', backdropFilter: 'blur(24px)',
          paddingTop: '80px', paddingLeft: 28, paddingRight: 28,
        }}>
          <div className="nav-mobile-menu" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link key={href} href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '15px 20px', borderRadius: 12, fontSize: 18, fontWeight: 700,
                    color: active ? '#fff' : '#C4B5FD',
                    background: active ? 'rgba(124,58,237,0.22)' : 'rgba(255,255,255,0.03)',
                    border: active ? '1px solid rgba(124,58,237,0.45)' : '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <a href="#download"
              onClick={e=>{setOpen(false);const fp=document.getElementById('fp');if(fp){e.preventDefault();fp.scrollTo({top:7*fp.clientHeight,behavior:'smooth'});}}}
              style={{
                marginTop: 12, padding: '16px 20px', borderRadius: 12, fontSize: 18, fontWeight: 700,
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                color: '#fff', textDecoration: 'none', textAlign: 'center',
                boxShadow: '0 0 28px rgba(124,58,237,0.55)',
              }}
            >
              Download Free
            </a>
          </div>
        </div>
      )}
    </>
  );
}
