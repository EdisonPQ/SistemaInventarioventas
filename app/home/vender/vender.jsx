import Header from "@/components/Header";
import React from "react";

export default function vender() {
  return (
    <>
      <Header />
      <main className="m-6">
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
}
