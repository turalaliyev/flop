import React from "react";
import { Card, Avatar, Rate } from "antd";

const { Meta } = Card;

export const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar:
        "https://images.pexels.com/photos/7915359/pexels-photo-7915359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      review:
        "Flop provided excellent service and helped our business grow tremendously. Their expert advice and tailored strategies gave us the confidence to take bold steps and achieve outstanding results.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://images.pexels.com/photos/10983885/pexels-photo-10983885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      review:
        "Flop consulting company helped us improve our business processes. A professional approach and high-quality audit have made our work more effective. We recommend it!",
    },
    {
      id: 3,
      name: "Mark Johnson",
      avatar:
        "https://images.pexels.com/photos/9072375/pexels-photo-9072375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      review:
        "Highly professional and reliable team. From the initial audit to the final recommendations, Flop demonstrated exceptional expertise. Their strategies streamlined our operations and opened new opportunities for success.",
    },
  ];

  return (
    <section className="py-16 px-3 bg-[#170511]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="shadow-md bg-[#170511] rounded-lg"
            hoverable
          >
            <div className="text-center mb-4">
              <Rate value={review.rating} disabled />
            </div>
            <Meta
              avatar={<Avatar src={review.avatar} size={64} />}
              title={
                <h3 className="text-lg text-white font-semibold">
                  {review.name}
                </h3>
              }
              description={
                <p className="text-gray-300 mt-2">{review.review}</p>
              }
            />
          </Card>
        ))}
      </div>
    </section>
  );
};
