import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <HeroSlideshow />

        {/* Featured Vehicles Section */}
        <section id="vehicles" className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>Featured Vehicles</h2>
            <p>Choose from our fleet of well-maintained premium rides.</p>
          </div>
          <div className={styles.vehicleGrid}>
            <div className={styles.vehicleCard}>
              <Link href="/vehicles/honda-activa" className={styles.vehicleImageWrapper} style={{ display: 'block' }}>
                <Image src="/images/honda_activa.png" alt="Honda Activa" fill style={{ objectFit: 'cover' }} />
              </Link>
              <div className={styles.vehicleDetails}>
                <div className={styles.vehicleMeta}>
                  <h3>Honda Activa 6G</h3>
                  <span className={styles.vehicleType}>Scooter</span>
                </div>
                <div className={styles.vehiclePrice}>
                  <strong>₹400</strong> / day
                </div>
                <Link href="/vehicles/honda-activa" className={styles.bookBtn}>Book This Ride</Link>
              </div>
            </div>

            <div className={styles.vehicleCard}>
              <Link href="/vehicles/royal-enfield" className={styles.vehicleImageWrapper} style={{ display: 'block' }}>
                <Image src="/images/royal_enfield.png" alt="Royal Enfield Classic 350" fill style={{ objectFit: 'cover' }} />
              </Link>
              <div className={styles.vehicleDetails}>
                <div className={styles.vehicleMeta}>
                  <h3>Royal Enfield Classic</h3>
                  <span className={styles.vehicleType}>Bike</span>
                </div>
                <div className={styles.vehiclePrice}>
                  <strong>₹1200</strong> / day
                </div>
                <Link href="/vehicles/royal-enfield" className={styles.bookBtn}>Book This Ride</Link>
              </div>
            </div>
          </div>
          <div className={styles.viewAllWrapper}>
            <Link href="/vehicles" className="btn-secondary">View All Vehicles</Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyUsSection}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose Repo Ride Rentals?</h2>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>Verified Vehicles</h3>
              <p>Every vehicle is serviced and sanitized before your ride.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>₹</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden charges. Affordable rates with clear security policies.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Instant Booking</h3>
              <p>Book online in 3 easy steps. Upload docs, pay, and pick up.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📞</div>
              <h3>Local Support</h3>
              <p>24/7 on-ground assistance anywhere in Varanasi.</p>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className={styles.destinationsSection}>
          <div className={styles.destinationsContainer}>
            <div className={styles.sectionHeader}>
              <h2>Explore Varanasi</h2>
              <p>Top destinations easily accessible with our rides.</p>
            </div>
            <div className={styles.destinationTags}>
              <span>Kashi Vishwanath Temple</span>
              <span>Assi Ghat</span>
              <span>Dashashwamedh Ghat</span>
              <span>Sarnath</span>
              <span>Ramnagar Fort</span>
              <span>BHU Campus</span>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className={styles.testimonialsSection}>
          <div className={styles.sectionHeader}>
            <h2>What Our Riders Say</h2>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>"Renting an Activa from Repo Ride made my Varanasi trip so much easier. Navigating the narrow lanes was a breeze!"</p>
              <h4>- Anjali Sharma</h4>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>"Premium bikes and super transparent pricing. Picked up a Royal Enfield for my Sarnath trip. Highly recommended."</p>
              <h4>- Rahul Verma</h4>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>"The online booking was seamless. Didn't have to haggle with local vendors. Will definitely use them again."</p>
              <h4>- Mark T.</h4>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
