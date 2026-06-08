'use client';

const FACTION_COLORS = {
  EMBERVEIL: '#FF4500',
  GLACIARA:  '#00B4D8',
  SUNSPIRE:  '#D4A017',
  VERDANIA:  '#2ECC71',
  VOIDMARK:  '#9B59B6',
};

const RANK_COLORS = {
  S:         { bg: '#F72585', text: '#FFF',    glow: '#FF85C2' },
  A:         { bg: '#7B2FBE', text: '#E9D5FF', glow: '#C084FC' },
  B:         { bg: '#0284C7', text: '#E0F2FE', glow: '#7DD3FC' },
  C:         { bg: '#059669', text: '#D1FAE5', glow: '#6EE7B7' },
};

const SOVEREIGN_GOLD  = '#FFD700';
const SOVEREIGN_GLOW  = '#FFEC6E';

export default function HeroCard({ hero, width = 220, compact = false }) {
  const sc     = width / 220;
  const height = Math.round(width * (320 / 220));
  const fc     = FACTION_COLORS[hero.faction] || '#7C3AED';
  const rc     = hero.sovereign ? { bg: SOVEREIGN_GOLD, text: '#1A0A00', glow: SOVEREIGN_GLOW } : RANK_COLORS[hero.rank] || RANK_COLORS.C;
  const isSov  = !!hero.sovereign;

  const px = (n) => `${n * sc}px`;

  const cardStyle = {
    position:    'relative',
    width:       `${width}px`,
    height:      `${height}px`,
    borderRadius: px(10),
    overflow:    'hidden',
    border:      `1.5px solid ${isSov ? SOVEREIGN_GOLD : fc + '99'}`,
    boxShadow:   isSov
      ? `0 0 ${px(16)} ${px(6)} rgba(255,215,0,0.28), 0 0 ${px(40)} ${px(4)} rgba(255,215,0,0.12)`
      : `0 0 ${px(10)} ${px(2)} ${fc}44`,
    flexShrink:  0,
    animation:   isSov ? 'sovereignBorderPulse 2.8s ease-in-out infinite' : 'none',
  };

  const corners = [
    { pos: 'tl', style: { top: px(6), left: px(6),    borderTop: `2px solid`, borderLeft: `2px solid`,   borderRadius: `${2*sc}px 0 0 0` } },
    { pos: 'tr', style: { top: px(6), right: px(6),   borderTop: `2px solid`, borderRight: `2px solid`,  borderRadius: `0 ${2*sc}px 0 0` } },
    { pos: 'bl', style: { bottom: px(6), left: px(6), borderBottom: `2px solid`, borderLeft: `2px solid`,  borderRadius: `0 0 0 ${2*sc}px` } },
    { pos: 'br', style: { bottom: px(6), right: px(6),borderBottom: `2px solid`, borderRight: `2px solid`, borderRadius: `0 0 ${2*sc}px 0` } },
  ];

  const stats = [
    { icon: '♥', label: 'HP',   val: hero.hp,   color: '#E11D48' },
    { icon: '✕', label: 'ATK',  val: hero.atk,  color: '#D97706' },
    { icon: '⊙', label: 'DEF',  val: hero.def,  color: '#0891B2' },
    { icon: '◎', label: 'CRIT', val: hero.crit, color: '#7C3AED' },
  ];

  return (
    <div style={cardStyle}>
      {/* Portrait */}
      <img
        src={`/assets/heroes/${hero.id}.webp`}
        alt={hero.name}
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:1 }}
      />

      {/* Top dark fade */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:'42%', zIndex:2,
        background:'linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)',
      }} />

      {/* Bottom faction gradient */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0, height:'60%', zIndex:2,
        background:`linear-gradient(to top, rgba(0,0,0,0.95), ${fc}55, transparent)`,
      }} />

      {/* Sovereign gold wash */}
      {isSov && <div style={{
        position:'absolute', inset:0, zIndex:3,
        background:'linear-gradient(135deg, rgba(255,165,0,0.07), rgba(255,215,0,0.04))',
      }} />}

      {/* Sovereign shimmer sweep */}
      {isSov && <div style={{
        position:'absolute', top:0, bottom:0, width: px(52),
        zIndex:4, pointerEvents:'none',
        background:'linear-gradient(90deg, transparent, rgba(255,215,0,0.22), rgba(255,240,100,0.3), transparent)',
        animation:'sovereignShimmer 4.2s ease-in-out infinite',
        transform:'skewX(-15deg)',
      }} />}

      {/* Corner brackets */}
      {corners.map(({ pos, style }) => (
        <div key={pos} style={{
          position:'absolute', width: px(14), height: px(14),
          borderColor: isSov ? SOVEREIGN_GOLD : fc,
          zIndex:5, ...style,
        }} />
      ))}

      {/* ── Top section ── */}
      <div style={{ position:'absolute', top: px(10), left: px(10), right: px(10), zIndex:6, display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        {/* Name block */}
        <div style={{ flex:1, paddingRight: px(6) }}>
          <div style={{
            fontSize: px(14), fontWeight:900, color:'#fff', letterSpacing:1,
            textTransform:'uppercase', lineHeight:1.1,
            textShadow:'0 0 6px rgba(0,0,0,1)',
          }}>
            {hero.name}
          </div>
          <div style={{
            fontSize: px(6), color: isSov ? SOVEREIGN_GOLD : '#aaa',
            letterSpacing:1.5, marginTop: px(2), fontWeight:700,
          }}>
            {isSov ? `♛ ${hero.frame}` : `FRAME : ${hero.frame}`}
          </div>
        </div>

        {/* Rank badge */}
        <div style={{
          width: px(34), height: px(40), background: rc.bg,
          borderRadius: px(4), display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', flexShrink:0,
          boxShadow: `0 0 ${px(8)} ${rc.glow}`,
        }}>
          <div style={{ fontSize: px(6), color: rc.text, opacity:0.75, letterSpacing:1, fontWeight:700 }}>RANK</div>
          <div style={{ fontSize: isSov ? px(11) : px(17), color: rc.text, fontWeight:900, lineHeight:1 }}>
            {isSov ? '♛' : hero.rank}
          </div>
        </div>
      </div>

      {/* ── Element & Effect tags ── */}
      {!compact && (
        <div style={{ position:'absolute', top: px(320 * sc * 0.30), left: px(10), zIndex:6, display:'flex', flexDirection:'column', gap: px(4) }}>
          {[{ label:'ELEMENT', val: hero.element }, { label:'EFFECT', val: hero.effect }].map(({ label, val }) => (
            <div key={label} style={{
              background:'rgba(0,0,0,0.65)', border:`1px solid ${fc}99`,
              borderRadius: px(4), padding:`${3*sc}px ${5*sc}px`,
            }}>
              <div style={{ fontSize: px(5), color:'#999', letterSpacing:1 }}>{label}</div>
              <div style={{ fontSize: px(7.5), color: fc, fontWeight:700, letterSpacing:0.5 }}>{val}</div>
            </div>
          ))}
        </div>
      )}

      {/* ── Faction icon ── */}
      <div style={{
        position:'absolute', top: px(56), right: px(10), zIndex:6,
        width: px(22), height: px(22), background:'rgba(0,0,0,0.55)',
        borderRadius: px(4), overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <img src={`/assets/faction/${hero.faction}.png`} alt={hero.faction}
          style={{ width:'80%', height:'80%', objectFit:'contain' }} />
      </div>

      {/* ── Sovereign banner ── */}
      {isSov && (
        <div style={{
          position:'absolute', bottom: px(72), left:0, right:0, zIndex:6,
          background:`linear-gradient(90deg, transparent, rgba(255,165,0,0.25), transparent)`,
          textAlign:'center', padding:`${3*sc}px 0`,
          fontSize: px(7), fontWeight:900, letterSpacing:2.5,
          color: SOVEREIGN_GOLD, textShadow:`0 0 6px ${SOVEREIGN_GLOW}`,
        }}>
          ♛ SOVEREIGN
        </div>
      )}

      {/* ── Stats row ── */}
      <div style={{
        position:'absolute', bottom: px(52), left:0, right:0, zIndex:6,
        background:'rgba(0,0,0,0.80)', display:'flex',
        borderTop: isSov ? `1px solid rgba(255,215,0,0.25)` : 'none',
      }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{
            flex:1, display:'flex', flexDirection:'column', alignItems:'center',
            justifyContent:'center', padding:`${4*sc}px 0`,
            borderRight: i < 3 ? `1px solid rgba(124,58,237,0.35)` : 'none',
          }}>
            <div style={{ fontSize: px(8), color: s.color, lineHeight:1 }}>{s.icon}</div>
            <div style={{ fontSize: px(5.5), color:'#888', letterSpacing:0.5 }}>{s.label}</div>
            <div style={{ fontSize: px(11.5), color:'#fff', fontWeight:900, lineHeight:1.1 }}>
              {s.val >= 1000 ? (s.val / 1000).toFixed(1) + 'k' : s.val}
            </div>
          </div>
        ))}
      </div>

      {/* ── Info bar ── */}
      {!compact && (
        <div style={{
          position:'absolute', bottom: px(14), left: px(10), right: px(10),
          zIndex:6, display:'flex', gap: px(8), alignItems:'flex-start',
        }}>
          <div style={{ flexShrink:0 }}>
            <div style={{ fontSize: px(5), color:'#999', letterSpacing:1 }}>CLASS</div>
            <div style={{ fontSize: px(8), color: isSov ? SOVEREIGN_GOLD : fc, fontWeight:700 }}>
              {hero.class.toUpperCase()}
            </div>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize: px(5), color:'#999', letterSpacing:1 }}>ABOUT</div>
            <div style={{
              fontSize: px(6.5), color:'#bbb', lineHeight:1.4,
              display:'-webkit-box', WebkitLineClamp:3,
              WebkitBoxOrient:'vertical', overflow:'hidden',
            }}>
              {hero.about}
            </div>
          </div>
        </div>
      )}

      {/* ── Card ID ── */}
      <div style={{
        position:'absolute', bottom: px(4), right: px(10), zIndex:6,
        fontSize: px(5.5), color: isSov ? SOVEREIGN_GOLD + '99' : '#555',
        letterSpacing:1, fontWeight:700,
      }}>
        {hero.cardId}
      </div>
    </div>
  );
}
