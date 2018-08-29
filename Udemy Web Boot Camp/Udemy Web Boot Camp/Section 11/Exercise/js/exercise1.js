function printReverse(arr) {
    var reversed = arr.reverse();
    reversed.forEach(function (item) {
        console.log(item);
    });
}

printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);


function isUniform(arr) {
    var result = true;
    arr.forEach(function (item, index) {
        if (index > 0)
            if (item !== arr[index - 1])
                result = false;
    });
    console.log(result);
}

isUniform([1, 1, 1, 1]);
isUniform([2, 1, 1, 1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);

function sumArray(arr) {
    var total = 0;
    arr.forEach(function (item) {
        total += item;
    });
    console.log(total);
};
sumArray([1, 2, 3]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100]);


function max(arr) {
    var max = arr[0];
    arr.forEach(function (item) {
        if (item > max)
            max = item;
    });
    console.log(max);
}
max([1, 2, 3]);
max([10, 3, 10, 4]);
max([-5, 100]);


var uniform = [1, 1, 1, 2]
var compare = uniform[0];

function isUniform(x) {
    for (var i = 0; i <= uniform.length; i++) {
        if (compare !== uniform[i]) {
            return ("false")
        }
    }
    return ("true")
}