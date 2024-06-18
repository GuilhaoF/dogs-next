"use client";
import { act, useState } from "react";
import ErrorMessage from "../../helpers/error-message";
import { useFormState, useFormStatus } from "react-dom";
import photoPost from "../../actions/photo-post";
import Input from "../input";
import Button from "../button";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  );
}

export default function ContaPhotoPost() {
  // o useFormState é um hook que retorna o estado do formulário e a função de envio
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });
  const [img, setImg] = useState(""); // seta o estado da imagem
  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    // se o target.files existir, seta a imagem
    // o URL.createObjectURL cria um URL para o objeto passado
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className="grid grid-cols-2 gap-8 mb-8 ">
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImgChange}
          type="file"
          name="img"
          id="img"
          className="mb-4"
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className="rounded-lg bg-center bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="h-0 pb-96"></div>
        </div>
      </div>
    </section>
  );
}
