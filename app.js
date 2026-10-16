let gameSeq = [];
let userSeq = [];
let btn =["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started")
        started = true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*btn.length);
    let randColor = btn[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkAns (idx){
    // console.log("curr level:",level);
    // let idx =level-1;

    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length ===  gameSeq.length){
        setTimeout(levelUp,1000);
        // levelUp();
       }
    }else{
        h2.innerHTML = `Game Over!Your score was <b>${level}<b/> <br>  Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);

        started = false;
        gameSeq=[];
        level = 0;
    }
}

function btnPress(){
  console.log(this);
  let btn = this;
  userflash(btn);

 let userColor = btn.classList[1];
  userSeq.push(userColor);

  console.log("User:", userSeq[0]);
console.log("Game:", gameSeq[0]);

  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);

}