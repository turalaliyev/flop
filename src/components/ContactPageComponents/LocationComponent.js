export const LocationComponent = () => {
  return (
    <div className="py-8 px-4 md:px-10 flex flex-col md:flex-row items-start gap-8">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold">Location</h2>
        <p className="mt-4 text-lg text-[#56585e]">
          We are based in Prague and provide consulting services for companies
          such as Google, Amazon, and Netflix.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-lg text-[#56585e] mt-2">
            123 Business Street, Prague, Czech Republic
          </p>
          <h3 className="text-xl font-semibold mt-4">Working Hours</h3>
          <p className="text-lg text-[#56585e] mt-2">
            Monday - Friday: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      <div className="md:w-1/2 w-full">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.724181514194!2d14.437800515740594!3d50.07553807942352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a9db8467b7%3A0x45b557cd08d1b5d3!2sPrague%2C%20Czechia!5e0!3m2!1sen!2sus!4v1686863773212!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};
