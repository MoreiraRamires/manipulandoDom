// const producao = document.getElementById('producao');
const robotron = document.getElementById('robotron');
let braco = document.querySelector('#controle-contador-braco');
const controlesAjuste = document.querySelectorAll('.controle-ajuste');

controlesAjuste.forEach(
  (element)=>{
    element.addEventListener("click",()=>{
      manipulaDados(element.textContent)
    })
  }
)




function manipulaDados(operacao){

  if(operacao ==="-"){
    braco.value = parseInt(braco.value) -1 
  } else{
    braco.value = parseInt(braco.value) +1 
  } 
}
