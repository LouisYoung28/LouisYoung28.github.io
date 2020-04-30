function go(){
    var scores = [];
    var index;
    var numExams = prompt("Please enter number of exams taken: ");
    scores = getScores(numExams);
    index = maxExam(scores);
    outScores(scores);
}

function getScores(numExams){
    var scores = [];
    for( i=0; i<numExams; i++)
        while (isNaN(i)){

        }
        scores[i] = prompt("Please enter the score for exam " + (i+1) + " below: ");
    return scores;
}

function maxExam(scores){
    var index;
    for(var i in scores){
        if(parseInt(i) == 0){
            maxNum = scores[i];
            index = i;
        }
        else if(scores[i] > maxNum){
            maxNum = scores[i];
            index = i;
        }
        else
        i = parseInt(i) + 1;
    }
    document.getElementById("wr_span").innerText = "The highest score, " + scores[index] + ", was on Exam " + (parseInt(index)+1);
    return maxNum;
}

function outScores(scores){
    var output = "<table border = '2' ><tr>";
    for(var i in scores){
        output = output + "<td>Exam " + (parseInt(i)+1) + "</td>";
        i = parseInt(i) + 1;
    }
    output = output + "</tr><tr>";
    for(var i in scores){
        output = output + "<td>" + scores[i] + "</td>";
        i = parseInt(i) + 1;
    }
    output = output + "</tr></table>";
    document.getElementById("wr_table").innerHTML = output;
}