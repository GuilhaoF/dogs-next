'use client';

import { useFormState, useFormStatus } from 'react-dom';



import React from 'react';
import styles from './login-form.module.css';
import Input from '../input';
import ErrorMessage from '../../helpers/error-message';
import passwordLost from '../../actions/password-lost';
import Button from '../button';


function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <form action={action}>
      <Input label="Email / Usuário" name="login" type="text" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: '#4c1' }}>Email enviado.</p>
      ) : (
        <FormButton />
      )}
    </form>
  );
}
