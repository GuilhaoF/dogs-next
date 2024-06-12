"use client";
import { useFormState, useFormStatus } from "react-dom";
import login from "../../actions/login";
import Input from "../input";
import ErrorMessage from "../../helpers/error-message";
import { useEffect } from "react";
import Link from "next/link";
import Button from "../button";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          className="bg-yellow-400 h-full w-full p-4 hover:bg-yellow-500"
          disabled={pending}
        >
          Enviando...
        </Button>
      ) : (
        <Button className="bg-yellow-400 h-full w-full p-4 hover:bg-yellow-500 ">
          Entrar
        </Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });
  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form
        className="w-full md:flex md:flex-col md:justify-center"
        action={action}
      >
        <Input type="text" name="username" label="usuario" />
        <Input type="password" name="password" label="senha" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link href="/login/perdeu" className="">
        <span className="inline-block text-gray-600  py-2 leading-none">
          Perdeu a senha?
          <span className="block h-0.5 w-full"></span>
        </span>
      </Link>

      <div className="mt-16 mb-16">
        <h2 className="font-secondary text-4xl leading-none">
          Cadastre-se
          <span className="block bg-gray-300 h-2 w-12 rounded-sm"></span>
        </h2>
        <p className="mt-8 mb-8">
          Ainda não possui conta? Cadastre-se no site.
        </p>
        <Link href="/login/criar">
          <span className="button">Cadastro</span>
        </Link>
      </div>
    </>
  );
}
