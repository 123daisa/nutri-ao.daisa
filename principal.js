//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var Dáisa = document.querySelector(".titulo");
Dáisa.textContent = "Dáisa Nutrição";
//acessar a tag tr - paciente Paulo
var paciente =document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++){
//seleciona o conteúdo
var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;
//calcula o imc
var imc = peso / (altura * altura);
//variáveis com valor true
var pesoValido = true;
var alturaValida = true; 
//define limites de peso e altura
if(pesoValido && alturaValida){
    //acessa e altera o imc          
    var tdimc = paciente.querySelector(".info-imc");
    tdimc.textContent = imc;
}   
if(peso <= 0 || peso >= 1000){
    console.log("peso ivalido");
    var pesoValido = false;
    tdimc.textContent = "peso invalida";
}
if(altura <=0 || altura>= 3.00){
    console.log("altura invalida");
    var alturaValida = false;
tdimc.textContent = ("altura invalida");
}


}



            