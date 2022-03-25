const cat = {
    name : "kitty",
    age : 18,
    hello: function () {
        console.log(this);
    }
}
cat.hello()   //誰呼叫誰就是.this

function hi() {
    console.log(this);
}
// hi()

function QQ() {
    function KK() {
        console.log(this);
    }
    KK()
}
QQ()
console.log(this.name);