import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// Mock data fetcher
function getVehicle(id) {
  const vehicles = {
    "honda-activa": { name: "Honda Activa 6G", type: "Scooter", price: 400, image: "/images/honda_activa.png", fuel: "Petrol", mileage: "45 kmpl", engine: "110cc", deposit: 1000 },
    "tvs-jupiter": { name: "TVS Jupiter", type: "Scooter", price: 380, image: "/images/tvs_jupiter.png", fuel: "Petrol", mileage: "50 kmpl", engine: "110cc", deposit: 1000 },
    "suzuki-access": { name: "Suzuki Access 125", type: "Scooter", price: 450, image: "/images/suzuki_access.png", fuel: "Petrol", mileage: "45 kmpl", engine: "125cc", deposit: 1200 },
    "royal-enfield": { name: "Royal Enfield Classic", type: "Bike", price: 1200, image: "/images/royal_enfield.png", fuel: "Petrol", mileage: "35 kmpl", engine: "350cc", deposit: 3000 },
    "bajaj-pulsar": { name: "Bajaj Pulsar 150", type: "Bike", price: 700, image: "/images/bajaj_pulsar.png", fuel: "Petrol", mileage: "45 kmpl", engine: "150cc", deposit: 2000 },
  };
  return vehicles[id] || vehicles["honda-activa"];
}

export default async function VehicleDetail({ params }) {
  const id = (await params).id;
  const vehicle = getVehicle(id);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <Link href="/vehicles">Vehicles</Link> / <span>{vehicle.name}</span>
        </div>

        <div className={styles.layout}>
          {/* Gallery / Image */}
          <div className={styles.gallerySection}>
            <div className={styles.mainImage}>
              <Image src={vehicle.image} alt={vehicle.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.thumbnailRow}>
              <div className={styles.thumbnail}><Image src={vehicle.image} alt="Thumb 1" fill style={{ objectFit: 'cover' }} /></div>
              <div className={styles.thumbnail}><Image src={vehicle.image} alt="Thumb 2" fill style={{ objectFit: 'cover' }} /></div>
              <div className={styles.thumbnail}><Image src={vehicle.image} alt="Thumb 3" fill style={{ objectFit: 'cover' }} /></div>
            </div>
          </div>

          {/* Details & Booking */}
          <div className={styles.infoSection}>
            <div className={styles.titleArea}>
              <h1>{vehicle.name}</h1>
              <span className={styles.badge}>{vehicle.type}</span>
            </div>

            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Fuel Type</span>
                <span className={styles.specValue}>{vehicle.fuel}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Mileage</span>
                <span className={styles.specValue}>{vehicle.mileage}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Engine</span>
                <span className={styles.specValue}>{vehicle.engine}</span>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.priceRow}>
                <span>Rental Rate</span>
                <strong>₹{vehicle.price} / day</strong>
              </div>
              <div className={styles.priceRow}>
                <span>Security Deposit (Refundable)</span>
                <strong>₹{vehicle.deposit}</strong>
              </div>
              <Link href={`/book/${id}`} className={`btn-primary ${styles.bookBtn}`}>Book This Vehicle</Link>
            </div>

            <div className={styles.termsSection}>
              <h3>Rental Terms</h3>
              <ul>
                <li>Valid Driving License and Aadhar Card required.</li>
                <li>Vehicle is provided with 1 liter of fuel. Please return with the same.</li>
                <li>Helmets are complimentary.</li>
                <li>Cancellation is free up to 24 hours before pickup.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
