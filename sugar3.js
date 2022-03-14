let list = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];

function moveZerosToEnd(arr) {
    firstList = arr.filter(function (x) {
        return x !== 0;
    });
    lastList = arr.filter(function (x) {
        return x === 0;
    });
    return firstList.concat(lastList);
}

let result = moveZerosToEnd(list);
console.log(result); // [false,1,1 ,2,1,3,"a",0,0]

// console.log(list.indexOf(0));
// list.indexOf(0)
