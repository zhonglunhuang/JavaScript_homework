const actions = {
    attack: function () {
        console.log("chicken!!!");
    },
    eat: function () {
        console.log("QQ");
    }
}

const defense = {
    defend : function () {
        console.log("QQ好痛");
    },
    attack : function () {
        console.log("WTFFF");
    }
}

const QQ = [1,2,3]
QQ.__proto__ = actions
QQ.__proto__ = defense
// console.log();
QQ.attack()


function heroCreator(name,power) {
    const hero = Object.create(actions)
    hero.name = name 
    hero.power = power
    return hero
}

function heroCreator2(name,power) {
    const hero = {
        name : name ,
        power : power ,
        attack : function () {
            console.log("ATTACK");
        }
    }   
    return hero
}

function heroCreator3(name,power) {
    this.name = name 
    this.power = power 
}

const h1 = heroCreator("QQ",100)
const h2 = heroCreator("KK",2200)
const h3 = heroCreator2("kk",200)
const h4 = new heroCreator3("QQ",100)

// h1.attack()
// h2.attack()
// h2.eat()

// console.log(h1);
// console.log(h1.__proto__);
// console.log(h3.__proto__);
// console.log(h4);