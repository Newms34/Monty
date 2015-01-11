/*Monty Hall Problem*/
var currGuess;//current user guess
var correct;//correct answer
var hostGuess=1;//Host's pick; will be the remaining door (ie if user picks 1, correct is 3, host picks 2)
var winHist=[0,0];
var switchMe=false;//boolean to determine whether we switch or not
var winPerc;
var losPerc;
function monty() {
    //establish initial vals
    correct=Math.ceil(Math.random()*3);
    currGuess = Math.ceil(Math.random()*3);
    while(hostGuess==correct || hostGuess==currGuess){
        hostGuess = Math.ceil(Math.random()*3);
    }
    var guessArr = [1,2,3];
    guessArr.splice(hostGuess-1,1);//create list of possible doors for user to open/switch to, minus the host door.
    if (switchMe && currGuess==guessArr[0]) {
        currGuess=guessArr[1];
    }
    else if (switchMe && currGuess==guessArr[1]) {
        currGuess=guessArr[0];
    }
    if (correct==currGuess) {
        winHist[0]++;
    }
    else if (correct!=currGuess) {
        winHist[1]++;
    }
    winPerc = Math.ceil((winHist[0]/(winHist[0]+winHist[1]))*100);
    losPerc = Math.ceil((winHist[1]/(winHist[0]+winHist[1]))*100);;
    $('#score').html('Game score<hr/>Wins: '+winHist[0]+' ('+winPerc+'%)<br/>Losses: '+winHist[1]+' ('+losPerc+'%)');
}

function montyLoop(){
    winHist = [0,0];
    for (var i=0;i<1000;i++) {
        monty();
    }
    console.log('Win percentage: '+winPerc+'%; Loss Percentage: '+losPerc+'%');//error checkins!
}

function swap() {
    if (switchMe) {
        switchMe = false;
        document.getElementById('swapBut').innerHTML = 'Change to \'Switch\' mode!';
    }
    else {
        switchMe = true;
        document.getElementById('swapBut').innerHTML = 'Change to \'Stay\' mode!';
    }
}
var infoShow=false;
function info() {
    if (infoShow) {
        document.getElementById('infoDiv').style.display='none';
        document.getElementById('infoBut').innerHTML = '...What!';
        infoShow=false;
    }
    else {
        document.getElementById('infoDiv').style.display='block';
        document.getElementById('infoBut').innerHTML = 'Okay!';
        infoShow=true;
    }
}