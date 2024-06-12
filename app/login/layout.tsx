import Image from "next/image";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen gap-8 lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <Image
          src="/assets/login.jpg"
          layout="fill"
          objectFit="cover"
          alt="Login"
        />
      </div>
      <div className="max-w-[30rem] px-4 mt-[20vh] lg:max-w-full">
        {children}
      </div>
    </div>
  );
}
