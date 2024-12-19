export const OurProjectsComponent = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Our Projects</h1>
      <p className="mt-4 text-lg text-[#56585e]">
        Look at successful projects with Google, Amazon, and Netflix.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-2 w-full grid-cols-1">
        <div className="col-span-1 md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1676277755295-8a42828cba91?auto=format&fit=crop&w=400&h=200&q=100"
            alt="Project 1"
            className="rounded-2xl w-full h-80 object-cover"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://images.unsplash.com/photo-1674916972863-03cc08b1d523?auto=format&fit=crop&w=400&h=200&q=100"
            alt="Project 2"
            className="rounded-2xl w-full h-80 object-cover"
          />
        </div>

        <div className="col-span-1">
          <img
            src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?auto=format&fit=crop&w=400&h=200&q=100"
            alt="Project 3"
            className="rounded-2xl w-full h-80 object-cover"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1542289374-180a92008a9a?auto=format&fit=crop&w=400&h=200&q=100"
            alt="Project 4"
            className="rounded-2xl w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
