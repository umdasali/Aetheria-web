'use client';
import { useState } from 'react';
import Nav from '../../components/Nav';
import { BOSSES, MINI_BOSSES, MOB_ENEMIES, ENEMY_STATS } from '../../lib/gameData';

const C = {
  bgDeep: '#08031A', bgBase: '#0E0720',
  primary: '#7C3AED', primaryL: '#A78BFA', secondary: '#DB2777',
  text: '#F0EAFF', textSoft: '#C4B5FD', textMuted: '#8B7EC8',
  border: 'rgba(167,139,250,0.18)',
};

function EnemyCard({ name, image, tier, chapter, color }) {
  const c = color || 'rgba(167,139,250,0.4)';
  return (
    <div style={{
      background: 'rgba(0,0,0,0.5)', border: `1px solid ${color ? color + '30' : C.border}`,
      borderRadius: 12, overflow: 'hidden', transition: 'all 0.3s',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = c + '70';
        e.currentTarget.style.boxShadow = `0 12px 32px ${c}20`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.borderColor = color ? color + '30' : C.border;
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
        <img src={image} alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.currentTarget.style.opacity = 0.3; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 55%)' }} />
        {tier && (
          <div style={{
            position: 'absolute', top: 8, left: 8,
            padding: '3px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700,
            background: tier === 'BOSS' ? 'rgba(219,39,119,0.85)' : 'rgba(124,58,237,0.85)',
            color: '#fff', letterSpacing: 1,
          }}>
            {tier}
          </div>
        )}
        {chapter && (
          <div style={{
            position: 'absolute', top: 8, right: 8,
            padding: '3px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700,
            background: 'rgba(0,0,0,0.7)', color: color || C.textSoft,
          }}>
            CH.{chapter}
          </div>
        )}
      </div>
      <div style={{ padding: '12px 14px' }}>
        <div style={{ fontSize: 13, fontWeight: 900, color: '#fff' }}>{name}</div>
      </div>
    </div>
  );
}

export default function EnemiesPage() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const boss = selectedChapter ? BOSSES.find(b => b.chapter === selectedChapter) : null;

  return (
    <>
      <Nav />

      {/* Header */}
      <div style={{
        paddingTop: 120, paddingBottom: 60,
        paddingLeft: 'clamp(20px,5vw,60px)', paddingRight: 'clamp(20px,5vw,60px)',
        background: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(219,39,119,0.15), transparent), ${C.bgDeep}`,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: C.primaryL,
          textTransform: 'uppercase', marginBottom: 12 }}>Story Mode</div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>
          Face Your Enemies
        </h1>
        <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 520, margin: '0 auto' }}>
          {ENEMY_STATS.chapters} chapters. A boss that defines each one. And hundreds of mobs between you and victory.
        </p>
      </div>

      {/* Chapter bosses */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#DB2777', marginBottom: 6 }}>CHAPTER BOSSES</div>
              <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: C.text, margin: 0 }}>The {ENEMY_STATS.bossTypes} Great Bosses</h2>
            </div>
            {selectedChapter && (
              <button onClick={() => setSelectedChapter(null)} style={{
                padding: '8px 20px', borderRadius: 8, border: `1px solid ${C.border}`,
                background: 'transparent', color: C.textSoft, cursor: 'pointer', fontSize: 13,
              }}>
                ← Back to all chapters
              </button>
            )}
          </div>

          {/* Boss detail panel */}
          {boss && (
            <div style={{
              marginBottom: 40, background: `linear-gradient(135deg, rgba(0,0,0,0.7), ${boss.color}15)`,
              border: `1px solid ${boss.color}40`,
              borderRadius: 16, overflow: 'hidden', display: 'flex', flexWrap: 'wrap',
            }}>
              <div style={{ width: 280, flexShrink: 0, position: 'relative' }}>
                <img src={boss.image} alt={boss.name}
                  style={{ width: '100%', height: '100%', minHeight: 280, objectFit: 'cover', display: 'block' }}
                  onError={e => { e.currentTarget.style.opacity = 0.3; }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, transparent 60%, rgba(8,3,26,0.9))',
                }} />
              </div>
              <div style={{ flex: 1, padding: 32, minWidth: 260 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, color: boss.color, marginBottom: 8 }}>
                  CHAPTER {boss.chapter} · {boss.title}
                </div>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: '0 0 4px' }}>{boss.name}</h3>
                {boss.epithet && (
                  <div style={{ fontSize: 13, color: boss.accent || boss.color, fontWeight: 700, marginBottom: 12 }}>{boss.epithet}</div>
                )}
                <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.7, marginBottom: 20, maxWidth: 500 }}>{boss.desc}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {boss.effect && (
                    <div style={{
                      padding: '6px 14px', borderRadius: 20,
                      background: `${boss.color}20`, border: `1px solid ${boss.color}40`,
                      fontSize: 12, fontWeight: 700, color: boss.color,
                    }}>
                      {boss.effect}
                    </div>
                  )}
                  <div style={{
                    padding: '6px 14px', borderRadius: 20,
                    background: 'rgba(219,39,119,0.15)', border: '1px solid rgba(219,39,119,0.4)',
                    fontSize: 12, fontWeight: 700, color: '#F472B6',
                  }}>
                    CHAPTER BOSS
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chapter grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 16 }}>
            {BOSSES.map(b => {
              const active = selectedChapter === b.chapter;
              return (
                <div key={b.chapter}
                  onClick={() => setSelectedChapter(active ? null : b.chapter)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{
                    background: active ? `${b.color}20` : 'rgba(0,0,0,0.5)',
                    border: `1px solid ${active ? b.color + '80' : b.color + '30'}`,
                    borderRadius: 12, overflow: 'hidden', transition: 'all 0.3s',
                    boxShadow: active ? `0 8px 24px ${b.color}25` : '',
                  }}
                    onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = b.color + '60'; e.currentTarget.style.transform = 'translateY(-3px)'; } }}
                    onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = b.color + '30'; e.currentTarget.style.transform = ''; } }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
                      <img src={b.image} alt={b.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => { e.currentTarget.style.opacity = 0.3; }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent 50%)' }} />
                      <div style={{
                        position: 'absolute', top: 8, left: 8,
                        background: 'rgba(0,0,0,0.75)', border: `1px solid ${b.color}60`,
                        borderRadius: 6, padding: '3px 8px', fontSize: 10, fontWeight: 700, color: b.color,
                      }}>
                        CH.{b.chapter}
                      </div>
                    </div>
                    <div style={{ padding: '12px 12px 14px' }}>
                      <div style={{ fontSize: 9, color: C.textMuted, letterSpacing: 1.5, marginBottom: 2 }}>{b.title}</div>
                      <div style={{ fontSize: 12, fontWeight: 900, color: '#fff', lineHeight: 1.3 }}>{b.name}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini-bosses */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.primaryL, marginBottom: 6 }}>MID-CHAPTER ENCOUNTERS</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: C.text, margin: 0 }}>Mini-Bosses ({MINI_BOSSES.length})</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
            {MINI_BOSSES.map(mb => (
              <EnemyCard key={mb.imageKey} name={mb.name} image={mb.image} tier="MINI-BOSS" chapter={mb.chapter} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobs */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.textMuted, marginBottom: 6 }}>COMMON ENEMIES</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: C.text, margin: 0 }}>Mob Enemies ({MOB_ENEMIES.length})</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 14 }}>
            {MOB_ENEMIES.map(m => (
              <EnemyCard key={m.imageKey} name={m.name} image={m.image} tier="MOB" chapter={m.chapter} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { val: String(ENEMY_STATS.chapters),         label: 'Story Chapters',   color: C.secondary },
              { val: String(ENEMY_STATS.stages),           label: 'Total Stages',     color: C.primary   },
              { val: String(ENEMY_STATS.bossTypes),        label: 'Major Boss Types', color: '#D97706'   },
              { val: `${ENEMY_STATS.uniqueEnemies}+`,       label: 'Unique Enemies',   color: '#00B4D8'   },
            ].map(s => (
              <div key={s.label} style={{
                background: `${s.color}10`, border: `1px solid ${s.color}30`,
                borderRadius: 14, padding: '28px 20px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: s.color, textShadow: `0 0 20px ${s.color}60` }}>{s.val}</div>
                <div style={{ fontSize: 13, color: C.textSoft, fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
