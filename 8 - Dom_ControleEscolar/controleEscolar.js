// Selecionando os campos do html e inserindo-os nas variáveis 
let nome = document.getElementById("name")
let notaFinal = document.getElementById("nota-final")
let frequencia = document.getElementById("frequencia")
let resultado = document.getElementById("resultado")


// Selecionando os campos do botão no html e inserindo-os nas variáveis 
let btnCalcular = document.getElementById("btn-calcular")
btnCalcular.addEventListener("click", obeterResultado)

let areaRecuperacao = document.getElementById("area-recuperacao");

function obeterResultado(){

   if (frequencia.value >= 75.00){
      if(notaFinal.value >= 6.00){
         resultado.innerHTML = `O aluno(a) ${nome.value} está APROVADO!`
      }else{
         resultado.innerHTML = "Você não atingiu a nota desejada, será preciso inserir a nota de recuperação"

         areaRecuperacao.innerHTML = ""
         
         //inserindo no html a area para colocar a nota 
         areaRecuperacao.innerHTML = `
                <label for="nota-recuperacao" class="label">Nota de Recuperação</label>
                <input id="nota-recuperacao" class="campo" type="number" placeholder="Digite a nota de recuperação"/>
                <button id="btn-recuperacao" class="botao" onclick="calcularRecuperacao()">Calcular Recuperação</button>
            `
      }
   }
   else{
      resultado.innerHTML = `O aluno(a) ${nome.value} está reprovado por não atingir o mínimo de presença  `
      //oculta dinamicamente o campo
      areaRecuperacao.innerHTML = "" 
   } 
}


function calcularRecuperacao(){
   let notaRec = parseFloat(document.getElementById("nota-recuperacao").value);

   if (notaRec >= 6.0){
      resultado.innerHTML = `O aluno ${nome.value} foi APROVADO na recuperação!`;
   } else{
      resultado.innerHTML = `O aluno ${nome.value} foi REPROVADO na recuperação!`;
   }
}


