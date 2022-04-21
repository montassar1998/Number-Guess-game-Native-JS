var highestScore = 0;
var currentScore = 20;
var currentNumber = Math.floor(Math.random() * 20 + 1)


function verify_nb() {
    console.log("nb ="+currentNumber)

    var userInput = document.querySelector(".guess").value
    console.log(document.getElementsByClassName("score")[0].textContent)
    if (document.getElementsByClassName("score")[0].textContent == 1) {
       // alert("ll");
        document.querySelector(".check").disabled= true;
        document.getElementsByClassName("message")[0].textContent = "Game Over, the number was " + currentNumber + " Try again !"
        return;
    }
    if (currentNumber != userInput) {
        if (currentNumber > userInput) {
            document.getElementsByClassName("message")[0].textContent = "Guess Higher!"
        } else if (currentNumber < userInput) {
            document.getElementsByClassName("message")[0].textContent = "Guess Lower!"
        }
        currentScore--;
        document.getElementsByClassName("score")[0].innerHTML = currentScore;
    } else {
        
        document.body.style.backgroundColor = "#32CD32";
        document.getElementsByClassName("message")[0].textContent = "Good Job You did it ✊🏻 👊🏻 "
        document.querySelector(".check").disabled= true;
        return ;
    }
}
function play_again(){
  
    
    document.querySelector(".guess").value = "";
    document.querySelector(".check").disabled= false;
    document.body.style.backgroundColor = "#222";
    currentNumber = Math.floor(Math.random() * 20 + 1)
    console.log("nnn"+document.querySelector(".message").textContent);
    var msg_control_modify_critereon = document.querySelector(".message");
    if((msg_control_modify_critereon.textContent=="Good Job You did it ✊🏻 👊🏻 ") ){
        highestScore = Math.max(highestScore, currentScore)
        currentScore = 0;
    }
    document.getElementsByClassName("message")[0].textContent = "Start guessing..."
    
    document.getElementsByClassName("highscore")[0].innerHTML = highestScore;
    document.getElementsByClassName("score")[0].innerHTML = "20";
    currentScore = 20;
}
function init() {
    document.getElementsByClassName("score")[0].innerHTML = 20;
    var check_btn = document.querySelector(".check")
    check_btn.addEventListener("click", verify_nb)
    var again_btn = document.querySelector(".again")
    again_btn.addEventListener("click",play_again)

}
init();
