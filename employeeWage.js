// Calculating Wages till Number of Working Days or Total Working Hours per month is Reached

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURSE = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;


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

let totalEmpHrs  = 0;
let totalWorkingDays = 0;

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs  += getWorkingHourse(empCheck);
}

let empWage  = totalEmpHrs  * WAGE_PER_HOUR;
console.log("Total Eployee Hrs : " + totalEmpHrs  + " Total Employee Wage : " + empWage );

console.log("Total working days: " + totalWorkingDays);
console.log("Total employee hours = " + totalEmpHrs+" Total employee wage = " + empWage);
