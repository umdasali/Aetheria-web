'use client';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';
import HeroCard from '../../components/HeroCard';
import { FACTIONS, HEROES, SOVEREIGN_HEROES } from '../../lib/gameData';

const C = {
  bgDeep: '#08031A', bgBase: '#0E0720',
  primary: '#7C3AED', primaryL: '#A78BFA', secondary: '#DB2777',
  text: '#F0EAFF', textSoft: '#C4B5FD', textMuted: '#8B7EC8',
  border: 'rgba(167,139,250,0.18)',
};

export default function WorldPage() {
  const [activeFaction, setActiveFaction] = useState('EMBERVEIL');
  const faction  = FACTIONS[activeFaction];
  const heroes   = HEROES.filter(h => h.faction === activeFaction);
  const sovereign = SOVEREIGN_HEROES.find(h => h.faction === activeFaction);

  return (
    <>
      <Nav />

      {/* Header */}
      <div style={{
        paddingTop: 120, paddingBottom: 60,
        paddingLeft: 'clamp(20px,5vw,60px)', paddingRight: 'clamp(20px,5vw,60px)',
        background: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.18), transparent), ${C.bgDeep}`,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: C.primaryL, textTransform: 'uppercase', marginBottom: 12 }}>World Map</div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>
          The Realm of Aetheria
        </h1>
        <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 520, margin: '0 auto' }}>
          Six factions. Six territories. One world on the edge of dimensional collapse.
        </p>
      </div>

      {/* World map */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden',
            border: `1px solid ${C.border}`, boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          }}>
            <img src="/assets/worldMap/world-map.png" alt="World Map of Aetheria"
              style={{ width: '100%', display: 'block', maxHeight: 520, objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(8,3,26,0.5))',
            }} />

            {/* Faction legend overlay */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20, right: 20,
              display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center',
            }}>
              {Object.values(FACTIONS).map(f => (
                <div key={f.name}
                  onClick={() => setActiveFaction(f.name)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '7px 14px', borderRadius: 20, cursor: 'pointer',
                    background: activeFaction === f.name ? `${f.color}35` : 'rgba(0,0,0,0.7)',
                    border: `1px solid ${activeFaction === f.name ? f.color : f.color + '50'}`,
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: f.color, boxShadow: `0 0 6px ${f.color}` }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: activeFaction === f.name ? f.color : '#fff' }}>{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faction deep-dive */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Faction selector */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            {Object.values(FACTIONS).map(f => (
              <button key={f.name}
                onClick={() => setActiveFaction(f.name)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 20px', borderRadius: 10, cursor: 'pointer', border: 'none',
                  background: activeFaction === f.name ? `${f.color}30` : 'rgba(255,255,255,0.05)',
                  outline: `2px solid ${activeFaction === f.name ? f.color : 'transparent'}`,
                  transition: 'all 0.2s',
                }}
              >
                <img src={f.image} alt={f.name}
                  style={{ width: 24, height: 24, objectFit: 'contain' }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: activeFaction === f.name ? f.color : C.textSoft }}>{f.name}</span>
              </button>
            ))}
          </div>

          {/* Faction detail */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 14,
                  background: `${faction.color}20`, border: `2px solid ${faction.color}60`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                }}>
                  <img src={faction.image} alt={activeFaction}
                    style={{ width: 48, height: 48, objectFit: 'contain' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: 32, fontWeight: 900, color: faction.color, margin: '0 0 4px', letterSpacing: 1 }}>
                    {activeFaction}
                  </h2>
                  <div style={{ fontSize: 13, color: C.textMuted }}>{faction.element} Faction · {heroes.length} Heroes</div>
                </div>
              </div>

              {/* Quick stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
                {[
                  { label: 'Climate',      val: faction.climate },
                  { label: 'Elements',     val: faction.elementTags },
                  { label: 'Ruler',        val: `${faction.ruler.name} · ${faction.ruler.title}` },
                  { label: 'Specialties',  val: faction.specialties.join(', ') },
                ].map(({ label, val }) => (
                  <div key={label} style={{
                    padding: '12px 14px', background: `${faction.color}10`,
                    border: `1px solid ${faction.color}25`, borderRadius: 10,
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: faction.color, marginBottom: 4 }}>{label.toUpperCase()}</div>
                    <div style={{ fontSize: 12, color: C.textSoft, fontWeight: 600 }}>{val}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {faction.lore}
              </div>
            </div>

            {/* Sovereign card + hero list */}
            <div>
              {sovereign && (
                <div style={{ marginBottom: 32, display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <HeroCard hero={sovereign} width={200} />
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: '#FFD700', marginBottom: 6 }}>♛ {faction.ruler.title.toUpperCase()}</div>
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: '#fff', margin: '0 0 10px' }}>{sovereign.name}</h3>
                    <p style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.65 }}>
                      {faction.ruler.roleLore}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: C.textMuted, marginBottom: 16 }}>
                  ALL {activeFaction} HEROES ({heroes.length})
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                  {heroes.map(hero => (
                    <Link key={hero.id} href={`/heroes?faction=${activeFaction}`} style={{ textDecoration: 'none' }}>
                      <div style={{
                        background: `${faction.color}12`, border: `1px solid ${faction.color}25`,
                        borderRadius: 10, padding: '10px 12px', transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = faction.color + '60'; e.currentTarget.style.background = `${faction.color}20`; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = faction.color + '25'; e.currentTarget.style.background = `${faction.color}12`; }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
                            <img src={`/assets/heroes/${hero.id}.webp`} alt={hero.name}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                          </div>
                          <div>
                            <div style={{ fontSize: 11, fontWeight: 700, color: hero.sovereign ? '#FFD700' : '#fff', lineHeight: 1.2 }}>{hero.name}</div>
                            <div style={{ fontSize: 9, color: faction.color }}>{hero.rank}{hero.sovereign ? ' ♛' : ''}</div>
                          </div>
                        </div>
                        <div style={{ fontSize: 10, color: C.textMuted }}>{hero.class} · {hero.element}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
