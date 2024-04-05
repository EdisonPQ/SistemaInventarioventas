"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function UsuarioNewPage() {
  const router = useRouter();

  const handleLogout = (event) => {
    router.push("/");
  };
  return (
    <>
      <form className="w-96 mx-auto">
        <h1 className="text-center text-3xl mb-8">Nuevo usuario</h1>

        <section className="flex flex-col gap-4 bg-slate-100 p-8 shadow-lg">
          <label className="font-medium">
            Nombre
            <input
              type="text"
              name="nombre"
              placeholder="Edison"
              className="border w-full p-3 mt-2"
            />
          </label>
          <label className="font-medium">
            Apellido
            <input
              type="text"
              name="nombre"
              placeholder="Puma Quispe"
              className="border w-full p-3 mt-2"
            />
          </label>
          <label className="font-medium">
            E-mail
            <input
              type="text"
              name="nombre"
              placeholder="edisonpq@tecsup.pe"
              className="border w-full p-3 mt-2"
            />
          </label>
          <label className="font-medium">
            Password
            <input
              type="password"
              name="nombre"
              className="border w-full p-3 mt-2"
            />
          </label>
          <button
            className=" text-yellow-50 w-full bg-sky-700 p-3 font-medium cursor-pointer hover:bg-sky-800 duration-300"
            onClick={handleLogout}
          >
            Guardar
          </button>
        </section>
      </form>
    </>
  );
}
