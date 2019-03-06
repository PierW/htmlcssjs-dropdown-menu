// Carico prima tutto il DOM html prima di lanciare il Js
$(document).ready(init);
// JAVASCRIPT
// document.addEventListener("DOMContentLoaded", init);

// Creo funzioni
function showMenu() {
  var nav = $(".menu"); //NOTA: usiamo la stessa classe per tutti i menu.
  nav.click(function() {
    hideOldMenu(); //Richiamo funzione che nasconde tutti i menu aperti prima.
    var me = $(this); //Al click individuo elemento singolo.(viste le classi .menu ripetute)
    if (me.children(".drop-container-i").is(":hidden")) { //Questa condizione è stata inserita dopo come fix. Senza avremo un problema(nel caso giù ci fosse slidetoggle): cliccando su se stesso scompare e ricompare, effetto fisarmonica.
      me.children(".drop-container-i").slideDown(1000);   // mostro solo il figlio dell'elemento cliccato
    }
  });
}

function showHover() {
  var subElement = $(".drop-element-i");
  subElement.hover(
    function() {
      var me = $(this); //SOLO dopo l'evento click, hover ecc
      var subSubContainer = me.children(".drop-container-ii");
      subSubContainer.slideToggle(0500);
    },
    function() {
      var me = $(this);
      var subSubContainer = me.children(".drop-container-ii");
      subSubContainer.slideToggle(0500);
    });
}

function hideOldMenu() {
  var container = $(".menu .drop-container-i");
  container.slideUp();
}

// richiamo tutte le funzioni
function init() {
  showMenu();
  showHover();
}
