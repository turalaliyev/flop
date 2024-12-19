export const ServicesReviewComponent = () => {
  return (
    <div className="py-12 px-6 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Review 1 */}
        <div className="p-6 w-full flex flex-col text-center items-center gap-2">
          <div className="text-yellow-500 text-lg font-bold mb-2">
            ★ ★ ★ ★ ★
          </div>
          <p className="text-gray-600 mb-4 text-lg">
            Flop consulting company helped us optimize our business processes.
            We recommend their services to everyone!
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-800">John Doe</h4>
              <p className="text-sm text-gray-500">CEO, TechCorp</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="p-6 w-full flex flex-col text-center items-center">
          <div className="text-yellow-500 text-lg font-bold mb-2">
            ★ ★ ★ ★ ☆
          </div>
          <p className="text-gray-600 mb-4">
            "Great experience working with this team. They delivered exactly
            what we needed, on time and within budget."
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-sm text-gray-500">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
