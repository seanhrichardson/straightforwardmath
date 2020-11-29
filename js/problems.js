function checkAnswers(setId) {
    set = document.getElementById(setId);
    setList = set.childNodes;
    var i,j;
    for (i = 0; i < setList.length; i++) {
        if (setList[i].className == "pbox") {
            var correctAnswer = setList[i].getAttribute('data-answer');
            var inputAnswer;
            var correct;
            problemNodes = setList[i].childNodes;
            for (j = 0; j < problemNodes.length; j++) {
                if (problemNodes[j].nodeName == "INPUT") {
                    inputAnswer = problemNodes[j].value;
                }
            }
            if (setList[i].getAttribute('data-type') == "num") {
                correct = (Number(correctAnswer) == Number(inputAnswer));
            }
            else if (setList[i].getAttribute('data-type') == "str") {
                correct = (correctAnswer == inputAnswer);
            }
            else {
                console.log("ERROR");
            }
            if (correct) {
                setList[i].style.backgroundColor = "#90EE90";
            }
            else {
                setList[i].style.backgroundColor = "#FF7F7F";
            }
            if (inputAnswer == "") {
                setList[i].style.backgroundColor = "#FFFFFF";
            }
        }
    }
}