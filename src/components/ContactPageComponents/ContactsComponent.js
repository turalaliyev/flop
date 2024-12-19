import { Button } from "antd";

export const ContactsComponents = () => {
  return (
    <div>
      <div className="py-8 px-4 md:px-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:w-1/2 text-center md:text-left md:mt-20">
          <h1 className="text-4xl font-bold">Contacts</h1>
          <p className="mt-4 text-lg text-[#56585e]">
            Contact us for an audit and advice. We are happy to help your
            business.
          </p>
        </div>

        <div className="md:w-1/2 w-full p-4 rounded-lg bg-gray-50 z-0">
          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <Button
                type="text"
                size="large"
                className="text-lg border-black py-6 px-20 rounded-full hover:text-black hover:scale-105 active:text-black transition-all !text-black"
                href="#"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="md:mt-[-12rem] p-4 md:p-10 z-10">
        <img
          src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Contact Us Background"
          className="w-full h-96 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};
