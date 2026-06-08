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

const FACTION_LORE = {
  EMBERVEIL: {
    terrain:   'Volcanic Highlands',
    capital:   'Cinder Throne Citadel',
    climate:   'Extreme Heat, Volcanic Activity',
    population: 'Warriors, Fire Mages, Forge-Smiths',
    threat:    'Dimensional fire breaches from beyond the veil',
    detail: `EMBERVEIL was forged from the volcanic highlands at the eastern edge of Aetheria, where the ground is always warm and the sky carries the faint orange haze of perpetual eruption. Its people are shaped by fire — literally and philosophically. EMBERVEIL warriors train by fighting in active lava flows. EMBERVEIL mages channel thermal energy that would kill any other faction's practitioners. The faction motto, spoken at the start of every training session since anyone can remember, is "burn or be burned." No one argues with its accuracy.

The Cinder Throne Citadel sits at the peak of the largest volcano in the realm. It has never been successfully besieged. The heat alone has killed more attacking forces than the defenders ever had to.

Three cycles ago, sovereign Ravenna Blaze was swallowed by a dimensional breach while sealing it. She returned from the other side carrying fire that does not follow the rules of fire. The faction does not speak about what happened in the interval. Neither does she.`,
  },
  GLACIARA: {
    terrain:   'Frozen Tundra & Glaciers',
    capital:   'The Frost Spire',
    climate:   'Permanent Blizzard, Absolute Zero Zones',
    population: 'Ice Mages, Glacial Warriors, Scholars',
    threat:    'Ancient darkness sealed beneath the permafrost',
    detail: `GLACIARA occupies the northwestern territories where the cold does not merely exist — it dominates. The faction's territory includes the only known regions in Aetheria where air temperature reaches absolute zero at natural ground level. GLACIARA practitioners train in these conditions. Outsiders who visit the outer settlements are required to sign documentation acknowledging that the faction is not responsible for tissue damage.

The Frost Spire is GLACIARA's capital, an enormous ice formation that predates any known construction technique. Scholars have been arguing about how it was built for three centuries. The current best theory involves Aeloria, the original sovereign, and an amount of ice magic that should have been physically impossible. Aeloria has declined to comment on this theory because she has been crystallized in a deep glacier stasis for the past three centuries.

She woke up recently. The scholars stopped arguing.`,
  },
  SUNSPIRE: {
    terrain:   'Radiant Spires & Sun Temples',
    capital:   'The Aureate Cathedral',
    climate:   'Perpetual Sunlight, Sacred Warmth',
    population: 'Paladins, Clerics, Holy Mages, Scholars',
    threat:    'Corruption of sacred light from within',
    detail: `SUNSPIRE occupies the southern territories where sunlight arrives first every morning and lingers longest every evening. The faction's architecture is built around this — every structure in SUNSPIRE territory is oriented to maximize solar contact, and every building has at least one room designed specifically to channel direct sunlight into a concentrated focal point for magical use.

The Aureate Cathedral is the faction's spiritual center, a structure so precisely engineered that solar energy enters through a specific window every solstice and illuminates the entire building simultaneously for exactly three minutes. The ceremony that occurs during those three minutes has been conducted without interruption for over two thousand years.

Sovereign Aura Bloom was chosen by the light during the Ceremony of Ascension — not the political ceremony, not the military ceremony, but the ancient, secret third ceremony that most modern SUNSPIRE scholars assumed was metaphorical until it happened in front of two hundred witnesses. She has been trying to explain that she didn't do anything since. The light, apparently, did.`,
  },
  VERDANIA: {
    terrain:   'Ancient Forest & Living Canopy',
    capital:   'The Root Throne',
    climate:   'Perpetual Growth, Seasonal Extremes',
    population: 'Forest Warriors, Nature Mages, Herbalists',
    threat:    'Corruption spreading from the forest\'s heart',
    detail: `VERDANIA's territory is the forest. Not a forest — the forest, the oldest continuous growth in the known realm, a living organism that has been expanding for so long that its original borders are mythological. VERDANIA practitioners don't conquer the forest; they ask it. Those who understand how to listen find that it answers.

The Root Throne is not a building in the traditional sense. It is a place where the oldest roots of the oldest tree converge, creating a natural space that functions as a seat of governance. The ambient nature energy there is dense enough that VERDANIA mages working within it describe the experience as thinking with extra minds.

Sovereign Iris Vale was crowned during the Night of Blossoming, when the eldest trees — those that are measured in geological time rather than years — flowered for the first time in a thousand years. The forest chose her. Every plant in VERDANIA territory acknowledged the choice simultaneously. Botanists who study the event records note that this included plants with no documented capacity for awareness, response, or ceremony. The forest apparently does not limit itself to documented capacities.`,
  },
  VOIDMARK: {
    terrain:   'Abyss-Scarred Wastes & Void Rifts',
    capital:   'The Abyssal Throne Chamber',
    climate:   'Dimensional Instability, Reality Tears',
    population: 'Void Mages, Shadow Operatives, Dimensional Scholars',
    threat:    'The void consuming its own practitioners',
    detail: `VOIDMARK exists in the territories where the dimensional veil is thinnest, where reality tears happen naturally and with enough frequency that the faction has stopped treating them as emergencies and begun treating them as infrastructure. The void rifts that would cause a crisis anywhere else are navigation features in VOIDMARK territory. The faction's scholars mapped them three centuries ago and maintain the maps with the same institutional regularity that other factions apply to roads.

The Abyssal Throne Chamber is located precisely at the point where the dimensional veil is thinnest in the known realm. By rights, nothing should stand there — the void pressure should make construction impossible. Sovereign Nyx Vael built her throne there anyway, then merged with the void itself and was reborn stronger. The chamber stands because she does, and she stands because the void has learned not to challenge what it cannot consume.

Three challenger factions attempted to dethrone her. Their names are no longer spoken in VOIDMARK. This is not a suppression — no one ordered the names forgotten. It simply happened, as things sometimes do in a faction where the abyss listens.`,
  },
};

export default function WorldPage() {
  const [activeFaction, setActiveFaction] = useState('EMBERVEIL');
  const faction  = FACTIONS[activeFaction];
  const lore     = FACTION_LORE[activeFaction];
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
          Five factions. Five territories. One world on the edge of dimensional collapse.
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
                <img src={`/assets/faction/${f.name}.png`} alt={f.name}
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
                  <img src={`/assets/faction/${activeFaction}.png`} alt={activeFaction}
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
                  { label: 'Terrain',    val: lore.terrain },
                  { label: 'Capital',    val: lore.capital },
                  { label: 'Climate',    val: lore.climate },
                  { label: 'Threat',     val: lore.threat  },
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
                {lore.detail}
              </div>
            </div>

            {/* Sovereign card + hero list */}
            <div>
              {sovereign && (
                <div style={{ marginBottom: 32, display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <HeroCard hero={sovereign} width={200} />
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: '#FFD700', marginBottom: 6 }}>♛ FACTION SOVEREIGN</div>
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: '#fff', margin: '0 0 10px' }}>{sovereign.name}</h3>
                    <p style={{ fontSize: 12, color: C.textSoft, lineHeight: 1.65 }}>
                      {sovereign.about.slice(0, 200)}...
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
