let GameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["pink","orange","aqua","blue"];

let h2=document.querySelector('h2');
//step1 --> keypress -game start
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    
});

//step2 -->random button flash and level update
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    GameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]==GameSeq[idx]){
        if(userSeq.length==GameSeq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML=`Game over! Your score was<b>${level}</b> <br> Press any key to Start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    GameSeq=[];
    userSeq=[];
    level=0;
}