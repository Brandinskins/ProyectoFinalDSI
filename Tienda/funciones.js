let productos =[[0, "Coca", 12],
                [1, "Papas", 10],
                [2, "Chocolate", 5],
                [3, "Panditas", 7],
                [4, "Chicles", 2]];

window.addEventListener("load", cargar);
function cargar(){
    for(i = 0; i<productos.length; i++){
        document.querySelector('section').innerHTML+="<div id='"+productos[i][0]+"'>"+ 
                                                    "<h1>"+productos[i][1]+"</h1>"+
                                                    "<p>"+productos[i][2]+"</p>"+
                                                    "<button onclick='agregar("+productos[i][0]+")'>+</button>"+
                                                    "</div>";
    }
}

let carrito = [];
function agregar(id){
	carrito.push(id);
	document.querySelector('s').innerHTML = carrito.length;

}

function mostrarCarrito(){
    let listaProd = "";
    for(i = 0; i<carrito.length; i++){
        for(j = 0; j<productos.length; j++){
            if(productos[j][0] == carrito[i]){
                listaProd += productos[j][1] + "  $" + productos[j][2] + "<br>"; 
            }
        }
    }
    document.querySelector('.modCarr').classList.add('modCarro');
	document.querySelector('.modCarr').innerHTML= "<h1>Lista de Productos:<br></h1>";
	document.querySelector('.modCarr').innerHTML+= listaProd;
}


