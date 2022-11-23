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
          var tot = unidadem()

     }
     if (a == 'dam'){
          var tot = unidadedam()

     }
     if (a == 'hm'){
          var tot = unidadehm()

     }
     if (a == 'km'){
          var tot = unidadekm()

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
function unidadem(){

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
 
//Função converter DAM para outros
function unidadedam(){

     var a = document.querySelector('#unidades').value
     var b = document.querySelector('#unidades2').value
     var num = document.querySelector('#numeroA').value
 
     if (a == 'dam' && b == 'mm') {
         //decâmetros para milímetros  
         num = num*10000
     }
  
     if (a == 'dam' && b == 'cm') {
          //decâmetros para centímetros
          num = num*1000
     }
      
     if (a == 'dam' && b == 'dm') {
          //decâmetros para decímetros
          num = num*100
     }
  
     if (a == 'dam' && b == 'm') {
          //decâmetros para metros
          num = num*10
     }
  
     if (a == 'dam' && b == 'hm') {
          //decâmetros para hectômetro
          num = num/10
     }
  
     if (a == 'm' && b == 'km') {
          //decâmetros para kilômetro
          num = num/100
     }
      
     return num
 }

 //Função converter HM para outros
function unidadehm(){

     var a = document.querySelector('#unidades').value
     var b = document.querySelector('#unidades2').value
     var num = document.querySelector('#numeroA').value
 
     if (a == 'hm' && b == 'mm') {
         //hectômetro para milímetros  
         num = num*100000
     }
  
     if (a == 'hm' && b == 'cm') {
          //hectômetro para centímetros
          num = num*10000
     }
      
     if (a == 'hm' && b == 'dm') {
          //hectômetro para decímetros
          num = num*1000
     }
  
     if (a == 'hm' && b == 'm') {
          //hectômetro para metros
          num = num*100
     }
  
     if (a == 'hm' && b == 'dam') {
          //hectômetro para hectômetro
          num = num*10
     }
  
     if (a == 'hm' && b == 'km') {
          //hectômetro para kilômetro
          num = num/10
     }
      
     return num
 }

  //Função converter KM para outros
function unidadekm(){

     var a = document.querySelector('#unidades').value
     var b = document.querySelector('#unidades2').value
     var num = document.querySelector('#numeroA').value
 
     if (a == 'km' && b == 'mm') {
         //kilômetro para milímetros  
         num = num*1000000
     }
  
     if (a == 'km' && b == 'cm') {
          //kilômetro para centímetros
          num = num*100000
     }
      
     if (a == 'km' && b == 'dm') {
          //kilômetro para decímetros
          num = num*10000
     }
  
     if (a == 'km' && b == 'm') {
          //kilômetro para metros
          num = num*1000
     }
  
     if (a == 'km' && b == 'dam') {
          //kilômetro para hectômetro
          num = num*100
     }
  
     if (a == 'km' && b == 'hm') {
          //kilômetro para kilômetro
          num = num*10
     }
      
     return num
 }