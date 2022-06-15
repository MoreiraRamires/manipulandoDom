// const producao = document.getElementById('producao');
const robotron = document.getElementById('robotron');
const controlesAjuste = document.querySelectorAll('.controle-ajuste');
const pecaTitulo= document.querySelectorAll('.peca-titulo')
let braco = document.querySelectorAll('.controle input');


controlesAjuste.forEach(
  (element)=>{
    element.addEventListener("click",()=>{
      manipulaDados(element.textContent)
    })
  }
)


pecaTitulo.forEach(

  (element)=>{
    let nomePeca = element.innerHTML
    nomePeca= nomePeca.toLowerCase()
    nomePeca= nomePeca.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    element.setAttribute('id',`controle-contador-${nomePeca}`) //label


    
  
 
  }
)





// input.createAttribute("id")
// input.setAttribute('MeuID')






function manipulaDados(operacao){

  if(operacao ==="-"){
    braco.value = parseInt(braco.value) -1 
  } else if (operacao ==="+"){
    braco.value = parseInt(braco.value) +1 
  } 
}
