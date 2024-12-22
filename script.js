

const productos = [{
    nombre:"rutina gym",
    imagen:"multimedia/1366_2000.jpeg",
    precio:12000
},
{   
nombre: "plan alimentacion",
imagen:"multimedia/1_opt-2-300x200.jpg",
precio: 10000,
},
{
    nombre: "plan running",
    imagen:"multimedia/20231020225720184234.jpg",
    precio: 13000
}
]
let cursosHTML="";
for(let i=0;i<productos.length;i++){
 cursosHTML += `
           <div class="card">
  <div class="content">
<img src=${productos[i].imagen}>
<div class="card-textos">
<h2>${productos[i].nombre}</h2>
<h3> precio:$${productos[i].precio}</h3>
 
<div class="boton">
 
  <a href="#" class="btn">Ver más</a>
 <input id="boton-agregarCarrito" type="button" value="Agregar al Carrito">
 </div>
 </div>
 </div>
</div>

`;
}


const contenedorCursos=document.getElementById("contenedorCursos") ;

contenedorCursos.innerHTML=cursosHTML;

// agregar eventos a los botones de productos
const botonesAgregar =document.querySelectorAll("#boton-agregarCarrito");

const listaCarrito=document.querySelector("#carrito ul");

const totalCarrito =document.querySelector("#carrito p");
const mensajePagarCarrito=document.getElementById("mensajeCarrito");

let totalApagar =0; 
// agregamos el listener a cada boton   

for(let i =0; i< botonesAgregar.length;i++){

   function agregarElemCarrito(){
    const elementoLi= document.createElement("li");
  elementoLi.innerHTML=`Curso${productos[i].nombre} $${productos[i].precio}`
  console.log(elementoLi);
  listaCarrito.appendChild(elementoLi);
  totalApagar +=productos[i].precio;
  totalCarrito.innerText= "total a pagar: $"+totalApagar;

mensajePagarCarrito.innerText="";
}

  botonesAgregar[i].addEventListener("click",agregarElemCarrito);
}                  

const botonBorrar=document.querySelector("#boton-borrar");
function borrarCarrito(){
  listaCarrito.innerHTML = " ";
  totalCarrito.innerHTML="total a pagar: $0"
totalApagar=0;
mensajePagarCarrito.innertext="";
}

botonBorrar.addEventListener("click",borrarCarrito);

const botonPagar=document.querySelector("#boton-pagar")

function irApagar(){
  
  if(listaCarrito.innerText===""){
   mensajePagarCarrito.innerText="no seleccionaste ningun producto";
  }else{
  window.location.href="./pagos.html";
}
}
 botonPagar.addEventListener("click",irApagar);
