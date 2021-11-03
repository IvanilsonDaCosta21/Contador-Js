// variaveis Composta

let num  = [5,6,8,4,2,7,1]
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


for(let pos = 0; pos < num.length; pos++){
  console.log(num[pos])
}

for(let pos in num){
  console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}


console.log(num.indexOf(7))


