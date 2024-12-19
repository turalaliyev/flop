import { Button } from "antd";

export const OurProjectsComponent = () => {
  return (
    <div className="py-12 px-6 md:px-20 bg-[#f8f9fa]">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <p className="text-center text-gray-600 mb-8">
        We work with the largest companies and provide audits.
      </p>
      <div className="flex flex-col justify-between items-center w-full gap-6">
        <div className="w-full flex gap-6">
          <div className="w-full">
            <img
              src="https://images.unsplash.com/flagged/photo-1551135049-83f3419ef05c?auto=format&fit=crop&w=400&h=200&q=100"
              alt="Project"
              className="rounded-md w-full h-72 object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1634981297356-f9b4daa98a92?auto=format&fit=crop&w=400&h=200&q=100"
              alt="Project"
              className="rounded-md w-full h-72 object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between w-full gap-4">
          <div>
            <h3 className="text-2xl font-bold">Business Audit</h3>
            <p className="text-gray-600">
              Professional analysis and recommendations for your business.
            </p>
          </div>
          <Button
            type="text"
            size="large"
            className="text-lg border-black py-6 px-20 rounded-full hover:text-black hover:scale-110 active:text-black transition-all !text-black"
            href="#"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full gap-6 my-14 ">
        <div className="w-full flex gap-6">
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1690191967971-8cc8e7e2c295?auto=format&fit=crop&w=400&h=200&q=100"
              alt="Project"
              className="rounded-md w-full h-72 object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea?auto=format&fit=crop&w=400&h=200&q=100"
              alt="Project"
              className="rounded-md w-full h-72 object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between w-full gap-4">
          <div>
            <h3 className="text-2xl font-bold">Consulting</h3>
            <p className="text-gray-600">
              We provide expert advice for your business.
            </p>
          </div>
          <Button
            type="text"
            size="large"
            className="text-lg border-black py-6 px-20 rounded-full hover:text-black hover:scale-110 active:text-black transition-all !text-black"
            href="#"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};
