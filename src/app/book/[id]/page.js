"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { useParams } from "next/navigation";

export default function BookingRequestForm() {
  const params = useParams();
  const id = params.id;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock vehicle data based on ID
  const vehicleLookup = {
    "honda-activa": { name: "Honda Activa 6G", price: 400 },
    "tvs-jupiter": { name: "TVS Jupiter", price: 380 },
    "suzuki-access": { name: "Suzuki Access 125", price: 450 },
    "royal-enfield": { name: "Royal Enfield Classic", price: 1200 },
    "bajaj-pulsar": { name: "Bajaj Pulsar 150", price: 700 },
  };
  const vehicle = vehicleLookup[id] || vehicleLookup["honda-activa"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to save booking request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.stepContent}>
                <h2>Request Booking</h2>
                <p className={styles.helpText}>Requesting: <strong>{vehicle.name}</strong> (₹{vehicle.price}/day)</p>
                
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" required placeholder="Enter your full name" className={styles.input} />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Phone Number (WhatsApp)</label>
                  <input type="tel" required placeholder="+91 XXXXX XXXXX" className={styles.input} />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Pickup Date & Time</label>
                    <input type="datetime-local" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Drop-off Date & Time</label>
                    <input type="datetime-local" required className={styles.input} />
                  </div>
                </div>

                <div className={styles.actions}>
                  <Link href={`/vehicles/${id}`} className="btn-secondary">Cancel</Link>
                  <button type="submit" disabled={loading} className="btn-primary">
                    {loading ? "Submitting..." : "Send Request"}
                  </button>
                </div>
              </form>
            ) : (
              <div className={styles.successContent}>
                <div className={styles.successIcon}>✓</div>
                <h2>Request Received!</h2>
                <p>We have received your booking request for <strong>{vehicle.name}</strong>.</p>
                <p className={styles.helpText}>Our team will contact you on WhatsApp shortly to confirm availability and process document verification.</p>
                <div className={styles.actions} style={{ justifyContent: 'center' }}>
                  <Link href="/" className="btn-primary">Return Home</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
