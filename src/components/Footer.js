import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Repo Ride Rentals</h3>
          <p>Premium Bike & Scooty Rentals in Varanasi. Explore Kashi with freedom.</p>
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/vehicles">Browse Vehicles</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Phone: 7607514814, 9807733734</p>
          <p>Location: C4/354 Sarai Govardhan, Chetganj, Varanasi</p>
          <p>Instagram: @reporiderentals</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Repo Ride Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
}
