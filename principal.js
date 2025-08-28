//muda o nome a partir do seletor de classe
var paciente = document.querySelector(".subtitulo");
			paciente.textContent = "Meus Pacientes";
var Daisa = document.querySelector(".titulo");
			Daisa.textContent = "Daisa Nutrição";
//acessar a tag tr - paciente Paulo
            var paciente =document.querySelector("#primeiro-paciente");
            console.log(paciente);
//seleciona o conteúdo
            var tdpeso = paciente.querySelector(".info-peso");
            var peso = tdpeso.textContent;

            var tdaltura = paciente.querySelector(".info-altura");
            var altura = tdaltura.textContent;
            console.log(altura);
//calcula o imc
            var imc = peso / (altura * altura);
//acessa e altera o imc          
var tdimc = paciente.querySelector(".info-imc");
tdimc.textContent = imc;
if(peso < 0 || peso > 1000){
    alert("peso ivalido");
}
if(altura < 0 || altura> 3.00){
    alert("altura invalida");
}
            