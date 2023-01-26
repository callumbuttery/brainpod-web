export const PasswordBox: React.FC = () => {
  return (
    <div className="hover:scale-110">
      <label className="block mb-2 text-sm font-medium text-white">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className="bg-gray-500  text-white border-none sm:text-sm rounded-lg block w-full p-2.5"
      />
    </div>
  );
};
