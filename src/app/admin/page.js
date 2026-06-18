import Header from "@/components/Header";
import styles from "./page.module.css";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Admin Dashboard</h1>
          <p>Manage fleet and booking requests.</p>
        </div>

        <div className={styles.dashboardLayout}>
          <aside className={styles.sidebar}>
            <nav className={styles.nav}>
              <Link href="/admin" className={`${styles.navItem} ${styles.active}`}>Booking Requests</Link>
              <Link href="/admin/vehicles" className={styles.navItem}>Manage Vehicles</Link>
            </nav>
          </aside>

          <section className={styles.content}>
            <div className={styles.sectionHeaderFlex}>
              <h2 className={styles.sectionTitle}>Recent Booking Requests</h2>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Refresh</button>
            </div>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Customer Info</th>
                  <th>Vehicle</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>REQ-9012</td>
                  <td>
                    <strong>Anjali Sharma</strong><br/>
                    <span style={{color: '#a3a3a3', fontSize: '0.875rem'}}>+91 98765 43210</span>
                  </td>
                  <td>Honda Activa 6G</td>
                  <td><span className={styles.badgePending}>Pending Review</span></td>
                  <td>
                    <div className={styles.actionGroup}>
                      <button className={styles.actionBtnApprove}>Approve</button>
                      <button className={styles.actionBtnReject}>Reject</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>REQ-9011</td>
                  <td>
                    <strong>Rahul Verma</strong><br/>
                    <span style={{color: '#a3a3a3', fontSize: '0.875rem'}}>+91 91234 56789</span>
                  </td>
                  <td>Royal Enfield Classic</td>
                  <td><span className={styles.badgeApproved}>Approved</span></td>
                  <td>
                    <button className={styles.actionBtn}>View Details</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className={styles.sectionHeaderFlex} style={{ marginTop: '4rem' }}>
              <h2 className={styles.sectionTitle}>Fleet Status (Vehicles)</h2>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>+ Add Vehicle</button>
            </div>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Vehicle ID</th>
                  <th>Model Name</th>
                  <th>Price/Day</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>V-001</td>
                  <td>Honda Activa 6G</td>
                  <td>₹400</td>
                  <td><span className={styles.badgeAvailable}>Available</span></td>
                  <td>
                    <button className={styles.actionBtn}>Edit</button>
                    <button className={styles.actionBtnReject} style={{marginLeft: '0.5rem'}}>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>V-002</td>
                  <td>Royal Enfield Classic</td>
                  <td>₹1200</td>
                  <td><span className={styles.badgeRented}>Rented Out</span></td>
                  <td>
                    <button className={styles.actionBtn}>Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </section>
        </div>
      </main>
    </>
  );
}
