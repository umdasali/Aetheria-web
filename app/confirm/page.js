'use client';

import { useEffect } from 'react';

export default function ConfirmPage() {
  // Strip the Supabase token hash from the URL so it doesn't show to the user.
  // The email is already confirmed server-side before Supabase redirects here.
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  return (
    <main style={{
      minHeight: '100vh', background: '#08031A',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px 20px', position: 'relative', overflow: 'hidden',
    }}>
      <title>Email Verified — Aetheria: Legends Unbound</title>
      {/* Background orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: [
          'radial-gradient(ellipse 60% 40% at 20% 10%, rgba(124,58,237,0.12) 0%, transparent 70%)',
          'radial-gradient(ellipse 50% 35% at 80% 80%, rgba(219,39,119,0.10) 0%, transparent 70%)',
        ].join(','),
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 420,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.04))',
        border: '1px solid rgba(167,139,250,0.18)',
        borderRadius: 20, padding: '48px 32px 40px',
        textAlign: 'center',
        animation: 'rise 0.6s cubic-bezier(0.16,1,0.3,1) both',
      }}>
        {/* Top shimmer line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)',
        }} />

        {/* Icon */}
        <div style={{
          width: 72, height: 72, borderRadius: '50%', margin: '0 auto 24px',
          background: 'linear-gradient(135deg, rgba(5,150,105,0.25), rgba(5,150,105,0.1))',
          border: '1px solid rgba(5,150,105,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 30,
        }}>✅</div>

        {/* Wordmark */}
        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase',
          background: 'linear-gradient(90deg, #A78BFA, #DB2777)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', marginBottom: 4 }}>Aetheria</p>
        <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: '#8B7EC8',
          textTransform: 'uppercase', marginBottom: 28 }}>Legends Unbound</p>

        <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)', margin: '0 auto 24px' }} />

        <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 10, color: '#F0EAFF' }}>
          Email{' '}
          <span style={{
            background: 'linear-gradient(90deg, #A78BFA, #DB2777)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Verified</span>
        </h1>

        <p style={{ fontSize: 13, color: '#8B7EC8', lineHeight: 1.7, marginBottom: 28 }}>
          Your identity has been confirmed.<br />
          Return to the app to begin your journey.
        </p>

        {/* Steps */}
        <div style={{
          background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.22)',
          borderRadius: 12, padding: '16px 20px', marginBottom: 28, textAlign: 'left',
        }}>
          {[
            ['1', 'Open the Aetheria app on your device'],
            ['2', 'Tap "I\'ve Verified — Continue"'],
            ['3', 'Your progress will sync across all devices'],
          ].map(([num, text]) => (
            <div key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: num === '3' ? 0 : 10 }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 900, color: '#fff', marginTop: 1,
              }}>{num}</div>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#F0EAFF', lineHeight: 1.5 }}>{text}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#8B7EC8' }}>
          ziriverse.com · Aetheria Legends
        </p>
      </div>

      <style>{`
        @keyframes rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
