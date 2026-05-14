// --- TUS PRÁCTICAS AQUÍ ABAJO ---
console.log("DOM Playground listo para practicar 🚀")
// =========================
// CONTADOR
// =========================

// Seleccionar contador
const contador = document.querySelector("#counter-display");

// Variable del número
let numero = 0;


// BOTÓN SUMAR
const botonSuma = document.querySelector("#increment");

botonSuma.addEventListener("click", () => {

    numero++;

    contador.innerText = numero;

    if (numero < 0) {
        contador.style.color = "red";
    } else {
        contador.style.color = "black";
    }

});


// BOTÓN RESTAR
const botonRestar = document.querySelector("#decrement");

botonRestar.addEventListener("click", () => {

    numero--;

    contador.innerText = numero;

    if (numero < 0) {
        contador.style.color = "red";
    } else {
        contador.style.color = "black";
    }

});


// BOTÓN RESET
const botonReset = document.querySelector("#reset");

botonReset.addEventListener("click", () => {

    numero = 0;

    contador.innerText = numero;

    contador.style.color = "black";

});


// =========================
// GESTIÓN DE LISTAS
// =========================

// Input
const itemInput = document.querySelector("#item-input");

// Botón añadir
const botonAgregar = document.querySelector("#add-item");

// Lista
const lista = document.querySelector("#dynamic-list");


// Evento click
botonAgregar.addEventListener("click", () => {

    // Obtener texto
    const texto = itemInput.value;

    // Validar vacío
    if (texto === "") {
        return;
    }

    // Crear elemento
    const nuevoElemento = document.createElement("li");

    // Agregar texto
    nuevoElemento.innerText = texto;

    // Agregar a la lista
    lista.appendChild(nuevoElemento);

    // Limpiar input
    itemInput.value = "";

});


// =========================
// MODO OSCURO
// =========================

const botonDark = document.querySelector("#toggle-dark");

botonDark.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// =========================
// INPUTS EN VIVO
// =========================

// Input nombre
const nameInput = document.querySelector("#name-input");

// Texto dinámico
const userName = document.querySelector("#user-name");


// Evento input
nameInput.addEventListener("input", () => {

    // Obtener valor
    const texto = nameInput.value;

    // Cambiar texto
    userName.innerText = texto;

});

