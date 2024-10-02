function horizontal () {
    for (let cont = 0; cont <= 3; cont ++)
    console.log("x");
}
horizontal();

function vertical () {
    let cont = ""
    for (cont = 0; cont <= 3; cont ++)
    console.log("x\n");
}
vertical();



function tablas () {
    for(let mult = 0; mult <= 10; mult ++){
        console.log(`1 x ${mult} = ${1* mult}`);
    }

} 
tablas();


function fruta () {
    let frutas = ["mango", "fresa", "manzana", "sandia", "jicama", "uva", "kiwi", "naranja", "mandarina"]
    frutas.forEach((fruta, indice) => {
        console.log(`${indice}: ${fruta}`);
        
    });

}
fruta();