// console.log("Hello, world");
// tạo 1 function, có chức năng
// in ra màn hình dòng Hello, world

function print() {
  console.log("Hello, world");
}

// print();
// print();

function chiSoBMI() {
  let chieuCao = Number(prompt("Nhập chiều cao (cm): "));
  let canNang = Number(prompt("Nhập cân nặng (kg): "));
  let bmi = canNang / (chieuCao * chieuCao);
  console.log(bmi);
  if (bmi < 18.5) {
    console.log("Gầy");
  }
  else if (bmi < 24.9) {
    console.log("Bình thường");
  }
  else if (bmi < 29.9) {
    console.log("Hơi béo");
  }
  else if (bmi < 34.9) {
    console.log("Béo");
  } else {
    console.log("Béo phì");
  }
  // print();
}
// chiSoBMI();

function print2(message) {
  console.log(message);
}
// print2("Welcome");
// let m = "abc";
// print2(m);

// Viết 1 function, nhận vào 2 giá trị số
// in 2 giá trị ra.

function print3(a, b) {
  console.log("a = " + a); // 5
  console.log("b = " + b); // 3
}
let a = 5, b = 3;
// print3(a, b);

// viết 4 function, nhận 2 số
// 4 : tổng, hiệu, tích, thương.
// in kết quả ra màn hình.
// x + y = tong
// x - y = hieu ...
function tinhTong(x, y) {

}
function tinhHieu(x, y) {

}
function tinhTich(x, y) {

}
function tinhThuong(x, y) {

}

// let soThuNhat = 5;
// let soThuHai = 10;



// 1. Đảo chuỗi: Viết 1 function, nhận vào 1 chuỗi, 
// in ra màn hình chuỗi bị đảo ngược thứ tự. 
// Ví dụ: Nhận vào Hello world sẽ in ra: dlrow olleH

function reversedString(str) {
  let res = '';
  for (let index = str.length - 1; index >= 0; index--) {
    res += str[index];
    //res += str.charAt(index);
  }
  console.log(`String: ${str}\nReversedString: ${res}`);
}
let string = "Hello World!";
reversedString(string);

// 2. Giả sử 1 gia đình nuôi 1 đàn gà (giả sử 10 con). Tạo 1 mảng lưu trọng lượng của đàn gà này.
// a. Giả sử sau 2 tuần, trong lượng mỗi con trong đàn đều tăng gấp rưỡi, viết 1 function nhận vào 1 mảng, function thực hiện thay đổi này.

let weight = [4 , 2.3 , 3.4 ,5 ,2 , 2.5 ,5 ,1.3,3.3,4.1];
function weighttd(arr){
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 1.5;
  }
  console.log(arr);
}
weighttd(weight);

// b. Gia đình muốn tìm con gà có trọng lượng lớn nhất để bán. Viết 1 function theo yêu cầu.

function timConLonNhat(arr){
  let max = arr[0];
  let stt = 0;
  for (let i = 1; i < arr.length; i++) {
    if(max < arr[i]){
      max = arr[i];
      stt = i;
    }
  }
  console.log("STT: " + (stt + 1));
  console.log(max);
}
timConLonNhat(weighttd);

// c. Có 1 đợt dịch H5N1 tràn về, đàn gà bị chết 3 con (chọn ngẫu nhiên), và những con còn lại trọng lượng bị giảm 1 nửa. hãy viết function (nhận vào 1 mảng) mô tả đợt dịch này.

function removeRandomChicken(arr){
  let random = Math.random() * arr.length;
  arr.splice(random, 1);
}

function removeNChicken(N){
  for (let i = 0; i < N; i++) {
    removeRandomChicken(weighttd);
  }
}
removeNChicken(3);


