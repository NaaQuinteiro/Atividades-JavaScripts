// Exercício 01

console.log('-> Atividade 01: Categoria do Atleta')

idadeAtleta = Number(prompt('Informe a idade do Atleta'));

if (idadeAtleta <18){
    alert(`A idade do Atleta é ${idadeAtleta}\nCategoria Juvenil`)
}else{
    alert(`A idade do Atleta é ${idadeAtleta}\nCategoria Adulto`)
}


// Exercício 02

console.log('\n-> Atividade 02: Valor da Hospedagem')

diarias = Number(prompt('Informe o total de diárias'));

const valorDiaria = 200;

let valorTotal = Number;

if (diarias > 10){
    valorTotal = 210 * diarias
    alert(`Total de Diárias: ${diarias}\nValor Total: R$${valorTotal}.00`);

}else if(diarias == 10){
    valorTotal = 215 * diarias
    alert(`Total de Diárias: ${diarias}\nValor Total: R$${valorTotal}.00`);

}else{
    valorTotal = 220 * diarias
    alert(`Total de Diárias: ${diarias}\nValor Total: R$${valorTotal}.00`);
}


//Exercício 03

console.log('\n-> Atividade 03: Categoria do IMC')

let altura = Number(prompt('Insira a sua altura'));
let peso = Number(prompt('Insira o seu peso'));

const imc = peso/ (altura*altura);

if (imc < 18.5){
    alert(`IMC: ${imc.toFixed(2)}\nCategoria: Abaixo do Peso`);

}else if(imc >= 18.5 && imc <25){
    alert(`IMC: ${imc.toFixed(2)}\nCategoria: Normal`);

}else if (imc >= 25 && imc <30){
    alert(`IMC: ${imc.toFixed(2)}\nCategoria: Acima do Peso`);

}else{
    alertg(`IMC: ${imc.toFixed(2)}\nCategoria: Obeso`);
}

