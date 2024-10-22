console.log ("Primi passi col DOM")

const lamp = document.getElementById("lamp");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  lamp.src = "./img/yellow_lamp.png";
});