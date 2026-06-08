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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 clamp(20px, 5vw, 60px)',
      height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(8,3,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(167,139,250,0.15)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 900, color: '#fff',
          boxShadow: '0 0 12px rgba(124,58,237,0.5)',
        }}>A</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 900, color: '#F0EAFF', letterSpacing: 1, lineHeight: 1.1 }}>AETHERIA</div>
          <div style={{ fontSize: 9, color: '#8B7EC8', letterSpacing: 2, fontWeight: 600 }}>LEGENDS UNBOUND</div>
        </div>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {LINKS.map(({ href, label }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link key={href} href={href} style={{
              padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600,
              color: active ? '#fff' : '#C4B5FD',
              background: active ? 'rgba(124,58,237,0.3)' : 'transparent',
              border: active ? '1px solid rgba(124,58,237,0.5)' : '1px solid transparent',
              transition: 'all 0.2s',
              textDecoration: 'none',
            }}>
              {label}
            </Link>
          );
        })}
        <a href="#download" style={{
          padding: '8px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700,
          background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
          color: '#fff', textDecoration: 'none',
          boxShadow: '0 0 16px rgba(124,58,237,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          marginLeft: 8,
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 16px rgba(124,58,237,0.4)'; }}
        >
          Download
        </a>
      </div>
    </nav>
  );
}
