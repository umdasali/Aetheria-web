'use client';

const C = {
  bgDeep:      '#08031A',
  bgBase:      '#0E0720',
  bgCard:      '#1C0F38',
  primary:     '#7C3AED',
  primaryL:    '#A78BFA',
  secondary:   '#DB2777',
  text:        '#F0EAFF',
  textSoft:    '#C4B5FD',
  textMuted:   '#8B7EC8',
  border:      'rgba(167,139,250,0.18)',
  borderStr:   'rgba(167,139,250,0.42)',
  gold:        '#D97706',
};

const FACTIONS = [
  { name: 'EMBERVEIL',  color: '#FF4500', icon: '🔥', lore: 'Masters of fire and destruction' },
  { name: 'GLACIARA',   color: '#00B4D8', icon: '❄️', lore: 'Ancient ice wielders of the north' },
  { name: 'SUNSPIRE',   color: '#FFD700', icon: '☀️', lore: 'Holy champions of radiant light' },
  { name: 'VERDANIA',   color: '#2ECC71', icon: '🌿', lore: 'Nature guardians of the deep wilds' },
  { name: 'VOIDMARK',   color: '#9B59B6', icon: '🌀', lore: 'Void sorcerers from the abyss' },
];

const FEATURES = [
  { icon: '⚔️', title: '53 Legendary Heroes', desc: 'Collect heroes across 5 factions and 5 ranks — from common C-rank warriors to the legendary SOVEREIGN tier.' },
  { icon: '🃏', title: 'Trump Card Battles',  desc: 'Turn-based card combat with skills, status effects, and devastating Trump Cards that can turn the tide of any fight.' },
  { icon: '📖', title: '75 Story Stages',     desc: '25 epic chapters × 3 parts each, with pre-battle narration, lore, and boss encounters at every chapter climax.' },
  { icon: '🏰', title: '200-Floor Tower',     desc: 'The Endless Tower resets weekly. Climb 200 floors with boss battles every 10th floor and milestone rewards.' },
  { icon: '✨', title: 'Gacha Summoning',     desc: 'Pull for heroes with S 4% · A 22% · B 30% · C 44% rates. Pity system guarantees an S-rank at 90 pulls.' },
  { icon: '☁️', title: 'Cloud Save',          desc: 'Sign in with your Aetheria account to sync your full progress — heroes, team, and tower rank — across all devices.' },
];

const STATS = [
  { value: '53',  label: 'Heroes' },
  { value: '5',   label: 'Factions' },
  { value: '75',  label: 'Story Stages' },
  { value: '200', label: 'Tower Floors' },
];

