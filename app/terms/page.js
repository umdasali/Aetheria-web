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
  gold:      '#D97706',
  goldBg:    'rgba(217,119,6,0.1)',
  goldBorder:'rgba(217,119,6,0.3)',
};

function P({ children }) {
  return <p style={{ fontSize: 15, color: C.textSoft, lineHeight: 1.75, marginBottom: 10 }}>{children}</p>;
}

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 32 }}>
      <h2 style={{
        fontSize: 17, fontWeight: 800, color: C.primaryL, marginBottom: 12,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ width: 3, height: 18, borderRadius: 2, background: C.primaryL, flexShrink: 0 }} />
        {title}
      </h2>
      {children}
    </div>
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

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main style={{
        minHeight: '100vh',
        background: `radial-gradient(ellipse 70% 40% at 50% 0%, rgba(124,58,237,0.14), transparent),
                     radial-gradient(ellipse 50% 50% at 10% 80%, rgba(219,39,119,0.07), transparent),
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
            <span style={{ color: C.primaryL }}>Terms of Service</span>
          </div>

          {/* Card */}
          <div style={{
            background: C.bgCard, border: `1px solid ${C.border}`,
            borderRadius: 18, padding: 'clamp(24px, 5vw, 44px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
          }}>
            {/* Header */}
            <div style={{ marginBottom: 32, paddingBottom: 28, borderBottom: `1px solid ${C.border}` }}>
              <h1 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 900, color: C.text, letterSpacing: 0.5, marginBottom: 6 }}>
                Terms of Service
              </h1>
              <p style={{ color: C.textMuted, fontSize: 13 }}>
                Aetheria: Legends Unbound &nbsp;·&nbsp; Ziriverse &nbsp;·&nbsp; Last updated: 21 June 2026
              </p>
            </div>

            {/* Intro */}
            <P>
              These Terms of Service ("Terms") govern your access to and use of <strong style={{ color: C.text }}>Aetheria:
              Legends Unbound</strong> (the "Game"), developed and operated by Ziriverse ("we", "us", "our"). By
              downloading, installing, or playing the Game you agree to these Terms. If you do not agree, do not use
              the Game.
            </P>

            <Section title="1. Eligibility">
              <P>
                You must be at least 13 years of age (or the minimum age required in your country) to use the Game.
                By using the Game you confirm you meet this requirement. If you are under 18, you must have parental
                or guardian consent.
              </P>
            </Section>

            <Section title="2. The Game — Entertainment Only">
              <P>
                Aetheria: Legends Unbound is a turn-based hero card game provided for entertainment purposes only.
                All characters, storylines, faction names, world-building elements, and lore are fictional. Any
                resemblance to real persons, events, or entities is coincidental.
              </P>
              <P>
                The Game is provided "as is." We do not guarantee uninterrupted availability and may take the Game
                offline for maintenance at any time.
              </P>
            </Section>

            <Section title="3. Your Account">
              <UL items={[
                'Creating a cloud account is optional. You may play offline without one.',
                'You are responsible for keeping your login credentials secure.',
                'You may not share, sell, transfer, or allow others to access your account.',
                'You may delete your account at any time — see our Account Deletion page for instructions.',
                'We may suspend or terminate accounts that violate these Terms.',
              ]} />
            </Section>

            <Section title="4. Virtual Items & Hero Summons">
              <P>
                The Game includes virtual heroes, currencies, and items (collectively "Virtual Items"). Virtual Items
                have no real-world monetary value and cannot be exchanged for real currency or transferred between
                accounts.
              </P>
              <P>
                Hero summoning uses a random draw system with the following base rates:
              </P>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: 10, marginBottom: 16,
              }}>
                {[
                  { rank: 'S Rank', rate: '4%',  color: '#F72585' },
                  { rank: 'A Rank', rate: '22%', color: '#7B2FBE' },
                  { rank: 'B Rank', rate: '30%', color: '#0284C7' },
                  { rank: 'C Rank', rate: '44%', color: '#059669' },
                ].map(r => (
                  <div key={r.rank} style={{
                    background: `${r.color}12`, border: `1px solid ${r.color}35`,
                    borderRadius: 10, padding: '12px 14px', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: r.color }}>{r.rate}</div>
                    <div style={{ fontSize: 11, color: C.textMuted, fontWeight: 600, marginTop: 3 }}>{r.rank}</div>
                  </div>
                ))}
              </div>
              <P>
                Rates shown are base probabilities per single draw and may be subject to pity systems or limited-time
                events. We will communicate any changes to draw rates in the Game or on our website.
              </P>
              <P>
                We reserve the right to modify, adjust, or remove Virtual Items at any time without compensation.
                Virtual Items lost due to account deletion are not recoverable.
              </P>
            </Section>

            <Section title="5. Prohibited Conduct">
              <P>You agree not to:</P>
              <UL items={[
                'Cheat, hack, or use unauthorized software to gain an advantage.',
                'Reverse-engineer, decompile, or modify any part of the Game.',
                'Exploit bugs or glitches — report them to us instead.',
                'Use the leaderboard display name to post offensive, hateful, or illegal content.',
                'Attempt to gain unauthorized access to our servers or other players\' accounts.',
                'Use the Game for any commercial purpose without our written consent.',
              ]} />
            </Section>

            <Section title="6. Intellectual Property">
              <P>
                All content in the Game — including but not limited to the name "Aetheria: Legends Unbound", all
                hero names and artwork (Emberveil, Glaciara, Sunspire, Verdania, Voidmark), story text, music,
                sound effects, and UI design — is owned by Ziriverse and protected by applicable intellectual
                property laws.
              </P>
              <P>
                You may not reproduce, distribute, or create derivative works from any Game content without our
                express written permission.
              </P>
            </Section>

            <Section title="7. Privacy">
              <P>
                Your privacy is important to us. Please review our{' '}
                <Link href="/privacy" style={{ color: C.primaryL, textDecoration: 'none', borderBottom: '1px solid rgba(167,139,250,0.3)' }}>
                  Privacy Policy
                </Link>{' '}
                to understand how we collect, use, and protect your information. Using the Game constitutes your
                agreement to our Privacy Policy.
              </P>
            </Section>

            <Section title="8. Modifications to the Game">
              <P>
                We may update, modify, or discontinue any feature of the Game at any time. This includes adding or
                removing heroes, changing balance values, adjusting summon rates, or shutting down the Game entirely.
                We will make reasonable efforts to communicate significant changes in advance, but are not obligated
                to provide compensation for modifications.
              </P>
            </Section>

            <Section title="9. Disclaimers">
              <div style={{
                background: C.goldBg, border: `1px solid ${C.goldBorder}`,
                borderRadius: 10, padding: '14px 18px', marginBottom: 12,
              }}>
                <p style={{ fontSize: 14, color: '#FCD34D', lineHeight: 1.7, margin: 0 }}>
                  THE GAME IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>
              <P>
                We do not warrant that the Game will be error-free, uninterrupted, or free of viruses or other
                harmful components.
              </P>
            </Section>

            <Section title="10. Limitation of Liability">
              <P>
                To the maximum extent permitted by applicable law, Ziriverse and its developers shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising from your use of
                or inability to use the Game, including loss of virtual items, data, or game progress.
              </P>
              <P>
                Our total liability to you for any claim arising from or related to the Game shall not exceed the
                amount you paid us in the twelve months preceding the claim (which is zero for free accounts).
              </P>
            </Section>

            <Section title="11. Governing Law">
              <P>
                These Terms are governed by the laws of the jurisdiction in which Ziriverse is registered. Any
                disputes shall be resolved in the courts of that jurisdiction, unless local consumer protection laws
                require otherwise.
              </P>
            </Section>

            <Section title="12. Changes to These Terms">
              <P>
                We may update these Terms from time to time. Material changes will be reflected by the "Last updated"
                date at the top of this page. Continued use of the Game after changes take effect constitutes your
                acceptance of the updated Terms.
              </P>
            </Section>

            <Section title="13. Contact">
              <P>
                Questions about these Terms? Contact us at{' '}
                <a href="mailto:ziriverse@gmail.com" style={{ color: C.primaryL, textDecoration: 'none', borderBottom: '1px solid rgba(167,139,250,0.3)' }}>
                  ziriverse@gmail.com
                </a>.
              </P>
            </Section>

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
                <Link href="/account-deletion" style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
                >Account Deletion</Link>
              </div>
              <Link href="/" style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = C.textSoft; }}
                onMouseLeave={e => { e.currentTarget.style.color = C.textMuted; }}
              >← Back to Home</Link>
            </div>
          </div>

          <p style={{ fontSize: 12, color: C.textMuted, textAlign: 'center', marginTop: 24 }}>
            © 2026 Ziriverse · ziriverse.com
          </p>
        </div>
      </main>
    </>
  );
}
