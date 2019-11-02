
let N = 10;
let s = 0;
for (let i = 1; i <= N; i++) {
  s += tinhGiaiThua(i);
}

console.log(s);

function tinhGiaiThua(n){
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
