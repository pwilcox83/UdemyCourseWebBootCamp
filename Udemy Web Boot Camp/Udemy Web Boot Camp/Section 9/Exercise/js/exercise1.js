var age = prompt("What is your age?");
var answer = "";
if (age < 0)
    answer = "Your age is less than 0 so therefore can't be true";
else if (age == 21) 
    answer = "Happy 21st birthday";
else if (age % 2 === 1)
    answer = "Your age is odd";
console.log(answer);
if (Number.isInteger(Math.sqrt(age)))
    console.log("Perfect Square");
