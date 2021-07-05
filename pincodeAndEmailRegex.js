function validatePinCode(pinCode) {
    let pinRegex = RegExp('^[1-9][0-9]{2}[\\s]{0,1}[0-9]{3}$');
    if (pinRegex.test(pinCode)) {
        console.log("Valid Pin Code");
    } else {
        console.log("Invalid Pin Code. Must be a six digit number!");
    }
}

function validateEmail(email) {
    let emailRegex = RegExp("^[a-z0-9]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9]+\\.([a-z]{2,4})+((\\.[a-z]{2,4})?)$");
    if (emailRegex.test(email)) {
        console.log("Valid Email!");
    } else {
        console.log("Invalid Email!");
    }
}

let pinCode = 120987;
validatePinCode(pinCode);
pinCode = 012456;
validatePinCode(pinCode);
pinCode = "A400088";
validatePinCode(pinCode);
pinCode = "400088B";
validatePinCode(pinCode);
pinCode = "400 088";
validatePinCode(pinCode);

let email = "abc.xyz@bridgelabz.co.in";
validateEmail(email);

let arrays = ["abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com", "abc111@abc.com", "abc-100@abc.net", 
"abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com", "abc+100@gmail.com", "abc", "abc@.com.my", "abc123@gmail.a", 
"abc123@.com", "abc123@.com.com", ".abc@abc.com", "abc()*@gmail.com", "abc@%*.com", "abc..2002@gmail.com", "abc.@gmail.com", 
"abc@abc@gmail.com", "abc@gmail.com.1a", "abc@gmail.com.aa.au"];
arrays.forEach(validateEmail);