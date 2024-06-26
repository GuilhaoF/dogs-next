import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "./src/functions/fonts";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import { UserContextProvider } from "./src/context/user-context";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Redes sociais para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider  user={null}>
        <div className="flex flex-col  min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
