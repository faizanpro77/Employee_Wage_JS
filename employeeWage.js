//Store the Daily Wage along with the Total Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURSE = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20; 
const NO_OF_WORKING_HOURS = 160;
const NO_OF_WORKING_DAYS = 20;

let empWageArray = new Array();
//let empWageMap = new Map();
let empDailyWageMap = new Map();
let empDailyHourMap = new Map();



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

//Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
while (totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs <= NO_OF_WORKING_HOURS) {
    totalWorkingDays++
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHourse(empCheck);
    totalEmpHrs += empHrs;
    empWageArray.push(calcWage(empHrs));     // To store daily wage in array
    empDailyWageMap.set(totalWorkingDays, calcWage(empHrs)); // Store the Day and the Daily Wage
    empDailyHourMap.set(totalWorkingDays, empHrs);  //Store the day and employeee hourse
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
console.log(empDailyWageMap);
console.log("Total Employee wage using map : " + Array.from(empWageArray.values()).reduce(totalWages, 0));

//calculate total wage and total hourse worked with Arrow function 
 const findTotal = (totalValue, dailyValue) => {
     return totalValue + dailyValue;
 }

let totalHours = (Array.from(empDailyHourMap.values())).reduce(findTotal,0);
let totalSalary = (Array.from(empDailyWageMap.values())).filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("(With Arrow Function)  Total Hours : " + totalHours + "  Total Wage : " + totalSalary);

//Show the full workings days, part working days and no working days
let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let nonWorkingDays  = new Array();

empDailyHourMap.forEach((value, key) => {
    if (value ==  8)
        fullWorkingDays.push(key);
    if (value == 4)
        partWorkingDays.push(key);
    else
        nonWorkingDays .push(key);
});

console.log("Full working days : " + fullWorkingDays);
console.log("Part working days : " + partWorkingDays);
console.log("Non working days : " + nonWorkingDays);


{
//Ability to store the Day, Hours Worked and Wage Earned in a single object
let totalWorkingDays = 0;
let totalEmpHrs = 0;

let empDailyHrsAndWageArr  = new Array();
while (totalWorkingDays < NO_OF_WORKING_DAYS  && totalEmpHrs <= NO_OF_WORKING_HOURS  ) {
    let empCheck = Math.floor((Math.random() * 10) % 3);
    let empHrs = getWorkingHourse(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcWage(empHrs),
        toString() {
            return "\nDay : " + this.dayNum +  " Working Hourse : " + this.dailyHours + " Wage Earned : " + this.dailyWage
        },   
    });
}
console.log("Daily Hourse and Wage of employee : " + empDailyHrsAndWageArr);
   
//Object operations using Arrow Functions

// Calc total Wage and total hours worked

let totalWageEarned = empDailyHrsAndWageArr
                    .filter(empHrAndWage  => empHrAndWage.dailyWage > 0)
                    .reduce((total, empHrAndWage) => total += empHrAndWage.dailyWage, 0);

let totalHoursWorked = empDailyHrsAndWageArr
                    .filter(empHrAndWage => empHrAndWage.dailyHours > 0)
                    .reduce((total, empHrAndWage) => total += empHrAndWage.dailyHours, 0);

console.log("using arrow functions and object ----> Total Wage : " + totalWageEarned + " Total Hours Worked : " + totalHoursWorked);

//Show the full workings days using foreach
console.log("Full Working Days");
empDailyHrsAndWageArr.filter(empHrAndWage => empHrAndWage.dailyHours == 8)
                    .forEach(empHrAndWage => console.log(empHrAndWage.toString()));

// Show Part working days using Map by reducing to String Array
let partWorkingDaysArr = empDailyHrsAndWageArr.filter(empHrAndWage => empHrAndWage.dailyHours == 4)
                        .map(empHrAndWage => empHrAndWage.toString());
console.log("Part time Working Days " + partWorkingDaysArr);

//No working days only using Map function
let nonWorkingDaysNum = empDailyHrsAndWageArr.filter(empHrAndWage => empHrAndWage.dailyHours == 0)
                    .map(empHrAndWage => empHrAndWage.dayNum);
console.log("Non Woking Days " + nonWorkingDaysNum);
}