function isEven(x) {
    /return x % 2 === 0;``
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(x) {
    var result = 1;
    for (var i = x; i > 0; i--) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kebabToSnake(x) {
    var result = "";
    for (var i = 0; i < x.length; i++) {
        if (x[i] === "-")
            result += "_";
        else
            result += x[i];
    }
    return result;
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));