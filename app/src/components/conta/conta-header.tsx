"use client";
import Link from "next/link";
import useMedia from "../../hooks/use-media";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BarChart2Icon, Rss, Plus, LogOut } from "lucide-react";
import logout from "../../actions/logout";
import { useUser } from "../../context/user-context";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";
    case "/conta/estatisticas":
      return "Estatísticas";
    default:
      return "Minha Conta";
  }
}

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const pathname = usePathname(); // retorna o pathname da página atual
  const [mobileMenu, setMobileMenu] = useState(false);
  const { setUser } = useUser();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    logout(); // chama a função logout que deleta o cookie token
    setUser(null) // seta o user como null
  }

  return (
    <header className="grid grid-cols-1 mb-8">
      <h1 className="font-secondary leading-none text-6xl my-4 relative z-10">
        {getTitle(pathname)}
        <span className="block w-6 h-6 bg-yellow-500 absolute bottom-1 left-[-1.25rem] rounded-sm -z-10"></span>
      </h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={` ${
            mobileMenu
              ? "bg-white shadow-outline border-yellow-500 text-yellow-500"
              : "bg-gray-300"
          }rounded h-10 w-10 flex items-center justify-center border-transparent transition-all duration-100 cursor-pointer`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${
          mobile
            ? "block absolute top-16 right-0 px-4 bg-white shadow-md rounded-sm transform translate-x-4 opacity-0 pointer-events-none"
            : "grid grid-cols-4 gap-4"
        } ${
          mobileMenu
            ? "transition-all duration-300 transform-none opacity-100 pointer-events-auto z-10"
            : ""
        }`}
      >
        <Link
          href="/conta"
          className={`${
            pathname === "/conta"
              ? "shadow-outline border-yellow-500 bg-yellow-500 text-white"
              : ""
          } rounded h-10 w-10 flex items-center justify-center border-transparent transition-all duration-100 cursor-pointer`}
        >
          <span>
            <Rss size={40} className="border border-gray-600" />
            {mobile && "Minhas Fotos"}
          </span>
        </Link>

        <Link
          href="/conta/estatisticas"
          className={`${
            pathname === "/conta/estatisticas"
              ? "shadow-outline border-yellow-500 bg-yellow-500 text-white"
              : ""
          } rounded h-10 w-10 flex items-center justify-center border-transparent transition-all duration-100 cursor-pointer`}
        >
          <BarChart2Icon size={40} className="border border-gray-600" />
          {mobile && "Estatísticas"}
        </Link>

        <Link
          href="/conta/postar"
          className={`${
            pathname === "/conta/postar"
              ? "shadow-outline border-yellow-500 bg-yellow-500 text-white"
              : ""
          } rounded h-10 w-10 flex items-center justify-center border-transparent transition-all duration-100 cursor-pointer`}
        >
          <Plus size={40} className="border border-gray-600" />
          {mobile && "Adicionar Foto"}
        </Link>

        <button onClick={handleLogout}>
          <LogOut size={40} className="border border-gray-600" />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
