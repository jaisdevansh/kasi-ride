import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Link from "next/link";

export default function CustomerDashboard() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Welcome, User!</h1>
          <p>Manage your rides and account here.</p>
        </div>

        <div className={styles.dashboardLayout}>
          <aside className={styles.sidebar}>
            <nav className={styles.nav}>
              <Link href="/dashboard" className={`${styles.navItem} ${styles.active}`}>My Bookings</Link>
              <Link href="#" className={styles.navItem}>Profile Settings</Link>
              <Link href="#" className={styles.navItem}>My Documents</Link>
              <Link href="#" className={styles.navItem}>Payment Methods</Link>
            </nav>
          </aside>

          <section className={styles.content}>
            <h2 className={styles.sectionTitle}>Active Rentals</h2>
            <div className={styles.card}>
              <div className={styles.bookingHeader}>
                <span className={styles.badgeActive}>Active</span>
                <span className={styles.bookingId}>REPO-482910</span>
              </div>
              <div className={styles.bookingDetails}>
                <div>
                  <strong>Vehicle:</strong> Honda Activa 6G
                </div>
                <div>
                  <strong>Duration:</strong> Oct 12, 10:00 AM - Oct 14, 10:00 AM
                </div>
                <div>
                  <strong>Total Paid:</strong> ₹1800
                </div>
              </div>
            </div>

            <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Past Bookings</h2>
            <div className={styles.card}>
              <div className={styles.bookingHeader}>
                <span className={styles.badgeCompleted}>Completed</span>
                <span className={styles.bookingId}>REPO-192834</span>
              </div>
              <div className={styles.bookingDetails}>
                <div>
                  <strong>Vehicle:</strong> Royal Enfield Classic
                </div>
                <div>
                  <strong>Duration:</strong> Sep 5, 09:00 AM - Sep 6, 09:00 AM
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
