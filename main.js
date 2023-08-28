var timer = 10;

function getNewHit(){
    var rn = Math.floor(Math.random()*10);
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
    }
    }, 1000)
}

getNewHit();
runTimer();
makeBubble();