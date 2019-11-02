
let person = {
  "name": "Hung",
  'age': 20,
  'school': 'ĐH Quốc gia',
  'country': "VN",
}
// console.log(person);
// // cho người dùng nhập key và value
// // => thêm vào biến person.
// let key = prompt("Key mới");
// let value = prompt("Value:");
// person[key] = value;
// person.key = value;

// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     const value = person[key];
//     console.log(key + ": " + value);
//   }
// }

// Kiểm tra 1 key đã có trong object hay chưa?
// Kiểm tra 1 value đã có trong object hay chưa?
// let search = "20";
// let isExistValue = false;
// for (const key in person) {
//   const value = person[key];
//   if(value == search){
//     isExistValue = true;
//     break;
//   }
// }
// if(isExistValue){
//   console.log("Có giá trị");
// }else{
//   console.log("Không có giá trị");
// }

// // kiểm tra key có trong object
// let keySearch = "name";
// if(person.hasOwnProperty(keySearch)){
//   console.log("Có chưa key");
// }else{
//   console.log("Không chưa key");
// }

// let sinhVien = {
//   'name': "Phạm Văn A",
//   'age': 20,
//   'school': 'ĐH Quốc Gia',
//   'hobbit': ['soccer', 'tv', 'reading'],
//   'class': {
//     'id': '1',
//     'name': 'C4E JS 50'
//   }
// };

// console.log(sinhVien.name);
// console.log(sinhVien.age);
// console.log(sinhVien.school);
// console.log(sinhVien.hobbit);
// console.log(sinhVien.class);

// // let age = 20;
// // age += 2;
// sinhVien.age += 2;

// // let arr = [];
// // arr.push('ab');
// sinhVien.hobbit.push('watching');
// sinhVien.hobbit.shift();

// // sinhVien.class.giaoVien = "abc";
// sinhVien.class['giaoVien'] = "abc"; 
// // thêm key mới cho class
// sinhVien.class.name = "C4E Js 5000000000000";
// sinhVien.country = "VN"; // thêm key cho SV


let phones = [
  {
    'name': 'iPhone X',
    'price': 20*Math.pow(10,6),
    'factory': 'Apple'
  },
  {
    'name': 'Note 10',
    'price': 25*Math.pow(10,6),
    'factory': 'Samsung'
  },
  {
    'name': 'Xperia 2',
    'price': 29*Math.pow(10,6),
    'factory': 'Sony'
  }
];

// 1. in ra danh sách

for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  let stt = i + 1;
  let phoneString = `${stt}.`;
  for (const key in phone) {
      const value = phone[key];
      phoneString += `${key}: ${value}\n  `;
  }
  console.log(phoneString);
}

// 2. cho thêm 1 điện thoại

let phoneName = prompt("Nhập tên điện thoại: ");
let phonePrice = Number(prompt("Nhập giá (đơn vị triệu): "));
let phoneFactory = prompt("Nhập nhà sản xuất:");
let newPhone = {
  'name': phoneName,
  'price': phonePrice*Math.pow(10,6),
  'factory': phoneFactory
}
phones.push(newPhone);

console.log("------- New phone --------");
for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  let stt = i + 1;
  let phoneString = `${stt}.`;
  for (const key in phone) {
      const value = phone[key];
      phoneString += `${key}: ${value}\n  `;
  }
  console.log(phoneString);
}

// 3. sửa

let phoneSTT = parseInt(prompt("Nhập số thứ tự điện thoại cần sửa"));
let phoneIndex = phoneSTT - 1;
let newPhoneName = prompt("Nhập tên mới: ");
let newphonePrice = Number(prompt("Nhập giá mới (đơn vị triệu): "));
let newphoneFactory = prompt("Nhập nhà sản xuất mới:");

let phoneEdit = phones[phoneIndex];
phoneEdit.name = newPhoneName;
phoneEdit.price = newphonePrice * Math.pow(10,6);
phoneEdit.factory = newphoneFactory;

console.log("------- Edit phone --------");
for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  let stt = i + 1;
  let phoneString = `${stt}.`;
  for (const key in phone) {
      const value = phone[key];
      phoneString += `${key}: ${value}\n  `;
  }
  console.log(phoneString);
}


// 4. xóa

let phoneSTT = parseInt(prompt("Nhập số thứ tự điện thoại cần xóa"));
let phoneIndex = phoneSTT - 1;
phones.splice(phoneIndex, 1);

console.log("------- Delete phone --------");
for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  let stt = i + 1;
  let phoneString = `${stt}.`;
  for (const key in phone) {
      const value = phone[key];
      phoneString += `${key}: ${value}\n  `;
  }
  console.log(phoneString);
}
