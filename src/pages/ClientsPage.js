import React, { useState, useEffect } from "react";
import { OurProjectsComponent } from "../components/ClientsPageComponents/OurProjectsComponent";
import { ClientsReviewComponent } from "../components/ClientsPageComponents/ClientsReviewComponent";
import { useInView } from "../hooks/useInView";

export const ClientsPage = () => {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPageVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const projectsSection = useInView();
  const reviewsSection = useInView();

  return (
    <div className="py-8 px-4 text-center">
      <div
        ref={projectsSection.ref}
        className={`transition-all duration-1000 ${
          pageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <OurProjectsComponent />
      </div>
      <div
        ref={reviewsSection.ref}
        className={`transition-all duration-1000 ${
          reviewsSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <ClientsReviewComponent />
      </div>
    </div>
  );
};
