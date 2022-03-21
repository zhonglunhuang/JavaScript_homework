// console.log(age);
// // var age = 18;
// let =18
// console.log(age);

// const AGE = 123
// AGE = 456
// console.log(AGE)

// const Age = ["a","b","c"]
// // Age = ["x","y"]
// Age[0] = "x"
// Age.push("x")
// console.log(Age)

// let a = ["a","b","c"]
// let b = a

// console.log(a)
// console.log(b)
// a.push("y")
// console.log(a)
// console.log(b)

// console.log(typeof 123)
// console.log(typeof "123")
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof [])
// console.log(typeof null)
// console.log(typeof Symbol("hello"))

// a = 6 / 2 * (1+2)
// console.log(a)

// a += 1
// console.log(a)
// a /= 3
// console.log(a)
// a *= 2
// console.log(a)
// a--
// console.log(a)
// a++
// console.log(a)

// let b = 2
// console.log(b++)
// console.log(++b)

// let a = 1
// a = a++ + ++a
// console.log(a++)

// let username = "kk"
// console.log("Hi I'm " + username + ", and I'm 18 years old")
// console.log(`Hi I'm ${username}, and I'm 18 years old`)

// let a = Number("cccc")
// console.log(a)
// console.log(typeof a)
// console.log(1 +true)
// console.log(1 +false)

// const a = { someProperty: 'Jack' };
// const b = { anotherProperty: a };
// const c = { nonProperty: 1};
// a.b = b;
// a.b.c = c;
// console.log(a)
// console.log(a.b)
// console.log(a.b.c)

// JSON.stringify(a); // Uncaught TypeError: Converting circular structure to JSON
// JSON.stringify(b); // Uncaught TypeError: Converting circular structure to JSON

// let age = 20

// if (age >= 18){
//     console.log("adult")
// } else {
//     console.log("child")
// }
// age >= 18 ? console.log("adult") : console.log("child")

// let gender = 1

// switch (gender) {
//   case 1:
//     console.log("男")
//     // break

//   case 2:
//     console.log("女")
//     // break

//   default:
//     console.log("不想說")
//     break
// }

// let year = prompt('請輸入年份');

// if (year == null) {
//     alert('來亂?');
// } else if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     console.log('閏年');
// } else {
//     console.log('不是閏年');
// }

// for (let a = 0; a < 10; a++) {
//     console.log(a+1);
// }

// for (let a = 0; a <=10 ; a = a+1){
//     if (a % 2 == 1) {
//         console.log(a);
//     }
// }

// for (let a = 20; a >= 0; a--) {
//     if (a % 2 == 0) {
//         console.log(a);
//     }
// }

// for (let a = 1 , b = 9; a <=9 || b>=1 ; a++,b--) {
//     console.log(`${a} x ${b} = ${a*b}`);
// }

// for (let a = 1 ; a <= 9 ; a++){
//     for(let b = 1; b<=9 ; b++){
//         console.log(`${a} x ${b} = ${a*b}`)
//     }
// }

// let x = " "
// let y = "*"
// for (let a = 10, b=1 ;a >=0 , b<=20 ; a--,b= b+2) {
//     X = x.repeat(a);
//     Y = y.repeat(b);
//     console.log(X+Y)
// }





// for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//         console.log(`${a}x${b}=${a*b}`);;
//     };
// }

// x = " "
// y = "*"
// for (let a = 10, b = 1; a > 0, b<= 20; a--,b =b+2) {
//     X = x.repeat(a);
//     Y = y.repeat(b);
//     console.log(X+Y);   
// }


//印出99乘法表

//1x1=1

// for (let a = 1; a<10 ; a++) {
//     for (let b = 1; b <10 ; b++){
//         console.log(`${a}x${b}=${a*b}`)
//     };
//     };
    
//以*與" "印出一顆樹

// x = " "
// y = "*"

// for (let a = 5, b = 1; a>=0,b < 10 ;a--,b += 2){
//     X = x.repeat(a);
//     Y = y.repeat(b);
//     console.log(X+Y);
// }

// var a = 1

// function hello() {
//     a = 2
//     console.log(a);
// }

// hello()
// console.log(a);

// console.log(0);

// setTimeout(function () {
//     console.log(123);    
// },0)

// console.log(1);

// while (true) {
// }

for (var a = 0 ; a < 3 ; a++){
    setTimeout(() => {
        console.log(`var = ${a}`);
    }, 1000 * a);
}
    
for (let a = 0 ; a < 3 ; a++){
    setTimeout(() => {
        console.log(`let = ${a}`);
    }, 1000 * a);
}
    