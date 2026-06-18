"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Repo Ride Rentals</Link>
        </div>
        
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? styles.open : ""}></span>
          <span className={isMenuOpen ? styles.open : ""}></span>
          <span className={isMenuOpen ? styles.open : ""}></span>
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <nav className={styles.nav}>
            <Link href="/vehicles" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Vehicles</Link>
            <Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
          <div className={styles.actions}>
            <Link href="/login" className="btn-secondary" onClick={() => setIsMenuOpen(false)}>Log In</Link>
            <Link href="/vehicles" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
