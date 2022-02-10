const daysInYear = 365;
const weekInYear = 52;
const monthInYear = 12;
const maxAgeYears = 90;
const maxAgemonth = monthInYear * maxAgeYears;
const maxAgeweeks = weekInYear * maxAgeYears;
const maxAgeDays = daysInYear * maxAgeYears;

const timeLeft = (age) => {
    //currentDate is a 3 element list as dd.mm.yyyy
    //yourBirthDay is a 3 element list as dd.mm.yyyy

    const yearsRemaining = maxAgeYears - age;
    //console.log(yearsRemaining);
    const monthRemaining = (maxAgeYears * monthInYear) - (age * monthInYear);
    //console.log(monthRemaining);
    const daysRemaining = (maxAgeYears * daysInYear) - (age * daysInYear);
    //console.log(daysRemaining);
    return `You have ${yearsRemaining} years remaining, you have ${monthRemaining} remaining, you have ${daysRemaining} days remaining`;
}

console.log(timeLeft(37));
