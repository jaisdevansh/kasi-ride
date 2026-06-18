import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// Mock data for the catalog
const vehicles = [
  { id: "honda-activa", name: "Honda Activa 6G", type: "Scooter", price: 400, image: "/images/honda_activa.png", available: true, rating: 4.8 },
  { id: "tvs-jupiter", name: "TVS Jupiter", type: "Scooter", price: 380, image: "/images/tvs_jupiter.png", available: true, rating: 4.6 },
  { id: "suzuki-access", name: "Suzuki Access 125", type: "Scooter", price: 450, image: "/images/suzuki_access.png", available: true, rating: 4.7 },
  { id: "royal-enfield", name: "Royal Enfield Classic", type: "Bike", price: 1200, image: "/images/royal_enfield.png", available: true, rating: 4.9 },
  { id: "bajaj-pulsar", name: "Bajaj Pulsar 150", type: "Bike", price: 700, image: "/images/bajaj_pulsar.png", available: false, rating: 4.5 },
];

export default function VehicleCatalog() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Our Fleet</h1>
          <p>Find the perfect ride for your Kashi exploration</p>
        </div>

        <div className={styles.catalogLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3>Search</h3>
              <input type="text" placeholder="Search vehicles..." className={styles.input} />
            </div>

            <div className={styles.filterSection}>
              <h3>Vehicle Type</h3>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" defaultChecked /> All
              </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" /> Scooters
              </label>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" /> Bikes
              </label>
            </div>

            <div className={styles.filterSection}>
              <h3>Price Range</h3>
              <input type="range" min="300" max="2000" className={styles.range} />
              <div className={styles.rangeLabels}>
                <span>₹300</span>
                <span>₹2000+</span>
              </div>
            </div>
          </aside>

          <section className={styles.grid}>
            {vehicles.map((v) => (
              <div key={v.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={v.image} alt={v.name} fill style={{ objectFit: 'cover' }} />
                  {!v.available && <div className={styles.unavailableBadge}>Currently Rented</div>}
                </div>
                <div className={styles.details}>
                  <div className={styles.meta}>
                    <h3>{v.name}</h3>
                    <span className={styles.rating}>★ {v.rating}</span>
                  </div>
                  <div className={styles.type}>{v.type}</div>
                  <div className={styles.footer}>
                    <div className={styles.price}><strong>₹{v.price}</strong> / day</div>
                    <Link href={`/vehicles/${v.id}`} className={v.available ? "btn-primary" : "btn-secondary"} style={{ pointerEvents: v.available ? 'auto' : 'none', opacity: v.available ? 1 : 0.5 }}>
                      {v.available ? "View Details" : "Unavailable"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
