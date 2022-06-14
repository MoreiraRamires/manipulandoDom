// const producao = document.getElementById('producao');
const robotron = document.getElementById('robotron');
let braco = document.querySelector('#controle-contador-braco');

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

subtrair.addEventListener("click",()=>{
  manipulaDados("subtrair")
})

somar.addEventListener("click",()=>{
  manipulaDados("somar")
})

function manipulaDados(operacao){

  if(operacao ==="subtrair"){
    braco.value = parseInt(braco.value) -1 
  } else if (operacao ==="somar") {
    braco.value = parseInt(braco.value) +1 
  }
}