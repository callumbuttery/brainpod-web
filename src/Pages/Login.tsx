import { LoginForm } from '../Components/Login/LoginForm';

export const Login: React.FC = () => {

  return (
    <section className="h-screen bg-no-repeat bg-cover bg-center bg-fixed flex justify-center bg-main md:h-screen">
      <LoginForm/>
    </section>
  );
};
