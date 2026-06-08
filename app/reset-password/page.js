'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const C = {
  bgDeep:    '#08031A',
  bgCard:    '#1C0F38',
  primary:   '#7C3AED',
  primaryL:  '#A78BFA',
  secondary: '#DB2777',
  text:      '#F0EAFF',
  textMuted: '#8B7EC8',
  textDis:   '#453870',
  border:    'rgba(167,139,250,0.18)',
  success:   '#059669',
  danger:    '#DC2626',
};

// ── States the page can be in ─────────────────────────────────────────────────
// 'loading'  — detecting session from URL hash
// 'form'     — ready to accept new password
// 'success'  — password updated
// 'error'    — invalid / expired link

export default function ResetPasswordPage() {
  const [uiState,   setUiState]   = useState('loading');
  const [password,  setPassword]  = useState('');
  const [confirm,   setConfirm]   = useState('');
  const [showPass,  setShowPass]  = useState(false);
  const [busy,      setBusy]      = useState(false);
  const [errorMsg,  setErrorMsg]  = useState('');

  // Supabase puts the recovery token in the URL hash (#access_token=...&type=recovery).
  // The client SDK detects it automatically via detectSessionInUrl:true and fires
  // an onAuthStateChange event with event='PASSWORD_RECOVERY'.
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setUiState('form');
      } else if (event === 'SIGNED_IN' && uiState === 'loading') {
        // Already signed in (e.g. refreshed the page) — show form anyway
        setUiState('form');
      }
    });

    // Fallback: if no event fires within 4s, the link is invalid / expired
    const fallback = setTimeout(() => {
      setUiState(prev => prev === 'loading' ? 'error' : prev);
    }, 4000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(fallback);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) { setErrorMsg('Passwords do not match.'); return; }
    if (password.length < 6)  { setErrorMsg('Password must be at least 6 characters.'); return; }

    setBusy(true); setErrorMsg('');
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setErrorMsg(error.message || 'Failed to update password. Please try again.');
      setBusy(false);
    } else {
      await supabase.auth.signOut();
      setUiState('success');
    }
  };

  return (
    <main style={{
      minHeight: '100vh', background: C.bgDeep,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px 20px', position: 'relative',
    }}>
      {/* Background orb */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 400,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.04))',
        border: `1px solid ${C.border}`, borderRadius: 20,
        padding: '44px 32px 36px', textAlign: 'center',
      }}>
        {/* Top shimmer */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)',
        }} />

        {/* Wordmark */}
        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase',
          background: `linear-gradient(90deg, ${C.primaryL}, ${C.secondary})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', marginBottom: 4 }}>Aetheria</p>
        <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: C.textMuted,
          textTransform: 'uppercase', marginBottom: 28 }}>Legends Unbound</p>

        {uiState === 'loading' && <LoadingState />}
        {uiState === 'error'   && <ErrorState />}
        {uiState === 'success' && <SuccessState />}

        {uiState === 'form' && (
          <form onSubmit={handleSubmit}>
            <div style={{ fontSize: 28, marginBottom: 16 }}>🔑</div>
            <h1 style={{ fontSize: 20, fontWeight: 900, color: C.text, marginBottom: 8 }}>
              Reset Password
            </h1>
            <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6, marginBottom: 24 }}>
              Enter your new password below.
            </p>

            <InputRow
              type={showPass ? 'text' : 'password'}
              placeholder="New password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              toggle={() => setShowPass(p => !p)}
              showPass={showPass}
            />
            <InputRow
              type={showPass ? 'text' : 'password'}
              placeholder="Confirm new password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
            />

            {errorMsg && (
              <p style={{ fontSize: 11, color: C.danger, fontWeight: 700, marginBottom: 12, textAlign: 'left' }}>
                {errorMsg}
              </p>
            )}

            <button type="submit" disabled={busy || !password || !confirm} style={{
              width: '100%', padding: '11px 0', borderRadius: 8, border: 'none',
              background: busy || !password || !confirm
                ? C.bgCard
                : `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
              color: '#fff', fontSize: 12, fontWeight: 900, letterSpacing: 1.5,
              textTransform: 'uppercase', cursor: busy ? 'wait' : 'pointer',
              opacity: (!password || !confirm) ? 0.45 : 1,
              transition: 'opacity 0.2s',
            }}>
              {busy ? 'Updating…' : 'Update Password'}
            </button>
          </form>
        )}

        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: C.textMuted, marginTop: 24 }}>
          ziriverse.com · Aetheria Legends
        </p>
      </div>
    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function InputRow({ type, placeholder, value, onChange, toggle, showPass }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      background: '#1C0F38', border: '1px solid rgba(167,139,250,0.18)',
      borderRadius: 8, padding: '0 12px', height: 42, marginBottom: 10,
    }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        autoComplete="new-password"
        style={{
          flex: 1, background: 'none', border: 'none', outline: 'none',
          fontSize: 13, fontWeight: 600, color: '#F0EAFF',
        }}
      />
      {toggle && (
        <button type="button" onClick={toggle} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 13, color: '#8B7EC8', padding: '0 0 0 8px',
        }}>
          {showPass ? '🙈' : '👁'}
        </button>
      )}
    </div>
  );
}

function LoadingState() {
  return (
    <div style={{ padding: '24px 0', color: '#8B7EC8' }}>
      <div style={{ fontSize: 28, marginBottom: 12 }}>✦</div>
      <p style={{ fontSize: 13, fontWeight: 600 }}>Validating reset link…</p>
    </div>
  );
}

function ErrorState() {
  return (
    <div style={{ padding: '8px 0' }}>
      <div style={{ fontSize: 30, marginBottom: 14 }}>⚠️</div>
      <h2 style={{ fontSize: 18, fontWeight: 900, color: '#F0EAFF', marginBottom: 10 }}>Link Expired</h2>
      <p style={{ fontSize: 13, color: '#8B7EC8', lineHeight: 1.7, marginBottom: 20 }}>
        This reset link is invalid or has expired.<br />
        Request a new one from the app.
      </p>
      <div style={{
        background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.22)',
        borderRadius: 10, padding: '14px 16px', textAlign: 'left',
      }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#F0EAFF', marginBottom: 6 }}>
          To request a new link:
        </p>
        <p style={{ fontSize: 11, color: '#8B7EC8', lineHeight: 1.6 }}>
          Open Aetheria → Settings → Connect Account → Sign In → Forgot Password
        </p>
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <div style={{ padding: '8px 0' }}>
      <div style={{ fontSize: 30, marginBottom: 14 }}>✅</div>
      <h2 style={{ fontSize: 20, fontWeight: 900, color: '#F0EAFF', marginBottom: 10 }}>Password Updated!</h2>
      <p style={{ fontSize: 13, color: '#8B7EC8', lineHeight: 1.7, marginBottom: 20 }}>
        Your password has been changed successfully.
      </p>
      <div style={{
        background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.25)',
        borderRadius: 10, padding: '14px 16px', textAlign: 'left',
      }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#F0EAFF', marginBottom: 4 }}>Next steps:</p>
        <p style={{ fontSize: 11, color: '#8B7EC8', lineHeight: 1.6 }}>
          Open the Aetheria app and sign in with your new password.
        </p>
      </div>
    </div>
  );
}
