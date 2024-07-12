document.addEventListener("DOMContentLoaded", function(){
    const boton1=document.getElementById("boton1");
    const boton2=document.getElementById("boton2");
    const div1=document.getElementById("div1");
    const div2=document.getElementById("div2");
    boton2.addEventListener("click", cambioBoton);
    boton1.addEventListener("click", cambioBoton);
    function cambioBoton(){
        if (div1.classList.contains("hidden")){
            div1.classList.remove("hidden");
            div2.classList.add("hidden");
        }else{
                div1.classList.add("hidden");
                div2.classList.remove("hidden");
            }
        }
});