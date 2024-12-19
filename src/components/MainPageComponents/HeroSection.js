import React from "react";
import { Button, Card } from "antd";

export const HeroSection = () => {
  const cardData = [
    {
      title: "Audit Consulting",
      description:
        "Comprehensive analysis to ensure your business meets the highest standards.",
    },
    {
      title: "Optimization",
      description:
        "Strategies to enhance efficiency and maximize results for your company.",
    },
    {
      title: "Consulting",
      description:
        "Expert guidance to navigate challenges and seize opportunities.",
    },
  ];

  return (
    <section
      className="text-white text-center py-16"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/12662874/pexels-photo-12662874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center bg-black bg-opacity-70 my-5 py-7">
        <h1 className="text-5xl font-bold mb-4">Consulting for you business</h1>
        <p className="text-lg mb-6">
          Innovative solutions for your business growth
        </p>
        <Button
          type="text"
          size="large"
          className="text-lg border-white py-6 px-20 rounded-full hover:text-white hover:scale-110 active:text-white transition-all !text-white"
          href="/services"
        >
          Our Services
        </Button>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:w-[80%]">
          {cardData.map((card, index) => (
            <Card
              key={index}
              bordered={false}
              className="text-left bg-blue-400 bg-opacity-25 text-white"
            >
              <div className="flex flex-col items-center text-center">
                <h2 className="text-xl mb-4">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
