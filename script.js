const content = document.querySelector('.content');

const day = document.querySelector(".day");
const dayMove = document.querySelector("#marco-day");

const night = document.querySelector(".night");
const nightMove = document.querySelector("#marco-night");


dayMove.addEventListener("click", function(){
  //cambio de color - content
  content.style.backgroundImage =
  "linear-gradient(180deg, rgba(7,18,61,1) 21%, rgba(45,52,71,1) 75%, rgba(16,88,124,1) 100%)";
  content.style.transition =
  "background-image 0.5s linear ease-in-out";

  //desaparece la caja-day
  day.classList.add("movimiento-marco-1");
  day.classList.remove("movimiento-marco-2");

  //se muestra la caja-night
  night.style.display = "block";
  night.classList.add("movimiento-night-1");
  night.classList.remove("movimiento-night-2");
  cuadrado.style.backgroundColor = "red"
});


nightMove.addEventListener("click", function(){

  //desaparecer la caja-night  
  night.classList.remove("movimiento-night-1");
  night.classList.add("movimiento-night-2");

  //se muestre la caja-day
  day.classList.remove("movimiento-marco-1");
  day.classList.add("movimiento-marco-2");

  //regresar el color de content al color por defecto
  content.style.backgroundImage =
  "linear-gradient(180deg, rgba(55,129,226,1) 39%, rgba(69,145,221,1) 57%, rgba(173,205,244,1) 100%)";
  content.style.transition =
  "background-image 0.5s linear ease-in-out";

});