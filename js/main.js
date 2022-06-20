// const producao = document.getElementById('producao');
const controlesAjuste = document.querySelectorAll('[data-controle]');


controlesAjuste.forEach(
  (element)=>{
    
    element.addEventListener("click",(event)=>{

      let controle = event.target
      
      manipulaDados(controle.dataset.controle,controle.parentNode)


    })
  }
)

function manipulaDados(operacao,controle){
  let peca = controle.querySelector('[data-contador]');
  console.log(controle)


  if(operacao ==="-"){
    peca.value = parseInt(peca.value) -1 
    if(peca.value <=0){
      peca.value = 0
      alert("n")
    }
  } else if (operacao ==="+"){
    peca.value = parseInt(peca.value) +1 
  } 


}
