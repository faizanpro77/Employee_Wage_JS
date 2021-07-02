//Store the Daily Wage along with the Total Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURSE = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

//To get hours
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

//To calculate wage
function calcWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

let totalEmpHrs  = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();
let empWageMap = new Map();


//Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHourse(empCheck);
    totalEmpHrs += empHrs;
    // To store daily wage in array
    empWageArray.push(calcWage(empHrs));

    // Store the Day and the Daily Wage
    empWageMap.set(totalWorkingDays, calcWage(empHrs));  
}

console.log(empWageArray)
console.log("Total employee hourse " + totalEmpHrs + "\n Total Employee Working Days : " + totalWorkingDays);



//Total wage using employee hourse
let empWage = calcWage(totalEmpHrs);
console.log("Total Employee Wage : " + empWage);
 
//Total wage using for each
empWageArray.forEach(sum);
console.log("Total wage using foreach : " + totalEmpWage);
//Total wage using reduce method
console.log("Total wage using reduce method: " + empWageArray.reduce(totalWages, 0));

// show Days along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithDailyWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " : " + dailyWage;
}
let mapDayWithDailyWageArr = empWageArray.map(mapDayWithDailyWage);
console.log("Daily wage map : ");
console.log(mapDayWithDailyWageArr);

// Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithDailyWageArr.filter(fullTimeWage);
console.log("Days with full time wage : ");
console.log(fullDayWageArr);

// Find the first occurrence when Full Time Wage was earned using find function
console.log("First time fulltime was earned on : ")
console.log(mapDayWithDailyWageArr.find(fullTimeWage));

// Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("Check all elements have fulltime wage : " + fullDayWageArr.every(fullTimeWage));

// Check if there is any Part Time Wage
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if there is any parttime wage : " + mapDayWithDailyWageArr.some(partTimeWage));

// Find the number of days the Employee Worked 
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days the employee worked : " + empWageArray.reduce(totalDaysWorked, 0));

// compute Total Wage using map 
console.log(empWageMap);
console.log("Total Employee wage using map : " + Array.from(empWageArray.values()).reduce(totalWages, 0));

