import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-zinc-900 py-4 px-6">
      <div
        className="container mx-auto flex
    justify-between"
      >
        <h1 className="font-bold">
          <Link href="/home" className="text-yellow-50 hover:text-red-700">
            Inicio
          </Link>
        </h1>
        <div className="flex lg:hidden">
          <Image
            src="/images/icon.png"
            width={20}
            height={20}
            className="hover:"
          />
        </div>
        <nav className="lg:flex hidden gap-6">
          <Link href="/" className="text-yellow-50 hover:text-red-700">
            Login
          </Link>
          <Link
            href="/home/usuario"
            className="text-yellow-50 hover:text-red-700"
          >
            Listar Usuarios
          </Link>
          <Link href="/register" className="text-yellow-50 hover:text-red-700">
            Registrar Usuario
          </Link>

          <Link
            href="/home/vender"
            className="text-yellow-50 hover:text-red-700 font-medium"
          >
            Vender Articulos
          </Link>
        </nav>
      </div>
    </header>
  );
}
