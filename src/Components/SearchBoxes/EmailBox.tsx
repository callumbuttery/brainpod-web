export const EmailBox: React.FC = () => {
  return (
    <div className="hover:scale-110">
      <label className="block mb-2 text-sm font-medium text-white">
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-500 border-none sm:text-sm rounded-lg block w-full p-2.5"
        placeholder="name@company.com"
      />
    </div>
  );
};
