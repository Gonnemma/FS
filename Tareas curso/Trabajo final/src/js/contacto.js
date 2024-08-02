let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");

let btnEnviar = document.getElementById("enviar");

let informacion = [];

btnEnviar.addEventListener("click", (e) => { 
    e.preventDeFault();         // previene actualizacion del form 
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = consulta.value; 
  
 
 // console.log('Su nombre es ${informacion[0]} y su apellido es ${informacion[1]});

 let blob = new Blob ([informacion], {type: "text/plain;charset=utf-8"});

// FileServer Libreria 

    saveAs(blob, "contacto.txt");

    console.log(blob);
}); 


