//Given a string of words, you need to find the highest scoring word.

//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

//You need to return the highest scoring word as a string.

//If two words score the same, return the word that appears earliest in the original string.

//All letters will be lowercase and all inputs will be valid.


function high(x){
    //dividir en palabras
    let palabras = x.split(" ")
    // valor de cada letra
    let letrasYValor = "abcdefghijklmnopqrstuvwxyz"
    letrasYValor = letrasYValor.split("")
   
    //loop de cada palabra
    for (let palabra of palabras) {
      let valorDeLaPalabra = 0
      //loop de cada letra
      for (let letra of palabra) {
        valorDeLaPalabra += letrasYValor.indexOf(letra) + 1
      }
      palabras[palabras.indexOf(palabra)] = {palabra, valorDeLaPalabra}
    }
    palabras.sort(function(b, a) { 
      return a.valorDeLaPalabra - b.valorDeLaPalabra;
  })
    console.log(palabras)
  return palabras[0].palabra
  }