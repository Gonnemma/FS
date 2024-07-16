let arrProductos=["Lapices", "Hojas"]
let arrPrecios=[500, 800]
let arrCantidad = [100, 50]

document.querySelector("div button").addEventListener("click", ()=>{
    let cantidad = document.querySelector("div input").value;
    cantidad=Number(cantidad);
    if(cantidad > 0 && (arrCantidad[0] - cantidad)>0){
        comprar(cantidad);
    }else{
        alert("Ingrese una cantidad mayor")
    }
})

function comprar(cantidad){
    document.getElementById("total").innerText=cantidad*arrPrecios[0];
}