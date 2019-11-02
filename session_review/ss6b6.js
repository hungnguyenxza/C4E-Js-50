// Session 6: bài 6
let arr = [12,23,34,121,21,37,34,55,31];
let n = Number(prompt('Mời bạn nhập số n:'));
function timSo(arr,n) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > n) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(arr);
console.log(timSo(arr,n));

