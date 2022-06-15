// const producao = document.getElementById('producao');
const robotron = document.getElementById('robotron');
let braco = document.querySelector('.controle input');
const controlesAjuste = document.querySelectorAll('.controle-ajuste');
const pecaTitulo= document.querySelectorAll('.peca-titulo')


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
    


    // console.log(element)
 
  }
)







function manipulaDados(operacao){

  if(operacao ==="-"){
    braco.value = parseInt(braco.value) -1 
  } else if (operacao ==="+"){
    braco.value = parseInt(braco.value) +1 
  } else{
    alert("oi")
  }
}
