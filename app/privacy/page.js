'use client';
import Nav from '../../components/Nav';
import Link from 'next/link';

const C = {
  bgDeep:    '#08031A',
  bgCard:    '#1C0F38',
  primaryL:  '#A78BFA',
  text:      '#F0EAFF',
  textSoft:  '#C4B5FD',
  textMuted: '#8B7EC8',
  border:    'rgba(167,139,250,0.18)',
};

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 32 }}>
      <h2 style={{
        fontSize: 17, fontWeight: 800, color: C.primaryL,
        marginBottom: 12, letterSpacing: 0.3,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ width: 3, height: 18, borderRadius: 2, background: C.primaryL, flexShrink: 0 }} />
        {title}
      </h2>
      {children}
    </div>
  );
}

function P({ children, muted = false }) {
  return (
    <p style={{
      fontSize: muted ? 13 : 15,
      color: muted ? C.textMuted : C.textSoft,
      lineHeight: 1.75, marginBottom: 10,
    }}>
      {children}
    </p>
  );
}

function UL({ items }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, color: C.textSoft, lineHeight: 1.7 }}>
          <span style={{ color: C.primaryL, flexShrink: 0, marginTop: 2 }}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <main style={{
        minHeight: '100vh',
        background: `radial-gradient(ellipse 70% 40% at 50% 0%, rgba(124,58,237,0.15), transparent), ${C.bgDeep}`,
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 40px) 80px',
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 13, color: C.textMuted }}>
            <Link href="/" style={{ color: C.textMuted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
              onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
            >Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: C.primaryL }}>Privacy Policy</span>
          </div>

          {/* Card */}
          <div style={{
            background: C.bgCard,
            border: `1px solid ${C.border}`,
            borderRadius: 18, padding: 'clamp(24px, 5vw, 44px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
          }}>
            {/* Header */}
            <div style={{ marginBottom: 32, paddingBottom: 28, borderBottom: `1px solid ${C.border}` }}>
              <h1 style={{
                fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 900,
                color: C.text, letterSpacing: 0.5, marginBottom: 6,
              }}>
                Privacy Policy
              </h1>
              <p style={{ color: C.textMuted, fontSize: 13 }}>
                Aetheria: Legends Unbound &nbsp;·&nbsp; Ziriverse &nbsp;·&nbsp; Last updated: 13 June 2026
              </p>
            </div>

            <P>
              This Privacy Policy explains how Ziriverse ("we", "us") handles information in the mobile game{' '}
              <strong style={{ color: C.text }}>Aetheria: Legends Unbound</strong> (the "Game"). By installing or using
              the Game, you agree to this policy.
            </P>

            <Section title="1. Information We Collect">
              <UL items={[
                <><strong style={{ color: C.text }}>Account information (optional).</strong> If you create a cloud account, we collect the email address and password you provide. Passwords are stored and verified by Supabase (our authentication provider) and are never visible to us in plain text.</>,
                <><strong style={{ color: C.text }}>Display name.</strong> The username you choose for leaderboard display is stored with your account. Choose a name you are comfortable making public.</>,
                <><strong style={{ color: C.text }}>Game progress data.</strong> When cloud save is enabled, we store your heroes collected, currencies, story chapter and stage progress, Endless Tower floor, team loadouts, settings, and leaderboard score.</>,
                <><strong style={{ color: C.text }}>Gameplay events.</strong> Hero summon results and battle outcomes are recorded as part of your cloud save to reconstruct your game state across devices.</>,
                <><strong style={{ color: C.text }}>Diagnostic &amp; device data.</strong> If a crash occurs, we may collect anonymous technical information — device model, operating system version, device identifier, and error details — through our crash-reporting provider (Sentry) to diagnose and fix problems.</>,
              ]} />
              <P>
                You can play the entire Game offline without creating an account. We do{' '}
                <strong style={{ color: C.text }}>not</strong> collect your contacts, location, camera, photos,
                microphone, or advertising identifiers, and the Game contains no third-party ads.
              </P>
            </Section>

            <Section title="2. How We Use Information">
              <UL items={[
                'To authenticate you and sync your game progress across devices.',
                'To display public leaderboard rankings (your chosen display name and score only).',
                'To diagnose crashes and improve stability and gameplay.',
              ]} />
              <P>We do not sell your personal information or use it for third-party advertising.</P>
            </Section>

            <Section title="3. Third-Party Services">
              <UL items={[
                <><strong style={{ color: C.text }}>Supabase</strong> — authentication and cloud storage of game saves and leaderboard entries.</>,
                <><strong style={{ color: C.text }}>Sentry</strong> — anonymous crash and error reporting.</>,
              ]} />
              <P>These providers process data on our behalf under their own security and privacy commitments.</P>
            </Section>

            <Section title="4. Data Retention & Deletion">
              <P>
                Cloud data is kept while your account exists. You can permanently delete your account and all
                associated cloud data at any time from within the Game:{' '}
                <strong style={{ color: C.text }}>Settings → Cloud → Delete Account</strong>. This removes your
                authentication record, cloud save, leaderboard entry, and display name. Deletion is immediate and
                cannot be undone.
              </P>
              <P>
                For full deletion instructions — including an email-based alternative — see our{' '}
                <Link href="/account-deletion" style={{ color: C.primaryL, textDecoration: 'none', borderBottom: '1px solid rgba(167,139,250,0.3)' }}>
                  Account Deletion page
                </Link>.
              </P>
            </Section>

            <Section title="5. Children's Privacy">
              <P>
                The Game is not directed to children under the age of 13 (or the minimum age required in your
                country), and we do not knowingly collect personal information from them. If you believe a child has
                provided us information, contact us and we will delete it.
              </P>
            </Section>

            <Section title="6. Security">
              <P>
                We use industry-standard measures, including encrypted transport (HTTPS) and access controls, to
                protect your information. No method of transmission or storage is completely secure, but we work to
                safeguard your data.
              </P>
            </Section>

            <Section title="7. Changes to This Policy">
              <P>
                We may update this policy from time to time. Material changes will be reflected by the "Last updated"
                date above.
              </P>
            </Section>

            <Section title="8. Contact">
              <P>
                Questions about this policy or your data? Contact us at{' '}
                <a href="mailto:ziriverse@gmail.com" style={{ color: C.primaryL, textDecoration: 'none', borderBottom: `1px solid rgba(167,139,250,0.3)` }}>
                  ziriverse@gmail.com
                </a>.
              </P>
            </Section>

            {/* Footer note */}
            <div style={{
              marginTop: 40, paddingTop: 24, borderTop: `1px solid ${C.border}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
            }}>
              <p style={{ fontSize: 13, color: C.textMuted }}>© 2026 Ziriverse · ziriverse.com</p>
              <Link href="/" style={{
                fontSize: 13, color: C.textMuted, textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
                onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
