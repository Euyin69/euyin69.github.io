let miImage = document.getElementsByClassName("psico"); /*defino una variable y guardo TODOS los elementos que encuentre
														de la clase "psico". Puede haber mas de uno. es una variable tipo ARRAY*/
miImage[0].onclick = function () {	/*para seleccionar el primer elemento uso [0] aunque solo haya un elemento */
  let miSrc = miImage[0].getAttribute("src");
  if (miSrc === "images/psyco.jpg") {
    miImage[0].setAttribute("src", "images/firefox2.png");
  } else {
    miImage[0].setAttribute("src", "images/psyco.jpg");
  }
}
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  if (!miNombre)
  {
    estableceNombreUsuario();
  }
  else
  {
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Mozilla es genial, " + miNombre;
  }
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Mozilla es genial, " + nombreAlmacenado;
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};

