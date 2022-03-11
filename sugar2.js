 
// 英文字母對應的Unicode編碼 (A~Z 65~90)  (a~z 97~122)
//完整判斷流程：
將陣列裡的字轉換Unicode放新陣列>
排列由小到大>
迴圈判斷是否有非字母的值(排除(A~Z 65~90)&(a~z 97~122)以外)>
取頭尾找應有字數＞
迴圈比對缺的字母放入陣列>
印出缺的字母的陣列

//寫法應符合規格
判斷需求：混搭怎麼辦？有不符合的怎麼辦？



// function checkSmallLetters(alphabet) {
//     checkList = alphabet.toString();
//     if () {

//     }
// }

// console.log('a,b cd'.charCodeAt(2));

// const list = ["a","b","c"]
// console.log(list.toString());

const codingisfun= ["a","b","d","f","x","y","A","T","Y","X","Z"]
for (var index = 0 ;index < codingisfun.length-1 ; index += 1){ 
    //設定迴圈每跑一次會讓index值往上加一，因為最後一個值的後面沒有值了，所以要在字串長度再減1
    let a = codingisfun[index].charCodeAt() //設定找出陣列第index個的值的UTF-16碼
    let b = codingisfun[index+1].charCodeAt()//設定找出陣列第index後面那個的值的UTF-16碼
    if (b - a != 1){ //設定條件，因為每個連續的英文字的UTF-16值都是連續的，如果相減不等於1代表後面少了
        console.log(String.fromCharCode(a+1)); //將少了的那個東西，用UTF-16值返回成字串
    }  
}


