import entradas from "readline-sync"; //importação readline-sync



// coleção de objetos dos salários
let salarios =[
    {salario: 510.00, ano: 2010},
    {salario: 545.00, ano: 2011},
    {salario: 622.00, ano: 2012},
    {salario: 678.00, ano: 2013},
    {salario: 724.00, ano: 2014},
    {salario: 788.00, ano: 2015},
    {salario: 880.00, ano: 2016},
    {salario: 937.00, ano: 2017},
    {salario: 954.00, ano: 2018},
    {salario: 998.00, ano: 2019},
    {salario: 1045.00, ano: 2020}
]

// coleção de objetos IPCA
let ipca =[
    {inflacao:5.91,  ano:2010},
    {inflacao:6.50,  ano:2011},
    {inflacao:5.84,  ano:2012},
    {inflacao:5.91,  ano:2013},
    {inflacao:6.41,  ano:2014},
    {inflacao:10.67, ano:2015},
    {inflacao:6.29,  ano:2016},
    {inflacao:2.95,  ano:2017},
    {inflacao:3.75,  ano:2018},
    {inflacao:4.31,  ano:2019},
    {inflacao:4.52,  ano:2020}
]


console.log("Escolha uma das alternativas: ")
console.log(" 1 - Listar o histórico do salário mínimo\n 2 - Listar o histórico da taxa IPCA (inflação)\n 3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)\n ")
let opcao = entradas.question("Digite a opção desejada: ")

let opcao_escolhida = Number(opcao) // conversão de string para número do input do usuário

if (opcao_escolhida >0 && opcao_escolhida<4) {
    

    if(opcao_escolhida == 1){
        console.log("opção escolhida: " + opcao_escolhida)
        for( let s of salarios){
            let remuneracao = s.salario;
            let a = s.ano;
            let mensagemSalario ="Salário Mínimo: ".padEnd(20) + "R$ " +remuneracao.toFixed(2).replace(".",",")+"\n";
            let mensagemAno = "Ano: ".padEnd(20) + a;
            console.log(mensagemAno);
            console.log(mensagemSalario);
            }
        
    }
    else if(opcao_escolhida == 2){
        console.log("opção escolhida: " + opcao_escolhida)
        for (let i of ipca){
            let a = i.ano;
            let inflacao = i.inflacao;
            let mensagemAno =  "Ano: ".padEnd(20) + a;
            let mensagemIPCA = "Inflação IPCA: ".padEnd(20) + inflacao.toFixed(2).replace(".",",")+"%\n";
            console.log(mensagemAno)
            console.log(mensagemIPCA)

        }
    }

    else {
       console.log("opção escolhida: " + opcao_escolhida);
       for(let contador = 0;contador<salarios.length &&contador < ipca.length;contador++ ){
        let salario = salarios[contador].salario;
        let ano = salarios[contador].ano
        let taxa = ipca[contador].inflacao
        if(contador === 0){
            console.log("Ano: ".padEnd(30) + ano);
            console.log("Salário Mínimo: ".padEnd(30) + "R$ " + salario.toFixed(2).replace(".", ","));
            console.log("Crescimento Salarial: ".padEnd(30) + "N/A");
            console.log("Inflação IPCA: ".padEnd(30) + taxa.toFixed(2).replace(".", ",") + "%\n");
        }
        else{
        let salarioAnterior = salarios[contador - 1].salario;
        let diferenca = salario - salarioAnterior;
        let crescimento = (diferenca/salarioAnterior) *100;
        let mensagemAno =  "Ano: ".padEnd(30) + ano;
        let mensagemSalario ="Salário Mínimo: ".padEnd(30) + "R$ " +salario.toFixed(2).replace(".",",");
        let mensagemCrescimento = "Crescimento Salarial: ".padEnd(30) + crescimento.toFixed(2)+"%";
        let mensagemIPCA = "Inflação IPCA: ".padEnd(30) + taxa.toFixed(2).replace(".",",")+"%\n";
        console.log(mensagemAno);
        console.log(mensagemSalario);
        console.log(mensagemCrescimento);
        console.log(mensagemIPCA)
            }
       }
    }
}
else {
    console.log("Opcãoo inválida")
}
