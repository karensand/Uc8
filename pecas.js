var listaDePecas = ["Filtro de Ar","Motor","Amortecedor"]

if (listaDePecas.length < 10){
    //É possível cadastrar
        console.log ("É possível cadastrar mais peças")
} else {
    console.log ("Não tem mais espaço na lista")
}


let peso = 50;
if (peso<100){
    //A peça deve ter peso mínimo
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}


let nomePeca = "Disco de Freio"
if (nomePeca.length>3){
    //O nome deve ser cadastrado de forma correta
    console.log("Nome da peça está adequado para o cadastro!")
} else{
    console.log ("O nome deve ter mais 3 caracteres, digite um nome adequado")
}