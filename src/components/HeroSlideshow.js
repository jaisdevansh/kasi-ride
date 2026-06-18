"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";

const heroImages = [
  "/images/hero_varanasi_bg.png",
  "/images/hero_ghats.png",
  "/images/hero_ride.png",
];

export default function HeroSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      {heroImages.map((src, index) => (
        <div 
          key={src} 
          className={styles.heroBg} 
          style={{ 
            opacity: index === currentImageIndex ? 1 : 0, 
            transition: "opacity 1.5s ease-in-out",
            position: "absolute",
            inset: 0,
            zIndex: 0
          }}
        >
          <Image 
            src={src} 
            alt="Varanasi exploration" 
            fill 
            priority={index === 0}
            style={{ objectFit: 'cover' }} 
          />
          <div className={styles.heroOverlay}></div>
        </div>
      ))}
      
      <div className={styles.heroContent} style={{ zIndex: 1, position: "relative" }}>
        <h1>Explore Kashi With Freedom</h1>
        <p>Premium Bike & Scooty Rentals in Varanasi. Discover the spiritual capital at your own pace.</p>
        <div className={styles.heroActions}>
          <Link href="/vehicles" className="btn-primary">Book Now</Link>
          <Link href="#vehicles" className="btn-secondary" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Explore Vehicles</Link>
        </div>
      </div>
    </section>
  );
}
