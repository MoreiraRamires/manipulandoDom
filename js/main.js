// const producao = document.getElementById('producao');
const robotron = document.getElementById('robotron');
const controlesAjuste = document.querySelectorAll('.controle-ajuste');
const pecaTitulo= document.querySelectorAll('.peca-titulo')


controlesAjuste.forEach(
  (element)=>{
    
    element.addEventListener("click",(event)=>{

      let controle = event.target
      
      manipulaDados(controle.textContent,controle.parentNode)


    })
  }
)

// input.createAttribute("id")
// input.setAttribute('MeuID')






function manipulaDados(operacao,controle){
  let peca = controle.querySelector('.controle-contador');
  console.log(controle)


  if(operacao ==="-"){
    peca.value = parseInt(peca.value) -1 
  } else if (operacao ==="+"){
    peca.value = parseInt(peca.value) +1 
  } 
}
