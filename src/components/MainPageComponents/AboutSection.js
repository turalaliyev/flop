import { Button } from "antd";
import React from "react";

export const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-7">About Us</h2>
          <p className="text-lg">
            At Flop, we are dedicated to providing world-class consulting
            services that drive meaningful outcomes. Our experienced team is
            committed to helping businesses like yours succeed.
          </p>
          <Button
            type="text"
            size="large"
            className="text-lg py-6 border-black px-20 rounded-full hover:scale-110 transition-all !text-black mt-7"
            href="/contacts"
          >
            Contact Us
          </Button>
        </div>

        <div className="lg:w-1/3">
          <img
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Office 1"
            className="w-full h-96 rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="lg:w-1/3">
          <img
            src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Office 2"
            className="w-full h-96 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
