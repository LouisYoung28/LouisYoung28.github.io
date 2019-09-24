var array = [];

function start() {
    var minScore=1;
    var maxScore=10;

    while (true) {
        /*Getting the Student names*/
        var name = prompt("Enter Student's Name")
        if (name === null)
            break;
        /*Getting the student test scores, if numbers entered are letters or are values outside of allowed range, re-prompt user.*/
        do{
           var score = prompt(name + " please enter score 1 to 10", "Enter number here");
        } while (isNaN(Number(score)) || score<minScore || score>maxScore);

        array.push({ name: name, score: Number(score) });
    }

    inputArray();

    /* Obtain values from the user entered info*/
    document.getElementById("spLength").innerHTML = array.length;
    document.getElementById("spTotal").innerHTML = totalScore();
    document.getElementById("spAvg").innerHTML = avgScore();
}

function inputArray() {

    var myTable = document.getElementById("input");

    for (var j = 0; j < array.length; j++) {
        var row = array[j];
        var y = document.createElement('tr');
        var detail1 = document.createElement('td');
        var data1 = document.createTextNode(row.name);
        detail1.appendChild(data1);
        y.appendChild(detail1);
        var detail2 = document.createElement('td');
        var data2 = document.createTextNode(row.score);
        detail2.appendChild(data2);
        y.appendChild(detail2);
        myTable.appendChild(y);

    }

}

function totalScore() {
    return array.reduce((x, y) => {
        return x + y.score
    }, 0)
}

function avgScore() {
    var score = totalScore() / array.length;
    return score.toFixed(1) ;
}
