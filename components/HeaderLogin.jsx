import Link from "next/link";
import React from "react";

export default function HeaderLogin() {
  return (
    <header className="bg-stone-800 text-white py-4 px-6">
      <div
        className="container mx-auto flex
    justify-between"
      >
        <h1 className="font-bold">
          <Link href="/home" className="hover:text-amber-800">
            Inicio
          </Link>
        </h1>
      </div>
    </header>
  );
}
