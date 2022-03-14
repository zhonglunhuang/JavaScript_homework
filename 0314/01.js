const list = [1,2,3,4,5]
console.log(list.filter(x => x>3));

const list2 = [1,2,3,4,5,6,7,8,9,10]
console.log(list2.filter(x => x%2 == 1));

let scores = 0

let a = list.reduce(function (acc, cv) {    //acc累加值 cv當前值
    console.log(acc, cv);
    return acc + cv
})   //10 > 起始值

console.log(a); //印出25

const list = [19,23,1,5,24]
let b = list.reudce(function (acc,cv) {
    if (cv > acc ){
        return cv
    } else {
        return acc
    }
}
console.log(b);