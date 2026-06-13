'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import HeroCard from '../components/HeroCard';
import { SOVEREIGN_HEROES, FACTIONS, BOSSES, HEROES } from '../lib/gameData';

// ─── Design tokens ────────────────────────────────────────────────────────────
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
  borderHov:   'rgba(167,139,250,0.45)',
  glass:       'rgba(255,255,255,0.05)',
  glassBorder: 'rgba(255,255,255,0.1)',
  gold:        '#D97706',
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── Section label with flanking decorative lines ────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <div style={{ width: 36, height: 1, background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.55))' }} />
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'rgba(124,58,237,0.13)', border: '1px solid rgba(124,58,237,0.3)',
        borderRadius: 20, padding: '5px 14px',
      }}>
        <div style={{
          width: 5, height: 5, borderRadius: '50%',
          background: C.primaryL, boxShadow: `0 0 7px ${C.primaryL}`,
          animation: 'pulse 2s infinite',
        }} />
        <span style={{ fontSize: 10, fontWeight: 800, color: C.primaryL, letterSpacing: 3, textTransform: 'uppercase' }}>{children}</span>
      </div>
      <div style={{ width: 36, height: 1, background: 'linear-gradient(to left, transparent, rgba(167,139,250,0.55))' }} />
    </div>
  );
}

// ─── Floating hero card ───────────────────────────────────────────────────────
function FloatingCard({ hero, delay = 0, offset = 0 }) {
  return (
    <div style={{
      animation: `floatY 4s ease-in-out ${delay}s infinite`,
      transform: `translateY(${offset}px)`,
      filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.7))',
    }}>
      <HeroCard hero={hero} width={180} compact={false} />
    </div>
  );
}

