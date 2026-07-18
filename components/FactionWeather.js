'use client';
import { useEffect, useMemo, useState } from 'react';

// Maps each faction to its ambient weather effect on the landing hero.
const WEATHER_TYPE = {
  EMBERVEIL: 'embers',
  GLACIARA:  'snow',
  SUNSPIRE:  'rays',
  VERDANIA:  'petals',
  VOIDMARK:  'void',
  KHEMARA:   'sand',
};

const rand = (min, max) => min + Math.random() * (max - min);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const fn = e => setReduced(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return reduced;
}

// Cycles through `factions` on an interval, pausing while reduced-motion is
// requested or the tab is hidden. Drives both the background tint and the
// per-faction particle set from a single shared index.
export function useFactionCycle(factions, intervalMs = 9000) {
  const [idx, setIdx] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || factions.length < 2) return;
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return;
      setIdx(i => (i + 1) % factions.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [factions.length, intervalMs, reduced]);

  return { index: idx, faction: factions[idx] || factions[0], reduced };
}

function EmberWeather() {
  const embers = useMemo(() => Array.from({ length: 16 }, () => ({
    left: rand(2, 97), size: rand(2, 4.5), dur: rand(3.2, 6.5), delay: rand(0, 5), drift: rand(-24, 24),
  })), []);
  return (
    <>
      {embers.map((p, i) => (
        <span key={i} style={{
          position: 'absolute', left: `${p.left}%`, bottom: 0,
          width: p.size, height: p.size, borderRadius: '50%',
          background: 'radial-gradient(circle, #FFE0B0, #FF6B35 60%, transparent 100%)',
          boxShadow: '0 0 6px 1px rgba(255,140,50,.7)',
          animation: `fwEmber ${p.dur}s ease-in ${p.delay}s infinite`,
          '--fw-drift': `${p.drift}px`,
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: '#FF6B35', animation: 'fwFlash 7s ease-in-out infinite' }} />
    </>
  );
}

function SnowWeather() {
  const flakes = useMemo(() => Array.from({ length: 20 }, () => ({
    left: rand(0, 100), size: rand(2, 4), dur: rand(5, 10), delay: rand(0, 6), drift: rand(-30, 30),
  })), []);
  return flakes.map((p, i) => (
    <span key={i} style={{
      position: 'absolute', left: `${p.left}%`, top: -10,
      width: p.size, height: p.size, borderRadius: '50%',
      background: '#EAF7FF', opacity: 0.85,
      boxShadow: '0 0 4px rgba(234,247,255,.8)',
      animation: `fwSnow ${p.dur}s linear ${p.delay}s infinite`,
      '--fw-drift': `${p.drift}px`,
    }} />
  ));
}

function RayWeather() {
  const rays = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
    left: 8 + i * 16 + rand(-4, 4), width: rand(40, 90), dur: rand(4, 7), delay: rand(0, 3),
  })), []);
  const sparkles = useMemo(() => Array.from({ length: 14 }, () => ({
    left: rand(0, 100), top: rand(5, 90), size: rand(1.5, 3), dur: rand(2, 4), delay: rand(0, 4),
  })), []);
  return (
    <>
      {rays.map((r, i) => (
        <div key={i} style={{
          position: 'absolute', top: '-10%', left: `${r.left}%`, width: r.width, height: '120%',
          background: 'linear-gradient(to bottom, rgba(245,200,66,.18), transparent 70%)',
          transform: 'skewX(-8deg)', transformOrigin: 'top',
          animation: `fwRay ${r.dur}s ease-in-out ${r.delay}s infinite`,
        }} />
      ))}
      {sparkles.map((p, i) => (
        <span key={`s${i}`} style={{
          position: 'absolute', left: `${p.left}%`, top: `${p.top}%`,
          width: p.size, height: p.size, borderRadius: '50%', background: '#FFF4D6',
          boxShadow: '0 0 5px rgba(255,244,214,.9)',
          animation: `fwTwinkle ${p.dur}s ease-in-out ${p.delay}s infinite`,
        }} />
      ))}
    </>
  );
}

function PetalWeather() {
  const petals = useMemo(() => Array.from({ length: 14 }, () => ({
    left: rand(0, 100), size: rand(4, 8), dur: rand(6, 11), delay: rand(0, 6), drift: rand(40, 110),
  })), []);
  return petals.map((p, i) => (
    <span key={i} style={{
      position: 'absolute', left: `${p.left}%`, top: -14,
      width: p.size, height: p.size * 0.7, borderRadius: '60% 40% 60% 40%',
      background: 'linear-gradient(135deg, #C8F5D8, #6EE7B7)', opacity: 0.8,
      animation: `fwPetal ${p.dur}s ease-in ${p.delay}s infinite`,
      '--fw-drift': `${p.drift}px`,
    }} />
  ));
}

