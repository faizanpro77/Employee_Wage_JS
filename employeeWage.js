// calculate employee wage for month

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURSE = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
NUMBER_OF_WORKING_DAYS = 20;

function getWorkingHourse(empCheck) {
switch (empCheck) {
    case IS_PART_TIME :
        return PART_TIME_HOURSE;
        break;
    case IS_FULL_TIME :
        return FULL_TIME_HOURS;
        break;
    default :
        return 0;
    }
}

let empHrs = 0;
for (day = 0; day < NUMBER_OF_WORKING_DAYS; day++) {
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs += getWorkingHourse(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Eployee Hrs : " + empHrs + " Total Employee Wage : " + empWage );
