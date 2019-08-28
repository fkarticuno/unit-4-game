/*
var topaz = "<img src='./images/topaz.jpg'/>";
var ruby = "<img src='./images/ruby.jpg'/>";
var moonstone = "<img src='./images/moonstone.jpg'/>";
var emerald = "<img src='./images/emerald.jpg'/>";
*/

var score = 0;
var winscore = randomize();
var wins = 0
// console.log(sc1 + "\n" + sc2 + "\n" + sc3 +"\n" + sc4)
function randomize() {
    return Math.floor((Math.random() * 100) + 1);
}

$(document).ready(function() {
    $(".img").on("click", function() {
    score += parseInt($(this).attr("data-value"));
    $('#cscore').text('Current Score: ' + score);
    console.log(score);
        if (score == winscore) {
            $('#winlose').text("YOU WIN");
            wins++;
            reset();
        }
        if (score > winscore) {
            $('#winlose').text("YOU LOSE, the winning number was " + winscore);
            reset();
        }
    })
    $("#rebtn").on("click",function() {
        reset();
    })
})

function reset() {
    $('#wins').text('Wins: '+ wins);
    score = 0;
    $('#cscore').text('Current Score: ' + score);
    winscore = randomize();
    console.log(winscore)
}
console.log(winscore)