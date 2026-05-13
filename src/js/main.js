// --- TUS PRÁCTICAS AQUÍ ABAJO ---
console.log("DOM Playground listo para practicar 🚀")
// sumar
const contador = document.querySelector("#counter-display");

let numero = 0;

const botonSuma = document.querySelector("#increment");
 
botonSuma.addEventListener("click", () =>{
    numero++;
    contador.innerText = numero;
});
// restar
const botonRestar = document.querySelector("#decrement");


botonRestar.addEventListener("click", () =>{
    numero--;
    contador.innerText = numero;
});
 // resest 
 const botonReset = document.querySelector("#reset");

 botonReset.addEventListener("click", () =>{
    numero = 0
    contador.innerText = numero;
 });
// cambiar el color a rojo
if (numero < 0){
    contador.style.color = "red";
}else{
    contador.style.color = "black"
}

