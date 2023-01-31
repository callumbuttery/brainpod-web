import Logo from '../../Images/Logo.png'

import { EmailBox } from '../SearchBoxes/EmailBox';
import { PasswordBox } from '../SearchBoxes/PasswordBox';
import { SignUpPrompt } from '../Buttons/SignUpPrompt';
import { Signin } from '../Buttons/Signin';
import { ForgotPassword } from '../Buttons/Forgotpassword';
import React, { useState } from 'react';
import { ConfirmPass } from '../SearchBoxes/ConfirmPass';
import { ConfirmRegister } from '../Buttons/confirmRegister';
import { SignInPrompt } from '../Buttons/SignInPrompt';
import { Fail } from '../Alerts/Fail';

import axios from 'axios';

interface LoginDetails {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPass] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [register, setRegister] = useState<boolean>(false);
  const [alertText, setText] = useState<string>('');
  const [LoggedIn, setLogin] = useState<boolean>(false);
  let [LogInAttempts, setLoginAttempts] = useState<number>(0);

  const handleTitleText = (): string => {
    if (register) return 'Register an account';
    else return 'Sign in to your account'
  }

  const handleSignin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoginAttempts(LogInAttempts++);

    try {
      await axios.post<LoginDetails>('http://localhost:4000/hello', {
        data: {
          email,
          password
        }
      })

    } catch {
      setText('Failed to login')
      setLogin(false);
    }
  }

  const handlePrompt = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setRegister(!register);
  }

  const handleConfirmRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('hitting handleConfirm');
  }


  return (
    <div className="flex flex-col w-3/5 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 drop-shadow-4xl">
      <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-br from-purple-500 to-blue-500 border-none">
        <a
          href="#"
          className="flex justify-center mb-2 mt-6 text-2xl font-semibold text-white dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          BrainPod
        </a>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
            {handleTitleText()}
          </h1>
          <form className="w-4/5 mx-auto space-y-4 md:space-y-6" action="#">
            <EmailBox setEmail={setEmail} />
            <PasswordBox setPass={setPass} />
            {
              register &&
              <div className='mx-auto space-y-4 md:space-y-4'>
                <ConfirmPass setConfirmPass={setConfirmPass} />
                <ConfirmRegister onButtonClick={handleConfirmRegister} />
                <SignInPrompt onButtonClick={handlePrompt} />
              </div>
            }
            {
              !register &&
              <div className='mx-auto space-y-4 md:space-y-4'>
                <Signin onButtonClick={handleSignin} />
                <SignUpPrompt onButtonClick={handlePrompt} />
                <ForgotPassword />
              </div>
            }
            { !LoggedIn && LogInAttempts > 0 &&
              <Fail text={alertText} />
            }
          </form>
        </div>
      </div>
    </div>
  );
};
