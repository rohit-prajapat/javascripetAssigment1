/**
 * Question 1.
 * if marks>90 A grade
 * If marks>70 Cgrade;
 * if > 50 and l< 70 c grade
 * Delow 50 then F grade
 */

// Questio1.
console.log("----------------------------------------------");

console.log("Question 1");
marks = 34;

if(marks>90) console.log("A grade : ");
else if(marks>70) console.log("B grade : ");
else if(marks > 50 ) console.log("C grade : ");
else console.log("F grade ");


//Question 2.
console.log("----------------------------------------------");
console.log("Question 2:  ");
/**
 * generate numbers betwen and 2 give numbers 
 */

const n1 = 5;
const n2 = 25;

for(i=n1; i<=n2; i++)
{
    //process.stdout.write
    process.stdout.write(i + " ");
}
console.log();
console.log("----------------------------------------------");


//Question : 3
console.log("Question 3: ");
n = 5;
(n>0) ? (n==0) ? console.log("number is zero") : console.log("number is positive : ") : console.log("Number is negative : ");
console.log("----------------------------------------------");
// Question 4
console.log("Answere 4 : Comma operator allows us to evaluate mutlipe exprestion in a single statement like declaring multiple variable in a single statement separating them with comma opeator ");
console.log("Example : const a = 10,b = 20, c = 50 \n console.log(a,b,c)");

console.log("----------------------------------------------");
console.log("Quetion 5 : ");
username = "rohit_12";
password = "1234";

if(username == "admin" && password == "12345")
    console.log("Login successful : ");
else console.log("incorrect username or password : ");
console.log("----------------------------------------------");

//Question 6:
console.log("Qustion 6 : ");
paymentmode = "paypal";
amount = 400;
console.log("Transtion fees : ");
switch (paymentmode) {
    case "paypal":
        console.log(amount *(3/100));
        break;
    case "credit":
        console.log(amount *(2/100));
        break;
    case "debit" : 
        console.log(amount *(1.5/100));
    default:
        console.log("Invalid payment mode : ");
        break;
}
console.log("----------------------------------------------");
//Question 7:

console.log("Question 7: ");
temperatue = 50;

(temperatue>30) ? console.log("Hot : "): console.log("Moderate : ");
console.log("----------------------------------------------");

//Question 8:
console.log("Question : 8");
num = 12;
i = 1
while(i<=12)
{
    process.stdout.write(i + " ");
    i++
}
console.log();
console.log("----------------------------------------------");



