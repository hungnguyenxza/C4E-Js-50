// lấy ra danh sách điện thoại
let dsDienThoai = JSON.parse(localStorage.getItem("DSDT"));
// lấy id điện thoại ng dùng vừa click
let dtSelected_ID = localStorage.getItem("DTselected");
// Tìm đt ng dùng đã chọn
let dtSelected; 
for (let i = 0; i < dsDienThoai.length; i++) {
  const dt = dsDienThoai[i];
  if(dt.id === dtSelected_ID){
    dtSelected = dt;
    break;
  }
}
let name = `<h2>${dtSelected.name}</h2>`;
let img = `<img src="${dtSelected.image}"/>`;
document.getElementById('sanpham').innerHTML += img;
document.getElementById('sanpham').innerHTML += name;
