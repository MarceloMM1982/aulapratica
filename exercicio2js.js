const campo1= document.querySelector("#campo1");
const campo2= document.querySelector("#campo2");
const operacao= document.querySelector("#selecao");
const botao= document.querySelector("#botao");
let resposta= document.querySelector("#resposta");

operacao.addEventListener("click",calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup",calcular);

function calcular() {
    if(campo1.value != '' || campo2.value != ''){
    
    
    
            const digitado1 = parseInt(campo1.value);
            const digitado2 = parseInt(campo2.value);
            const selecionado = operacao.value; 
    
         if (selecionado==="soma")
        resposta.innerHTML= digitado1 + digitado2;
        if (selecionado==="subtracao")
        resposta.innerHTML= digitado1 - digitado2;
         if (selecionado==="mutiplicacao")
         resposta.innerHTML= digitado1 * digitado2;
         if (selecionado==="divisao")
         resposta.innerHTML= digitado1 / digitado2;
    }
}
