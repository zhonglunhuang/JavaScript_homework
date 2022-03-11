 
// 英文字母對應的Unicode編碼 (A~Z 65~90)  (a~z 97~122)
//完整判斷流程：
// 將陣列裡的字轉換Unicode放新陣列>
// 排列由小到大>
// 迴圈判斷是否有非字母的值(排除(A~Z 65~90)&(a~z 97~122)以外)>
// 取頭尾找應有字數＞
// 迴圈比對缺的字母放入陣列>
// 印出缺的字母的陣列

// //寫法應符合規格
// 判斷需求：混搭怎麼辦？有不符合的怎麼辦？

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// const list = ["a", "b", "c", "d", "f", "g"]
const list = ["O","Q","R","S"] 

// let firstUnicode = list[0].charCodeAt() ;
// let lastUnicode = list[list.length-1].charCodeAt();
// let distence = (lastUnicode - firstUnicode - 1)
const list = ["O","Q","R","S"] //印出P

function calLetter(list) {
    let firstUnicode = list[0].charCodeAt() ;        //找出陣列第一個字母的Unicode
    let lastUnicode = list[list.length-1].charCodeAt(); //找出陣列最後一個字母的Unicode
    let between = (lastUnicode - firstUnicode - 1)  //計算第一個與最後一個字母中間"應有幾個字母"
    for (let i = 1; i <= between; i++) {     //用迴圈比對缺哪個字母，比對次數為"應有幾個字母"，並使用Unicode從第一個字母往後比對
        let checkLetter = String.fromCharCode(firstUnicode+i)   // 將第一個字母的Unicode加上i後轉換為"檢查字母"
        if (list.find(function (x) { //使用array.find，找出陣列有無"檢查字母"
            return x == checkLetter}) == undefined){   //若回傳值等於undefined，代表陣列裡並無"檢查字母"
             console.log(checkLetter); //印出檢查字母
            }
        }
    }
// console.log(list[0].charCodeAt());
// console.log(list[list.length-1].charCodeAt());
calLetter(list)


// function checkSmallLetters(alphabet) {
//     checkList = alphabet.toString();
//     if () {
//     }
// }

// console.log('a,b cd'.charCodeAt(2));

// const list = ["a","b","c"]
// console.log(list.toString());

// const codingisfun= ["a","b","d","f","x","y","A","T","Y","X","Z"]
// for (var index = 0 ;index < codingisfun.length-1 ; index += 1){ 
//     //設定迴圈每跑一次會讓index值往上加一，因為最後一個值的後面沒有值了，所以要在字串長度再減1
//     let a = codingisfun[index].charCodeAt() //設定找出陣列第index個的值的UTF-16碼
//     let b = codingisfun[index+1].charCodeAt()//設定找出陣列第index後面那個的值的UTF-16碼
//     if (b - a != 1){ //設定條件，因為每個連續的英文字的UTF-16值都是連續的，如果相減不等於1代表後面少了
//         console.log(String.fromCharCode(a+1)); //將少了的那個東西，用UTF-16值返回成字串
//     }  
// }

