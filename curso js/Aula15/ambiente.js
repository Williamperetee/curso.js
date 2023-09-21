let num=[5,8,2,9,3]

num.sort()/*imprimir vetores em ordem crescente*/
num.push(1)/*acrescentar 1 elemento no final do vetor*/
console.log(num)
console.log(`nosso vetor teme ${num.length} posicoes`)/*contar a quantidade de vetores*/


console.log(`o primeiro valor do vetor e ${num[0]}`)
let pos=num.indexOf(8)//acha a posicao do numero que esta no vetor
if(pos== -1){
    console.log(`o valor nao existe`)
}else{
    console.log(`O valor 8 esta na posicao ${pos} `)
}

