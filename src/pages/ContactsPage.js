import React, { useState, useEffect } from "react";
import { ContactsComponents } from "../components/ContactPageComponents/ContactsComponent";
import { LocationComponent } from "../components/ContactPageComponents/LocationComponent";
import { useInView } from "../hooks/useInView";

export const ContactsPage = () => {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPageVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const contactsSection = useInView();
  const locationSection = useInView();

  return (
    <div>
      <div
        ref={contactsSection.ref}
        className={`transition-all duration-1000 ${
          pageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ContactsComponents />
      </div>
      <div
        ref={locationSection.ref}
        className={`transition-all duration-1000 ${
          locationSection.hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <LocationComponent />
      </div>
    </div>
  );
};
