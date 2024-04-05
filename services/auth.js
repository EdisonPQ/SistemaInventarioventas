export async function login(form) {
  const url = "http://localhost:8080/api/usuario/addUsuario";

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(form),
  };

  const response = await fetch(url, options);

  return await response.json();
}
