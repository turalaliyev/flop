import React, { useState, useEffect } from "react";
import { OurServicesComponent } from "../components/SevicesPageComponents/OurServicesComponent";
import { ServicesReviewComponent } from "../components/SevicesPageComponents/ServicesReviewComponent";
import { OurProjectsComponent } from "../components/SevicesPageComponents/OurProjectsComponent";
import { useInView } from "../hooks/useInView";

export const ServicesPage = () => {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPageVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const reviewsSection = useInView();
  const projectsSection = useInView();

  return (
    <div>
      <div
        className={`transition-all duration-1000 ${
          pageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <OurServicesComponent />
      </div>
      <div
        ref={reviewsSection.ref}
        className={`transition-all duration-1000 ${
          reviewsSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <ServicesReviewComponent />
      </div>
      <div
        ref={projectsSection.ref}
        className={`transition-all duration-1000 ${
          projectsSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <OurProjectsComponent />
      </div>
    </div>
  );
};
