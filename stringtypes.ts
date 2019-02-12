//variable name start with lowercase
// use camel case for multiword variables
let firstName: string ="rohan" ;
let middleName: string= "bhushan";
let lastName: string = "rao";

//1. concatinate using old js (ES3 to 5)

let fullName = firstName + "\n" + middleName + "\n" + lastName;
console.log(fullName);

let fullNameStringTemplate = `${firstName} ${middleName} ${lastName}`;
console.log(`Full name with the temolate string form
                    ${firstName} ${middleName} ${lastName}`);
