import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NARAS',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={(inter.className, styles.body)}>
        <header className={styles.header}>NARAS</header>
        <main className={styles.main}> {children}</main>
        <footer className={styles.footer}>Cho Byeong Min</footer>
      </body>
    </html>
  );
}
