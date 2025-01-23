import React, { useEffect } from "react";
import './HeroSection.css';
import AOS from "aos";
import "aos/dist/aos.css";

import DinoHero from './DinoHero';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1500, 
    });
  }, []);

  return (
    <div className="section">
      <DinoHero />
    </div>
  );
}
