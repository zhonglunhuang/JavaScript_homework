function decodeMorse(code) {
    const explain = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
    };
    let moseCode = code.split("   ")    //將原先的字串以3個空白字串作分割形成新的陣列
    let decode = []  //創建空陣列作為每一個單字摩斯密碼的容器
    moseCode.map( (e) => { // 針對陣列裡每一個單字，以1個空白字串分割為不同字母摩斯密碼，並推入前述陣列
        decode.push(e.split(" "))
    })
    let result = decode.map((e) => {  //針對前述陣列，裡的每一個字母摩斯密碼陣列替換為字母
        let alpha = e.map((match) => {
            return match = explain[match] ;  
        })
        let word = alpha.join('')
        return word
    })
    return result.join(" "); //將單字陣列轉換為字串，每個單字間間距加入空白字串
}
console.log(decodeMorse('..   .-.. --- ...- .   -.-- --- ..-')); // 印出 I LOVE YOU
console.log(decodeMorse("... --- ..."))  // 印出 SOS
