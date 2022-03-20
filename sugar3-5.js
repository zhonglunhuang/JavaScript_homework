// function humanReadableTimer(seconds) {
//     let hour = parseInt(seconds / 3600); //將秒數除一小時所需秒數取整數
//     let min = parseInt((seconds % 3600) / 60); //將上述餘數再除一分鐘所需秒數取整數
//     let sec = seconds % 60; //取上述餘數即為秒數
//     function isNeed0(num) {
//         //判斷該時間欄位是否需要在前面補0的方法
//         if (num >= 10) {
//             return `${num}`;
//         } else {
//             return `0${num}`;
//         }
//     }
//     // 將時、分、秒分別套入上述方法並組成字串
//     result = `${isNeed0(hour)}:${isNeed0(min)}:${isNeed0(sec)}`;
//     return result;
// }

function humanReadableTimer(seconds) {
    let hour = String(parseInt(seconds / 3600)); //將秒數除一小時所需秒數取整數
    let min = String(parseInt((seconds % 3600) / 60)); //將上述餘數再除一分鐘所需秒數取整數
    let sec = String(seconds % 60); //取上述餘數即為秒數
    // 使用padStart將數字補齊至十位數後轉字串組合回傳
    const result = `${hour}`.padStart(2,"0")+`:`+`${min}`.padStart(2,"0")+`:`+`${sec}`.padStart(2,"0");
    return result;
}

a = 1000

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
