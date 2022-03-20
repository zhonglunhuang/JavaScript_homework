function numberToTWCurrency(amount) {
    var str = String(amount);
    var numBig5 = str.replace(/0|1|2|3|4|5|6|7|8|9/g, function (match) {
        var numToBig5 = {
            0: '零',
            1: '壹',
            2: '貳',
            3: '參',
            4: '肆',
            5: '伍',
            6: '陸',
            7: '柒',
            8: '捌',
            9: '玖',
        };
        return numToBig5[match];
    });
    function reverse(s) {
        return s.split('').reverse().join('');
    }

    let renum = reverse(numBig5);
    let arr = renum.split('');

    for (let i = 1; i < renum.length; i++) {
        // 加入數字後的位數
        // console.log(i);
        if (i % 4 == 1 && i / 4 < 1) {
            arr.splice(i, 0, '拾');
            // console.log(arr);
        } else if (i % 4 == 2) {
            arr.splice(i + i - 1, 0, '佰');
            // console.log(arr);
        } else if (i % 4 == 3) {
            arr.splice(i + i - 1, 0, '仟');
            // console.log(arr);
        } else if (i % 4 == 0) {
            arr.splice(i + i - 1, 0, '萬');
            // console.log(arr);
        } else if (i % 4 == 1 && i / 4 > 1) {
            arr.splice(i + i - 1, 0, '拾');
        }
    }
    arr.forEach((ele, index) => {
        if (ele == '零' && arr[index - 1] !== '萬' && index > 0) {
            // console.log(arr);
            arr.splice(index - 1, 1);
        }
    });
    arr.forEach((ele, index) => {
        let newArr = arr;
        console.log(arr);
        console.log(newArr);
        if (ele == '零' && arr[index - 1] != '零') {
            newArr.splice(index, 1);
        }
    });
    return 'QQ';
}
// console.log(numberToTWCurrency(1450)); // 印出 壹仟肆佰伍拾圓整
// console.log(numberToTWCurrency(817)); // 印出 捌佰壹拾柒圓整
// console.log(numberToTWCurrency(9527)); // 印出 玖仟伍佰貳拾柒圓整
//   console.log(numberToTWCurrency(120000))  // 印出 壹拾貳萬圓整
console.log(numberToTWCurrency(1000001)); // 印出 壹佰萬零壹圓整

//   // slice(start,end) Start不算，切到end，切字串出來
//   let qq = "壹肆伍零".slice(3)
//   console.log(qq);

// function insert(str, index, newStr) {
//     str = str.slice(0, index) + newStr + str.slice(index);
//     return str;
// }

// function reverse(s) {
//     return s.split('').reverse().join('');
// }

// let num = '壹肆伍零陸捌柒';
// let renum = reverse(num);
// let arr = renum.split('');

// for (let i = 1; i < num.length; i++) {
//     console.log(i);
//     if (i % 4 == 1 && i / 4 < 1) {
//         arr.splice(i, 0, '拾');
//         console.log(arr);
//     } else if (i % 4 == 2) {
//         arr.splice(i + i - 1, 0, '佰');
//         console.log(arr);
//     } else if (i % 4 == 3) {
//         arr.splice(i + i - 1, 0, '仟');
//         console.log(arr);
//     } else if (i % 4 == 0) {
//         arr.splice(i + i - 1, 0, '萬');
//         console.log(arr);
//     } else if (i % 4 == 1 && i / 4 > 1) {
//         arr.splice(i + i - 1, 0, '拾');
//     }
// }
// console.log(arr);

//   let newNum = reverse(renum)
//   console.log(newNum);

// 一千零一萬零一拾元整
// 10010010

// 1.數字轉字串並加入位數
// 1.把零後面的單位移除(排除掉萬)
// 1.把零移除，如果後面有數字留著
