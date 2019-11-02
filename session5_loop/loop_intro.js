

// for (let index = 0; index < 5; index++) {
//     //console.log("Hello C4E 50");
//     console.log(index);
// }

// let N = parseInt(prompt("Nhập N"));
//parseFloat("số nào đó") => chuyển về số thực
// Number("số nào đó") => chuyển về 1 số
// for (let index = 1; index < N + 1; index++) {
//     console.log(index);
// }

// for (let index = 0; index <= N; index++) {
//     // if(index % 2 === 0){ // Nếu index là số chẵn
//     //     console.log(index);
//     // }
//     if(index % 2 !== 0){ // Nếu index là số lẻ
//         console.log(index);
//     }
// }

// for (let index = 1; index <= N; index = index + 2) {
//     console.log(index);
// }

// Tính tổng: 

// let s = 0;
// for (let index = 1; index <= N; index++) {
//     s += index;
// }
// console.log(s);

//Giai thừa
// let s = 1;
// for (let i = 1; i <= N; i++) {
//     s *= i;
// }
// console.log(s);

// let N = Number(prompt("Nhập N"));
// while(N < 8){
//     N = Number(prompt("Nhập số lớn hơn bằng 8:"));
// }
// console.log(N);

// tiếp tục vs break và continue;
// 1. Nhập mk ít nhất 8 ký tự
// 2. Nhập mk ít nhất 8 ký tự, chứa
// ký tự đặc biệt . @ #

// let matKhau = prompt('Mời nhập mk:');

// while (matKhau.length < 8) {
//     matKhau = prompt('mk chưa đủ 8 kí tự, xin mời bạn nhập lại:');
// }
// while (matKhau.indexOf('@') === -1 || matKhau.includes('#') === false) {
//     matKhau = prompt('mk của bạn thiếu đồng thời các kí tự đặc biệt, mời bạn nhập lại:')
// }

// console.log(matKhau);

// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 1){ // số lẻ
//         break;
//     }
//     console.log(i);
// }

// kiểm tra 1 số là số nguyên tố.
let N = parseInt(prompt("Nhập 1 số"));
let isSNT = true;
for (let i = 2; i < N; i++) {
    if(N % i === 0){
        isSNT = false;
        break;
    }
}
if(isSNT){
    console.log(`${N} là số nguyên tố`);
}else{
    console.log(`${N} không là số nguyên tố`);
}
