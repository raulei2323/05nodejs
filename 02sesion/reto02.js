function primosCo (num) {
  if(num === 2 || num === 3){
    return `${num} Es numero primo`
  }
  for (i = 1; i <= num; i ++){
       
      comprob = num / i 
      comprob2 = num % 2
      comprob3 = num % 3
      comprob5 = num % 5
      comprob7 = num % 7
      
      if (comprob == 1 && comprob2 !== 0 &&  comprob3 !== 0 && comprob5 !== 0 && comprob7 !== 0){
        
        return `${num} Es numero primo`
      }
    }
  return `${num} No es numero primo`
}
function iteradorNum (num){

  for ( let counter = 1; counter <= num; counter ++){
    
    console.log(primosCo(counter))
  }

}
iteradorNum(1000)

// console.log(primosCo(20))
// console.log(primosCo(process.argv[2]))
//?  Hardcodee en la linea 2 pero creo que funciona correctamente


function calcuTriangle (altura, base){
    let result 
    result = (altura * base)/ 2
    return 'El area es ' + result

}

// console.log(calcuTriangle(30, 30))
// console.log(calcuTriangle(process.argv[3]))

//? funciona correctamente



