console.log ("Primi passi col DOM")


// Accendo la lampadina

// Creo 2 variabili (una per l'immagine e una per il pulsante)
const lamp = document.getElementById("lamp");
const btn = document.getElementById("btn");

// Dico al pulsante di cambiare immagine al click
btn.addEventListener("click", function() {
  lamp.src = "./img/yellow_lamp.png";
});
