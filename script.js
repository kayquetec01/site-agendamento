

function agendar(){
    const profissional = document.getElementById("profissional").value;
    const serviço = document.getElementById("serviço").value;

    if(profissional === "" || serviço === ""){
        alert("Selecione todos os itens para agendar!");
        return;
    }

    alert("Seu agendamento foi realizado com sucesso!")

}