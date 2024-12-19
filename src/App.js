import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FooterSection } from "./components/FooterSection";
import { HeaderSection } from "./components/HeaderSection";
import { ServicesPage } from "./pages/ServicesPage";
import { ClientsPage } from "./pages/ClientsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { MainPage } from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <HeaderSection />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
};

export default App;
