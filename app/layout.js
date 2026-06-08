import './globals.css';

export const metadata = {
  title:       'Aetheria: Legends Unbound',
  description: 'Collect legendary heroes, master epic card battles, and conquer the Endless Tower. Aetheria is a turn-based RPG card game for mobile.',
  keywords:    'Aetheria, card game, RPG, mobile game, turn-based, heroes',
  openGraph: {
    title:       'Aetheria: Legends Unbound',
    description: 'Epic card battles. Legendary heroes. Endless adventure.',
    url:         'https://ziriverse.com',
    siteName:    'Aetheria Legends',
    type:        'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
