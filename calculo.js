//definir uma função
//chamar função ao clicar botão
function calcular(resultado){
    //consultar medidas selecionadas
    var a = document.querySelector('#unidades').value
    var b = document.querySelector('#unidades2').value
    var c = document.querySelector('#numeroA').value

    if (c == ''){
     var tot = alert('Digite um número antes de converter!')
     } else {

     //calcular fórmula de conversão
     if (a == 'mm'){
          var tot = unidademm()
          }

     if (a == 'cm'){
          var tot = unidadecm()

          }

          if (a == 'dm'){
               var tot = unidadedm()
     
          }

          if (a == 'm'){
               var tot = unidadedm()
     
          }
     
          //retornar resultado
          var resultado = `${tot} ${b}`
          var tela = document.querySelector('#Resultado')
          tela.innerHTML = resultado


          return resultado
     }
}


//Função converter MM para outros
function unidademm(){

    var a = document.querySelector('#unidades').value
    var b = document.querySelector('#unidades2').value
    var num = document.querySelector('#numeroA').value

    if (a == 'mm' && b == 'cm') {
        //milímetros para centímetros
        num = num/10
    }
 
    if (a == 'mm' && b == 'dm') {
         //milímetros para decímetros
         num = num/100
    }
     
    if (a == 'mm' && b == 'm') {
         //milímetros para metros
         num = num/1000
    }
 
    if (a == 'mm' && b == 'dam') {
         //milímetros para decâmetro
         num = num/10000
    }
 
    if (a == 'mm' && b == 'hm') {
         //milímetros para hectômetro
         num = num/100000
    }
 
    if (a == 'mm' && b == 'km') {
         //milímetros para kilômetro
         num = num/1000000
    }
     
    return num
}

//Função converter CM para outros
function unidadecm(){

     var a = document.querySelector('#unidades').value
     var b = document.querySelector('#unidades2').value
     var num = document.querySelector('#numeroA').value
 
     if (a == 'cm' && b == 'mm') {
         //centímetros para milímetros  
         num = num*10
     }
  
     if (a == 'cm' && b == 'dm') {
          //centímetros para decímetros
          num = num/10
     }
      
     if (a == 'cm' && b == 'm') {
          //centímetros para metros
          num = num/100
     }
  
     if (a == 'cm' && b == 'dam') {
          //centímetros para decâmetro
          num = num/1000
     }
  
     if (a == 'cm' && b == 'hm') {
          //centímetros para hectômetro
          num = num/10000
     }
  
     if (a == 'cm' && b == 'km') {
          //centímetros para kilômetro
          num = num/100000
     }
      
     return num
 }


 //Função converter DM para outros
function unidadedm(){

     var a = document.querySelector('#unidades').value
     var b = document.querySelector('#unidades2').value
     var num = document.querySelector('#numeroA').value
 
     if (a == 'dm' && b == 'mm') {
         //decímetros para milímetros  
         num = num*100
     }
  
     if (a == 'dm' && b == 'cm') {
          //decímetros para decímetros
          num = num*10
     }
      
     if (a == 'dm' && b == 'm') {
          //decímetros para metros
          num = num/10
     }
  
     if (a == 'dm' && b == 'dam') {
          //decímetros para decâmetro
          num = num/100
     }
  
     if (a == 'dm' && b == 'hm') {
          //decímetros para hectômetro
          num = num/1000
     }
  
     if (a == 'dm' && b == 'km') {
          //decímetros para kilômetro
          num = num/10000
     }
      
     return num
 }

 //Função converter M para outros
function unidadedm(){

     var a = document.querySelector('#unidades').value
     var b = document.querySelector('#unidades2').value
     var num = document.querySelector('#numeroA').value
 
     if (a == 'm' && b == 'mm') {
         //decímetros para milímetros  
         num = num*1000
     }
  
     if (a == 'm' && b == 'cm') {
          //decímetros para decímetros
          num = num*100
     }
      
     if (a == 'm' && b == 'dm') {
          //decímetros para metros
          num = num*10
     }
  
     if (a == 'm' && b == 'dam') {
          //decímetros para decâmetro
          num = num/10
     }
  
     if (a == 'm' && b == 'hm') {
          //decímetros para hectômetro
          num = num/100
     }
  
     if (a == 'm' && b == 'km') {
          //decímetros para kilômetro
          num = num/1000
     }
      
     return num
 }