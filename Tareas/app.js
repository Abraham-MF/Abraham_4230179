let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);

let numeroUsuario = parseInt(prompt("adivina el numero del 1 al 10: "));

let vidas =3;

while(numeroMaquina !== numeroUsuario && vidas > 1){

    vidas --;
    numeroUsuario = parseInt(prompt("vuelve a intentarlo " + vidas));
}

if(numeroMaquina === numeroUsuario){
    console.log("Ganaste");
} else {
    console.log("tu vida acabo, toma mejores deciciones a la proxima");
    console.log("el numero secreto era: " + numeroMaquina);
}