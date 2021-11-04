// function soma(n1=0 , n2=0){
// return n1 + n2
// }
// console.log(soma(2,9))

// let v = function(x){
//   return x*2
// }
// console.log(v(2))


// Fatorial
function fatorial(n){
  let fat = 1
  for(let c = n; c > 1;c--){
    fat *= c
  }
  return fat
}
console.log(fatorial(4))

// Recursiva
function fatorial(n){
  if(n == 1){
    return 1
  }else{
    return n * fatorial(n-1)
  }
}
console.log(fatorial(4))