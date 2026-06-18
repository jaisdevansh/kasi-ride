import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto", minHeight: "60vh" }}>
        <h1 style={{ color: "var(--primary-gold)", marginBottom: "1rem" }}>About Repo Ride Rentals</h1>
        <p style={{ lineHeight: "1.6", color: "var(--text-secondary)" }}>
          Repo Ride Rentals is Varanasi's premier bike and scooty rental service. Our mission is to provide locals, tourists, and pilgrims with the freedom to explore the spiritual capital of India at their own pace.
        </p>
        <p style={{ lineHeight: "1.6", color: "var(--text-secondary)", marginTop: "1rem" }}>
          We pride ourselves on transparent pricing, well-maintained vehicles, and exceptional customer service. Whether you need a simple scooter for navigating the narrow lanes of Kashi or a sturdy bike for a trip to Sarnath, we have you covered.
        </p>
      </main>
      <Footer />
    </>
  );
}
