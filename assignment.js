//* 1st Program Feet to Mile Conversion *//
function feetToMile(feet){
    let mile = feet/5280;
    return mile;
}
let convert = feetToMile(10000);
let result = convert.toFixed(3);
console.log(result);

//* 2nd Program Wood Calcultor *//
function woodCalculator(chair, table, bed){
    let chairNumber = chair;
    let tableNumber = table*3;
    let bedNumber = bed*5 ;
    let totalWood = (chairNumber+tableNumber+bedNumber);
    return totalWood;
}
let total = woodCalculator(10, 5, 5);
console.log("Total Wood Needed:" ,total, "Cubic Feet");

//* 3rd Program Brick Calcultor *//
function brickCalculator(floor){
    let brick = 1000;
    let firstToTen = brick*15;
    let elevenToTwenty = brick*12;
    let others = brick*10;
    if(floor<=-1){
        return "Sorry!! It's not countable baby.";
    }
    else if(floor<=10){
        return firstToTen;
    }
    else if(floor>10 && floor<=20){
        return elevenToTwenty;
    }
    else{
        return others;
    }
}
let floorCount = brickCalculator(13);
console.log("Total Brick Need:",floorCount);

//* 4th Program Find out Tiny Friend*//
function tinyFriend(names){
    let tiny = names[0];
    for(let i=0; i<names.length; i++){
        let friendName = names[i];
        if(names[i].length < names[0].length){ 
            tiny = friendName;
        }        
    }
    return tiny;   
}
let smallest = tinyFriend(['Rupu', 'Istiyak', 'Imran', 'Avi', 'Kabir']);
console.log("Tiny Friend of the following array:", smallest);
