// const add = (a,b) => a + b 
// const add = (a,b) => {
//     return a +b
// }
// console.log(add(1,2));

// const cat = {
//     name: "kk",
//     age: 18,
// }
// let { name: petname } = cat //解構抽出指定key並形成新的物件
// let qq = cat.name
// // console.log({ name }); //{ name: 'kk' }
// console.log(qq); //kk
// // console.log(name); kk
// // console.log(age); //Undefined

// let name = "tt"
// console.log({ petname });

// function hello({name,age}){
//     console.log(name,age);
// }
// const h = {
//     name : "kk",
//     age : 19,
// }
// hello(h))

// const a = [1,2,3]
// const b = [4,5,6]

// const c= [...a,...b]
// console.log(c);

// function hi(a,b, ...c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// hi(1,2,3,4,5,6,7,8,9)
// //1
//2
//[ 3, 4, 5, 6, 7, 8, 9 ]

const box = document.querySelector(".hello")
const h = document.createElement("h1")
h.textContent = "hello"
console.log(h);
const d = document.createElement("div")
d.textContent = "hi"
box.appendChild(h)
box.appendChild(d)