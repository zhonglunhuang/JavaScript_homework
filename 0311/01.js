// let a = 1

// while (a<10) {
//     console.log(123);
//     a = a + 1
// }


// function hello(){
//     console.log(123);
//     console.log(456);
//     console.log(789);

// }
// 匿名函數 anonymous function
// const hi = function() {
//     console.log(123);
// }
// hello
// hi(1)

// const hello = function (){
//     console.log(123);
// }

// const hello = function (){
//     console.log(456);
// }

// hello()

// 箭頭函式 arrow function
// const hello = (a,b =1,c=2) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// hello(4,5,6,7)
// hello(4,5,6)
// hello(1,2)
// hello()
//印出4,5,6

// function add(a,b){
//     let result = a + b
//     return result
// }
// console.log(add(1,2,4));

// function add(a,b) {
// 	console.log(a + b)
// return a + b
// }
// console.log(add(1,2))
// //印出
// 3  //這是函數執行的過程
// 3  //這是return回傳值的結果


// function hello(){
//     console.log(123)
//     return 456
//     console.log(789);
// }
// hello()

// function hello(n){
//     if (n % 2 == 1) { 
//         console.log("a")
//     } else {
//         console.log("b");
//     }
// }

// hello(1)

// function hello(a,b){
//     if (a >= 0 && b >= 0) {
//         console.log(a+b)
//     } else {
//         console.log("err");
//     }
// }

// hello(-10,20)
// hello(10,10)



// function bmiCal (weight,height) {
//     if (weight <= 0 || height <= 0){
//         return "輸入值應為正"
//     }
//     result = (weight / (height * height ))
//     return result.toFixed(2)
// }

// console.log(bmiCal(60,1.5));


// else if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     //     console.log('閏年');
//     // } else {
//     //     console.log('不是閏年');


// function isleapYear (year) {
//     if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//         return "閏年"
//     }
//     return "不是閏年"
// }
// console.log(isleapYear(1999)) 
// console.log(isleapYear(2000)) 
// console.log(isleapYear(2004)) 
// console.log(isleapYear(1900)) 


// let list = ['d'];
// list.push('Q');
// console.log(list);

// const colors = ['yellow', 'Orange', 'Red'];
// colors.push('Blue');

// console.log(colors);

// let list = ["a","b","c","d"]
// list.splice(1,2)
// console.log(list);

// function headAndTail (list) {    
//     list.splice(1,list.length-2)
//     return list
// }
// let a = [1, 2, 3, 4, 5]
// let b = ["a", "b", "c", "f", "k"]
// console.log(headAndTail(a));
// console.log(headAndTail(b));


// let list = [1, 2, 3, 4, 5]
// function newHeadAndTail (list) {
//     let newList = []
//     newList.push(list[0])
//     newList.push(list[list.length-1])
//     return newList
// }
// console.log(newHeadAndTail(list));

// function 

// const list =["a","b","cddddd","daqq"]

// for (let index = 0; index < list.length; index++) {
//     console.log(list[index]);;    
// }

// list.forEach(function(x){
//     console.log(x);
// })

// const result = list.find(function(x){
//     return x == "c"
// })
// console.log(result);

// const qq = list.filter(function(x){
//     return x.length >= 3
// })

// console.log(qq);


const list =[1,2,3,4,5]
for (let index = 0; index <= list.length-1; index++) {
    list[index] = list[index] *2
}
console.log(list);
//2,4,6,8,10