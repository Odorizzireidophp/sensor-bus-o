function registrarEntrada() {

    const horaInicioPico = document.getElementById("horaInicioPico").value;  
    const horaFinalPico = document.getElementById("horaFinalPico").value;
    const horaAtual = document.getElementById("horaAtual").value;
    const sensorEntrada = document.getElementById("sensorEntrada").value;
    const viagemEmAndamento =  document.getElementById("viagemEmAndamento").value;
    //Conversão de horas em um objeto do tipo Date
    const horaInicioPicoDate = new Date(`1970-01-01T${horaInicioPico}`)
    const horaFinalPicoDate = new Date(`1970-01-01T${horaFinalPico}`)
    const horaAtualDate = new Date(`1970-01-01T${horaAtual}`)

    let contagem = parseFloat(document.getElementById("contagem").textContent);
    let total = parseFloat(document.getElementById("total").textContent);
    let contagemTotal = parseFloat(document.getElementById("contagemTotal").textContent);
if(horaAtualDate>=horaInicioPicoDate && horaAtualDate <=horaFinalPicoDate && sensorEntrada == "sim" && viagemEmAndamento == "sim"){

    contagemTotal = contagemTotal +1
    contagem = contagem + 1;
    if (contagem > total){
        total = contagem;
    }
}
document.getElementById("contagemTotal").textContent = contagemTotal.toString();
document.getElementById("contagem").textContent = contagem.toString();
document.getElementById("total").textContent = total.toString();
}
function registrarSaida() {
    const horaInicioPico = document.getElementById("horaInicioPico").value;  
    const horaFinalPico = document.getElementById("horaFinalPico").value;
    const horaAtual = document.getElementById("horaAtual").value;
    const sensorSaida = document.getElementById("sensorSaida").value;
    const viagemEmAndamento =  document.getElementById("viagemEmAndamento").value;
    //Conversão de horas em um objeto do tipo Date
    const horaInicioPicoDate = new Date(`1970-01-01T${horaInicioPico}`)
    const horaFinalPicoDate = new Date(`1970-01-01T${horaFinalPico}`)
    const horaAtualDate = new Date(`1970-01-01T${horaAtual}`)

    let contagem = parseFloat(document.getElementById("contagem").textContent);
if(horaAtualDate>=horaInicioPicoDate && horaAtualDate <=horaFinalPicoDate && sensorSaida == "sim" && viagemEmAndamento == "sim" && contagem > 0){

    contagem = contagem - 1;
}
document.getElementById("contagem").textContent = contagem.toString();
}