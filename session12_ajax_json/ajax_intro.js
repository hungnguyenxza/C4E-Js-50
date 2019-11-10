function getWeather(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      console.log(data);
      console.log(data.date);
      console.log(data.temperature);
      let json = JSON.stringify(data);
      console.log(json);
    }
  };
  xhttp.open("GET", "https://weather-data-demo.herokuapp.com/get-weather-today");
  xhttp.send();
}

let dsDienThoai = [
  {
    'id': 'dt1',
    'name': "iPhone X",
    'image': "https://imgs.viettelstore.vn/images/Product/ProductImage/medium/1663778378.jpeg",
  },
  {
    'id': 'dt2',
    'name': "Galaxy Note 8",
    'image': "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812571354250034_ss-note8-den-1.png",
  },
  {
    'id': 'dt3',
    'name': "Xperia 1",
    'image': "https://media.wired.com/photos/5d437569e65adc00081a1bd3/master/pass/Gear-Xperia-1_groupBF40_Purple_wo_clock.jpg"
  },
];

function displaySanpham(){
  let s = ''
  for (let i = 0; i < dsDienThoai.length; i++) {
    const dt = dsDienThoai[i];
    s += `<tr>
            <td>${i + 1}</td>
            <td>${dt.name}</td>
            <td>
              <button onclick="detail('${dt.id}')">Detail</button>
            </td>
          </tr>`
  }
  document.getElementById("danh-sach-san-pham").innerHTML = s;
}
displaySanpham();

function detail(id){
  localStorage.setItem("DTselected", id);
  window.location.href = "sanpham.html";
}

localStorage.setItem("DSDT", JSON.stringify(dsDienThoai));