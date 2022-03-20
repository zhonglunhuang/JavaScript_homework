// // const list = [1,2,3,4,5]
// // console.log(list.filter(x => x>3));

// // const list2 = [1,2,3,4,5,6,7,8,9,10]
// // console.log(list2.filter(x => x%2 == 1));

// // let scores = 0

// // let a = list.reduce(function (acc, cv) {    //acc累加值 cv當前值
// //     console.log(acc, cv);
// //     return acc + cv
// // })   //10 > 起始值

// // console.log(a); //印出25

// // const list = [19,23,1,5,24]
// // let b = list.reduce(function (acc,cv) {
// //     if (cv > acc ){
// //         return cv
// //     } else {
// //         return acc
// //     }
// // })
// //     console.log(b);

// // const cat = {
// //     name : "QQ",
// //     age : 10 ,
// //     color : "blue",
// //     attck : function () {
// //         console.log("go!go!Power Ranger");        
// //     }
// // }
// // console.log(cat);
// // cat.name = "KK"
// // console.log(cat.name);
// // console.log(cat["age"]);
// // cat.attck()

// // const c = document.getElementById("cc");
// const c =document.querySelector("#list li:last-child")
// c.textContent = "QQ"
// console.log(c);

// const items = document.getElementsByClassName("item") //抓一堆element
// // items[0].textContent = "0"

// const item2 = document.querySelectorAll(".item") //抓出一堆node，使用方法不同，可以用foreach

// item2.forEach(function (element) {
//     element.textContent = element.textContent.repeat(5)
// } );

// // console.log(items);
// // console.log(items[0]);
// console.log(item2);

// // const t = document.querySelector(".xx")
// t.innerHTML = "<h1>444</h1>"
// t.style.color = "red"
// t.style.background = "gray"

const t = document.querySelectorAll(".item")

t.forEach((item) => {
    item.textContent = "T";
    item.classList.add("ha")
})
console.log(t);

const h = document.querySelector(".xx")
const hey = function() {
    console.log("點");
}
h.addEventListener("click",hey )

const btn = document.querySelector(".btn")
const link = document.querySelector(".link")


link.addEventListener("click",(e) => {
    e.preventDefault();
    console.log("yes");

})

document.addEventListener("contextmenu",(e) => {
    e.preventDefault()   
    console.log(123);
})
console.log("QQQQ")

// btn.onclick = function () {
//     console.log(123);    
// }
// btn.onclick = [1,2]
// console.log(btn.onclick);

// document.addEventListener("DOMContentLoaded", function(){
//     const t = document.querySelectorAll(".item")
//     t.forEach((item) => {
//     item.textContent = "T";
//     item.classList.add("ha")
//     })
//     oconsole.log(t);
// })

function a() {
    const b = function () {
        console.log(123);
    }
    return b
}

a()()()  //之所以會undefine是
console.log(a());
cc = a()
console.log(cc());