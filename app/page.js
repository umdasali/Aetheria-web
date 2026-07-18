'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import HeroCard from '../components/HeroCard';
import FactionWeather, { useFactionCycle } from '../components/FactionWeather';
import { SOVEREIGN_HEROES, FACTIONS, BOSSES, HEROES } from '../lib/gameData';

const FACTION_LIST = Object.values(FACTIONS);

const C = {
  bgDeep:'#06040F', bgBase:'#0B0817', bgCard:'#100D1F',
  primary:'#7C3AED', primaryL:'#A78BFA',
  accent:'#38BDF8', secondary:'#DB2777',
  text:'#F0EAFF', textSoft:'#C4B5FD', textMuted:'#6B6090',
  border:'rgba(255,255,255,0.07)', gold:'#D97706',
};
const G  = `linear-gradient(rgba(56,189,248,.032) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.032) 1px,transparent 1px)`;
const GS = '52px 52px';
const ch = (p=10) => `polygon(${p}px 0,100% 0,100% calc(100% - ${p}px),calc(100% - ${p}px) 100%,0 100%,0 ${p}px)`;

const SMETA = [
  {id:'intro',    label:'INTRO'},
  {id:'sov',      label:'SOVEREIGNS'},
  {id:'factions', label:'FACTIONS'},
  {id:'heroes',   label:'HEROES'},
  {id:'combat',   label:'COMBAT'},
  {id:'world',    label:'WORLD'},
  {id:'story',    label:'STORY'},
  {id:'download', label:'DOWNLOAD'},
];

function Tag({ children, color }) {
  const c = color || C.accent;
  return (
    <div style={{display:'inline-flex',alignItems:'center',gap:10,marginBottom:12}}>
      <div style={{width:2,height:16,background:`linear-gradient(to bottom,${c},${C.primary})`}}/>
      <span style={{fontSize:9,fontWeight:700,color:c,letterSpacing:4,textTransform:'uppercase'}}>{children}</span>
      <div style={{width:36,height:1,background:`linear-gradient(to right,${c}55,transparent)`}}/>
    </div>
  );
}

function Num({ n, left }) {
  return (
    <div style={{
      position:'absolute',
      [left?'left':'right']:'-2vw',
      top:'50%',transform:'translateY(-50%)',
      fontSize:'clamp(100px,18vw,240px)',fontWeight:900,
      color:'rgba(56,189,248,.026)',letterSpacing:-10,
      pointerEvents:'none',lineHeight:1,userSelect:'none',zIndex:0,
    }}>{n}</div>
  );
}

/* ── shared horizontal scroll strip used on mobile ── */
function HScroll({ children, pad }) {
  return (
    <div style={{position:'relative'}}>
      <div style={{position:'absolute',left:0,top:0,bottom:0,width:40,background:`linear-gradient(to right,${C.bgDeep},transparent)`,zIndex:4,pointerEvents:'none'}}/>
      <div style={{display:'flex',gap:10,overflowX:'auto',paddingLeft:pad||16,paddingRight:pad||16,paddingBottom:8,scrollbarWidth:'none',msOverflowStyle:'none'}}>
        {children}
      </div>
      <div style={{position:'absolute',right:0,top:0,bottom:0,width:40,background:`linear-gradient(to left,${C.bgDeep},transparent)`,zIndex:4,pointerEvents:'none'}}/>
    </div>
  );
}

