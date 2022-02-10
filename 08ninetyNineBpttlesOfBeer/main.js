
const singTheSong = (totalOfBottles = 10) => {
    let pluralSingular;
    for (let bottles = totalOfBottles; bottles >= 0; bottles--){
        if (bottles === 1){
            pluralSingular = "bottle";
        } else {
            pluralSingular = "bottles";
        }
        console.log(`"${bottles} ${pluralSingular} of beer on the wall, ${bottles} ${pluralSingular} of beer, Take one down, pass it around, ${bottles - 1} ${pluralSingular} of beer on the wall."`)
    }

 
}

singTheSong();
