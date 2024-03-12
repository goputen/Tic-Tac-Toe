
let mark = 'X';
let count = 0;
let xScore=0;
let oScore=0;
let xPoint=document.getElementById('x-point')
let oPoint=document.getElementById('o-point')
let first = document.getElementById('1'),
    second = document.getElementById('2'),
    third = document.getElementById('3'),
    forth = document.getElementById('4'),
    fifth = document.getElementById('5'),
    sixth = document.getElementById('6'),
    seventh = document.getElementById('7'),
    eighth = document.getElementById('8'),
    nineth = document.getElementById('9');

function printmark(value) {
    if (value == 1) {
        if (first.innerHTML == 'X' || first.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            first.innerHTML = mark;
            if (mark == "X") {
                first.style.background = "red";
            }
            else {
                first.style.background = "blue";
            }
            count = count + 1;
        }
    }
    else if (value == 2) {

        if (second.innerHTML == 'X' || second.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            second.innerHTML = mark;
            if (mark == "X") {
                second.style.background = "red";
            }
            else {
                second.style.background = "blue";
            }
            count = count + 1;

        }
    }
    else if (value == 3) {

        if (third.innerHTML == 'X' || third.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            third.innerHTML = mark;
            if (mark == "X") {
                third.style.background = "red";
            }
            else {
                third.style.background = "blue";
            }
            count = count + 1;

        }
    }
    else if (value == 4) {

        if (forth.innerHTML == 'X' || forth.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            forth.innerHTML = mark;
            if (mark == "X") {
                forth.style.background = "red";
            }
            else {
                forth.style.background = "blue";
            }
            count = count + 1;

        }
    }
    else if (value == 5) {
        if (fifth.innerHTML == 'X' || fifth.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            fifth.innerHTML = mark;
            if (mark == "X") {
                fifth.style.background = "red";
            }
            else {
                fifth.style.background = "blue";
            }
            count = count + 1;

        }
    }
    else if (value == 6) {
        if (sixth.innerHTML == 'X' || sixth.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            sixth.innerHTML = mark;
            if (mark == "X") {
                sixth.style.background = "red";
            }
            else {
                sixth.style.background = "blue";
            }
            count = count + 1;

        }
    }
    else if (value == 7) {
        if (seventh.innerHTML == 'X' || seventh.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            seventh.innerHTML = mark;
            if (mark == "X") {
                seventh.style.background = "red";
            }
            else {
                seventh.style.background = "blue";
            }
            count = count + 1;

        }
    }
    else if (value == 8) {
        if (eighth.innerHTML == 'X' || eighth.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            eighth.innerHTML = mark;
            if (mark == "X") {
                eighth.style.background = "red";
            }
            else {
                eighth.style.background = "blue";
            }
            count = count + 1;

        }
    }
    else if (value == 9) {
        if (nineth.innerHTML == 'X' || nineth.innerHTML == 'O') {
            alert("select another block");
            printmark();
        }
        else {
            nineth.innerHTML = mark;
            if (mark == "X") {
                nineth.style.background = "red";
            }
            else {
                nineth.style.background = "blue";
            }
            count = count + 1;

        }
    }
    changeturn();
    winning();


}
function changeturn() {
    if (mark == 'X') {
        mark = 'O'
        document.getElementById('winner-msg').innerHTML = "player O turn";
    }
    else {
        mark = 'X';
        document.getElementById('winner-msg').innerHTML = "player X turn";


    }

}
function winning() {
    let one = first.innerHTML,
        two = second.innerHTML,
        three = third.innerHTML,
        four = forth.innerHTML,
        five = fifth.innerHTML,
        six = sixth.innerHTML,
        seven = seventh.innerHTML,
        eight = eighth.innerHTML,
        nine = nineth.innerHTML;


    if ((one == 'O' && two == 'O') && (two == 'O' && three == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");
         

    }
    if ((one == 'X' && two == 'X') && (two == 'X' && three == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");


    }
    if ((four == 'O' && five == 'O') && (five == 'O' && six == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");


    }
    if ((four == 'X' && five == 'X') && (five == 'X' && six == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");



    }
    if ((seven == 'O' && eight == 'O') && (eight == 'O' && nine == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");


    }
    if ((seven == 'X' && eight == 'X') && (eight == 'X' && nine == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");



    }

    if ((one == 'O' && four == 'O') && (four == 'O' && seven == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");


    }
    if ((one == 'X' && four == 'X') && (four == 'X' && seven == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");



    }
    if ((two == 'O' && five == 'O') && (five == 'O' && eight == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");



    }
    if ((two == 'X' && five == 'X') && (five == 'X' && eight == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");




    }
    if ((three == 'O' && six == 'O') && (six == 'O' && nine == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");


    }
    if ((three == 'X' && six == 'X') && (six == 'X' && nine == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");



    }
    if ((one == 'O' && five == 'O') && (five == 'O' && nine == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");


    }
    if ((one == 'X' && five == 'X') && (five == 'X' && nine == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");



    }
    if ((three == 'O' && five == 'O') && (five == 'O' && seven == 'O')) {
        oScore=oScore+1;
        oPoint.innerHTML=oScore;
        alert("player O won this match");


    }
    if ((three == 'X' && five == 'X') && (five == 'X' && seven == 'X')) {
        xScore=xScore+1;
        xPoint.innerHTML=xScore;
        alert("player X won this match");

    }
    else if (count == 9) {

        alert("this match is draw");

    }
}


function reset() {
    count = 0;
    first.innerHTML = "";
    second.innerHTML = "";
    third.innerHTML = "";
    forth.innerHTML = "";
    fifth.innerHTML = "";
    sixth.innerHTML = "";
    seventh.innerHTML = "";
    eighth.innerHTML = "";
    nineth.innerHTML = "";
    first.style.background = "";
    second.style.background = "";
    third.style.background = "";
    forth.style.background = "";
    fifth.style.background = "";
    sixth.style.background = "";
    seventh.style.background = "";
    eighth.style.background = "";
    nineth.style.background = "";
    // document.getElementById('winner-msg').innerHTML = "";
}
const resetScore=()=>{
    oScore=0;
    xScore=0;
    oPoint.innerHTML=0;
    xPoint.innerHTML=0;
    reset();
}