export default function Page() {
  const cRef  = useRef(null);
  const hRef  = useRef(null);
  const aRef  = useRef(0);
  const [active, setActive] = useState(0);
  const [hov,    setHov]    = useState(null);
  const [W,      setW]      = useState(() => typeof window !== 'undefined' ? window.innerWidth : 1280);

  const mob = W < 640;
  const tab = W < 1024;

  // Viewport width listener
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  // Lock body scroll
  useEffect(() => {
    const h = document.documentElement, b = document.body;
    h.style.overflow='hidden'; h.style.height='100%';
    b.style.overflow='hidden'; b.style.height='100%';
    return () => { h.style.overflow=''; h.style.height=''; b.style.overflow=''; b.style.height=''; };
  }, []);

  // Track active section via scroll position
  useEffect(() => {
    const el = cRef.current; if (!el) return;
    const fn = () => {
      const idx = Math.min(Math.max(Math.round(el.scrollTop/el.clientHeight),0),SMETA.length-1);
      aRef.current = idx; setActive(idx);
    };
    el.addEventListener('scroll', fn, {passive:true});
    return () => el.removeEventListener('scroll', fn);
  }, []);

  // Keyboard navigation — uses ref to avoid stale closures
  useEffect(() => {
    const fn = e => {
      if (e.key==='ArrowDown'||e.key==='PageDown') { e.preventDefault(); go(Math.min(aRef.current+1,SMETA.length-1)); }
      if (e.key==='ArrowUp'  ||e.key==='PageUp')   { e.preventDefault(); go(Math.max(aRef.current-1,0)); }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  const go      = i => cRef.current?.scrollTo({top:i*(cRef.current?.clientHeight||window.innerHeight),behavior:'smooth'});
  const scrollH = d => hRef.current?.scrollBy({left:d*260,behavior:'smooth'});

  const fList   = FACTION_LIST;
  const { faction: weatherFaction, reduced: weatherReduced } = useFactionCycle(FACTION_LIST);
  const sBosses = BOSSES.slice(0,5);
  const sHeroes = HEROES.filter(h=>h.rank==='S'||h.sovereign).slice(0,12);

  // Section shell
  const sec = (bg,extra={}) => ({
    height:'100vh',scrollSnapAlign:'start',overflow:'hidden',
    position:'relative',background:bg,...extra,
  });

  const px = mob ? 'clamp(16px,4vw,24px)' : 'clamp(20px,5vw,60px)';

  // Shared outline button
  const ObtnStyle = {padding: mob?'9px 18px':'10px 24px',clipPath:ch(7),background:'rgba(56,189,248,.05)',color:C.textSoft,fontSize:12,fontWeight:600,border:'1px solid rgba(56,189,248,.22)',transition:'all .2s',display:'inline-block'};
  const ObtnHov = e=>{e.currentTarget.style.background='rgba(56,189,248,.14)';e.currentTarget.style.borderColor='rgba(56,189,248,.65)';e.currentTarget.style.color='#fff';};
  const ObtnOut = e=>{e.currentTarget.style.background='rgba(56,189,248,.05)';e.currentTarget.style.borderColor='rgba(56,189,248,.22)';e.currentTarget.style.color=C.textSoft;};

  return (
    <>
      <Nav/>

      {/* dvh support + scrollbar hide + mobile utilities */}
      <style dangerouslySetInnerHTML={{__html: `
        #fp,:root{scroll-behavior:smooth}
        #fp{-webkit-overflow-scrolling:touch}
        #fp::-webkit-scrollbar{display:none}
        #fp{-ms-overflow-style:none;scrollbar-width:none}
        @supports(height:100dvh){#fp,#fp>section{height:100dvh!important}}
        .hs::-webkit-scrollbar{display:none}
      `}} />

      {/* ════════════════════════════════════
          FULL-PAGE SCROLL CONTAINER
      ════════════════════════════════════ */}
      <div id="fp" ref={cRef} style={{
        position:'fixed',inset:0,
        overflowY:'scroll',
        scrollSnapType:'y mandatory',
        zIndex:1,
      }}>

        {/* ═══ 01 INTRO ═══ */}
        <section style={sec(`
          radial-gradient(ellipse 90% 60% at 50% -10%,rgba(124,58,237,.22),transparent),
          radial-gradient(ellipse 50% 60% at 15% 60%,rgba(56,189,248,.06),transparent),
          radial-gradient(ellipse 40% 50% at 85% 40%,rgba(219,39,119,.07),transparent),
          ${C.bgDeep}
        `,{display:'flex',alignItems:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.8,pointerEvents:'none'}}/>
          <FactionWeather faction={weatherFaction} reduced={weatherReduced}/>
          <div style={{position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.04) 3px,rgba(0,0,0,.04) 4px)',pointerEvents:'none',zIndex:1}}/>
          {!mob && (
            <div style={{position:'absolute',top:0,right:0,width:'40%',height:'100%',overflow:'hidden',opacity:.3,pointerEvents:'none'}}>
              {[60,92,124].map((t,i)=>(<div key={i} style={{position:'absolute',top:t,right:-100,width:500,height:1,background:`linear-gradient(to left,transparent,${C.accent}${i===0?'60':'30'},transparent)`,transform:'rotate(-45deg)',transformOrigin:'right center'}}/>))}
            </div>
          )}

          <div style={{
            width:'100%',maxWidth:1440,margin:'0 auto',
            padding:`${mob?'72px':tab?'90px':'80px'} ${px} 0`,
            display:'grid',
            gridTemplateColumns: mob ? '1fr' : '1fr 1fr',
            alignItems:'center',gap: mob ? 0 : 40,
            position:'relative',zIndex:2,height:'100%',
          }}>

            {/* TEXT */}
            <div style={{textAlign:mob?'center':'left',display:'flex',flexDirection:'column',alignItems:mob?'center':'flex-start'}}>
              {/* faction pills */}
              <div style={{display:'flex',gap:6,marginBottom:mob?16:28,flexWrap:'wrap',justifyContent:mob?'center':'flex-start'}}>
                {fList.map(f=>{
                  const isWeather = f.name===weatherFaction.name;
                  return (
                    <div key={f.name} style={{clipPath:ch(4),background:`${f.color}${isWeather?'22':'10'}`,border:`1px solid ${f.color}${isWeather?'80':'35'}`,padding:'3px 8px',display:'flex',alignItems:'center',gap:4,transition:'all 1s ease',boxShadow:isWeather?`0 0 10px ${f.color}50`:'none'}}>
                      <div style={{width:4,height:4,background:f.color,boxShadow:`0 0 6px ${f.color}`,flexShrink:0}}/>
                      <span style={{fontSize:7,fontWeight:700,color:f.color,letterSpacing:1.5,textTransform:'uppercase'}}>{f.name}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{fontSize:`clamp(${mob?'42px':'52px'},7vw,96px)`,fontWeight:900,lineHeight:.85,background:`linear-gradient(160deg,#fff 0%,${C.primaryL} 45%,${C.secondary} 100%)`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:-4,marginBottom:8}}>
                AETHERIA
              </div>
              <div style={{width:mob?56:72,height:1,background:`linear-gradient(90deg,transparent,${C.accent},transparent)`,animation:'accentPulse 3s ease-in-out infinite',marginBottom:10}}/>
              <div style={{fontSize:'clamp(9px,1.4vw,12px)',fontWeight:700,color:C.textMuted,letterSpacing:mob?5:7,textTransform:'uppercase',marginBottom:mob?14:20}}>
                Legends Unbound
              </div>

              {!mob && (
                <p style={{fontSize:'clamp(13px,1.2vw,15px)',color:C.textSoft,lineHeight:1.8,maxWidth:460,marginBottom:28}}>
                  Collect 107 legendary heroes across six factions. Master Trump Card battles. Unravel the fate of Aetheria.
                </p>
              )}

              {/* CTAs */}
              <div style={{display:'flex',gap:10,flexWrap:'wrap',justifyContent:mob?'center':'flex-start',marginBottom:mob?20:40}}>
                <button onClick={()=>go(7)} style={{
                  padding:mob?'12px 24px':'14px 34px',fontSize:13,fontWeight:700,
                  clipPath:ch(10),background:`linear-gradient(135deg,${C.primary},${C.secondary})`,
                  color:'#fff',border:'none',cursor:'pointer',
                  boxShadow:`0 0 28px rgba(124,58,237,.5)`,transition:'all .2s',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 8px 40px rgba(124,58,237,.75)';e.currentTarget.style.transform='translateY(-2px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.boxShadow=`0 0 28px rgba(124,58,237,.5)`;e.currentTarget.style.transform='';}}
                >Play Now — Free</button>
                <button onClick={()=>go(3)} style={{
                  padding:mob?'11px 20px':'13px 28px',fontSize:13,fontWeight:600,
                  clipPath:ch(10),background:'rgba(56,189,248,.06)',
                  color:C.textSoft,border:'1px solid rgba(56,189,248,.25)',cursor:'pointer',transition:'all .2s',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(56,189,248,.14)';e.currentTarget.style.borderColor='rgba(56,189,248,.6)';e.currentTarget.style.color='#fff';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(56,189,248,.06)';e.currentTarget.style.borderColor='rgba(56,189,248,.25)';e.currentTarget.style.color=C.textSoft;}}
                >View Heroes</button>
              </div>

              {/* Stats — 2×2 on mobile, single row on desktop */}
              {mob ? (
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',width:'100%',border:`1px solid ${C.border}`}}>
                  {[{v:'107',l:'Heroes'},{v:'6',l:'Factions'},{v:'90',l:'Stages'},{v:'200',l:'Floors'}].map((s,i)=>(
                    <div key={s.l} style={{padding:'12px 4px',textAlign:'center',borderRight:i%2===0?`1px solid ${C.border}`:'none',borderBottom:i<2?`1px solid ${C.border}`:'none'}}>
                      <div style={{fontSize:'clamp(20px,5vw,26px)',fontWeight:900,color:C.accent,lineHeight:1,letterSpacing:-1}}>{s.v}</div>
                      <div style={{fontSize:8,color:C.textMuted,fontWeight:600,marginTop:3,letterSpacing:1.5,textTransform:'uppercase'}}>{s.l}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{display:'flex',borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`,width:'100%'}}>
                  {[{v:'107',l:'Heroes'},{v:'6',l:'Factions'},{v:'90',l:'Stages'},{v:'200',l:'Tower Floors'}].map((s,i)=>(
                    <div key={s.l} style={{flex:1,padding:'16px 4px',textAlign:'center',borderRight:i<3?`1px solid ${C.border}`:'none'}}>
                      <div style={{fontSize:'clamp(22px,2.5vw,30px)',fontWeight:900,color:C.accent,lineHeight:1,letterSpacing:-1}}>{s.v}</div>
                      <div style={{fontSize:9,color:C.textMuted,fontWeight:600,marginTop:4,letterSpacing:2,textTransform:'uppercase'}}>{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* HERO ART — desktop/tablet only */}
            {!mob && (
              <div style={{display:'flex',gap:tab?12:16,justifyContent:'center',alignItems:'center',height:'100%',paddingBottom:60}}>
                {SOVEREIGN_HEROES.slice(0,tab?2:3).map((h,i)=>(
                  <div key={h.id} style={{
                    animation:`floatY ${4+i*.5}s ease-in-out ${i*1.2}s infinite`,
                    transform:`translateY(${[-20,0,-10][i]||0}px)`,
                    filter:'drop-shadow(0 32px 56px rgba(0,0,0,.8))',transition:'filter .3s',
                  }}
                    onMouseEnter={e=>{e.currentTarget.style.filter='drop-shadow(0 32px 56px rgba(0,0,0,.8)) brightness(1.12)';}}
                    onMouseLeave={e=>{e.currentTarget.style.filter='drop-shadow(0 32px 56px rgba(0,0,0,.8))';}}
                  >
                    <HeroCard hero={h} width={tab?(i===0?170:150):(i===1?205:168)} compact={false}/>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* scroll nudge */}
          <div onClick={()=>go(1)} style={{position:'absolute',bottom:mob?20:28,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:6,animation:'scrollBounce 2.2s ease-in-out infinite',zIndex:2,cursor:'pointer'}}>
            <span style={{fontSize:8,color:C.textMuted,letterSpacing:3,fontWeight:700,textTransform:'uppercase'}}>Scroll</span>
            <div style={{width:1,height:24,background:`linear-gradient(to bottom,${C.accent}80,transparent)`}}/>
          </div>
        </section>

        {/* ═══ 02 SOVEREIGN HEROES ═══ */}
        <section style={sec(`radial-gradient(ellipse 80% 50% at 50% 0%,rgba(124,58,237,.18),transparent),${C.bgBase}`,{display:'flex',flexDirection:'column',justifyContent:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.6,pointerEvents:'none'}}/>
          {!mob && <Num n="02"/>}
          <div style={{maxWidth:1400,margin:'0 auto',width:'100%',position:'relative',zIndex:1}}>
            <div style={{textAlign:'center',marginBottom:mob?20:36,padding:`0 ${px}`}}>
              <Tag>02 — Sovereign Heroes</Tag>
              <h2 style={{fontSize:`clamp(${mob?'22px':'28px'},4vw,52px)`,fontWeight:900,color:C.text,letterSpacing:-2,margin:'0 0 8px'}}>Rulers of Six Factions</h2>
              {!mob && <p style={{fontSize:13,color:C.textSoft,maxWidth:460,margin:'0 auto'}}>Each faction crowned one sovereign — chosen by destiny, born of catastrophe, forged in the abyss.</p>}
            </div>

            {mob ? (
              /* mobile: horizontal scroll */
              <HScroll pad={16}>
                {SOVEREIGN_HEROES.map(h=>(
                  <Link key={h.id} href={`/heroes?faction=${h.faction}`} style={{textDecoration:'none',flexShrink:0}}>
                    <div className="tech-bracket">
                      <HeroCard hero={h} width={150}/>
                      <div style={{textAlign:'center',marginTop:8}}>
                        <div style={{fontSize:11,fontWeight:800,color:'#fff'}}>{h.name}</div>
                        <div style={{fontSize:8,color:C.textMuted,letterSpacing:2,textTransform:'uppercase',marginTop:2}}>{h.faction}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </HScroll>
            ) : (
              /* desktop/tablet: flex row */
              <div style={{display:'flex',gap:tab?14:20,justifyContent:'center',flexWrap:'wrap',marginBottom:28,padding:`0 ${px}`}}>
                {SOVEREIGN_HEROES.map(h=>(
                  <Link key={h.id} href={`/heroes?faction=${h.faction}`} style={{textDecoration:'none'}}>
                    <div className="tech-bracket" style={{transition:'transform .3s'}}
                      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-10px) scale(1.03)';}}
                      onMouseLeave={e=>{e.currentTarget.style.transform='';}}
                    >
                      <HeroCard hero={h} width={tab?165:190}/>
                      <div style={{textAlign:'center',marginTop:10}}>
                        <div style={{fontSize:12,fontWeight:800,color:'#fff'}}>{h.name}</div>
                        <div style={{fontSize:9,color:C.textMuted,letterSpacing:2,textTransform:'uppercase',marginTop:2}}>{h.faction}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div style={{textAlign:'center',marginTop:mob?20:8,padding:`0 ${px}`}}>
              <Link href="/heroes" style={ObtnStyle} onMouseEnter={ObtnHov} onMouseLeave={ObtnOut}>View All 107 Heroes →</Link>
            </div>
          </div>
        </section>

        {/* ═══ 03 FACTIONS ═══ */}
        <section style={sec(C.bgDeep,{display:'flex',flexDirection:'column',justifyContent:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.7,pointerEvents:'none'}}/>
          {!mob && <Num n="03"/>}
          <div style={{maxWidth:1400,margin:'0 auto',width:'100%',position:'relative',zIndex:1}}>
            <div style={{marginBottom:mob?16:24,padding:`0 ${px}`,display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:10}}>
              <div>
                <Tag>03 — World of Aetheria</Tag>
                <h2 style={{fontSize:`clamp(${mob?'20px':'24px'},3.5vw,46px)`,fontWeight:900,color:C.text,letterSpacing:-2,margin:0}}>The Six Factions</h2>
              </div>
              {!mob && <Link href="/heroes" style={ObtnStyle} onMouseEnter={ObtnHov} onMouseLeave={ObtnOut}>Explore Heroes →</Link>}
            </div>

            {mob ? (
              /* mobile: horizontal scroll strip */
              <HScroll pad={16}>
                {fList.map(f=>{
                  const cnt = HEROES.filter(h=>h.faction===f.name).length;
                  return (
                    <Link key={f.name} href={`/heroes?faction=${f.name}`} style={{textDecoration:'none',flexShrink:0}}>
                      <div style={{width:180,height:240,background:`linear-gradient(170deg,${C.bgCard} 0%,${f.color}15 100%)`,border:`1px solid ${f.color}35`,clipPath:ch(8),padding:'14px 12px',display:'flex',flexDirection:'column',position:'relative',overflow:'hidden'}}>
                        <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${f.color}90,transparent)`}}/>
                        <div style={{width:38,height:38,clipPath:ch(6),background:`${f.color}15`,border:`1px solid ${f.color}35`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:10,overflow:'hidden',flexShrink:0}}>
                          <img src={f.image} alt={f.name} style={{width:26,height:26,objectFit:'contain'}}/>
                        </div>
                        <div style={{fontSize:13,fontWeight:900,color:f.color,marginBottom:1}}>{f.name}</div>
                        <div style={{fontSize:8,color:C.textMuted,letterSpacing:2,fontWeight:600,textTransform:'uppercase',marginBottom:8}}>{f.element}</div>
                        <p style={{fontSize:10,color:C.textSoft,lineHeight:1.5,flex:1,marginBottom:10}}>{f.lore.slice(0,80)}...</p>
                        <div style={{clipPath:ch(4),background:`${f.color}18`,border:`1px solid ${f.color}38`,padding:'3px 8px',fontSize:9,fontWeight:700,color:f.color,width:'fit-content'}}>{cnt} Heroes</div>
                      </div>
                    </Link>
                  );
                })}
              </HScroll>
            ) : (
              /* desktop: 5-column grid */
              <div style={{padding:`0 ${px}`,display:'grid',gridTemplateColumns:tab?'repeat(3,1fr)':'repeat(6,1fr)',gap:10,height:tab?'auto':'clamp(300px,52vh,480px)'}}>
                {fList.map(f=>{
                  const cnt = HEROES.filter(h=>h.faction===f.name).length;
                  return (
                    <Link key={f.name} href={`/heroes?faction=${f.name}`} style={{textDecoration:'none',height:tab?280:'100%'}}>
                      <div className="tech-bracket" style={{height:'100%',background:`linear-gradient(170deg,${C.bgCard} 0%,${f.color}10 100%)`,border:`1px solid ${f.color}28`,clipPath:ch(10),padding:'18px 14px',display:'flex',flexDirection:'column',position:'relative',overflow:'hidden',transition:'all .3s',cursor:'pointer'}}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor=f.color+'70';e.currentTarget.style.background=`linear-gradient(170deg,${C.bgCard} 0%,${f.color}20 100%)`;e.currentTarget.style.boxShadow=`0 12px 48px ${f.color}22`;e.currentTarget.style.transform='translateY(-4px)';}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor=f.color+'28';e.currentTarget.style.background=`linear-gradient(170deg,${C.bgCard} 0%,${f.color}10 100%)`;e.currentTarget.style.boxShadow='';e.currentTarget.style.transform='';}}
                      >
                        <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${f.color}90,transparent)`}}/>
                        <div style={{position:'absolute',bottom:-40,right:-40,width:120,height:120,borderRadius:'50%',background:f.color,opacity:.05,filter:'blur(40px)'}}/>
                        <div style={{width:46,height:46,clipPath:ch(7),background:`${f.color}15`,border:`1px solid ${f.color}35`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:12,overflow:'hidden',flexShrink:0}}>
                          <img src={f.image} alt={f.name} style={{width:32,height:32,objectFit:'contain'}}/>
                        </div>
                        <div style={{fontSize:14,fontWeight:900,color:f.color,marginBottom:2}}>{f.name}</div>
                        <div style={{fontSize:8,color:C.textMuted,letterSpacing:2,fontWeight:600,textTransform:'uppercase',marginBottom:10}}>{f.element}</div>
                        <p style={{fontSize:11,color:C.textSoft,lineHeight:1.6,flex:1,marginBottom:14}}>{f.lore.slice(0,100)}...</p>
                        <div style={{clipPath:ch(5),background:`${f.color}18`,border:`1px solid ${f.color}38`,padding:'4px 10px',fontSize:10,fontWeight:700,color:f.color,width:'fit-content'}}>{cnt} Heroes</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ═══ 04 HEROES CAROUSEL ═══ */}
        <section style={sec(`radial-gradient(ellipse 60% 50% at 30% 50%,rgba(124,58,237,.1),transparent),${C.bgBase}`,{display:'flex',flexDirection:'column',justifyContent:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.5,pointerEvents:'none'}}/>
          {!mob && <Num n="04"/>}
          <div style={{width:'100%',position:'relative',zIndex:1}}>
            <div style={{padding:`0 ${px}`,marginBottom:mob?16:26,display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:12}}>
              <div>
                <Tag>04 — Hero Collection</Tag>
                <h2 style={{fontSize:`clamp(${mob?'20px':'24px'},3.5vw,46px)`,fontWeight:900,color:C.text,letterSpacing:-2,margin:0}}>Legendary Heroes</h2>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                {!mob && <Link href="/heroes" style={{fontSize:12,color:C.textMuted,fontWeight:600}}>All 107 →</Link>}
                <button className="scroll-arrow" onClick={()=>scrollH(-1)}>&#8249;</button>
                <button className="scroll-arrow" onClick={()=>scrollH(1)}>&#8250;</button>
              </div>
            </div>
            <div style={{position:'relative'}}>
              <div style={{position:'absolute',left:0,top:0,bottom:0,width:mob?24:60,background:`linear-gradient(to right,${C.bgBase},transparent)`,zIndex:4,pointerEvents:'none'}}/>
              <div ref={hRef} style={{display:'flex',gap:mob?10:16,padding:`0 ${px}`,overflowX:'auto',paddingBottom:8,scrollbarWidth:'none',msOverflowStyle:'none'}}>
                {sHeroes.map(h=>(
                  <div key={h.id} style={{flexShrink:0,transition:'transform .3s'}}
                    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-10px)';}}
                    onMouseLeave={e=>{e.currentTarget.style.transform='';}}
                  >
                    <HeroCard hero={h} width={mob?150:185}/>
                  </div>
                ))}
              </div>
              <div style={{position:'absolute',right:0,top:0,bottom:0,width:mob?24:60,background:`linear-gradient(to left,${C.bgBase},transparent)`,zIndex:4,pointerEvents:'none'}}/>
            </div>
          </div>
        </section>

        {/* ═══ 05 COMBAT ═══ */}
        <section style={sec(C.bgDeep,{display:'flex',flexDirection:'column',justifyContent:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.65,pointerEvents:'none'}}/>
          {!mob && <Num n="05"/>}
          <div style={{maxWidth:1400,margin:'0 auto',width:'100%',position:'relative',zIndex:1}}>
            <div style={{marginBottom:mob?14:28,padding:`0 ${px}`}}>
              <Tag>05 — Story Mode</Tag>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:10}}>
                <h2 style={{fontSize:`clamp(${mob?'20px':'24px'},3.5vw,46px)`,fontWeight:900,color:C.text,letterSpacing:-2,margin:0}}>Face Your Enemies</h2>
                {!mob && <Link href="/enemies" style={ObtnStyle} onMouseEnter={ObtnHov} onMouseLeave={ObtnOut}>All Chapters →</Link>}
              </div>
              <p style={{fontSize:mob?11:13,color:C.textSoft,marginTop:6}}>30 chapters · 90 stages · Each chapter ends with a boss that defines an era</p>
            </div>

            {mob ? (
              /* mobile: horizontal scroll */
              <HScroll pad={16}>
                {sBosses.map((boss,i)=>{
                  const fc = { color: boss.color, accent: boss.accent };
                  return (
                    <div key={boss.chapter} style={{flexShrink:0,width:160,height:240,background:C.bgCard,border:`1px solid ${fc.color}30`,clipPath:ch(8),overflow:'hidden'}}>
                      <div style={{position:'relative',height:'58%',overflow:'hidden'}}>
                        <img src={boss.image} alt={boss.name} style={{width:'100%',height:'100%',objectFit:'cover'}} onError={e=>{e.currentTarget.style.display='none';}}/>
                        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,.9) 0%,transparent 55%)'}}/>
                        <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${fc.color}90,transparent)`}}/>
                        <div style={{position:'absolute',top:6,left:6,clipPath:ch(4),background:`${fc.color}22`,border:`1px solid ${fc.color}55`,padding:'2px 7px',fontSize:7,fontWeight:800,color:fc.color,letterSpacing:2}}>CH.{boss.chapter}</div>
                      </div>
                      <div style={{padding:'8px 10px'}}>
                        <div style={{fontSize:7,color:C.textMuted,letterSpacing:2,marginBottom:2,fontWeight:700,textTransform:'uppercase'}}>{boss.title}</div>
                        <div style={{fontSize:12,fontWeight:900,color:'#fff',marginBottom:3}}>{boss.name}</div>
                        <p style={{fontSize:9,color:C.textSoft,lineHeight:1.4,margin:0}}>{boss.desc?.slice(0,60)}...</p>
                      </div>
                    </div>
                  );
                })}
              </HScroll>
            ) : (
              /* desktop: 5-column grid */
              <div style={{padding:`0 ${px}`,display:'grid',gridTemplateColumns:tab?'repeat(3,1fr)':'repeat(5,1fr)',gap:10,height:tab?'auto':'clamp(260px,44vh,400px)'}}>
                {sBosses.slice(0,tab?3:5).map((boss,i)=>{
                  const fc = { color: boss.color, accent: boss.accent };
                  return (
                    <div key={boss.chapter} className="tech-bracket" style={{height:tab?280:'100%',background:C.bgCard,border:`1px solid ${fc.color}22`,clipPath:ch(8),overflow:'hidden',transition:'all .3s',cursor:'pointer'}}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor=fc.color+'65';e.currentTarget.style.boxShadow=`0 12px 40px ${fc.color}1E`;e.currentTarget.style.transform='translateY(-4px)';}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor=fc.color+'22';e.currentTarget.style.boxShadow='';e.currentTarget.style.transform='';}}
                    >
                      <div style={{position:'relative',height:'62%',overflow:'hidden'}}>
                        <img src={boss.image} alt={boss.name} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s'}}
                          onError={e=>{e.currentTarget.style.display='none';}}
                          onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.08)';}}
                          onMouseLeave={e=>{e.currentTarget.style.transform='';}}
                        />
                        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,.9) 0%,transparent 50%)'}}/>
                        <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${fc.color}90,transparent)`}}/>
                        <div style={{position:'absolute',top:8,left:8,clipPath:ch(4),background:`${fc.color}20`,border:`1px solid ${fc.color}55`,backdropFilter:'blur(8px)',padding:'3px 8px',fontSize:8,fontWeight:800,color:fc.color,letterSpacing:2}}>CH.{boss.chapter}</div>
                      </div>
                      <div style={{padding:'10px 12px'}}>
                        <div style={{fontSize:8,color:C.textMuted,letterSpacing:2,marginBottom:3,fontWeight:700,textTransform:'uppercase'}}>{boss.title}</div>
                        <div style={{fontSize:13,fontWeight:900,color:'#fff',marginBottom:4}}>{boss.name}</div>
                        <p style={{fontSize:10,color:C.textSoft,lineHeight:1.5,margin:0}}>{boss.desc?.slice(0,70)}...</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ═══ 06 WORLD ═══ */}
        <section style={sec(`radial-gradient(ellipse 80% 70% at 60% 50%,rgba(56,189,248,.06),transparent),${C.bgBase}`,{display:'flex',alignItems:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.45,pointerEvents:'none'}}/>
          {!mob && <div style={{position:'absolute',left:'-2vw',top:'50%',transform:'translateY(-50%)',fontSize:'clamp(100px,18vw,240px)',fontWeight:900,color:'rgba(56,189,248,.026)',letterSpacing:-10,pointerEvents:'none',lineHeight:1,userSelect:'none'}}>06</div>}

          <div style={{maxWidth:1400,margin:'0 auto',width:'100%',padding:`${mob?'72px':tab?'80px':'80px'} ${px} 0`,position:'relative',zIndex:1}}>
            {mob ? (
              /* mobile: stacked */
              <div>
                <Tag>06 — The World</Tag>
                <h2 style={{fontSize:'clamp(22px,6vw,36px)',fontWeight:900,color:C.text,letterSpacing:-2,margin:'0 0 12px'}}>The Realm of Aetheria</h2>
                <p style={{fontSize:13,color:C.textSoft,lineHeight:1.75,marginBottom:16}}>Six factions carved their dominion from raw elemental force across ancient lands.</p>
                <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:20}}>
                  {fList.map(f=>(
                    <div key={f.name} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',clipPath:ch(5),background:`${f.color}08`,border:`1px solid ${f.color}20`}}>
                      <div style={{width:5,height:5,background:f.color,boxShadow:`0 0 8px ${f.color}`,flexShrink:0}}/>
                      <span style={{fontSize:12,fontWeight:800,color:f.color}}>{f.name}</span>
                      <span style={{fontSize:11,color:C.textMuted}}>— {f.element}</span>
                    </div>
                  ))}
                </div>
                <Link href="/world" style={{display:'inline-block',padding:'10px 20px',clipPath:ch(7),background:`linear-gradient(135deg,${C.primary}30,${C.secondary}20)`,border:'1px solid rgba(167,139,250,.25)',color:C.text,fontSize:12,fontWeight:700}}>Explore World Map →</Link>
              </div>
            ) : (
              /* desktop/tablet: 2-column */
              <div style={{display:'grid',gridTemplateColumns:tab?'1fr':'1fr 1.4fr',gap:tab?40:60,alignItems:'center'}}>
                <div>
                  <Tag>06 — The World</Tag>
                  <h2 style={{fontSize:'clamp(24px,3.5vw,48px)',fontWeight:900,color:C.text,letterSpacing:-2,margin:'0 0 16px'}}>The Realm of Aetheria</h2>
                  <p style={{fontSize:14,color:C.textSoft,lineHeight:1.85,marginBottom:24}}>Six factions carved their dominion from raw elemental force — volcanic highlands, frozen tundras, radiant spires, ancient forests, abyss-scarred wastes, and endless desert dunes.</p>
                  <div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:28}}>
                    {fList.map(f=>(
                      <div key={f.name} style={{display:'flex',alignItems:'center',gap:10,padding:'9px 14px',clipPath:ch(6),background:`${f.color}08`,border:`1px solid ${f.color}20`,transition:'all .2s',cursor:'pointer'}}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor=f.color+'50';e.currentTarget.style.background=`${f.color}14`;}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor=f.color+'20';e.currentTarget.style.background=`${f.color}08`;}}
                      >
                        <div style={{width:5,height:5,background:f.color,boxShadow:`0 0 8px ${f.color}`,flexShrink:0}}/>
                        <span style={{fontSize:12,fontWeight:800,color:f.color}}>{f.name}</span>
                        <span style={{fontSize:12,color:C.textMuted}}>— {f.element}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/world" style={{display:'inline-block',padding:'12px 26px',clipPath:ch(8),background:`linear-gradient(135deg,${C.primary}30,${C.secondary}20)`,border:'1px solid rgba(167,139,250,.25)',color:C.text,fontSize:13,fontWeight:700,transition:'all .2s'}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(167,139,250,.6)';e.currentTarget.style.background=`linear-gradient(135deg,${C.primary}50,${C.secondary}38)`;}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(167,139,250,.25)';e.currentTarget.style.background=`linear-gradient(135deg,${C.primary}30,${C.secondary}20)`;}}
                  >Explore World Map →</Link>
                </div>
                {!tab && (
                  <div className="tech-bracket" style={{position:'relative',overflow:'hidden',clipPath:ch(16),border:`1px solid ${C.border}`,boxShadow:'0 24px 80px rgba(0,0,0,.6)',height:'clamp(300px,55vh,480px)'}}>
                    <img src="/assets/worldMap/world-map.png" alt="World Map" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
                    <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(124,58,237,.08),transparent 60%)'}}/>
                    <div style={{position:'absolute',top:0,bottom:0,width:80,background:'linear-gradient(90deg,transparent,rgba(56,189,248,.06),transparent)',animation:'lineSweep 4s ease-in-out infinite',pointerEvents:'none'}}/>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ═══ 07 STORY STATS ═══ */}
        <section style={sec(C.bgDeep,{display:'flex',flexDirection:'column',justifyContent:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.7,pointerEvents:'none'}}/>
          {!mob && <Num n="07"/>}
          <div style={{maxWidth:1400,margin:'0 auto',width:'100%',padding:`0 ${px}`,position:'relative',zIndex:1}}>
            <div style={{textAlign:'center',marginBottom:mob?24:44}}>
              <Tag>07 — Story Mode</Tag>
              <h2 style={{fontSize:`clamp(${mob?'22px':'26px'},4vw,52px)`,fontWeight:900,color:C.text,letterSpacing:-2,margin:'0 0 8px'}}>25 Chapters of Lore</h2>
              {!mob && <p style={{fontSize:13,color:C.textSoft,maxWidth:460,margin:'0 auto'}}>Every stage advances a story spanning dimensional collapse, sovereign battles, and the fate of six civilizations.</p>}
            </div>
            <div style={{display:'grid',gridTemplateColumns:mob?'repeat(2,1fr)':tab?'repeat(2,1fr)':'repeat(4,1fr)',gap:mob?10:14}}>
              {[
                {v:'25',l:'Chapters',       sub:'Epic story arcs',    c:C.primary  },
                {v:'75',l:'Story Stages',   sub:'Unique encounters',  c:C.secondary},
                {v:'5', l:'Sovereign Arcs', sub:'Legendary paths',    c:C.gold     },
                {v:'∞', l:'Endless Tower',  sub:'Infinite challenge', c:C.accent   },
              ].map(s=>(
                <div key={s.l} className="tech-bracket" style={{
                  background:`${s.c}0A`,border:`1px solid ${s.c}22`,
                  clipPath:ch(10),padding:mob?'20px 12px':'clamp(24px,4vh,44px) 20px',
                  textAlign:'center',position:'relative',overflow:'hidden',transition:'all .3s',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=s.c+'50';e.currentTarget.style.boxShadow=`0 8px 40px ${s.c}15`;e.currentTarget.style.transform='translateY(-4px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=s.c+'22';e.currentTarget.style.boxShadow='';e.currentTarget.style.transform='';}}
                >
                  <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${s.c}80,transparent)`}}/>
                  <div style={{fontSize:mob?'clamp(36px,9vw,52px)':'clamp(44px,7vw,72px)',fontWeight:900,color:s.c,lineHeight:1,marginBottom:8,textShadow:`0 0 40px ${s.c}50`}}>{s.v}</div>
                  <div style={{fontSize:mob?11:13,color:C.text,fontWeight:700,marginBottom:3}}>{s.l}</div>
                  <div style={{fontSize:mob?9:11,color:C.textMuted}}>{s.sub}</div>
                </div>
              ))}
            </div>
            {!mob && (
              <div style={{textAlign:'center',marginTop:32}}>
                <Link href="/lore" style={ObtnStyle} onMouseEnter={ObtnHov} onMouseLeave={ObtnOut}>Read the Full Story →</Link>
              </div>
            )}
          </div>
        </section>

        {/* ═══ 08 DOWNLOAD ═══ */}
        <section style={sec(`
          radial-gradient(ellipse 80% 70% at 50% 120%,rgba(56,189,248,.1),transparent),
          radial-gradient(ellipse 60% 60% at 80% 40%,rgba(124,58,237,.12),transparent),
          radial-gradient(ellipse 50% 50% at 20% 60%,rgba(219,39,119,.07),transparent),
          ${C.bgBase}
        `,{display:'flex',flexDirection:'column',justifyContent:'center'})}>
          <div style={{position:'absolute',inset:0,backgroundImage:G,backgroundSize:GS,opacity:.55,pointerEvents:'none'}}/>
          <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,#FF4500 0%,#D4A017 25%,#2ECC71 50%,#00B4D8 75%,#9B59B6 100%)'}}/>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none',overflow:'hidden'}}>
            <div style={{fontSize:'clamp(50px,12vw,180px)',fontWeight:900,color:'rgba(56,189,248,.025)',letterSpacing:-4,whiteSpace:'nowrap',userSelect:'none'}}>AETHERIA</div>
          </div>

          <div style={{maxWidth:580,margin:'0 auto',textAlign:'center',padding:`0 ${px}`,position:'relative',zIndex:1}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:6,marginBottom:16,clipPath:ch(5),background:'rgba(52,211,153,.1)',border:'1px solid rgba(52,211,153,.3)',padding:'4px 12px'}}>
              <div style={{width:5,height:5,background:'#34D399',boxShadow:'0 0 7px #34D399',animation:'pulse 2s infinite'}}/>
              <span style={{fontSize:8,fontWeight:800,color:'#34D399',letterSpacing:3,textTransform:'uppercase'}}>Free to Play</span>
            </div>
            <Tag>08 — Available Now</Tag>
            <h2 style={{fontSize:`clamp(${mob?'26px':'28px'},5vw,58px)`,fontWeight:900,margin:'0 0 10px',letterSpacing:-2,background:`linear-gradient(160deg,#fff 0%,${C.accent} 50%,${C.primaryL} 100%)`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
              Begin Your Legend
            </h2>
            <p style={{fontSize:mob?13:15,color:C.textSoft,lineHeight:1.8,marginBottom:mob?20:28}}>Free to play. Cloud save included. 107 heroes waiting to be collected.</p>

            <div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',marginBottom:mob?20:28}}>
              {['107 Heroes','Cloud Save','No Pay-to-Win','90 Stages'].map(f=>(
                <div key={f} style={{padding:'4px 10px',clipPath:ch(5),background:'rgba(56,189,248,.07)',border:'1px solid rgba(56,189,248,.2)',fontSize:10,fontWeight:600,color:C.textSoft}}>{f}</div>
              ))}
            </div>

            {/* Android launches first — App Store button hidden until that release goes live. */}
            <div style={{display:'flex',gap:mob?10:12,justifyContent:'center',flexWrap:'wrap',marginBottom:mob?28:40}}>
              {[{store:'Google Play',sub:'Get it on',icon:'G',href:'https://play.google.com/store/apps/details?id=aetheria_legends.unbound'}].map(s=>(
                <a key={s.store} href={s.href} style={{display:'flex',alignItems:'center',gap:12,padding:mob?'12px 18px':'14px 24px',clipPath:ch(10),background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.12)',color:'#fff',minWidth:mob?150:175,transition:'all .25s',backdropFilter:'blur(12px)'}}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(56,189,248,.12)';e.currentTarget.style.borderColor='rgba(56,189,248,.45)';e.currentTarget.style.transform='translateY(-3px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.06)';e.currentTarget.style.borderColor='rgba(255,255,255,.12)';e.currentTarget.style.transform='';}}
                >
                  <div style={{width:28,height:28,clipPath:ch(5),background:'rgba(255,255,255,.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <span style={{fontSize:12,fontWeight:900,color:'#fff'}}>{s.icon}</span>
                  </div>
                  <div style={{textAlign:'left'}}>
                    <div style={{fontSize:8,color:'rgba(255,255,255,.4)',letterSpacing:1,textTransform:'uppercase'}}>{s.sub}</div>
                    <div style={{fontSize:mob?14:16,fontWeight:800}}>{s.store}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{display:'flex',justifyContent:'center',gap:mob?16:24,flexWrap:'wrap',paddingTop:mob?16:20,borderTop:`1px solid ${C.border}`}}>
              {[{l:'Privacy',h:'/privacy'},{l:'Terms',h:'/terms'},{l:'Account Deletion',h:'/account-deletion'}].map(x=>(
                <Link key={x.l} href={x.h} style={{fontSize:11,color:C.textMuted,transition:'color .2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.color=C.textSoft;}}
                  onMouseLeave={e=>{e.currentTarget.style.color=C.textMuted;}}
                >{x.l}</Link>
              ))}
              <span style={{fontSize:11,color:C.textMuted}}>© 2025 Ziriverse</span>
            </div>
          </div>
        </section>

      </div>{/* /scroll container */}

      {/* ── FIXED: side dot nav (desktop only) ── */}
      {!mob && (
        <nav style={{position:'fixed',right:tab?16:28,top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',alignItems:'flex-end',gap:10,zIndex:500}}>
          {SMETA.map((s,i)=>{
            const on = i===active;
            return (
              <button key={s.id} onClick={()=>go(i)}
                onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
                style={{display:'flex',alignItems:'center',gap:8,background:'none',border:'none',cursor:'pointer',padding:'2px 0',outline:'none'}}
              >
                {!tab && (
                  <div style={{fontSize:9,fontWeight:700,color:on?C.accent:C.textMuted,letterSpacing:2,textTransform:'uppercase',whiteSpace:'nowrap',opacity:hov===i||on?1:0,transform:hov===i||on?'translateX(0)':'translateX(8px)',transition:'all .25s'}}>{s.label}</div>
                )}
                <div style={{width:on?18:5,height:5,background:on?C.accent:'rgba(255,255,255,.22)',clipPath:on?ch(2):'none',borderRadius:on?0:'50%',transition:'all .3s',boxShadow:on?`0 0 8px ${C.accent}`:'none'}}/>
              </button>
            );
          })}
        </nav>
      )}

      {/* ── FIXED: section counter (desktop only) ── */}
      {!mob && (
        <div style={{position:'fixed',bottom:28,right:tab?20:64,zIndex:500,display:'flex',alignItems:'center',gap:8,pointerEvents:'none'}}>
          <div style={{width:20,height:1,background:`linear-gradient(to right,transparent,${C.accent}50)`}}/>
          <span style={{fontSize:11,fontWeight:800,color:C.accent,letterSpacing:2}}>{String(active+1).padStart(2,'0')}</span>
          <span style={{fontSize:11,color:C.textMuted,letterSpacing:1}}>/ {String(SMETA.length).padStart(2,'0')}</span>
          <div style={{width:20,height:1,background:`linear-gradient(to left,transparent,${C.textMuted}40)`}}/>
        </div>
      )}

      {/* ── FIXED: section name bottom-left (desktop only) ── */}
      {!mob && (
        <div style={{position:'fixed',bottom:28,left:'clamp(20px,5vw,60px)',zIndex:500,display:'flex',alignItems:'center',gap:8,pointerEvents:'none'}}>
          <div style={{width:1,height:14,background:`linear-gradient(to bottom,${C.accent}80,transparent)`}}/>
          <span style={{fontSize:8,fontWeight:700,color:C.textMuted,letterSpacing:4,textTransform:'uppercase'}}>{SMETA[active]?.label}</span>
        </div>
      )}

      {/* ── FIXED: mobile bottom dot indicators ── */}
      {mob && (
        <div style={{position:'fixed',bottom:16,left:'50%',transform:'translateX(-50%)',zIndex:500,display:'flex',alignItems:'center',gap:6}}>
          {SMETA.map((_,i)=>(
            <button key={i} onClick={()=>go(i)} style={{width:i===active?20:6,height:6,background:i===active?C.accent:'rgba(255,255,255,.2)',border:'none',cursor:'pointer',padding:0,borderRadius:i===active?0:3,clipPath:i===active?ch(2):'none',transition:'all .3s',boxShadow:i===active?`0 0 8px ${C.accent}`:'none'}}/>
          ))}
        </div>
      )}
    </>
  );
}
