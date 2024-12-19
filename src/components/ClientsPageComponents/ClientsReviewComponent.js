export const ClientsReviewComponent = () => {
  return (
    <div className="py-12 mt-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold">Clients Review</h2>
      <p className="mt-4 text-lg text-[#56585e]">
        Our clients are satisfied with the quality of services provided and
        professionalism.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8 w-full">
        {/* Review 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col text-left justify-between">
          <div className="text-lg font-bold mb-2">★ ★ ★ ★ ★</div>
          <p className="text-gray-600 mb-4 text-lg">
            We contacted Flop for an audit, and the results exceeded all
            expectations. I recommend it to anyone who wants to develop their
            business.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Reviewer"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Ivan Petrov</h4>
              <p className="text-sm text-gray-500">Prague</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="p-6 bg-white rounded-lg text-left shadow-md flex flex-col justify-between">
          <div className="text-lg font-bold mb-2">★ ★ ★ ★ ☆</div>
          <p className="text-gray-600 mb-4 text-left text-lg">
            Flop's advice has helped us improve our business processes and
            increase revenue.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Reviewer"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Anna Smirnova</h4>
              <p className="text-sm text-gray-500">Prague</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
