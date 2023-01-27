import Logo from '../../Images/Logo.png'

import { EmailBox } from '../SearchBoxes/EmailBox';
import { PasswordBox } from '../SearchBoxes/PasswordBox';
import { Signup } from '../Buttons/Signup';
import { Signin } from '../Buttons/Signin';
import { ForgotPassword } from '../Buttons/Forgotpassword';
import React, { useState } from 'react';


export const LoginForm: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPass] = useState<string>('');

  const handleSignin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('button was press');
  }


  return (
    <div className="flex flex-col w-3/5 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 drop-shadow-4xl">
      <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-br from-sky-500 to-blue-600 border-none">
        <a
          href="#"
          className="flex justify-center mb-2 mt-6 text-2xl font-semibold text-white dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          BrainPod
        </a>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="w-4/5 mx-auto space-y-4 md:space-y-6" action="#">
            <EmailBox setEmail={setEmail} />
            <PasswordBox setPass={setPass} />
            <Signin onButtonClick={handleSignin}/>
            <Signup />
            <ForgotPassword />
          </form>
        </div>
      </div>
    </div>
  );
};
