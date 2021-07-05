class EmployeePayrollData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter

    get id(){
        return this._id;
    }
    set id(id){
        let idRegex = RegExp('^[1-9][0-9]{0,}$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Incorrect Id: '+id;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        let salaryRegex = RegExp('^[1-9][0-9]{0,}$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Invalid Salary: '+salary;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp("^[MF]$");
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw "Invalid Gender: " +gender+ ". Choose M or F";
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else throw 'Invalid Name: '+name;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(date) {
        if (date != undefined) {
            if (date <= new Date()) {
                const options = { year: "numeric", month: "long", day: "numeric"};
                const employeeDate = date === undefined ? "undefined" :
                                date.toLocaleDateString("en-US", options);
                this._startDate = employeeDate;
            }
            else throw "Invalid Date";
        }
    }

    // method
    toString() {
        
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary +
                ", gender = " + this.gender + ", startDate = " + this.startDate;
    }
}    

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date());
console.log(employeePayrollData.toString());

try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeeData1 = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeeData1.toString());

try {
let newEmployeeData2 = new EmployeePayrollData(2,"lesa",40000,"F",new Date());
console.log(newEmployeeData2.toString());
} catch(e) {
    console.error(e);
}


try {
    let newEmployeeData3 = new EmployeePayrollData(0,"Jack",30000,"M",new Date());
    console.log(newEmployeeData3.toString());
} catch(e) {
    console.error(e);
}

try {
    let newEmployeeData4 = new EmployeePayrollData(3,"Mona",-20000,"F",new Date());
    console.log(newEmployeeData4.toString());
} catch(e) {
    console.error(e);
}

try {
    let newEmployeeData5 = new EmployeePayrollData(4,"Terrisa",0,"T",new Date());
    console.log(newEmployeeData5.toString());
} catch(e) {
    console.error(e);
}

try {
    let newEmployeeData6 = new EmployeePayrollData(5,"Leena",30000,"F",new Date('2019-03-21'));
    console.log(newEmployeeData6.toString());
} catch(e) {
    console.log(e);
}

try {
    let newEmployeeData7 = new EmployeePayrollData(5,"Leena",30000,"F",new Date('2022-03-21'));
    console.log(newEmployeeData7.toString());
} catch(e) {
    console.log(e);
}
