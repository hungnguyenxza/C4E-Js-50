
// let a = 50;
// let b = 20;
// let soSanhBang = a === b;
// // console.log(soSanhBang);
// let c = 30;

// let phepVa = (a > b) && (a > c); 
// // kiểm tra a có là số lớn nhất k?
// console.log(phepVa);

// let a = Number(prompt("Nhập a:"));
// let b = Number(prompt("Nhập b:"));

// if(a > b){
//     console.log("a lớn hơn b");
// }

// let n = parseInt(prompt("Nhập n"));
// if(n % 2 === 0){
//     console.log("Đây là số chẵn");
// }
// else{
//     console.log("Đây là số lẻ");
// }

// Nhập a, b, c => tìm số lớn nhất
// Nhập vào 1 tháng trong năm, in ra số ngày

// let thang = Number(prompt("Nhập tháng: "));
// if(thang === 1 
// || thang === 3 
// || thang === 5 
// || thang === 7 
// || thang === 8 
// || thang === 10 
// || thang === 12){
//     console.log(`Thang ${thang} có 31 ngày`);    
// }
// else if(thang === 4 
//     || thang === 6 
//     || thang === 9 
//     || thang === 11){
//     console.log(`Thang ${thang} có 30 ngày`);
// }
// else if(thang === 2){
//     console.log(`Thang ${thang} có 28 hoặc 29 ngày`);
// }
// else if(thang > 12 || thang < 1){
//     console.log("Khong tồn tại!");
// }

let thang = Number(prompt("Nhập tháng: "));
switch(thang){
    case 1:
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10:
    case 12:
        console.log("31 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 ngày");
        break;
    case 2:
        console.log("28 hoặc 29 ngày");
        break;
    default:
        console.log("Nhập sai");
        break;
}