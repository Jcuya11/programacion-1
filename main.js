document.addEventListener("DOMContentLoaded", function() {
  //alert("hola");
  //const form = document.querySelectorAll(".form")[0];
  //form.addEventListener("submit", function (){
  //  alert("gracias por su compra");
  //})

  const form = document.querySelectorAll(".form")[0];
  form.addEventListener("submit", function (){
    const  cantidad = document.querySelectorAll(".cantidad")[0].value;
    alert(`gracias por comprar ${cantidad} de ...`);
  })
});
