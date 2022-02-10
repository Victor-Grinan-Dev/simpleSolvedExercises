const milkPrice = 1.5;

const buyMilk = (money, maxBottles = 2) => {
    if (money >= maxBottles * milkPrice){
        return `Here is the 2 milks and ${money - (maxBottles * milkPrice)} dollar(s) change back.`
    }else if (money < milkPrice){
        return `There is not enougth money for 1 milk, milk price is ${milkPrice}.`
    }
    return `Here is the ${Math.floor(money / milkPrice)} milk(s) and ${money - ((Math.floor(money / milkPrice)) * milkPrice)} dollar(s) change back.`
}

console.log(buyMilk(10));