// Exercício 01

console.log('-> Atividade 01: Dobro do vetor')

const numInteiros = [5, 10, 15, 20, 25]

const dobroInteiros = []

for (let valor of numInteiros){
    let dobro = valor * 2;
    dobroInteiros.push(dobro)
}

alert(`Vetor: ${numInteiros}\nDobro do vetor: ${dobroInteiros}`)

//Exercício 02
console.log('-> Atividade 02: Média do vetor')

const oitoInteiros = [1, 5, 7, 12, 18, 25, 30, 42]

let soma = 0;

for (let i = 0; i < oitoInteiros.length; i++){
    soma += oitoInteiros[i]
}

let mediaArit = soma/ oitoInteiros.length

alert(`Vetor: ${oitoInteiros}\nMédia Aritimética dos valores do vetor: ${mediaArit}`)


//Exercício 3
console.log('-> Atividade 03: Idades acima da média')

let contador = 0
const idades = []
const acimaMedia = []

while(contador < 20){
    contador +=1
    let idade = Number(prompt(`Insira a idade da ${contador}° pessoa: `))
    idades.push(idade)
    
}

const somatoria = idades.reduce((add, atual) => {
    return add + atual
})

let mediaIdades = somatoria / idades.length

for(let i = 0; i < idades.length; i ++){
    if (mediaIdades < idades[i]){
        acimaMedia.push(idades[i])
        continue
    }
}

alert(`Média das idades: ${mediaIdades}\nIdades Acima da média: ${acimaMedia}`)


//Exercício 04
console.log('-> Atividade 04: Numeros pares')

let contador01 = 0;
const pares = []
const impares = []

while(contador01 < 10){
    contador01 +=1
    let numero = Number(prompt(`Insira o ${contador01}° número: `))
    if (numero %2 == 0){
        pares.push(numero)
    }else{
        impares.push(numero)
    }
}

if (pares.length == 0){
    alert(`Todos os números são ímpares\nNúmeros adicionados: ${impares}`)
}else{
    alert(`Números pares: ${pares}`)
}


//Exercício 05
console.log('-> Atividade 05: Valores entre 100 e 200')

let contador02 = 0;
const listIntervlo = [];

do{
    
    let numerosIntervalo = Number(prompt(`Insira o ${contador02 +1}° número entre 100 e 200: `))
    if(numerosIntervalo >= 100 && numerosIntervalo <=200){
        contador02 += 1
        listIntervlo.push(numerosIntervalo)
    }else{
        alert("Valor Inválido, tente novamente")
        continue
    }
}while(contador02 < 8)

alert(`Valores armazenados: ${listIntervlo}`)


//Exercício 06
console.log('-> Atividade 06: Nome na String')

const listNomes = ["Marcelo", "Thayná", "Ricardo", "Marlene", "Marina", "Lucas", "Rafaela", "Felipe", "Regina", "Sandra"]

let newName = String(prompt("Insira um nome com a primeira letra maiúscula: "))

busca = listNomes.indexOf(newName)

if (busca !== -1){
    alert(`O nome inserido (${newName}) está armazenado no índice: ${busca}`)
}else{
    alert(`Nome não encontrado!`)
}


// Exercício 07
console.log('-> Atividade 07: Nome na String 2.0 5 tentativas')

let tentativas = 0
do{
    tentativas += 1
    console.log(tentativas)

    const listNomes = ["Marcelo", "Thayná", "Ricardo", "Marlene", "Marina", "Lucas", "Rafaela", "Felipe", "Regina", "Sandra"]

    let newName = String(prompt("Insira um nome com a primeira letra maiúscula: "))

    busca = listNomes.indexOf(newName)

    if (busca !== -1){
        alert(`O nome inserido (${newName}) está armazenado no índice: ${busca}\nVocê acertou na sua ${tentativas}° tentativa`)
        break
    }else{
        alert(`Nome não encontrado!`)
        continue
    }

}while(tentativas < 5)

alert('Suas tentativas acabaram!!!')


// Exercício 08
console.log('-> Atividade 08: Vetor A Vetor B')

let contador03 = 0;
let vetorA = []
let vetorB = []

do{
    contador03 += 1
    let valoresA = Number(prompt(`Insira o ${contador03}° número: `))
    vetorA.push(valoresA)

}while(contador03 < 6)

for(let i = 0; i < vetorA.length; i++){
    valoresB = vetorA[i]/2
    vetorB.push(valoresB)
}

alert(`Vetor A: ${vetorA}\nVetor B: ${vetorB} `)


// Exercício 09
console.log('-> Atividade 09: Vetor A Vetor B e Vetor C')

let contador04 = 0;
let contador05 = 0;
let vetA = []
let vetB = []
let vetC = []

do{
    contador04 += 1
    let valueA = Number(prompt(`Insira o ${contador04}° número do VetorA: `))
    vetA.push(valueA)

}while(contador04 < 5)

do{
    contador05 += 1
    
    let valueB = Number(prompt(`Insira o ${contador05}° número do VetorB: `))
    vetB.push(valueB)

}while(contador05 < 5)

for (let i = 0; i < vetA.length; i++){
    vetC.push(vetA[i])
    vetC.push(vetB[i])
}

alert(`Vetor A: ${vetA}\nVetor B: ${vetB}\nVetor C: ${vetC}`)
