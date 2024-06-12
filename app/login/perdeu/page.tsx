import LoginPerdeuForm from "@/app/src/components/login/login-form-perdeu";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recupere a sua senha',
};

export default async function PerdeuPage() {
  return (
    <main>
      <h1>Perdeu a senha?</h1>
      <LoginPerdeuForm/>
    </main>
  );
}
