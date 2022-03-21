// 思考做法
// 1.數字轉國字並加入位數
// 2.把零後面的單位移除(排除掉萬)
// 3.把零移除，如果後面有數字留著

function numberToTWCurrency(amount) {
    var str = String(amount); //將數字轉字串
    const Big5 = { 0: '零', 1: '壹', 2: '貳', 3: '參', 4: '肆', 5: '伍', 6: '陸', 7: '柒', 8: '捌', 9: '玖' }; //宣告數字與國字的比對表
    let numBig5 = str.replace(/0|1|2|3|4|5|6|7|8|9/g, function (match) {
        return Big5[match]; //用replace，並引用Big5取代數字改為國字
    });
    let arr = numBig5.split('').reverse(); //字串顛倒，方便計算位數(先轉陣列、翻轉陣列元素)
    for (let i = 1; i < numBig5.length; i++) {    // 插入數字後的位數，並以numBig5的字串位數為跑回圈次數的依據
        if (i % 4 == 1 && i / 4 < 1) {
            arr.splice(i, 0, '拾');
        } else if (i % 4 == 2) {
            arr.splice(i + i - 1, 0, '佰');
        } else if (i % 4 == 3) {
            arr.splice(i + i - 1, 0, '仟');
        } else if (i % 4 == 0) {
            arr.splice(i + i - 1, 0, '萬');
        } else if (i % 4 == 1 ) {
            arr.splice(i + i - 1, 0, '拾');
        }
    }
    arr.forEach((ele, index) => {
        //移除零後面的位數，不包含萬
        if (ele == '零' && arr[index - 1] !== '萬' && index > 0) {
            arr.splice(index - 1, 1);
        }
    });
    newArr = arr.filter((word, index) => {
        //篩選出非零數字，但如果零後面有數字國字留著(排除萬)。
        if (word != '零') {
            return word;
        } else if ((word == '零' && arr[index - 1] == '萬') || arr[0] == '零') {
            return;
        } else if (word == '零' && arr[index - 1] != '零') {
            return word;
        }
    });
    const result = newArr.reverse().join(''); //翻轉陣列元素，並組成字串
    return `${result}圓整`;
}
console.log(numberToTWCurrency(1450)); // 印出 壹仟肆佰伍拾圓整
console.log(numberToTWCurrency(817)); // 印出 捌佰壹拾柒圓整
console.log(numberToTWCurrency(9527)); // 印出 玖仟伍佰貳拾柒圓整
console.log(numberToTWCurrency(120000)); // 印出 壹拾貳萬圓整
console.log(numberToTWCurrency(1000001)); // 印出 壹佰萬零壹圓整


function reverse(s) {
    //字串顛倒
    return s.split('').reverse().join('');
}
