import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value; // pegando o token do cookie
  const authenticated = token ? true : false; // if token exists, authenticated is true

  // se não estiver autenticado e a url começar com /conta, redireciona para /login
  if (!authenticated && request.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // se estiver autenticado e a url começar com /login, redireciona para /conta
  if (authenticated && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/conta", request.url));
  }
  // se não cair em nenhuma condição acima, continua a execução
  return NextResponse.next();
}
// matcher é um array de strings que define quais rotas esse middleware deve ser aplicado
export const config = {
  matcher: ["/conta/:path*", "/login/:path*"],
};