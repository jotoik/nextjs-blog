import Link from 'next/link';
import styles from './layout.module.css';

export default function Footer() {
    return (
    
    <div className={styles.footer}>
        <Link href="/">Etusivu</Link>
        <Link href="/tietosuojarekisteri">Tietosuojarekisteri</Link>
    </div>
    )
  }