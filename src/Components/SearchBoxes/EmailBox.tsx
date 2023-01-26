import { Dispatch, SetStateAction, useState } from 'react';
import { InputChangeEventHandler } from '../../Types/InputChange'

interface props {
  setEmail: Dispatch<SetStateAction<string>>
}

export const EmailBox: React.FC<props> = (setEmail: props) => {

  const updateEmail: InputChangeEventHandler = (event): void => {
    setEmail.setEmail(event.target.value);
  }

  return (
    <div className="hover:scale-110">
      <label className="block mb-2 text-sm font-medium text-white">
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-500 text-white border-none sm:text-sm rounded-lg block w-full p-2.5"
        placeholder="name@company.com"
        onChange={updateEmail}
      />
    </div>
  );
};
