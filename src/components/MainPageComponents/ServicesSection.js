import React from "react";
import { Card } from "antd";

export const ServicesSection = () => {
  const cardData = [
    {
      title: "Consulting Services",
      description:
        "We help companies reach new heights in business and optimize processes.",
      imgSrc:
        "https://images.unsplash.com/photo-1690191793753-49f801f5cca5?auto=format&fit=crop&w=400&h=200&q=100",
    },
    {
      title: "Audit of Companies",
      description:
        "We provide comprehensive analysis and recommendations to improve the performance of your company.",
      imgSrc:
        "https://images.unsplash.com/photo-1565598469107-2bd14ae7e7e4?auto=format&fit=crop&w=400&h=200&q=100",
    },
    {
      title: "Support for Startups",
      description:
        "Consultations for the development and sustainable growth of your business.",
      imgSrc:
        "https://images.unsplash.com/photo-1554224155-a1487473ffd9?auto=format&fit=crop&w=400&h=200&q=100",
    },
  ];

  return (
    <section className="py-16 px-3 bg-[#070106]">
      <h2 className="text-4xl font-bold text-center mb-7 text-white">
        Our Services
      </h2>
      <div className="flex flex-col justify-center items-center mb-10 text-white">
        <div>Professional audit and consulting for a business</div>
        <div>focused on growth and development.</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="rounded-none rounded-t-3xl border-[#070106] overflow-hidden"
            cover={
              <img
                src={card.imgSrc}
                alt={card.title}
                className="h-56 object-cover"
              />
            }
          >
            <Card.Meta
              title={
                <h3 className="text-2xl font-semibold text-[#070106]">
                  {card.title}
                </h3>
              }
              description={
                <p className="text-lg text-gray-800">{card.description}</p>
              }
            />
          </Card>
        ))}
      </div>
    </section>
  );
};
