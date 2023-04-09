//we are doing for loop

let beginningDay = 0;
let endingDay = 7;
let totalFreeTime = 0;

for (let i = beginningDay; i < endingDay; i++) 
{
    //console.log(i);

    //map i to the day of the week

    let standardsleephours = 11;
    let work = 2;
    let hoursinaday = 24;

    let day = "";

    if(i==0){
        day = "Sunday";
        let usedUpHours = standardsleephours + work;
        let leftOverHours = hoursinaday - usedUpHours;
        let cookingHours = 0.5 + 0.5 + 1.5;
        let leftOverHours2 = leftOverHours - cookingHours;
        let freeHours = leftOverHours2;
        console.log("On Sunday I have " + freeHours + " hours of free time.");

        totalFreeTime = totalFreeTime + freeHours;
        }
    else if(i==1){
        day = "Monday";
        let usedUpHours = standardsleephours + work;
        let leftOverHours = hoursinaday - usedUpHours;
        let cookingHours = 0.5 + 0.5 + 1.5;
        let leftOverHours2 = leftOverHours - cookingHours;
        let freeHours = leftOverHours2;
        console.log("On Monday I have " + freeHours + " hours of free time.");

        totalFreeTime = totalFreeTime + freeHours;
    }
    else if(i==2){
        day = "Tuesday";
        let usedUpHours = standardsleephours + work;
        let leftOverHours = hoursinaday - usedUpHours;
        let cookingHours = 0.5 + 0.5 + 1.5;
        let leftOverHours2 = leftOverHours - cookingHours;
        let freeHours = leftOverHours2;
        console.log("On Tuesday I have " + freeHours + " hours of free time.");

        totalFreeTime = totalFreeTime + freeHours;
    }
    else if(i==3){
        day = "Wednesday";
        let usedUpHours = standardsleephours + work;
        let leftOverHours = hoursinaday - usedUpHours;
        let cookingHours = 0.5 + 0.5 + 1.5;
        let leftOverHours2 = leftOverHours - cookingHours;
        let freeHours = leftOverHours2;

        let extraworkonWednesday = 3;
        freeHours = freeHours - extraworkonWednesday;
        console.log("On Wednesday I have " + freeHours + " hours of free time.");

        totalFreeTime = totalFreeTime + freeHours;

    }
    else if(i==4){
        day = "Thursday";
        let usedUpHours = standardsleephours + work;
        let leftOverHours = hoursinaday - usedUpHours;
        let cookingHours = 0.5 + 0.5 + 1.5;
        let extrabreakfastPuliogere = 0.5;
        cookingHours = cookingHours + extrabreakfastPuliogere;
        let leftOverHours2 = leftOverHours - cookingHours;
        let freeHours = leftOverHours2;
        console.log("On Thursday I have " + freeHours + " hours of free time.");

        totalFreeTime = totalFreeTime + freeHours;
    }
    else if(i==5){
        day = "Friday";

        let usedUpHours = standardsleephours + work;
        let leftOverHours = hoursinaday - usedUpHours;
        let cookingHours = 0.5 + 0.5 + 1.5;
        let leftOverHours2 = leftOverHours - cookingHours;
        let freeHours = leftOverHours2;
        console.log("On Friday I have " + freeHours + " hours of free time.");

        totalFreeTime = totalFreeTime + freeHours;
    }
    else if(i==6){
        day = "Saturday";
        let usedUpHours = standardsleephours + work;
        let leftOverHours = hoursinaday - usedUpHours;
        let cookingHours = 0.5 + 0.5 + 1.5;
        let leftOverHours2 = leftOverHours - cookingHours;
        let freeHours = leftOverHours2;
        console.log("On Saturday I have " + freeHours + " hours of free time.");

        totalFreeTime = totalFreeTime + freeHours;

    }

    console.log(day);


    }

    console.log("Total free time: " + totalFreeTime);
