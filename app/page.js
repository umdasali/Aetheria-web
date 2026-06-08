'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import HeroCard from '../components/HeroCard';
import { SOVEREIGN_HEROES, FACTIONS, BOSSES, HEROES } from '../lib/gameData';

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bgDeep:    '#08031A',
  bgBase:    '#0E0720',
  bgCard:    '#1C0F38',
  primary:   '#7C3AED',
  primaryL:  '#A78BFA',
  secondary: '#DB2777',
  text:      '#F0EAFF',
  textSoft:  '#C4B5FD',
  textMuted: '#8B7EC8',
  border:    'rgba(167,139,250,0.18)',
  gold:      '#D97706',
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)',
      borderRadius: 20, padding: '6px 16px', marginBottom: 16,
    }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.primaryL, animation: 'pulse 2s infinite' }} />
      <span style={{ fontSize: 11, fontWeight: 700, color: C.primaryL, letterSpacing: 3, textTransform: 'uppercase' }}>{children}</span>
    </div>
  );
}

// ─── Featured hero card with float ───────────────────────────────────────────
function FloatingCard({ hero, delay = 0, offset = 0 }) {
  return (
    <div style={{
      animation: `floatY 4s ease-in-out ${delay}s infinite`,
      transform: `translateY(${offset}px)`,
      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
    }}>
      <HeroCard hero={hero} width={180} compact={false} />
    </div>
  );
}

