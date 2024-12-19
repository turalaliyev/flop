import React, { useState } from "react";
import { Input, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export const FooterSection = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    // Placeholder logic for handling submit
    alert(`Request sent from: ${email}`);
  };

  return (
    <footer className="bg-[#0a0a0a] text-white py-8 px-8">
      <div className=" mx-auto flex flex-col gap-8 md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h3 className="text-3xl font-bold mb-2">Flop Consulting</h3>
          <p className="text-sm text-gray-400 mb-8">
            Empowering businesses with world-class consulting services tailored
            to drive growth and success.
          </p>
          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FacebookOutlined style={{ fontSize: "25px" }} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <InstagramOutlined style={{ fontSize: "25px" }} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <YoutubeOutlined style={{ fontSize: "25px" }} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <XOutlined style={{ fontSize: "25px" }} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="text-gray-300 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Partners</h3>
            <p>+420123456789</p>
            <p>info@flopconsulting.com</p>
          </div>

          <div className="text-gray-300">
            <h3 className="text-lg font-semibold mb-2">Contacts</h3>
            <p>Enter your email address</p>
            <div className="flex flex-col">
              <Input
                placeholder="Enter your email"
                size="large"
                value={email}
                onChange={handleEmailChange}
                className=" border-none"
              />
              <Button
                type="text"
                size="large"
                onClick={handleSubmit}
                className="text-lg py-6 border-white px-16 md:px-20 rounded-full hover:scale-110 transition-all !text-white mt-7 mb-3"
                href="#services"
              >
                Send the request
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        &copy; 2024 Flop Consulting. All rights reserved.
      </p>
    </footer>
  );
};
