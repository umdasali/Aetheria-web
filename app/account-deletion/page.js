'use client';
import Nav from '../../components/Nav';
import Link from 'next/link';

const C = {
  bgDeep:    '#08031A',
  bgCard:    '#1C0F38',
  primaryL:  '#A78BFA',
  primary:   '#7C3AED',
  secondary: '#DB2777',
  text:      '#F0EAFF',
  textSoft:  '#C4B5FD',
  textMuted: '#8B7EC8',
  border:    'rgba(167,139,250,0.18)',
  danger:    '#EF4444',
  dangerBg:  'rgba(239,68,68,0.1)',
  dangerBorder: 'rgba(239,68,68,0.3)',
  success:   '#34D399',
  successBg: 'rgba(52,211,153,0.1)',
  successBorder: 'rgba(52,211,153,0.3)',
};

function P({ children }) {
  return <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.75, marginBottom: 10 }}>{children}</p>;
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: 17, fontWeight: 800, color: C.primaryL, marginBottom: 14,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <div style={{ width: 3, height: 18, borderRadius: 2, background: C.primaryL, flexShrink: 0 }} />
      {children}
    </h2>
  );
}

const STEPS = [
  { n: '1', title: 'Open Aetheria', body: 'Launch the game and make sure you are signed in to your cloud account.' },
  { n: '2', title: 'Go to Settings', body: 'Tap the Settings icon (⚙) in the main menu, usually found in the top-right corner of the Home screen.' },
  { n: '3', title: 'Cloud → Delete Account', body: 'Scroll to the Cloud section and tap Delete Account. A confirmation dialog will appear — tap Confirm Delete to proceed.' },
];

const DELETED = [
  'Your authentication record (email, password hash)',
  'All cloud-saved game data (heroes, currencies, story progress, tower progress)',
  'Your leaderboard entry and display name',
  'Any account-linked settings or preferences',
];

const NOT_DELETED = [
  'Locally stored data on your device (uninstall the app to remove this)',
  'Anonymous crash-report data already sent to our diagnostics provider (Sentry)',
];

