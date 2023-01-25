export const EmailBox: React.FC = () => {
  return (
    <div className="">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
