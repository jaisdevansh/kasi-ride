import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto", minHeight: "60vh" }}>
        <h1 style={{ color: "var(--primary-gold)", marginBottom: "1rem" }}>Terms & Conditions</h1>
        <ul style={{ lineHeight: "1.8", color: "var(--text-secondary)", marginLeft: "20px" }}>
          <li><strong>Driving License:</strong> A valid driving license is strictly required for all rentals.</li>
          <li><strong>Security Deposit:</strong> A refundable security deposit must be paid before taking possession of the vehicle.</li>
          <li><strong>Fuel Policy:</strong> Vehicles are provided with limited fuel. You must return the vehicle with a similar amount of fuel.</li>
          <li><strong>Damages:</strong> The renter is responsible for any damages incurred during the rental period.</li>
          <li><strong>Traffic Violations:</strong> The renter is strictly responsible for any challans or traffic fines during their rental period.</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
