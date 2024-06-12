import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-yellow-300 py-12 px-4 h-40 text-center text-brown-700">
      <Image
        className="mx-auto"
        src={"/assets/dogs-footer.svg"}
        alt="Dogs"
        width={28}
        height={22}
      />
      <p className="mt-4">Direitos Reservados</p>
    </footer>
  );
}
