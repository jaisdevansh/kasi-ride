import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us | Repo Ride Rentals",
  description: "Get in touch with Repo Ride Rentals in Varanasi for support, inquiries, and booking assistance.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Contact Us</h1>
          <p>We're here to help you explore Kashi.</p>
        </div>

        <div className={styles.contactLayout}>
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3>Phone & WhatsApp</h3>
              <p>+91 7607514814</p>
              <p>+91 9807733734</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Location</h3>
              <p>C4/354 Sarai Govardhan,</p>
              <p>Chetganj, Varanasi</p>
              <p>Uttar Pradesh 221001</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Social Media</h3>
              <p>Instagram: @reporiderentals</p>
            </div>
          </div>

          <div className={styles.formSection}>
            <form className={styles.contactForm}>
              <h2>Send us a Message</h2>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="Your Phone Number" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help?" required className={styles.textarea}></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
