'use client';
import { useState } from 'react';
import Nav from '../../components/Nav';
import { CHAPTERS, FACTIONS, SOVEREIGN_HEROES } from '../../lib/gameData';

const C = {
  bgDeep: '#08031A', bgBase: '#0E0720',
  primary: '#7C3AED', primaryL: '#A78BFA', secondary: '#DB2777',
  text: '#F0EAFF', textSoft: '#C4B5FD', textMuted: '#8B7EC8',
  border: 'rgba(167,139,250,0.18)',
};

// Sample dialogues for a few chapters
const CHAPTER_DIALOGUES = {
  1: [
    { speaker: 'Nova Blaine', text: 'The veil is fracturing. Something ancient is stirring in the deep freeze.' },
    { speaker: 'Vera Grove',  text: 'I\'ve never seen ice formations like these. This isn\'t natural — not even for GLACIARA.' },
    { speaker: 'Lysha',       text: 'You are already too late. The gate opened the moment you stepped into my domain.' },
    { speaker: 'Nova Blaine', text: 'Then we close it together. With you, or without you.' },
  ],
  2: [
    { speaker: 'Kira Voltz',  text: 'The skies over the highlands are on fire. Something is ascending from below.' },
    { speaker: 'Zane Ember',  text: 'Pyrevex. The Ashen Drake. We thought it was just a legend.' },
    { speaker: 'Pyrevex',     text: 'LEGENDS DO NOT BURN CITIES. I DO.' },
    { speaker: 'Kira Voltz',  text: 'Then we make sure the legend ends here.' },
  ],
  15: [
    { speaker: 'Ravenna Blaze', text: 'Every faction stands together. This is unprecedented.' },
    { speaker: 'Aeloria',       text: 'The World Eater does not distinguish between flame and frost. We are all equally in its path.' },
    { speaker: 'Nyx Vael',      text: 'Then we answer together. One sovereign — five voices. The world does not end today.' },
    { speaker: 'The World Eater', text: 'Your defiance is as brief as the lives you cherish.' },
    { speaker: 'Iris Vale',     text: 'Then let us be brief. And let us be glorious.' },
  ],
};

