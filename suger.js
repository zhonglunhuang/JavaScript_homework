// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

const list = [19, 5, 42, 2, 77];
// 實作程式碼寫在這裡

var min = Math.min(...list)
listNew = list.filter(function(x){
    return x !== min
});
var min2 = Math.min(...listNew)
console.log(min+min2);
///////////////////
list.sort(function(a, b) {
    return a - b; // 將list用sort重新排列升序
  });
console.log(list); //印出[ 2, 5, 19, 42, 77 ]
console.log(list[0]+list[1]); //將第0個跟第1個值相加




// var arr = [1,2,3];
// var max = arr.reduce(function(a, b) {
//     return Math.max(a, b);
// });

// console.log(max);

// 最終結果應該要印出 7
