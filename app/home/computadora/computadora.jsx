import React from "react";

export default function computadora(children) {
  return (
    <>
      <Header />
      <main className="m-6">
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
}
