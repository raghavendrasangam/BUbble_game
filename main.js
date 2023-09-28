var timer = 10;
var score= 0;
var rn=0;
//event bubbling---when clickedon something event will raise, 


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;

}

function makeBubble(){
    var clutter = "";
for(var i=1; i<=75; i++){
    var rndm = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rndm}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerint = setInterval(function(){
     if(timer > 0) {    
    timer--;
    document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1 class="over">GAME OVER</h1><br>
        <br><h1 id="highscore">YOUR SCORE = ${score}</h1>`
        confetti.start();
    }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);

    if(clickednum == rn){
        increaseScore(); // increses score when clicked on same num
        makeBubble(); //new bubbles formed
        getNewHit(); // new hit number
    }
});



getNewHit();
runTimer();
makeBubble();

