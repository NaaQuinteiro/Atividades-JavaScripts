
// Exercício 01

//fução para checar se os numeros são iguais
function comparacao(n1,n2){
    if (n1 == n2){
        return `Erro, insira dois numeros diferentes`
    }
    else{
        return true
    }
}


//função de média aritimetica
function mediaAritimetica (n1, n2){
    return (n1 + n2)/ 2;
}
    
//função de menor numero 
function menorNumero(n1,n2){
    if (n1 < n2){
        return `Menor número: ${n1}`;

    }else{
        return `Menor número: ${n2}`;
    }
}

//função diferença entre + e - numero
function diferenca(n1,n2){
    if (n1 > n2){
        return `Diferença: ${n1 - n2}`;

    }else{
        return `Diferença: ${n2 - n1}`;
    }
}

//função que apresenta os números em ordem crescente.
function ordemCrescente(n1,n2){
    if (n1 < n2){
        console.log (`Ordem Crescente: ${n1}, ${n2}`);

    }else{
        console.log (`Ordem Crescente: ${n2}, ${n1}`);
    }
}



num1 = Number(prompt('Digite 1 número: '))
num2 = Number(prompt('Digite mais 1 número: '))

if (comparacao(num1, num2) == true){
    opcao = Number(prompt('Digite o número da opção que deseja vizualizar:\n1 – Apresente a média aritmética dos números.\n2 – Apresenta o menor número.\n3 – Apresenta a diferença entre o maior e o menor número.\n4 – Apresenta os números em ordem crescente.'));

    switch (opcao) {
    
        case 1:
           alert(mediaAritimetica(num1, num2))
           break
        case 2:
            alert(menorNumero(num1, num2))
            break
        case 3:
             alert(diferenca(num1, num2))    
             break
        case 4:
            alert(ordemCrescente(num1, num2))
            break
        default:
            alert('Opção inválida!')    
        }
} else{
    alert(comparacao(num1, num2))
}

