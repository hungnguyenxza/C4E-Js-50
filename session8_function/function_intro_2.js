
// // function tinhTong(a, b){
// //   let c = a + b;
// //   return c;
// // }

// // let arr = [5, 3, 6, 2, 1, 8];
// // //Function chỉ tìm số lớn nhất.
// // function timMax(mang){
// //   let max = mang[0];
// //   for (let i = 0; i < mang.length; i++) {
// //     if(max < mang[i]){
// //       max = mang[i];
// //     }    
// //   }
// //   return max;
// // }
// // let m = timMax(arr);
// // // console.log(m);

// // // function tinhHieu(a, b){
// // //   let c = a - b;
// // //   return c;
// // // }

// // function kiemTraSoNguyenTo(n){
// //   let count = 0;
// //   for (let i = 1; i <= n; i++) {
// //     if(n % i === 0){
// //       count++;
// //       if(count > 2){
// //         return false;
// //       }
// //     }
// //   }
// //   return true;
// // }
// // console.log(kiemTraSoNguyenTo(11));

// // // Viết 1 function, nhận vào 1 mảng và 1 số n, 
// // // trả về 1 mảng là danh sách các số > n.

// // function filterArray(arr, N){
// //   let result = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if(arr[i] > N){
// //       result.push(arr[i]); // vào cuối
// //       //result.unshift(arr[i]); // vào đầu
// //     }
// //   }
// //   return result;
// // }

// let age = 20;

// function changeAge(a){
//   a = a + 2;
// }
// console.log(age); // 20
// changeAge(age);
// console.log(age); // 20

// let person = {
//   'age': 20
// }
// function changeAgePerson(p){
//   p.age = p.age + 2;
// }
// console.log(person); // age: 20
// changeAgePerson(person);
// console.log(person); // age: 22

// setTimeout(function(){
//   console.log("chạy silde ảnh");
// }, 3*1000);

console.log("Web site đã load xong");

function runSlideImage(){
  console.log("chạy slide ảnh");
}
// setTimeout(runSlideImage, 3 * 1000);

//let s = setInterval(runSlideImage, 3 * 1000);

// setTimeout(function(){
//   clearInterval(s);
// }, 10 * 1000);

function getNow(){
  console.clear();
  let now = new Date();
  console.log(now.toString());
}

setInterval(getNow, 1 * 1000);