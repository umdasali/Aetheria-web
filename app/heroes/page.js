'use client';
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import HeroCard from '../../components/HeroCard';
import { HEROES, FACTIONS, RANK_COLORS } from '../../lib/gameData';

const C = {
  bgDeep: '#08031A', bgBase: '#0E0720', bgCard: '#1C0F38',
  primary: '#7C3AED', primaryL: '#A78BFA', secondary: '#DB2777',
  text: '#F0EAFF', textSoft: '#C4B5FD', textMuted: '#8B7EC8',
  border: 'rgba(167,139,250,0.18)',
};

const RANKS   = ['All', 'SOVEREIGN', 'S', 'A', 'B', 'C'];
const CLASSES = ['All', 'Attacker', 'Mage', 'Defender', 'Support'];

export default function HeroesPage() {
  const [faction, setFaction] = useState('All');
  const [rank,    setRank]    = useState('All');
  const [cls,     setCls]     = useState('All');
  const [search,  setSearch]  = useState('');
  const [detail,  setDetail]  = useState(null);

  // Read faction from URL query on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const f = params.get('faction');
    if (f && FACTIONS[f]) setFaction(f);
  }, []);

  const filtered = HEROES.filter(h => {
    if (faction !== 'All' && h.faction !== faction) return false;
    if (rank    !== 'All') {
      if (rank === 'SOVEREIGN' && !h.sovereign) return false;
      if (rank !== 'SOVEREIGN' && h.rank !== rank) return false;
    }
    if (cls !== 'All' && h.class !== cls) return false;
    if (search && !h.name.toLowerCase().includes(search.toLowerCase()) &&
        !h.faction.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const fc = faction !== 'All' ? FACTIONS[faction] : null;

  return (
    <>
      <Nav />

      {/* Header */}
      <div style={{
        paddingTop: 120, paddingBottom: 60,
        paddingLeft: 'clamp(20px,5vw,60px)', paddingRight: 'clamp(20px,5vw,60px)',
        background: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.2), transparent), ${C.bgDeep}`,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: C.primaryL,
          textTransform: 'uppercase', marginBottom: 12 }}>Hero Collection</div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, color: C.text, margin: '0 0 16px' }}>
          {faction !== 'All'
            ? <><span style={{ color: fc?.color }}>{faction}</span> Heroes</>
            : 'All 53 Heroes'
          }
        </h1>
        <p style={{ fontSize: 16, color: C.textSoft, maxWidth: 480, margin: '0 auto' }}>
          {filtered.length} hero{filtered.length !== 1 ? 'es' : ''} found
        </p>
      </div>

      {/* Filters */}
      <div style={{
        position: 'sticky', top: 64, zIndex: 100,
        background: 'rgba(8,3,26,0.95)', backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`,
        padding: '16px clamp(20px,5vw,60px)',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Search */}
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search heroes..."
            style={{
              padding: '8px 14px', borderRadius: 8, fontSize: 13, color: C.text,
              background: 'rgba(255,255,255,0.07)', border: `1px solid ${C.border}`,
              outline: 'none', width: 180,
            }}
          />

          {/* Faction filter */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['All', ...Object.keys(FACTIONS)].map(f => {
              const active = faction === f;
              const color  = f !== 'All' ? FACTIONS[f]?.color : C.primaryL;
              return (
                <button key={f} onClick={() => setFaction(f)} style={{
                  padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                  cursor: 'pointer', border: `1px solid ${active ? color + '80' : C.border}`,
                  background: active ? color + '25' : 'transparent',
                  color: active ? color : C.textMuted,
                  transition: 'all 0.15s',
                }}>
                  {f}
                </button>
              );
            })}
          </div>

          <div style={{ width: 1, height: 24, background: C.border }} />

          {/* Rank filter */}
          <div style={{ display: 'flex', gap: 6 }}>
            {RANKS.map(r => {
              const active = rank === r;
              const rc = r !== 'All' && r !== 'SOVEREIGN' ? RANK_COLORS[r] : null;
              const color = r === 'SOVEREIGN' ? '#FFD700' : r === 'All' ? C.primaryL : rc?.bg;
              return (
                <button key={r} onClick={() => setRank(r)} style={{
                  padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                  cursor: 'pointer', border: `1px solid ${active ? color + '80' : C.border}`,
                  background: active ? color + '25' : 'transparent',
                  color: active ? color : C.textMuted, transition: 'all 0.15s',
                }}>
                  {r}
                </button>
              );
            })}
          </div>

          <div style={{ width: 1, height: 24, background: C.border }} />

          {/* Class filter */}
          <div style={{ display: 'flex', gap: 6 }}>
            {CLASSES.map(c => {
              const active = cls === c;
              return (
                <button key={c} onClick={() => setCls(c)} style={{
                  padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                  cursor: 'pointer', border: `1px solid ${active ? C.primaryL + '80' : C.border}`,
                  background: active ? C.primary + '25' : 'transparent',
                  color: active ? C.primaryL : C.textMuted, transition: 'all 0.15s',
                }}>
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero grid */}
      <div style={{
        padding: '40px clamp(20px,5vw,60px) 80px',
        background: C.bgBase, minHeight: '60vh',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: C.textMuted }}>
              No heroes match your filters.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 24,
            }}>
              {filtered.map(hero => (
                <div key={hero.id} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ cursor: 'pointer', transition: 'transform 0.25s' }}
                    onClick={() => setDetail(hero)}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    <HeroCard hero={hero} width={200} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail modal */}
      {detail && (
        <div
          onClick={() => setDetail(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#0E0720', border: `1px solid rgba(167,139,250,0.25)`,
              borderRadius: 20, padding: '32px',
              maxWidth: 720, width: '100%', maxHeight: '90vh', overflowY: 'auto',
              display: 'flex', gap: 32, flexWrap: 'wrap',
              boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
            }}
          >
            {/* Card */}
            <div style={{ flexShrink: 0 }}>
              <HeroCard hero={detail} width={220} />
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: C.textMuted, marginBottom: 4 }}>
                {detail.faction} · {detail.cardId}
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: '0 0 6px' }}>{detail.name}</h2>
              {detail.sovereign && (
                <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 20,
                  background: 'rgba(255,215,0,0.15)', border: '1px solid rgba(255,215,0,0.4)',
                  fontSize: 11, fontWeight: 700, color: '#FFD700', letterSpacing: 2, marginBottom: 12,
                }}>♛ SOVEREIGN</div>
              )}
              <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.7, marginBottom: 20 }}>{detail.about}</p>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
                {[
                  { icon: '♥', label: 'HP',   val: detail.hp,   color: '#E11D48' },
                  { icon: '✕', label: 'ATK',  val: detail.atk,  color: '#D97706' },
                  { icon: '⊙', label: 'DEF',  val: detail.def,  color: '#0891B2' },
                  { icon: '◎', label: 'CRIT', val: detail.crit, color: '#7C3AED' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: 'rgba(255,255,255,0.04)', border: `1px solid ${s.color}30`,
                    borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <span style={{ fontSize: 18, color: s.color }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: 10, color: C.textMuted, letterSpacing: 1 }}>{s.label}</div>
                      <div style={{ fontSize: 20, fontWeight: 900, color: '#fff' }}>{s.val.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trump card */}
              <div style={{
                background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: 12, padding: '16px 18px',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: C.primaryL, marginBottom: 6 }}>TRUMP CARD</div>
                <div style={{ fontSize: 15, fontWeight: 900, color: '#fff', marginBottom: 6 }}>
                  {detail.trumpCard?.name || detail.frame}
                </div>
                {detail.trumpCard?.description && (
                  <p style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.6, margin: 0 }}>
                    {detail.trumpCard.description}
                  </p>
                )}
              </div>
            </div>

            <button onClick={() => setDetail(null)} style={{
              position: 'absolute', top: 16, right: 16,
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 8,
              color: '#fff', fontSize: 18, cursor: 'pointer', width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>×</button>
          </div>
        </div>
      )}
    </>
  );
}
