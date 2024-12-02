'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import styles from "./Carousel.module.css";

const images = [
  "/images/carousel1.png",
  "/images/carousel2.jpg",
  "/images/carousel3.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Re-run interval setup when `currentIndex` changes

  return (
    <div className={styles.carousel}>
      {/* Image Display */}
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className={styles.overlay}>
          <Button
            auto
            light
            className={styles.navButton}
            onClick={goToPrevious}
          >
            ❮
          </Button>
          <Button
            auto
            light
            className={styles.navButton}
            onClick={goToNext}
          >
            ❯
          </Button>
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
