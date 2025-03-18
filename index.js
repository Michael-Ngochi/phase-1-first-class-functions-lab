// Code your solution in this file!

const returnFirstTwoDrivers=(divers)=>{ 
    return [divers[0],divers[1]]
}
 
const returnLastTwoDrivers=(divers)=>{
return [divers[divers.length-2],divers[divers.length-1]]
}


let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers);



function createFareMultiplier(mult){
    return (fare)=>{
        return fare*mult
    }
}


const fareDoubler=createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)

let selectDifferentDrivers=(names,action)=>{
    return action(names);
}
console.log(createFareMultiplier())
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))