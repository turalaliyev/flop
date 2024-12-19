export const OurServicesComponent = () => {
  return (
    <div className="py-8 px-4 bg-[#d1e7ff] text-center pb-36">
      <div
        className="absolute z-0 h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1681949215173-fe0d15c790c1?auto=format&fit=clip&w=400&h=200&q=100')",
        }}
      ></div>
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p className="mt-4 text-lg text-[#56585e]">
        We offer consulting services for businesses, including auditing and
        strategic planning.
      </p>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center w-full gap-32 md:gap-4">
        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1573167582108-000d05b2faad?auto=format&fit=crop&w=400&h=200&q=100"
            alt="Service"
            className="rounded-md w-full h-64 object-cover"
          />

          <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-lg w-[90%]">
            <h3 className="text-2xl font-semibold text-center text-[#333]">
              Audit of Companies
            </h3>
            <p className="mt-2 text-center text-[#56585e]">
              We conduct a comprehensive audit to improve the efficiency and
              optimize business processes in your company.
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1581090698603-a8a626ffdc14?auto=format&fit=crop&w=400&h=200&q=100"
            alt="Service"
            className="rounded-md w-full h-64 object-cover"
          />

          <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-lg w-[90%]">
            <h3 className="text-2xl font-semibold text-center text-[#333]">
              Business Consulting
            </h3>
            <p className="mt-2 text-center text-[#56585e]">
              Professional consulting services for companies seeking growth and
              development in the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