export default function HomePage() {
  useReveal();
  const featuredBosses = BOSSES.slice(0, 6);
  const featuredHeroes = HEROES.filter(h => h.rank === 'S' || h.sovereign).slice(0, 8);

  return (
    <>
      <Nav />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION — Full-height intro
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.25), transparent),
                     radial-gradient(ellipse 60% 80% at 20% 50%, rgba(219,39,119,0.12), transparent),
                     radial-gradient(ellipse 50% 70% at 80% 60%, rgba(0,180,216,0.08), transparent),
                     ${C.bgDeep}`,
      }}>
        {/* Ambient particles */}
        <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
          {[...Array(16)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: (i % 3 + 1) * 2 + 'px', height: (i % 3 + 1) * 2 + 'px',
              borderRadius: '50%', background: i % 3 === 0 ? C.primaryL : i % 3 === 1 ? C.secondary : '#00B4D8',
              left: (i * 6.3) % 100 + '%', top: (i * 7.1) % 100 + '%',
              opacity: 0.4, animation: `floatY ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
            }} />
          ))}
        </div>

        <div style={{
          width: '100%', maxWidth: 1400, margin: '0 auto',
          padding: '80px clamp(20px, 5vw, 60px) 60px',
          display: 'grid', gridTemplateColumns: '1fr 520px 1fr',
          alignItems: 'center', gap: 40,
        }}>
          {/* Left hero cards */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end', alignItems: 'center' }}>
            <FloatingCard hero={SOVEREIGN_HEROES[0]} delay={0} offset={-20} />
            <FloatingCard hero={SOVEREIGN_HEROES[1]} delay={1.2} offset={20} />
          </div>

          {/* Center — main title */}
          <div style={{ textAlign: 'center', zIndex: 10 }}>
            {/* Faction orbs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
              {Object.values(FACTIONS).map(f => (
                <div key={f.name} title={f.name} style={{
                  width: 12, height: 12, borderRadius: '50%', background: f.color,
                  boxShadow: `0 0 8px ${f.color}`,
                }} />
              ))}
            </div>

            <div style={{ fontSize: 'clamp(56px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.9,
              background: `linear-gradient(135deg, #F0EAFF, ${C.primaryL}, ${C.secondary})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              letterSpacing: -2, marginBottom: 10,
            }}>
              AETHERIA
            </div>
            <div style={{ fontSize: 'clamp(13px, 1.8vw, 17px)', fontWeight: 600, color: C.textMuted,
              letterSpacing: 6, textTransform: 'uppercase', marginBottom: 28,
            }}>
              Legends Unbound
            </div>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: C.textSoft, lineHeight: 1.7,
              maxWidth: 420, margin: '0 auto 36px',
            }}>
              Collect 53 legendary heroes, master Trump Card battles, and unravel
              the fate of five factions across 75 story stages.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#download" style={{
                padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700,
                background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                color: '#fff', textDecoration: 'none',
                boxShadow: `0 0 24px rgba(124,58,237,0.5)`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.7)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.5)'; }}
              >
                Play Now — Free
              </a>
              <Link href="/heroes" style={{
                padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 700,
                background: 'transparent', color: C.textSoft, textDecoration: 'none',
                border: `1px solid ${C.border}`, backdropFilter: 'blur(10px)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textSoft; }}
              >
                View All Heroes
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 0, justifyContent: 'center',
              background: 'rgba(255,255,255,0.04)', borderRadius: 12,
              border: `1px solid ${C.border}`, backdropFilter: 'blur(10px)',
              overflow: 'hidden',
            }}>
              {[
                { val: '53+', label: 'Heroes' },
                { val: '5',   label: 'Factions' },
                { val: '75',  label: 'Stages' },
                { val: '200', label: 'Tower Floors' },
              ].map((s, i) => (
                <div key={s.label} style={{
                  flex: 1, padding: '16px 8px', textAlign: 'center',
                  borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
                }}>
                  <div style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: C.textMuted, fontWeight: 600, marginTop: 4, letterSpacing: 1 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right hero cards */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-start', alignItems: 'center' }}>
            <FloatingCard hero={SOVEREIGN_HEROES[2]} delay={0.6} offset={20} />
            <FloatingCard hero={SOVEREIGN_HEROES[3]} delay={1.8} offset={-20} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SOVEREIGN HEROES
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionLabel>Sovereign Heroes</SectionLabel>
            <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>
              Rulers of Five Factions
            </h2>
            <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Each faction has one sovereign — chosen by destiny, born of catastrophe, or forged in the abyss itself.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {SOVEREIGN_HEROES.map((hero, i) => (
              <div key={hero.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <Link href={`/heroes?faction=${hero.faction}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ transition: 'transform 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    <HeroCard hero={hero} width={220} />
                  </div>
                  <div style={{ textAlign: 'center', marginTop: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{hero.name}</div>
                    <div style={{ fontSize: 11, color: C.textMuted }}>{hero.faction}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/heroes" style={{
              display: 'inline-block', padding: '12px 32px', borderRadius: 10,
              border: `1px solid ${C.border}`, color: C.textSoft, textDecoration: 'none',
              fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textSoft; }}
            >
              View All 53 Heroes →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          THE FIVE FACTIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionLabel>World of Aetheria</SectionLabel>
            <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>
              The Five Factions
            </h2>
            <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 560, margin: '0 auto' }}>
              Five ancient powers shape the fate of Aetheria. Choose your allegiance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {Object.values(FACTIONS).map((f, i) => {
              const count = HEROES.filter(h => h.faction === f.name).length;
              return (
                <Link key={f.name} href={`/heroes?faction=${f.name}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div style={{
                      background: `linear-gradient(135deg, rgba(0,0,0,0.6), ${f.color}18)`,
                      border: `1px solid ${f.color}40`,
                      borderRadius: 16, padding: '28px 24px',
                      transition: 'all 0.3s', cursor: 'pointer',
                      position: 'relative', overflow: 'hidden',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = f.color + '99';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 12px 40px ${f.color}30`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = f.color + '40';
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <div style={{
                        position: 'absolute', top: -20, right: -20, width: 80, height: 80,
                        borderRadius: '50%', background: f.color, opacity: 0.08, filter: 'blur(20px)',
                      }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                        <div style={{
                          width: 48, height: 48, borderRadius: 10,
                          background: `${f.color}20`, border: `1px solid ${f.color}50`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          overflow: 'hidden',
                        }}>
                          <img src={`/assets/faction/${f.name}.png`} alt={f.name}
                            style={{ width: 36, height: 36, objectFit: 'contain' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 900, color: f.color, letterSpacing: 1 }}>{f.name}</div>
                          <div style={{ fontSize: 11, color: C.textMuted, letterSpacing: 1 }}>{f.element} Element</div>
                        </div>
                      </div>
                      <p style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.6, marginBottom: 16 }}>
                        {f.lore.slice(0, 120)}...
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{
                          background: `${f.color}22`, border: `1px solid ${f.color}44`,
                          borderRadius: 20, padding: '4px 12px',
                          fontSize: 11, fontWeight: 700, color: f.color,
                        }}>
                          {count} Heroes
                        </div>
                        <span style={{ fontSize: 12, color: C.textMuted }}>View faction →</span>
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
        <div style={{ padding: '0 clamp(20px,5vw,60px)', marginBottom: 40 }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <SectionLabel>Hero Collection</SectionLabel>
              <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, color: C.text, margin: '0' }}>
                Legendary Heroes
              </h2>
            </div>
            <Link href="/heroes" style={{ fontSize: 14, color: C.textSoft, textDecoration: 'none', fontWeight: 600 }}>
              All 53 heroes →
            </Link>
          </div>
        </div>
        <div style={{
          display: 'flex', gap: 20, paddingLeft: 'clamp(20px,5vw,60px)', overflowX: 'auto', paddingBottom: 16,
          scrollbarWidth: 'thin', scrollbarColor: `${C.primary} transparent`,
        }}>
          {featuredHeroes.map((hero) => (
            <div key={hero.id} style={{ flexShrink: 0, transition: 'transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
            >
              <HeroCard hero={hero} width={200} />
            </div>
          ))}
          <div style={{ flexShrink: 0, width: 'clamp(20px,5vw,60px)' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ENEMIES SHOWCASE
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionLabel>Story Mode</SectionLabel>
            <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>
              Face Your Enemies
            </h2>
            <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 560, margin: '0 auto' }}>
              25 chapters. 75 stages. Each chapter ends with a boss that defines an era.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {featuredBosses.map((boss, i) => {
              const fc = FACTIONS[boss.faction];
              return (
                <div key={boss.chapter} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div style={{
                    background: 'rgba(0,0,0,0.5)', border: `1px solid ${fc.color}30`,
                    borderRadius: 12, overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = fc.color + '80'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 32px ${fc.color}25`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = fc.color + '30'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                      <img src={boss.image} alt={boss.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.85), transparent 50%)` }} />
                      <div style={{
                        position: 'absolute', top: 8, left: 8,
                        background: 'rgba(0,0,0,0.7)', border: `1px solid ${fc.color}60`,
                        borderRadius: 6, padding: '3px 8px', fontSize: 10, fontWeight: 700, color: fc.color, letterSpacing: 1,
                      }}>
                        CH.{boss.chapter}
                      </div>
                    </div>
                    <div style={{ padding: '14px 14px 16px' }}>
                      <div style={{ fontSize: 10, color: C.textMuted, letterSpacing: 2, marginBottom: 4, fontWeight: 700 }}>{boss.title}</div>
                      <div style={{ fontSize: 13, fontWeight: 900, color: '#fff', marginBottom: 6 }}>{boss.name}</div>
                      <p style={{ fontSize: 11, color: C.textSoft, lineHeight: 1.5, margin: 0 }}>{boss.desc.slice(0, 80)}...</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/enemies" style={{
              display: 'inline-block', padding: '12px 32px', borderRadius: 10,
              border: `1px solid ${C.border}`, color: C.textSoft, textDecoration: 'none',
              fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textSoft; }}
            >
              All Chapters & Enemies →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WORLD MAP
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <SectionLabel>The World</SectionLabel>
              <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 20px' }}>
                The Realm of Aetheria
              </h2>
              <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.8, marginBottom: 28 }}>
                Five factions carved their dominion from raw elemental force. The volcanic highlands of EMBERVEIL,
                the frozen tundras of GLACIARA, the radiant spires of SUNSPIRE, the ancient forests of VERDANIA,
                and the abyss-scarred wastes of VOIDMARK.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {Object.values(FACTIONS).map(f => (
                  <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: f.color, boxShadow: `0 0 6px ${f.color}`, flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: f.color }}>{f.name}</span>
                      <span style={{ fontSize: 12, color: C.textMuted }}> — {f.element} territory</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/world" style={{
                display: 'inline-block', padding: '12px 28px', borderRadius: 10,
                background: `linear-gradient(135deg, ${C.primary}40, ${C.secondary}30)`,
                border: `1px solid ${C.border}`, color: C.text,
                textDecoration: 'none', fontSize: 14, fontWeight: 600,
              }}>
                Explore the World Map →
              </Link>
            </div>
            <div style={{
              position: 'relative', borderRadius: 16, overflow: 'hidden',
              border: `1px solid ${C.border}`, boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
            }}>
              <img src="/assets/worldMap/world-map.png" alt="World Map of Aetheria"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,58,237,0.1), transparent)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          LORE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionLabel>Story Mode</SectionLabel>
            <h2 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>25 Chapters of Lore</h2>
            <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 560, margin: '0 auto' }}>
              Every stage advances a story that spans dimensional collapse, sovereign battles, and the fate of five civilizations.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { val: '25', label: 'Chapters',               color: C.primary   },
              { val: '75', label: 'Story Stages',           color: C.secondary },
              { val: '5',  label: 'Sovereign Story Arcs',   color: '#D97706'   },
              { val: '∞',  label: 'Endless Tower Floors',   color: '#00B4D8'   },
            ].map((s, i) => (
              <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  background: `${s.color}10`, border: `1px solid ${s.color}30`,
                  borderRadius: 16, padding: '32px 24px', textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '60'; e.currentTarget.style.boxShadow = `0 8px 30px ${s.color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = s.color + '30'; e.currentTarget.style.boxShadow = ''; }}
                >
                  <div style={{ fontSize: 52, fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 8, textShadow: `0 0 20px ${s.color}60` }}>{s.val}</div>
                  <div style={{ fontSize: 14, color: C.textSoft, fontWeight: 600 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/lore" style={{
              display: 'inline-block', padding: '12px 32px', borderRadius: 10,
              border: `1px solid ${C.border}`, color: C.textSoft, textDecoration: 'none',
              fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.primaryL; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textSoft; }}
            >
              Read the Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DOWNLOAD
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="download" style={{
        padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)',
        background: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.2), transparent), ${C.bgBase}`,
        textAlign: 'center',
      }}>
        <div className="reveal" style={{ maxWidth: 600, margin: '0 auto' }}>
          <SectionLabel>Available Now</SectionLabel>
          <h2 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, color: C.text, margin: '0 0 16px',
            background: `linear-gradient(135deg, #F0EAFF, ${C.primaryL}, ${C.secondary})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Begin Your Legend
          </h2>
          <p style={{ fontSize: 16, color: C.textSoft, lineHeight: 1.7, marginBottom: 40 }}>
            Free to play. Cloud save included. 53 heroes waiting to be collected.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { store: 'App Store',   icon: '🍎', sub: 'Download on the' },
              { store: 'Google Play', icon: '▶',  sub: 'Get it on'       },
            ].map(({ store, icon, sub }) => (
              <a key={store} href="#download" style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 28px', borderRadius: 12,
                background: 'rgba(255,255,255,0.07)', border: `1px solid rgba(255,255,255,0.15)`,
                color: '#fff', textDecoration: 'none', minWidth: 180,
                transition: 'all 0.2s', backdropFilter: 'blur(10px)',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = ''; }}
              >
                <span style={{ fontSize: 28 }}>{icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>{sub}</div>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>{store}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px clamp(20px,5vw,60px)',
        borderTop: `1px solid ${C.border}`, background: C.bgDeep,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ fontSize: 13, color: C.textMuted }}>© 2025 Ziriverse. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy Policy', 'Terms of Service', 'Support'].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </footer>
    </>
  );
}
