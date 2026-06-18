import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Repo Ride Rentals</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/vehicles" className={styles.navLink}>Vehicles</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/login" className="btn-secondary">Log In</Link>
          <Link href="/vehicles" className="btn-primary">Book Now</Link>
        </div>
      </div>
    </header>
  );
}
