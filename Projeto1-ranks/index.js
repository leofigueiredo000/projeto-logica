let nomeHeroi = "Link";
let xpHeroi = 5002;
let rankHeroi = "Ferro";

if(xpHeroi > 1000 && xpHeroi <= 2000){

rankHeroi = "Bronze";
}else if(xpHeroi > 2000 && xpHeroi <= 5000){
rankHeroi = "Prata";
}else if(xpHeroi > 5001 && xpHeroi <= 7000 ){
rankHeroi = "Ouro";

}else if(xpHeroi > 7001 && xpHeroi <= 8000){
rankHeroi = "Platina";
}
else if(xpHeroi > 8001 && xpHeroi <= 9000){
rankHeroi = "Ascendente";
}
else if(xpHeroi > 500000 && xpHeroi <= 1000000){
rankHeroi = "Imortal";
}   else if(xpHeroi > 1000000){
rankHeroi = "Radiante";
} else{
rankHeroi = "Ferro";
}
console.log("O heroi de nome " + nomeHeroi + " possui " + xpHeroi + " pontos de experiência e seu rank é " + rankHeroi);