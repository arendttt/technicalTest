
 
// atividade 01
function fibonacciCount(num) {
  let fibSequence = [0, 1];

  for (let i = 2; i < num; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  };

  return fibSequence;
}

const num = 10
const sequence = fibonacciCount(num)

console.log(sequence)

if (sequence.includes(num)) {
  console.log("Pertence à sequencia")
} else {
  console.log("Não pertence à sequencia")
}



// atividade 2
function checkLetterA(n) {
  let count = 0;

  for (let i = 0; i < n.length; i++) {
    if(n[i] === 'a' || n[i] === 'A') {
      count++;
    }
  }

  if (count > 0) {
    console.log(`A letra A aparece ${count} vezes na string!`)
  } else {
    console.log('A letra A não aparece na string!')
  }
}

const n = "milenaaaa"
checkLetterA(n)




// atividade 3
let indice = 12;
let soma = 0;
let k = 1;

while(k < indice) {
  k = k + 1;
  soma = soma + k;

  console.log(soma);
};


// atividades 4 e 5 no arquivo README.md