// ─── Outline button ───────────────────────────────────────────────────────────
function OutlineBtn({ href, children, style = {} }) {
  return (
    <Link href={href} style={{
      display: 'inline-block', padding: '12px 32px', borderRadius: 10,
      border: `1px solid ${C.border}`, color: C.textSoft, textDecoration: 'none',
      fontSize: 14, fontWeight: 600, transition: 'all 0.2s', ...style,
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(124,58,237,0.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textSoft; e.currentTarget.style.background = 'transparent'; }}
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  useReveal();
  const heroScrollRef = useRef(null);
  const featuredBosses = BOSSES.slice(0, 6);
  const featuredHeroes = HEROES.filter(h => h.rank === 'S' || h.sovereign).slice(0, 8);

  const scrollHeroes = (dir) => {
    heroScrollRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' });
  };

  return (
    <>
      <Nav />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.28), transparent),
          radial-gradient(ellipse 60% 80% at 20% 50%, rgba(219,39,119,0.12), transparent),
          radial-gradient(ellipse 50% 70% at 80% 60%, rgba(0,180,216,0.08), transparent),
          ${C.bgDeep}`,
      }}>
        {/* Dot-grid background overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(167,139,250,0.07) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }} />

        {/* Ambient particles */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(18)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: (i % 3 + 1) * 2 + 'px', height: (i % 3 + 1) * 2 + 'px',
              borderRadius: '50%',
              background: i % 3 === 0 ? C.primaryL : i % 3 === 1 ? C.secondary : '#00B4D8',
              left: (i * 5.7) % 100 + '%', top: (i * 7.3) % 100 + '%',
              opacity: 0.35, animation: `floatY ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
            }} />
          ))}
        </div>

        {/* Main 3-column grid */}
        <div style={{
          width: '100%', maxWidth: 1400, margin: '0 auto', flex: 1,
          padding: '100px clamp(20px, 5vw, 60px) 60px',
          display: 'grid', gridTemplateColumns: '1fr clamp(300px, 38vw, 520px) 1fr',
          alignItems: 'center', gap: 32, position: 'relative', zIndex: 2,
        }}>
          {/* Left hero cards */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-end', alignItems: 'center' }}>
            <FloatingCard hero={SOVEREIGN_HEROES[0]} delay={0} offset={-20} />
            <FloatingCard hero={SOVEREIGN_HEROES[1]} delay={1.2} offset={20} />
          </div>

          {/* Center content */}
          <div style={{ textAlign: 'center' }}>
            {/* Faction orb pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 32, flexWrap: 'wrap' }}>
              {Object.values(FACTIONS).map(f => (
                <div key={f.name} title={f.name} style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  background: `${f.color}14`, border: `1px solid ${f.color}40`,
                  borderRadius: 20, padding: '4px 10px',
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: f.color, boxShadow: `0 0 7px ${f.color}` }} />
                  <span style={{ fontSize: 9, fontWeight: 700, color: f.color, letterSpacing: 1.5, textTransform: 'uppercase' }}>{f.name}</span>
                </div>
              ))}
            </div>

            {/* Title */}
            <div style={{
              fontSize: 'clamp(52px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.9,
              background: `linear-gradient(135deg, #F0EAFF 0%, ${C.primaryL} 50%, ${C.secondary} 100%)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              letterSpacing: -2, marginBottom: 10,
            }}>
              AETHERIA
            </div>
            <div style={{
              fontSize: 'clamp(11px, 1.6vw, 15px)', fontWeight: 700, color: C.textMuted,
              letterSpacing: 7, textTransform: 'uppercase', marginBottom: 24,
            }}>
              Legends Unbound
            </div>

            {/* Divider */}
            <div style={{
              width: 60, height: 2, margin: '0 auto 24px',
              background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
              borderRadius: 2,
            }} />

            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 16px)', color: C.textSoft, lineHeight: 1.75,
              maxWidth: 400, margin: '0 auto 32px',
            }}>
              Collect 53 legendary heroes, master Trump Card battles, and unravel
              the fate of five factions across 75 story stages.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#download" style={{
                padding: '14px 34px', borderRadius: 10, fontSize: 15, fontWeight: 700,
                background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                color: '#fff', textDecoration: 'none',
                boxShadow: `0 0 28px rgba(124,58,237,0.55)`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(124,58,237,0.75)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 28px rgba(124,58,237,0.55)'; }}
              >
                Play Now — Free
              </a>
              <Link href="/heroes" style={{
                padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700,
                background: C.glass, color: C.textSoft, textDecoration: 'none',
                border: `1px solid ${C.border}`, backdropFilter: 'blur(12px)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(124,58,237,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textSoft; e.currentTarget.style.background = C.glass; }}
              >
                View All Heroes
              </Link>
            </div>

            {/* Stats — 4 individual glass cards */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              {[
                { val: '53+', label: 'Heroes'       },
                { val: '5',   label: 'Factions'     },
                { val: '75',  label: 'Stages'       },
                { val: '200', label: 'Tower Floors' },
              ].map((s) => (
                <div key={s.label} style={{
                  flex: 1, padding: '14px 6px', textAlign: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  borderRadius: 12, backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.2)'; }}
                >
                  <div style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: C.textMuted, fontWeight: 600, marginTop: 5, letterSpacing: 0.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right hero cards */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-start', alignItems: 'center' }}>
            <FloatingCard hero={SOVEREIGN_HEROES[2]} delay={0.6} offset={20} />
            <FloatingCard hero={SOVEREIGN_HEROES[3]} delay={1.8} offset={-20} />
          </div>
        </div>

        {/* Scroll-down indicator */}
        <div style={{
          position: 'relative', zIndex: 2, paddingBottom: 32,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          animation: 'scrollBounce 2s ease-in-out infinite',
        }}>
          <span style={{ fontSize: 10, color: C.textMuted, letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase' }}>Scroll</span>
          <div style={{
            width: 1, height: 36,
            background: `linear-gradient(to bottom, rgba(167,139,250,0.6), transparent)`,
          }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SOVEREIGN HEROES
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgBase, position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 300, borderRadius: '50%', background: 'rgba(124,58,237,0.06)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>Sovereign Heroes</SectionLabel>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 14px' }}>
              Rulers of Five Factions
            </h2>
            <p style={{ fontSize: 15, color: C.textSoft, maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              Each faction has one sovereign — chosen by destiny, born of catastrophe, or forged in the abyss itself.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {SOVEREIGN_HEROES.map((hero, i) => (
              <div key={hero.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <Link href={`/heroes?faction=${hero.faction}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ transition: 'transform 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    <HeroCard hero={hero} width={220} />
                  </div>
                  <div style={{ textAlign: 'center', marginTop: 14 }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: 0.5 }}>{hero.name}</div>
                    <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{hero.faction}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <OutlineBtn href="/heroes">View All 53 Heroes →</OutlineBtn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          THE FIVE FACTIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>World of Aetheria</SectionLabel>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 14px' }}>
              The Five Factions
            </h2>
            <p style={{ fontSize: 15, color: C.textSoft, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Five ancient powers shape the fate of Aetheria. Choose your allegiance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {Object.values(FACTIONS).map((f, i) => {
              const count = HEROES.filter(h => h.faction === f.name).length;
              return (
                <Link key={f.name} href={`/heroes?faction=${f.name}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ transitionDelay: `${i * 0.08}s`, height: '100%' }}>
                    <div style={{
                      background: `linear-gradient(145deg, rgba(0,0,0,0.55) 0%, ${f.color}12 100%)`,
                      border: `1px solid ${f.color}38`,
                      borderRadius: 18, padding: '28px 22px',
                      transition: 'all 0.3s', cursor: 'pointer',
                      position: 'relative', overflow: 'hidden', height: '100%',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = f.color + '88';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = `0 16px 48px ${f.color}28`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = f.color + '38';
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      {/* Background glow orb */}
                      <div style={{
                        position: 'absolute', top: -30, right: -30, width: 120, height: 120,
                        borderRadius: '50%', background: f.color, opacity: 0.07, filter: 'blur(40px)',
                        pointerEvents: 'none',
                      }} />

                      {/* Faction icon — bigger and more prominent */}
                      <div style={{
                        width: 64, height: 64, borderRadius: 14,
                        background: `${f.color}18`, border: `1px solid ${f.color}45`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 18, overflow: 'hidden',
                      }}>
                        <img src={`/assets/faction/${f.name}.png`} alt={f.name}
                          style={{ width: 46, height: 46, objectFit: 'contain' }} />
                      </div>

                      <div style={{ fontSize: 17, fontWeight: 900, color: f.color, letterSpacing: 0.5, marginBottom: 4 }}>{f.name}</div>
                      <div style={{ fontSize: 11, color: C.textMuted, letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: 14 }}>{f.element} Element</div>

                      <p style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.65, marginBottom: 20 }}>
                        {f.lore.slice(0, 110)}...
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{
                          background: `${f.color}20`, border: `1px solid ${f.color}40`,
                          borderRadius: 20, padding: '4px 12px',
                          fontSize: 11, fontWeight: 700, color: f.color,
                        }}>
                          {count} Heroes
                        </div>
                        <span style={{ fontSize: 12, color: C.textMuted, fontWeight: 600 }}>Explore →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURED HEROES SCROLL
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) 0', background: C.bgBase, overflow: 'hidden' }}>
        <div style={{ padding: '0 clamp(20px,5vw,60px)', marginBottom: 36 }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <SectionLabel>Hero Collection</SectionLabel>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, color: C.text, margin: 0 }}>
                Legendary Heroes
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Link href="/heroes" style={{ fontSize: 13, color: C.textSoft, textDecoration: 'none', fontWeight: 600, marginRight: 8 }}>
                All 53 heroes →
              </Link>
              <button className="scroll-arrow" onClick={() => scrollHeroes(-1)} aria-label="Scroll left">&#8249;</button>
              <button className="scroll-arrow" onClick={() => scrollHeroes(1)} aria-label="Scroll right">&#8250;</button>
            </div>
          </div>
        </div>

        {/* Scroll container with edge fades */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 16, width: 'clamp(20px,5vw,60px)',
            background: `linear-gradient(to right, ${C.bgBase}, transparent)`,
            zIndex: 4, pointerEvents: 'none',
          }} />
          <div ref={heroScrollRef} style={{
            display: 'flex', gap: 20,
            paddingLeft: 'clamp(20px,5vw,60px)', paddingRight: 'clamp(20px,5vw,60px)',
            overflowX: 'auto', paddingBottom: 16,
            scrollbarWidth: 'thin', scrollbarColor: `${C.primary} transparent`,
          }}>
            {featuredHeroes.map((hero) => (
              <div key={hero.id} style={{ flexShrink: 0, transition: 'transform 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
              >
                <HeroCard hero={hero} width={200} />
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 16, width: 'clamp(20px,5vw,60px)',
            background: `linear-gradient(to left, ${C.bgBase}, transparent)`,
            zIndex: 4, pointerEvents: 'none',
          }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ENEMIES SHOWCASE
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>Story Mode</SectionLabel>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 14px' }}>
              Face Your Enemies
            </h2>
            <p style={{ fontSize: 15, color: C.textSoft, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              25 chapters. 75 stages. Each chapter ends with a boss that defines an era.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {featuredBosses.map((boss, i) => {
              const fc = FACTIONS[boss.faction];
              return (
                <div key={boss.chapter} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div style={{
                    background: 'rgba(0,0,0,0.5)', border: `1px solid ${fc.color}28`,
                    borderRadius: 14, overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = fc.color + '70';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = `0 16px 40px ${fc.color}22`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = fc.color + '28';
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                      <img src={boss.image} alt={boss.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                        onError={e => { e.currentTarget.style.display = 'none'; }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)' }} />
                      {/* Chapter badge */}
                      <div style={{
                        position: 'absolute', top: 10, left: 10,
                        background: `${fc.color}22`, border: `1px solid ${fc.color}66`,
                        backdropFilter: 'blur(8px)',
                        borderRadius: 7, padding: '4px 10px',
                        fontSize: 10, fontWeight: 800, color: fc.color, letterSpacing: 1.5,
                      }}>
                        CH.{boss.chapter}
                      </div>
                    </div>
                    <div style={{ padding: '14px 14px 18px' }}>
                      <div style={{ fontSize: 10, color: C.textMuted, letterSpacing: 2, marginBottom: 5, fontWeight: 700, textTransform: 'uppercase' }}>{boss.title}</div>
                      <div style={{ fontSize: 14, fontWeight: 900, color: '#fff', marginBottom: 8 }}>{boss.name}</div>
                      <p style={{ fontSize: 11, color: C.textSoft, lineHeight: 1.55, margin: 0 }}>{boss.desc.slice(0, 80)}...</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <OutlineBtn href="/enemies">All Chapters &amp; Enemies →</OutlineBtn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WORLD MAP
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'center' }}>
            <div>
              <SectionLabel>The World</SectionLabel>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 18px' }}>
                The Realm of Aetheria
              </h2>
              <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.8, marginBottom: 28 }}>
                Five factions carved their dominion from raw elemental force — volcanic highlands, frozen tundras,
                radiant spires, ancient forests, and abyss-scarred wastes.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
                {Object.values(FACTIONS).map(f => (
                  <div key={f.name} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 14px', borderRadius: 10,
                    background: `${f.color}0a`, border: `1px solid ${f.color}25`,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + '55'; e.currentTarget.style.background = `${f.color}15`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = f.color + '25'; e.currentTarget.style.background = `${f.color}0a`; }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: f.color, boxShadow: `0 0 8px ${f.color}`, flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 800, color: f.color }}>{f.name}</span>
                      <span style={{ fontSize: 12, color: C.textMuted }}> — {f.element} territory</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/world" style={{
                display: 'inline-block', padding: '13px 28px', borderRadius: 10,
                background: `linear-gradient(135deg, ${C.primary}35, ${C.secondary}25)`,
                border: `1px solid ${C.border}`, color: C.text,
                textDecoration: 'none', fontSize: 14, fontWeight: 700,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.background = `linear-gradient(135deg, ${C.primary}50, ${C.secondary}40)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = `linear-gradient(135deg, ${C.primary}35, ${C.secondary}25)`; }}
              >
                Explore the World Map →
              </Link>
            </div>

            <div style={{
              position: 'relative', borderRadius: 18, overflow: 'hidden',
              border: `1px solid ${C.border}`,
              boxShadow: `0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(167,139,250,0.08)`,
            }}>
              <img src="/assets/worldMap/world-map.png" alt="World Map of Aetheria"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,58,237,0.08), transparent 60%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          LORE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>Story Mode</SectionLabel>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 14px' }}>25 Chapters of Lore</h2>
            <p style={{ fontSize: 15, color: C.textSoft, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Every stage advances a story that spans dimensional collapse, sovereign battles, and the fate of five civilizations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { val: '25', label: 'Chapters',             color: C.primary,   sub: 'Epic story arcs'       },
              { val: '75', label: 'Story Stages',         color: C.secondary, sub: 'Unique encounters'     },
              { val: '5',  label: 'Sovereign Story Arcs', color: '#D97706',   sub: 'Legendary paths'       },
              { val: '∞', label: 'Endless Tower Floors', color: '#00B4D8', sub: 'Infinite challenge' },
            ].map((s, i) => (
              <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  background: `${s.color}0d`, border: `1px solid ${s.color}28`,
                  borderRadius: 18, padding: '36px 24px', textAlign: 'center',
                  transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = s.color + '55';
                    e.currentTarget.style.boxShadow = `0 12px 40px ${s.color}18`;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = s.color + '28';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {/* Background glow */}
                  <div style={{
                    position: 'absolute', bottom: -20, right: -20, width: 80, height: 80,
                    borderRadius: '50%', background: s.color, opacity: 0.07, filter: 'blur(30px)',
                    pointerEvents: 'none',
                  }} />
                  <div style={{
                    fontSize: 54, fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 10,
                    textShadow: `0 0 30px ${s.color}55`,
                  }}>{s.val}</div>
                  <div style={{ fontSize: 14, color: C.text, fontWeight: 700, marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <OutlineBtn href="/lore">Read the Full Story →</OutlineBtn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DOWNLOAD
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="download" style={{
        padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)',
        background: `
          radial-gradient(ellipse 80% 60% at 50% 110%, rgba(124,58,237,0.22), transparent),
          radial-gradient(ellipse 60% 60% at 85% 40%, rgba(219,39,119,0.1), transparent),
          ${C.bgBase}`,
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Giant watermark text */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', overflow: 'hidden',
        }}>
          <div style={{
            fontSize: 'clamp(80px, 18vw, 240px)', fontWeight: 900,
            color: 'rgba(124,58,237,0.04)', letterSpacing: -8, whiteSpace: 'nowrap',
            userSelect: 'none',
          }}>AETHERIA</div>
        </div>

        <div className="reveal" style={{ maxWidth: 620, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* "Free" badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20,
            background: 'rgba(5,150,105,0.15)', border: '1px solid rgba(5,150,105,0.35)',
            borderRadius: 20, padding: '5px 14px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', boxShadow: '0 0 7px #34D399', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 10, fontWeight: 800, color: '#34D399', letterSpacing: 2.5, textTransform: 'uppercase' }}>Free to Play</span>
          </div>

          <SectionLabel>Available Now</SectionLabel>
          <h2 style={{
            fontSize: 'clamp(30px,5vw,60px)', fontWeight: 900, color: C.text, margin: '0 0 14px',
            background: `linear-gradient(135deg, #F0EAFF, ${C.primaryL}, ${C.secondary})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Begin Your Legend
          </h2>
          <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.75, marginBottom: 32 }}>
            Free to play. Cloud save included. 53 heroes waiting to be collected.
          </p>

          {/* Feature pills */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            {['53 Heroes', 'Cloud Save', 'No Pay-to-Win', '75 Stages', '200+ Tower Floors'].map(feat => (
              <div key={feat} style={{
                padding: '6px 14px', borderRadius: 20,
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.28)',
                fontSize: 12, fontWeight: 600, color: C.textSoft,
              }}>{feat}</div>
            ))}
          </div>

          {/* Store buttons */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { store: 'App Store',   icon: '📱', sub: 'Download on the' },
              { store: 'Google Play', icon: '▶',       sub: 'Get it on'       },
            ].map(({ store, icon, sub }) => (
              <a key={store} href="#download" style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 28px', borderRadius: 14,
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', textDecoration: 'none', minWidth: 190,
                transition: 'all 0.25s', backdropFilter: 'blur(12px)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.35)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                }}
              >
                <span style={{ fontSize: 30 }}>{icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.5 }}>{sub}</div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{store}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
      <footer style={{
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px) 28px',
        background: C.bgDeep, position: 'relative', overflow: 'hidden',
      }}>
        {/* Faction rainbow top border */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, #FF4500 0%, #D4A017 25%, #2ECC71 50%, #00B4D8 75%, #9B59B6 100%)',
        }} />

        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* 3-column grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48, marginBottom: 48,
          }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 900, color: '#fff',
                  boxShadow: '0 0 12px rgba(124,58,237,0.45)',
                }}>A</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: C.text, letterSpacing: 1 }}>AETHERIA</div>
                  <div style={{ fontSize: 8, color: C.textMuted, letterSpacing: 2.5, fontWeight: 600 }}>LEGENDS UNBOUND</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.65, maxWidth: 220 }}>
                The ultimate turn-based hero card game. Collect, battle, and become a legend.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: C.textMuted, letterSpacing: 2.5, marginBottom: 18, textTransform: 'uppercase' }}>Navigate</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Heroes', 'Enemies', 'Lore', 'World'].map(l => (
                  <Link key={l} href={`/${l.toLowerCase()}`} style={{
                    fontSize: 14, color: C.textSoft, fontWeight: 600, transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.textSoft; }}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>

            {/* Community & Legal */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: C.textMuted, letterSpacing: 2.5, marginBottom: 18, textTransform: 'uppercase' }}>Community</div>
              {/* Social icons */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
                {[
                  { label: 'Discord', icon: 'D' },
                  { label: 'Twitter', icon: 'X' },
                  { label: 'YouTube', icon: 'Y' },
                ].map(s => (
                  <a key={s.label} href="#" title={s.label} style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: C.glass, border: `1px solid ${C.glassBorder}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 800, color: C.textSoft,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.2)'; e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = C.glass; e.currentTarget.style.borderColor = C.glassBorder; e.currentTarget.style.color = C.textSoft; }}
                  >{s.icon}</a>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Privacy Policy',   href: '/privacy' },
                  { label: 'Terms of Service', href: '#'        },
                  { label: 'Support',          href: 'mailto:support@ziriverse.com' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} style={{
                    fontSize: 13, color: C.textMuted, transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
                    onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
                  >{label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: `1px solid ${C.border}`, paddingTop: 24,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
          }}>
            <div style={{ fontSize: 12, color: C.textMuted }}>© 2025 Ziriverse. All rights reserved.</div>
            {/* Faction color dots */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              {Object.values(FACTIONS).map(f => (
                <div key={f.name} title={f.name} style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: f.color, opacity: 0.65,
                  boxShadow: `0 0 5px ${f.color}`,
                }} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