export default function AccountDeletionPage() {
  return (
    <>
      <Nav />
      <main style={{
        minHeight: '100vh',
        background: `radial-gradient(ellipse 70% 40% at 50% 0%, rgba(239,68,68,0.08), transparent),
                     radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,58,237,0.1), transparent),
                     ${C.bgDeep}`,
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 40px) 80px',
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 13, color: C.textMuted }}>
            <Link href="/" style={{ color: C.textMuted, textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
            >Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: C.primaryL }}>Account Deletion</span>
          </div>

          {/* Main card */}
          <div style={{
            background: C.bgCard, border: `1px solid ${C.border}`,
            borderRadius: 18, padding: 'clamp(24px, 5vw, 44px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
          }}>
            {/* Header */}
            <div style={{ marginBottom: 32, paddingBottom: 28, borderBottom: `1px solid ${C.border}` }}>
              <h1 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 900, color: C.text, letterSpacing: 0.5, marginBottom: 6 }}>
                Account Deletion
              </h1>
              <p style={{ color: C.textMuted, fontSize: 13 }}>
                Aetheria: Legends Unbound &nbsp;·&nbsp; Ziriverse &nbsp;·&nbsp; Last updated: 21 June 2026
              </p>
            </div>

            {/* Warning banner */}
            <div style={{
              background: C.dangerBg, border: `1px solid ${C.dangerBorder}`,
              borderRadius: 12, padding: '14px 18px', marginBottom: 32,
              display: 'flex', gap: 12, alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: 18, flexShrink: 0, lineHeight: 1.4 }}>⚠</span>
              <p style={{ fontSize: 14, color: '#FCA5A5', lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: '#FCA5A5' }}>Deletion is permanent and immediate.</strong> Once your account is
                deleted, all cloud data is erased and cannot be recovered. Make sure you want to proceed.
              </p>
            </div>

            {/* Intro */}
            <P>
              If you have a cloud account in Aetheria: Legends Unbound, you can delete it at any time — either from
              within the app or by contacting us. This page explains both methods and tells you exactly what data is
              removed.
            </P>

            {/* Step-by-step */}
            <div style={{ marginTop: 32 }}>
              <SectionTitle>Method 1 — Delete from Within the App</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {STEPS.map((step, i) => (
                  <div key={step.n} style={{ display: 'flex', gap: 20 }}>
                    {/* Spine */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                        background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, fontWeight: 900, color: '#fff',
                        boxShadow: `0 0 16px rgba(124,58,237,0.45)`,
                      }}>{step.n}</div>
                      {i < STEPS.length - 1 && (
                        <div style={{ width: 2, flex: 1, minHeight: 24, background: 'rgba(167,139,250,0.2)', margin: '4px 0' }} />
                      )}
                    </div>
                    {/* Content */}
                    <div style={{ paddingBottom: i < STEPS.length - 1 ? 24 : 0, paddingTop: 8 }}>
                      <div style={{ fontSize: 15, fontWeight: 800, color: C.text, marginBottom: 4 }}>{step.title}</div>
                      <p style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Path highlight */}
              <div style={{
                marginTop: 20, padding: '12px 18px', borderRadius: 10,
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.28)',
                fontSize: 14, fontWeight: 700, color: C.primaryL, letterSpacing: 0.3,
              }}>
                Settings &nbsp;→&nbsp; Cloud &nbsp;→&nbsp; Delete Account &nbsp;→&nbsp; Confirm Delete
              </div>
            </div>

            {/* Email method */}
            <div style={{ marginTop: 36 }}>
              <SectionTitle>Method 2 — Request Deletion by Email</SectionTitle>
              <P>
                If you cannot access the app, you can request account deletion by emailing us. We will delete your
                account within <strong style={{ color: C.text }}>7 business days</strong> of receiving your request.
              </P>
              <div style={{
                background: 'rgba(167,139,250,0.06)', border: `1px solid ${C.border}`,
                borderRadius: 12, padding: '18px 20px',
              }}>
                <div style={{ fontSize: 11, color: C.textMuted, letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>Email</div>
                <a href="mailto:ziriverse@gmail.com" style={{
                  fontSize: 16, fontWeight: 700, color: C.primaryL,
                  textDecoration: 'none', borderBottom: '1px solid rgba(167,139,250,0.3)',
                }}>ziriverse@gmail.com</a>
                <div style={{ fontSize: 12, color: C.textMuted, marginTop: 10, lineHeight: 1.6 }}>
                  Subject line: <span style={{ color: C.textSoft }}>Account Deletion Request</span><br />
                  Include: the email address associated with your account.
                </div>
              </div>
            </div>

            {/* What gets deleted */}
            <div style={{ marginTop: 36 }}>
              <SectionTitle>What Gets Deleted</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
                {DELETED.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      background: C.dangerBg, border: `1px solid ${C.dangerBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, color: C.danger, fontWeight: 900,
                    }}>✕</div>
                    <span style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What is NOT deleted */}
            <div style={{ marginTop: 28 }}>
              <SectionTitle>What Is NOT Deleted</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {NOT_DELETED.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      background: C.successBg, border: `1px solid ${C.successBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, color: C.success, fontWeight: 900,
                    }}>i</div>
                    <span style={{ fontSize: 14, color: C.textSoft, lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div style={{
              marginTop: 32, padding: '16px 20px', borderRadius: 12,
              background: C.successBg, border: `1px solid ${C.successBorder}`,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.success, marginBottom: 4 }}>Deletion Timeline</div>
              <p style={{ fontSize: 14, color: '#6EE7B7', lineHeight: 1.65, margin: 0 }}>
                In-app deletion is <strong style={{ color: '#6EE7B7' }}>immediate and irreversible</strong>. Email-based
                requests are processed within <strong style={{ color: '#6EE7B7' }}>7 business days</strong>. You will
                receive a confirmation email once deletion is complete.
              </p>
            </div>

            {/* Footer */}
            <div style={{
              marginTop: 40, paddingTop: 24, borderTop: `1px solid ${C.border}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
            }}>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <Link href="/privacy" style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
                >Privacy Policy</Link>
                <Link href="/terms" style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
                >Terms of Service</Link>
              </div>
              <Link href="/" style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
                onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
              >← Back to Home</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
