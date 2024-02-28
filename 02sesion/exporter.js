function sumPares(num) {
    let count = 0
    for (let index = 0; index <= num; index+=2){
        count += index
    }
    return count

}
console.log(process.argv[2])