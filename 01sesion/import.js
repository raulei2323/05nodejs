function sumarPares (num){
  let result
  if(num % 2 == 0){
    for (i=0;i<=num;i++){
      result = i + (i + i)
    }
   return result

    }
  }


console.log(sumarPares(8))
