import { useState, useEffect } from "react";
import { AboutSection } from "../components/MainPageComponents/AboutSection";
import { HeroSection } from "../components/MainPageComponents/HeroSection";
import { ProjectSection } from "../components/MainPageComponents/ProjectSection";
import { ReviewSection } from "../components/MainPageComponents/ReviewSection";
import { ServicesSection } from "../components/MainPageComponents/ServicesSection";
import { useInView } from "../hooks/useInView";

export const MainPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const aboutSection = useInView();
  const servicesSection = useInView();
  const reviewSection = useInView();
  const projectSection = useInView();

  return (
    <div>
      <div
        className={`transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <HeroSection />
      </div>
      <div
        ref={aboutSection.ref}
        className={`transition-all duration-1000 ${
          aboutSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <AboutSection />
      </div>
      <div
        ref={servicesSection.ref}
        className={`transition-all duration-1000 ${
          servicesSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <ServicesSection />
      </div>
      <div
        ref={reviewSection.ref}
        className={`transition-all duration-1000 ${
          reviewSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <ReviewSection />
      </div>
      <div
        ref={projectSection.ref}
        className={`transition-all duration-1000 ${
          projectSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <ProjectSection />
      </div>
    </div>
  );
};
