let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");
let rstbtn=document.querySelector("#rst-btn");
const resetGame=()=>{
    userScore=0;
    compScore=0;
    userscore.innerText=userScore;
    compscore.innerText=compScore;
    msg.innerText="Pick your move";
    msg.style.backgroundColor="";

}
const drawGame=()=>{
    msg.innerText="Game was draw! Try again"
    msg.style.backgroundColor="";
}
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randId=Math.floor(Math.random()*3);
    return options[randId];
}
const Winner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore;
        msg.innerText=`You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscore.innerText=compScore;
        msg.innerText=`You Loss! ${compChoice} beats your ${userChoice} `
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    const compChoice=gencompchoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        Winner(userWin,userChoice,compChoice);
    }
}
choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})
rstbtn.addEventListener("click",resetGame);