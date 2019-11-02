let arr = ['Javascript', 'HTML', 'CSS', 'Pascal'];
let stringFinder = prompt("Moi nhap vao tu khoa can tim trong chuoi: ");
let res = [];
for (let index = 0; index < arr.length; index++) {
  if (arr[index].toLocaleLowerCase().includes(stringFinder.toLocaleLowerCase())){
    res.push(arr[index]);
  }
}
if(res.length == 0){
  console.log(`Khong tim thay ket qua nao phu hop voi tu khoa "${stringFinder}"`);
}
else{
  console.log(`Tim thay ${count} ket qua:`);
  for (let index = 0; index < res.length; index++) {
    console.log(res[index]);
  }
}
