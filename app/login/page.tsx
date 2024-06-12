import LoginForm from "../src/components/login/login-form";
import Image from "next/image";

export default async function LoginPage() {
  return (
    <main>
      <div className="flex items-center justify-center flex-col">
        <Image className="mb-4"  src={"/assets/dogs.svg"} alt="Dogs" width={60} height={40} />
        <h1 className="font-bold font-spectral text-lg">Login</h1>
        <p>Entre com seu usuário e senha</p>
      </div>
      <LoginForm />
    </main>
  );
}
