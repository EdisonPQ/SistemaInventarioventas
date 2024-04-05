"use client";

import HeaderLogin from "@/components/HeaderLogin";
import { login } from "@/services/auth";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const initialState = {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);
  const [mensaje, setMensaje] = useState("contenido");

  const handleChange = (event) => {
    //console.log(event.target.name, event.target.value);

    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await login(form);

    if (!response.name) {
      setMensaje("Falta ingresar nombre");
      //console.log("Falta ingresar nombre");
    }

    // console.log("Enviando credenciales al usuario");
  };

  return (
    <>
      <HeaderLogin />
      <main className="container border w-[400px] h-screen mx-auto space-y-6 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-semibold">Login</h1>
            <p className="text-sm text-slate-600">Enter your email</p>
          </div>
          {/* {JSON.stringify(form)} */}
          {/* {JSON.stringify(mensaje)} */}
          <form className="flex flex-col gap-2 p-8" onSubmit={handleLogin}>
            <label className="font-bold">Nombre</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="text"
              placeholder="Edison"
              onChange={handleChange}
              name="nombre"
              value={form.nombre}
            />

            <label className="font-bold">Apellidos</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="text"
              placeholder="Puma"
              onChange={handleChange}
              name="apellidos"
              value={form.apellidos}
            />

            <label className="font-bold">Email</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="email"
              placeholder="edison@gmail.com"
              onChange={handleChange}
              name="email"
              value={form.email}
            />

            <label className="font-bold">Password</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="password"
              placeholder="Ej. supersecret"
              onChange={handleChange}
              name="password"
              value={form.password}
            />

            <button className="mt-4 border p-3 bg-sky-700 text-white rounded-md cursor-pointer">
              Register
            </button>
          </form>

          <div className="flex justify-center gap-2 font-bold">
            <span>Don't have an account?</span>
            <Link href="/" className="text-sky-500">
              Login
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
