function numberToTWCurrency(amount) {
    var str = String(amount) 
    var reg = /(\w*)1(.*)2(.*)3(.*)4(.*)5(.*)6(.*)7(.*)8(.*)9(.*)0(.*)/g
    let strNew = str.replace(reg,"$1壹$2貳$3參$4肆$5伍$6陸$7柒$8捌$9玖$10零")
    return strNew
  }
  
  console.log(numberToTWCurrency(1450))    // 印出 壹仟肆佰伍拾圓整
  console.log(numberToTWCurrency(817))     // 印出 捌佰壹拾柒圓整
  console.log(numberToTWCurrency(9527))    // 印出 玖仟伍佰貳拾柒圓整
  console.log(numberToTWCurrency(120000))  // 印出 壹拾貳萬圓整
  console.log(numberToTWCurrency(1000001)) // 印出 壹佰萬零壹圓整

//   var s="my javascript is very poor,who can help me?"
//   var reg=/(\w*)my(.*)is(.*)can(.*)/g

//   console.log(s.replace(reg,"$1his$2was$3could"))