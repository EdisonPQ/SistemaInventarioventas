"use client";

import HeaderLogin from "@/components/HeaderLogin";
import { login } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    //console.log(event.target.name, event.target.value);

    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (
      form.email === "edison.ingdesistemas@gmail.com" &&
      form.password === "edison1234"
    ) {
      router.push("/home");
    } else {
      router.push("/");
    }
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

          <form className="flex flex-col gap-2 p-8" onSubmit={handleLogin}>
            <label className="font-bold">Email</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="email"
              placeholder="edi@gmail.com"
              name="email"
              onChange={handleChange}
              value={form.email}
            />

            <label className="font-bold">Password</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="password"
              placeholder="Ej. supersecret"
              name="password"
              onChange={handleChange}
              value={form.password}
            />

            <button className="mt-4 border p-3 bg-sky-700 text-white rounded-md cursor-pointer">
              Login
            </button>
          </form>
          <div className="flex justify-center gap-2 font-bold">
            <span>Don't have an account?</span>
            <Link href="/register" className="text-sky-500">
              Register
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
