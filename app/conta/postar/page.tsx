import ContaPhotoPost from "@/app/src/components/conta/conta-form-post";
import { Metadata } from "next";


export const runtime = 'edge'; // significa que a página será renderizada no servidor de borda

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
};


export default async function PostarPage() {
  return (
    <main>
      <h1>Postar</h1>
      <ContaPhotoPost />
    </main>
  );
}