function VoidWeather() {
  const motes = useMemo(() => Array.from({ length: 18 }, () => ({
    left: rand(0, 100), top: rand(20, 95), size: rand(2, 4), dur: rand(4, 8), delay: rand(0, 5),
    driftx: rand(-30, 30), drifty: rand(-70, -20),
  })), []);
  return (
    <>
      {motes.map((p, i) => (
        <span key={i} style={{
          position: 'absolute', left: `${p.left}%`, top: `${p.top}%`,
          width: p.size, height: p.size, borderRadius: '50%',
          background: 'radial-gradient(circle, #E9D5FF, #9B59B6 65%, transparent 100%)',
          boxShadow: '0 0 6px rgba(155,89,182,.8)',
          animation: `fwVoid ${p.dur}s ease-in-out ${p.delay}s infinite`,
          '--fw-driftx': `${p.driftx}px`, '--fw-drifty': `${p.drifty}px`,
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: '#9B59B6', animation: 'fwFlash 11s ease-in-out infinite' }} />
    </>
  );
}

function SandWeather() {
  const grains = useMemo(() => Array.from({ length: 16 }, () => ({
    top: rand(10, 85), size: rand(1.5, 3.5), dur: rand(5, 9), delay: rand(0, 5),
  })), []);
  const stars = useMemo(() => Array.from({ length: 12 }, () => ({
    left: rand(0, 100), top: rand(4, 55), size: rand(1.5, 3), dur: rand(2.5, 5), delay: rand(0, 4),
  })), []);
  return (
    <>
      {stars.map((p, i) => (
        <span key={`t${i}`} style={{
          position: 'absolute', left: `${p.left}%`, top: `${p.top}%`,
          width: p.size, height: p.size, borderRadius: '50%', background: '#F5C16B',
          boxShadow: '0 0 5px rgba(245,193,107,.8)',
          animation: `fwTwinkle ${p.dur}s ease-in-out ${p.delay}s infinite`,
        }} />
      ))}
      {grains.map((p, i) => (
        <span key={`g${i}`} style={{
          position: 'absolute', left: -20, top: `${p.top}%`,
          width: p.size * 3, height: p.size * 0.5, borderRadius: 2,
          background: '#E0912E', opacity: 0.6,
          animation: `fwSand ${p.dur}s linear ${p.delay}s infinite`,
        }} />
      ))}
    </>
  );
}

const WEATHER_COMPONENTS = {
  embers: EmberWeather,
  snow:   SnowWeather,
  rays:   RayWeather,
  petals: PetalWeather,
  void:   VoidWeather,
  sand:   SandWeather,
};

// Ambient background tint that eases between faction colors — solid colors
// (unlike gradients) interpolate smoothly with a plain CSS transition, so no
// crossfade trickery is needed to shift the whole hero's mood between factions.
function FactionGlow({ faction }) {
  const transition = 'background-color 2.2s ease';
  return (
    <>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.10, mixBlendMode: 'screen',
        backgroundColor: faction.color, transition, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '55%', height: '65%',
        borderRadius: '50%', filter: 'blur(90px)', opacity: 0.30,
        backgroundColor: faction.color, transition, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', right: '-10%', width: '50%', height: '60%',
        borderRadius: '50%', filter: 'blur(100px)', opacity: 0.22,
        backgroundColor: faction.accentColor || faction.color, transition, pointerEvents: 'none',
      }} />
    </>
  );
}

const KEYFRAMES = `
  @keyframes fwEmber { 0%{transform:translate(0,0) scale(.8);opacity:0;} 8%{opacity:1;} 85%{opacity:.5;} 100%{transform:translate(var(--fw-drift,10px),-160px) scale(1.1);opacity:0;} }
  @keyframes fwSnow  { 0%{transform:translate(0,-10px);opacity:0;} 10%{opacity:.9;} 100%{transform:translate(var(--fw-drift,14px),220px);opacity:0;} }
  @keyframes fwPetal { 0%{transform:translate(0,0) rotate(0deg);opacity:0;} 10%{opacity:.85;} 100%{transform:translate(var(--fw-drift,70px),220px) rotate(300deg);opacity:0;} }
  @keyframes fwSand  { 0%{transform:translateX(0);opacity:0;} 15%{opacity:.7;} 100%{transform:translateX(340px);opacity:0;} }
  @keyframes fwVoid  { 0%{transform:translate(0,0) scale(.5);opacity:0;} 30%{opacity:.85;} 100%{transform:translate(var(--fw-driftx,20px),var(--fw-drifty,-60px)) scale(1.2);opacity:0;} }
  @keyframes fwRay   { 0%,100%{opacity:.12;transform:skewX(-8deg) scaleY(.92);} 50%{opacity:.45;transform:skewX(-8deg) scaleY(1.06);} }
  @keyframes fwTwinkle { 0%,100%{opacity:.15;} 50%{opacity:1;} }
  @keyframes fwFlash { 0%,91%,100%{opacity:0;} 92%{opacity:.16;} 93.5%{opacity:0;} 95%{opacity:.09;} 96.5%{opacity:0;} }
  @keyframes fwFadeIn { from{opacity:0;} to{opacity:1;} }
`;

// Ambient faction-themed weather + background tint for the landing hero.
// Cycles automatically via useFactionCycle; renders nothing but decoration —
// pointerEvents are disabled throughout so it never blocks hero interaction.
export default function FactionWeather({ faction, reduced }) {
  const WeatherLayer = WEATHER_COMPONENTS[WEATHER_TYPE[faction.name]];
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      <FactionGlow faction={faction} />
      {!reduced && WeatherLayer && (
        <div key={faction.name} style={{ position: 'absolute', inset: 0, animation: 'fwFadeIn 1.4s ease' }}>
          <WeatherLayer />
        </div>
      )}
    </div>
  );
}
