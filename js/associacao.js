
$(document).ready(function(){
    $("#inputCPF").mask("000.000.000-00")
    $("#inputTelefone").mask("(00)00000-0000")
    $("#inputCEP").mask("00000-000")
    $("#inputNascimento").mask("00/00/0000")
})

  function Enviar() {

    var nome = document.getElementById("nomeCompleto");
    var CPF = document.getElementById("inputCPF");
    var telefone = document.getElementById("inputTelefone");
    var CEP = document.getElementById("inputCEP");
    var nascimento = document.getElementById("inputNascimento");
    var cidade = document.getElementById("inputCidade");
    var estado = document.getElementById("inputEstado");

    if (nome.value != ""&&CPF.value!=""&&telefone.value!=""&&nascimento.value!=""&&CEP.value!=""&&cidade.value!=""&&estado.value!="") {
        alert('Obrigado sr(a) ' + nome.value + '! Os seus dados foram encaminhados com sucesso. Aguarde até que um de nossos funcionários entre em contato para maiores informações.');
    }

}