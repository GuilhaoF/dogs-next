import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[50rem] px-4">
      <div className="mt-8">
        <h1 className="font-secondary leading-none text-6xl my-4 relative z-10">
          Página não encontrada
          <span className="block w-6 h-6 bg-yellow-500 absolute bottom-1 left-[-1.25rem] rounded-sm -z-10"></span>
        </h1>
        <Link
          className="text-base cursor-pointer border-0 rounded-md bg-[#fb1] text-[#764701] min-w-[8rem] py-3 px-5 transition-all duration-100"
          style={{ marginBottom: "1rem", display: "inline-block" }}
          href={"/"}
        >
          Volte para a Home.
        </Link>
      </div>
    </section>
  );
}