export default function LandingPage() {
  return (
    <main style={{ background: C.bgDeep, minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Stars / orb background ─────────────────────────── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: [
            `radial-gradient(ellipse 70% 50% at 15%  5%,  rgba(124,58,237,0.14) 0%, transparent 70%)`,
            `radial-gradient(ellipse 60% 45% at 85% 20%,  rgba(219,39,119,0.10) 0%, transparent 70%)`,
            `radial-gradient(ellipse 80% 60% at 50% 80%,  rgba(124,58,237,0.08) 0%, transparent 70%)`,
          ].join(','),
        }} />
      </div>

      {/* ── Nav ────────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,3,26,0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`,
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 60,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>✦</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 3, color: C.text, textTransform: 'uppercase' }}>Aetheria</div>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 2, color: C.textMuted, textTransform: 'uppercase', marginTop: -2 }}>Legends Unbound</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {['Features', 'Factions', 'Download'].map(label => (
            <a key={label} href={`#${label.toLowerCase()}`} style={{
              fontSize: 12, fontWeight: 700, letterSpacing: 1,
              color: C.textMuted, textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = C.primaryL}
            onMouseLeave={e => e.target.style.color = C.textMuted}
            >{label}</a>
          ))}
        </div>
      </nav>

      {/* ── Hero section ───────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 1,
        minHeight: '92vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        {/* Rank badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(124,58,237,0.12)',
          border: `1px solid rgba(124,58,237,0.35)`,
          borderRadius: 100, padding: '6px 16px', marginBottom: 28,
        }}>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 2, color: C.primaryL, textTransform: 'uppercase' }}>
            ✦ Now Available on iOS & Android
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(42px, 8vw, 84px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 12 }}>
          <span style={{
            background: `linear-gradient(135deg, ${C.primaryL}, ${C.secondary})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Aetheria</span>
        </h1>
        <h2 style={{
          fontSize: 'clamp(13px, 2.5vw, 20px)', fontWeight: 800, letterSpacing: 6,
          color: C.textSoft, textTransform: 'uppercase', marginBottom: 24,
        }}>
          Legends Unbound
        </h2>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(15px, 2.2vw, 20px)', fontWeight: 500, lineHeight: 1.7,
          color: C.textMuted, maxWidth: 540, marginBottom: 48,
        }}>
          Collect 53 legendary heroes. Master the Trump Card system.
          Conquer the 200-floor Endless Tower.
        </p>

        {/* CTA buttons */}
        <div id="download" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 72 }}>
          <StoreButton store="apple"  label="App Store"   sub="Download on the" />
          <StoreButton store="google" label="Google Play" sub="Get it on" />
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: C.text,
                background: `linear-gradient(135deg, ${C.primaryL}, ${C.secondary})`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{value}+</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: C.textMuted, textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
        <SectionLabel>Game Features</SectionLabel>
        <h2 style={sectionTitle}>Everything you need for an epic adventure</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20, maxWidth: 1100, margin: '0 auto',
        }}>
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.04))`,
              border: `1px solid ${C.border}`,
              borderRadius: 16, padding: '28px 24px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: 0.3 }}>{title}</h3>
              <p style={{ fontSize: 13, fontWeight: 500, color: C.textMuted, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Factions ───────────────────────────────────────── */}
      <section id="factions" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
        <SectionLabel>World Factions</SectionLabel>
        <h2 style={sectionTitle}>Five factions. One destiny.</h2>
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
          maxWidth: 900, margin: '0 auto',
        }}>
          {FACTIONS.map(({ name, color, icon, lore }) => (
            <div key={name} style={{
              flex: '1 1 140px', maxWidth: 170,
              background: `linear-gradient(160deg, ${color}18, ${color}08)`,
              border: `1px solid ${color}44`,
              borderRadius: 14, padding: '24px 16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 30, marginBottom: 10 }}>{icon}</div>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: 2, color, textTransform: 'uppercase', marginBottom: 6 }}>{name}</div>
              <div style={{ fontSize: 11, fontWeight: 500, color: C.textMuted, lineHeight: 1.5 }}>{lore}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Download CTA ───────────────────────────────────── */}
      <section style={{
        position: 'relative', zIndex: 1, padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: 600, margin: '0 auto',
          background: `linear-gradient(135deg, rgba(124,58,237,0.12), rgba(219,39,119,0.08))`,
          border: `1px solid ${C.borderStr}`,
          borderRadius: 24, padding: '56px 40px',
        }}>
          <div style={{ fontSize: 42, marginBottom: 20 }}>✦</div>
          <h2 style={{ fontSize: 'clamp(22px,4vw,34px)', fontWeight: 900, color: C.text, marginBottom: 14 }}>
            Begin Your Legend
          </h2>
          <p style={{ fontSize: 15, fontWeight: 500, color: C.textMuted, lineHeight: 1.7, marginBottom: 36 }}>
            Free to play. Cloud save included.<br />Your progress, everywhere you go.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <StoreButton store="apple"  label="App Store"   sub="Download on the" />
            <StoreButton store="google" label="Google Play" sub="Get it on" />
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer style={{
        position: 'relative', zIndex: 1,
        borderTop: `1px solid ${C.border}`,
        padding: '32px 24px',
        display: 'flex', flexWrap: 'wrap', gap: 16,
        alignItems: 'center', justifyContent: 'space-between',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 3, color: C.text, textTransform: 'uppercase' }}>Aetheria: Legends Unbound</div>
          <div style={{ fontSize: 11, color: C.textMuted, marginTop: 4 }}>© {new Date().getFullYear()} Ziriverse. All rights reserved.</div>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {['Privacy Policy', 'Terms of Service', 'Support'].map(item => (
            <span key={item} style={{ fontSize: 11, color: C.textMuted, fontWeight: 600, cursor: 'pointer' }}>{item}</span>
          ))}
        </div>
      </footer>

    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 14 }}>
      <span style={{
        display: 'inline-block',
        fontSize: 10, fontWeight: 800, letterSpacing: 3,
        textTransform: 'uppercase', color: '#A78BFA',
        background: 'rgba(124,58,237,0.12)',
        border: '1px solid rgba(124,58,237,0.3)',
        borderRadius: 100, padding: '5px 14px',
      }}>{children}</span>
    </div>
  );
}

function StoreButton({ store, label, sub }) {
  const isApple = store === 'apple';
  return (
    <a href="#" style={{
      display: 'flex', alignItems: 'center', gap: 12,
      background: isApple ? 'rgba(255,255,255,0.06)' : 'rgba(124,58,237,0.15)',
      border: `1px solid ${isApple ? 'rgba(255,255,255,0.12)' : 'rgba(124,58,237,0.35)'}`,
      borderRadius: 12, padding: '12px 22px',
      cursor: 'pointer', transition: 'all 0.2s',
      textDecoration: 'none',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <span style={{ fontSize: 28 }}>{isApple ? '🍎' : '▶'}</span>
      <div>
        <div style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>{sub}</div>
        <div style={{ fontSize: 16, fontWeight: 800, color: '#F0EAFF', letterSpacing: 0.3 }}>{label}</div>
      </div>
    </a>
  );
}

const sectionTitle = {
  fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 900, color: '#F0EAFF',
  textAlign: 'center', marginBottom: 40, letterSpacing: -0.3,
  maxWidth: 600, margin: '0 auto 40px',
};
