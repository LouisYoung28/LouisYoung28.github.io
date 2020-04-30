var input = prompt("Enter a number", "Enter here");
if (input>1000) {
    document.write("The input number is too big!");
} else {
    while (isNaN(input)) {
        input = prompt("Enter a number", "Enter here");
    }
    var n, result = 1;
    var results_arr = new Array();
    for (n = 2; n <= input; ++n) {
        result = result * n;
        results_arr.push(result);
    }

    for (var i = input - 2; i >= 0; i--) {
        document.write((i + 2) + "! = " + results_arr[i] + "<br>");
    }
}

