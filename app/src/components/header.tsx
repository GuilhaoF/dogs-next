import Image from "next/image";
import Link from "next/link";
import userGet from "../actions/user-get";

export default async function Header() {
 const {data} = await userGet();

  return (
    <header className="fixed w-full z-10 bg-white top-0 shadow-sm">
      <nav className="flex justify-between items-center h-16 mx-4">
        <Link className="py-2" href="/">
          <Image src={"/assets/dogs.svg"} alt="Dogs" width={32} height={32} />
        </Link>
        {data ? (
          <Link className="text-gray-800 flex items-center" href={"/conta"}>
          {data.username}
            <span
              className="inline-block w-3.5 h-4 bg-center bg-no-repeat ml-2 relative top-[-0.25rem]"
              style={{ backgroundImage: "url('/assets/usuario.svg')" }}
            ></span>
          </Link>
        ) : (
          <Link href="/login">Login/Criar</Link>
        )}
      </nav>
    </header>
  );
}
