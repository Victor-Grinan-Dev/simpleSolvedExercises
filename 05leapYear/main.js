const isLeapYear = (year) => {
    if (year % 400 === 0){
        return true;
    
    } else if (year % 100 === 0){
        return false;
    } else if (year % 4 === 0){
        return true;
    }
    return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(1996));
console.log(isLeapYear(3000));
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
