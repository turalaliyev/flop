import React, { useState } from "react";
import { Menu, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const HeaderSection = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuVisible(!isMobileMenuVisible); // Toggle menu visibility
  };

  return (
    <header className="bg-white shadow-md py-4 px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">
          <Link to="/">FLOP</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Main
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/clients" className="text-gray-700 hover:text-blue-600">
                Clients
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            icon={<MenuOutlined />}
            type="text"
            onClick={handleMenuClick} // Toggle mobile menu
          />
          {isMobileMenuVisible && (
            <div className="absolute top-0 right-0 mt-16">
              <Menu
                mode="vertical"
                className="bg-white shadow-md border-none"
                onClick={() => setMobileMenuVisible(false)} // Close menu after item is clicked
              >
                <Menu.Item key="main">
                  <Link to="/">Main</Link>
                </Menu.Item>
                <Menu.Item key="services">
                  <Link to="/services">Services</Link>
                </Menu.Item>
                <Menu.Item key="clients">
                  <Link to="/clients">Clients</Link>
                </Menu.Item>
                <Menu.Item key="contact">
                  <Link to="/contacts">Contact</Link>
                </Menu.Item>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
