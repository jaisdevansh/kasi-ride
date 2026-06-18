"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "100px 20px", maxWidth: "400px", margin: "0 auto", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ color: "var(--primary-gold)", marginBottom: "1rem", textAlign: "center" }}>Log In</h1>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "2rem" }}>
          Sign in to manage your bookings.
        </p>
        <button 
          className="btn-primary" 
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          Sign in with Google
        </button>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/admin/login" style={{ color: "var(--primary-gold)", textDecoration: "underline" }}>
            Admin Login Portal
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
