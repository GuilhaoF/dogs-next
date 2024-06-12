import Image from "next/image";
import PhotoGet from "./src/actions/photo-get";
import Feed from "./src/components/feed/feed";

export default async function Home() {
  const data = await PhotoGet(); // aqui estamos chamando a função que faz a requisição para a API
  return (
    <section className="max-w-xl px-4 mx-auto mt-8">
      <div className="flex  justify-between">
        <h1 className="font-secondary leading-none text-6xl my-4 relative z-10">
          Dogs Next
          <span className="block w-12 h-12 bg-yellow-300 absolute bottom-1 left-[-1.25rem] rounded-sm z-[-1]"></span>
        </h1>
        <Image className=" animate-bounce" src={'/assets/dogs.svg'} alt="dog-icon" width={60} height={30} />
      </div>

      <Feed photos={data} />
    </section>
  );
}