function DialoguePanel({ chapterId }) {
  const dialogues = CHAPTER_DIALOGUES[chapterId];
  if (!dialogues) return null;
  return (
    <div style={{ marginTop: 20, padding: 20, background: 'rgba(0,0,0,0.4)', borderRadius: 12,
      border: `1px solid ${C.border}`, maxWidth: 560,
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: C.textMuted, marginBottom: 14 }}>STORY DIALOGUE</div>
      {dialogues.map((d, i) => (
        <div key={i} style={{ marginBottom: 12, display: 'flex', gap: 12 }}>
          <div style={{
            flexShrink: 0, fontSize: 11, fontWeight: 700, color: C.primaryL,
            minWidth: 100, paddingTop: 1,
          }}>
            {d.speaker}
          </div>
          <div style={{ fontSize: 13, color: C.textSoft, lineHeight: 1.6, fontStyle: 'italic' }}>
            "{d.text}"
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LorePage() {
  const [selected, setSelected] = useState(1);
  const chapter  = CHAPTERS.find(c => c.id === selected);

  return (
    <>
      <Nav />

      {/* Header */}
      <div style={{
        paddingTop: 120, paddingBottom: 60,
        paddingLeft: 'clamp(20px,5vw,60px)', paddingRight: 'clamp(20px,5vw,60px)',
        background: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,160,23,0.12), transparent), ${C.bgDeep}`,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: '#D97706', textTransform: 'uppercase', marginBottom: 12 }}>Story</div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>
          The Lore of Aetheria
        </h1>
        <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 520, margin: '0 auto' }}>
          25 chapters that chronicle the dimensional wars, sovereign awakenings, and the final stand
          of all five factions against the void that would consume everything.
        </p>
      </div>

      {/* Sovereign arcs */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#D97706', marginBottom: 8 }}>SOVEREIGN STORY ARCS</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: C.text, margin: 0 }}>
              Five Sovereigns. Five Destinies.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {SOVEREIGN_HEROES.map(hero => {
              const fc = FACTIONS[hero.faction];
              return (
                <div key={hero.id} style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.6), ${fc.color}12)`,
                  border: `1px solid ${fc.color}35`, borderRadius: 14,
                  overflow: 'hidden', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = fc.color + '70'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = fc.color + '35'; e.currentTarget.style.transform = ''; }}
                >
                  <div style={{ position: 'relative', height: 140, overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
                    <img src={`/assets/heroes/${hero.id}.webp`} alt={hero.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8))` }} />
                    <div style={{
                      position: 'absolute', bottom: 12, left: 16, right: 16,
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <div style={{
                        padding: '3px 8px', borderRadius: 6,
                        background: 'rgba(255,215,0,0.2)', border: '1px solid rgba(255,215,0,0.4)',
                        fontSize: 9, fontWeight: 700, color: '#FFD700', letterSpacing: 1.5,
                      }}>♛ SOVEREIGN</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: fc.color }}>{hero.faction}</div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 18px 20px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 900, color: '#fff', margin: '0 0 8px' }}>{hero.name}</h3>
                    <p style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.65, margin: 0 }}>
                      {hero.about.slice(0, 150)}...
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chapter browser */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgDeep }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.primaryL, marginBottom: 8 }}>STORY CHAPTERS</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: C.text, margin: 0 }}>Chapter Browser</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 32, alignItems: 'start' }}>
            {/* Chapter list */}
            <div style={{
              background: 'rgba(0,0,0,0.4)', borderRadius: 14, border: `1px solid ${C.border}`,
              overflow: 'hidden', maxHeight: 580, overflowY: 'auto',
              scrollbarWidth: 'thin', scrollbarColor: `${C.primary} transparent`,
            }}>
              {CHAPTERS.map(ch => (
                <div key={ch.id}
                  onClick={() => setSelected(ch.id)}
                  style={{
                    padding: '14px 18px', cursor: 'pointer',
                    background: selected === ch.id ? `${ch.color}18` : 'transparent',
                    borderLeft: `3px solid ${selected === ch.id ? ch.color : 'transparent'}`,
                    borderBottom: `1px solid ${C.border}`,
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { if (selected !== ch.id) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { if (selected !== ch.id) e.currentTarget.style.background = 'transparent'; }}
                >
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: 6,
                      background: `${ch.color}25`, border: `1px solid ${ch.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 900, color: ch.color,
                    }}>{ch.id}</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 900, color: selected === ch.id ? '#fff' : C.textSoft }}>
                        {ch.title}
                      </div>
                      <div style={{ fontSize: 10, color: C.textMuted }}>{ch.theme}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chapter detail */}
            {chapter && (
              <div style={{ padding: 32, background: `linear-gradient(135deg, rgba(0,0,0,0.5), ${chapter.color}10)`,
                border: `1px solid ${chapter.color}30`, borderRadius: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: `${chapter.color}25`, border: `1px solid ${chapter.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, fontWeight: 900, color: chapter.color,
                  }}>{chapter.id}</div>
                  <div>
                    <div style={{ fontSize: 11, color: C.textMuted, letterSpacing: 2, marginBottom: 2 }}>
                      CHAPTER {chapter.id} · {chapter.theme.toUpperCase()}
                    </div>
                    <h3 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: 0 }}>{chapter.title}</h3>
                  </div>
                </div>

                <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.75, marginBottom: 24 }}>
                  {chapter.desc}
                </p>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                  <div style={{
                    padding: '6px 14px', borderRadius: 20,
                    background: `${chapter.color}20`, border: `1px solid ${chapter.color}40`,
                    fontSize: 12, fontWeight: 700, color: chapter.color,
                  }}>
                    {chapter.theme}
                  </div>
                  <div style={{
                    padding: '6px 14px', borderRadius: 20,
                    background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)',
                    fontSize: 12, fontWeight: 700, color: C.primaryL,
                  }}>
                    3 Story Stages
                  </div>
                </div>

                <DialoguePanel chapterId={chapter.id} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* World lore summary */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,60px)', background: C.bgBase }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ marginBottom: 40, textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.primaryL, marginBottom: 8 }}>WORLD LORE</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 900, color: C.text, margin: 0 }}>
              The World Before the Crisis
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              {
                title: 'The Age of Faction Wars',
                body: 'Before the dimensional rifts, the five factions of Aetheria existed in careful tension. EMBERVEIL and GLACIARA had warred for centuries over borderlands where volcanic heat met permanent frost. SUNSPIRE maintained a fragile neutrality, offering healing to any who requested it — at a price. VERDANIA kept its borders closed and its forest impenetrable. VOIDMARK studied the edges of reality in silence, and sometimes things they should not have studied studied them back.',
              },
              {
                title: 'The First Rift',
                body: 'The dimensional veil is not a metaphor. It is a physical membrane between the realm of Aetheria and the void beyond. When it began to fracture — first invisibly, then catastrophically — every sovereign felt it before their scholars named it. GLACIARA\'s original sovereign Aeloria had sealed such a rift once before, at the cost of her throne and three centuries of crystallized sleep. The current sovereigns had no such precedent to guide them. They had only each other.',
              },
              {
                title: 'The Sovereign Awakenings',
                body: 'Not all sovereigns wore their crowns willingly. Aeloria awoke to find strangers sitting her seat. Ravenna Blaze returned from dimensions that should have killed her carrying fire that burns the laws of physics. Iris Vale was crowned by an ancient forest that had not blossomed in a millennium. Nyx Vael forged her sovereignty in the abyss and made the void her body. Only Aura Bloom was chosen in the traditional way — by the light itself, in ceremony, with witnesses. The others had less peaceful coronations.',
              },
              {
                title: 'The World Eater',
                body: 'In the final chapter, what the five factions faced was not a villain with motivations. It was not a conqueror with goals. It was an entity from outside all known dimensions whose sole purpose was consumption. Heroes who survived the encounter described it differently each time — as if the human mind refuses to hold a consistent image of something that exists outside the rules it was built to process. The only thing every survivor agreed on: it was stopped at the moment when five sovereigns spoke with one voice.',
              },
            ].map((sec, i) => (
              <div key={i} style={{
                padding: '28px 32px', background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${C.border}`, borderRadius: 14,
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: C.primaryL, margin: '0 0 14px' }}>{sec.title}</h3>
                <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.8, margin: 0 }}>{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
