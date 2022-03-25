const list = [1,2,3]
Array.prototype.hello = function () {   // fn才有prototype
    console.log("HI");
}
list.__proto__.hello = function () {    // 物件、陣列才有__proto__
    console.log("HI");
}
list.hello()

console.log(Array.__proto__); //所有的fn都有__proto__