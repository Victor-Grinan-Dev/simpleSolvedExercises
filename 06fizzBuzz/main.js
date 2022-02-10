const fizzBuzzArray = [];
let current = 1;

const fizzBuzzGame = () => {
    if (current % 3 === 0 && current % 5 === 0){
        fizzBuzzArray.push("fizzBuzz");
    } else if (current % 3 === 0){
        fizzBuzzArray.push("fizz");
    } else if (current % 5 === 0){
        fizzBuzzArray.push("buzz");
    }else{
        fizzBuzzArray.push(current);
    }
    current++;
}

for (let i = 1; i <= 15; i++){
    fizzBuzzGame();
};

console.table(fizzBuzzArray)