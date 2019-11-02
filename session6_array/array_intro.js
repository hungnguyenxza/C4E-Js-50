
// // let arr = [1, 2, 3, 4, 5, 6];
// // let names = ["Hang", "Quang", "Hien"];

// // // console.log(arr);
// // // console.log(names);

// // // console.log(names[1]);
// // // names[5] = "Duy";
// // // console.log(names);

// // names.push("a", "b");
// // // console.log(names);

// // console.log(names);
// // let last = names.pop();
// // console.log(last);
// // console.log(names);
// // let first = names.shift();
// // console.log(first);
// // console.log(names);
// // names.splice(2, 1);
// // console.log(names);

// let numbers = [5, 7, 3, 1, 9, 10, 12];
// // for (let index = numbers.length - 1; index >= 0; index--) {
// //     let element = array[index];
// //     console.log(element);
// // }

// // Tính tổng các giá trị của mảng
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// let avg = sum / numbers.length;
// console.log(avg);

// let phones = ["iPhone X", "Note 10", "Xperia 2"];

// let arr = [2, 3, 5, 1, 7];
// let N = parseInt(prompt("Nhập 1 số"));
// let isExist = false;
// // thuật toán tìm kiếm
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   if(element === N) {
//     isExist = true;
//     break;
//   }
// }
// if(isExist){
//   console.log("Có số vừa nhập");
// }else{
//   console.log("Không có số vừa nhập");
// }


let arr = [2, 3, 5, 1, 7];
let N = parseInt(prompt("Nhập 1 số"));
let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if(element >= N){
    result.push(element);
  }
}
if(result.length === 0){
  console.log("Không có giá trị thỏa mãn");
}else{
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    console.log(element);
  }
}