let btn= document.getElementById("btn");

btn.addEventListener('click', function(){
    let tiempoBomba = 5;

    setTimeout(() => {
        cuentaRegresiva(tiempoBomba)
    }, 5000);
});

function cuentaRegresiva(i){
    let intervalo = setInterval(function(){
        console.log(i);
        if (i === 0){
            clearInterval(intervalo)
            alert("BOOOOM!!!")
        } else{
            i--
        }
    }, 1000)
}