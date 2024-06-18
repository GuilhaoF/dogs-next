import Link from "next/link";
import PhotoGet from "../src/actions/photo-get";
import Feed from "../src/components/feed/feed";
import { useUser } from "../src/context/user-context";
import { Metadata } from "next";
import userGet from "../src/actions/user-get";
import Button from "../src/components/button";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default async function Conta() {
  const { data: user } = await userGet();
  const { data } = await PhotoGet({ user: user?.username });
  return (
    <div className="flex justify-center items-center flex-col w-full h-full">
      <h2 className="text-red text-[40px] mb-20">{user?.nome}</h2>
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href={"/conta/postar"}
            className="w-56"
            style={{ display: "inline-block" }}
          >
            <Button>Postar Foto</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
