"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/admin");
    }, 1000);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.brand}>
          <Link href="/">Repo Ride Rentals</Link>
        </div>
        <h2>Admin Portal</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label>Admin Email</label>
            <input type="email" required placeholder="admin@reporide.com" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" required placeholder="••••••••" className={styles.input} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
