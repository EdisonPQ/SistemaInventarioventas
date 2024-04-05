import React from "react";

export default function page() {
  return (
    <>
      <div>
        <div className="text-red-700">Usuario</div>
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          Nombre - Apellidos - Usuario
          <button className="bg-red-600 px-2 text-white">Delete</button>
        </li>
        <li>
          Nombre - Apellidos - Usuario
          <button className="bg-red-600 px-2 text-white">Delete</button>
        </li>
        <li>
          Nombre - Apellidos - Usuario
          <button className="bg-red-600 px-2 text-white">Delete</button>
        </li>
      </ul>
    </>
  );
}
