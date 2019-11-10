
// let h1 = document.getElementById("xin-chao");
// console.dir(h1);


// let h1ByClass = document.getElementsByClassName("welcome");
// console.dir(h1ByClass);

// for (let i = 0; i < h1ByClass.length; i++) {
//   const element = h1ByClass[i];
//   console.log(element.innerHTML);
// }

// for (const h of h1ByClass) {
//   console.dir(h.innerHTML);
// }

// h1.innerHTML = "thẻ h1 có cú pháp là <h1></h1>";

// let p = document.getElementById("description");

// p.innerHTML = "&lt;h1&gt;Thông tin cá nhân&lt;/h1&gt;Hùng &copy; &nbsp;";

// function displayName(){
//   let name = document.getElementById('name').value;
//   alert(name);
// }

function login(){
  let user = document.getElementById("txtUsername").value;
  let pass = document.getElementById("txtPassword").value;
  if(user === 'admin' && pass === '123456'){
    alert("login thành công");
    window.location.href = "san-pham.html";
  }else{
    alert("login fail");
  }
}




