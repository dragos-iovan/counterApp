const homeScore = document.getElementById("homeScore");
const guestScore = document.getElementById("guestScore");
const sessionTimer = document.getElementById("sessionTimer");

function homeScoreAdd(num){
    currentScore = parseInt(homeScore.textContent);
    homeScore.textContent = currentScore + num;
    setLeader();
}
function guestScoreAdd(num){
    currentScore = parseInt(guestScore.textContent);
    guestScore.textContent = currentScore + num;
    setLeader();
}
function startNewGame() {
    homeScore.textContent = guestScore.textContent = 0
    sessionTimer.textContent = 720;
}
setInterval(function () {
    currentTimeLeft = parseInt(sessionTimer.textContent);
    sessionTimer.textContent = currentTimeLeft - 1;
}, 1000)
function setLeader() {
    homeScoreValue = parseInt(homeScore.textContent);
    guestScoreValue = parseInt(guestScore.textContent);
    if (homeScoreValue > guestScoreValue) {
        homeScore.classList.add("theLeader");
        guestScore.classList.remove("theLeader");
    } else if (guestScoreValue > homeScoreValue) {
        guestScore.classList.add("theLeader");
        homeScore.classList.remove("theLeader");
    } else {
        homeScore.classList.remove("theLeader");
        guestScore.classList.remove("theLeader");
    }
}