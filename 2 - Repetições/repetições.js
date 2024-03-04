// Exercício 01

console.log('-> Atividade 01: Notas da Sala')

let notas = [];
let contador = 1;
let soma = 0

while(true){
    let alunos = Number(prompt('Deseja inserir a nota de um aluno?\n1 - Sim 2 - Não'))

    if(alunos == 1){
        let nota = Number(prompt(`Insira a nota do aluno ${contador}:`))
        notas.push(nota)
        contador += 1
        continue 
    }
    else{
        let nAlunos = notas.length;
        for(let i = 0; i < nAlunos; i++){
            soma += notas[i]
        }
        let media = soma/nAlunos

        alert(`QUANTIDADE DE NOTAS LIDAS: ${nAlunos}\nMÉDIA ARITIMÉTICA DAS NOTAS DA SALA: ${media}`)
        break
    }
    

}

// Exercício 02
console.log('-> Atividade 02: Idades até 100')

let soma100 = 0;
let maior = 0;
pessoa = 1;

do{
    let idade = Number(prompt(`Insira a idade da ${pessoa}° pessoa: `))

    soma100 += idade

    if(idade > maior){
        maior = idade;
    }

}while(soma100 < 100);

alert(`A soma total das idades foi: ${soma100}\nA idade da pessoa mais velha é: ${maior}`)


//Exercício 03
console.log('-> Atividade 03: N° inicial e final')

let inicial = Number(prompt('Insira o numero inicial: '))
let final = Number(prompt('Insira o numero fianl: '))

let intervalo = []

for(let i = inicial; i < final; i += 3){
    intervalo.push(i)
}
//remover o primeiro valor
intervalo.shift()

alert(`O intervalo entre os números ${inicial} e ${final}:\n${intervalo}`)

