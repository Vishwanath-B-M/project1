const choice=["rock" ,"paper" ,"scissor"];
let computerdisplay=document.getElementById("computerdisplay");
let playerdisplay=document.getElementById("playerdisplay");
let resultdisplay=document.getElementById("resultdisplay");
let result;


function playgame(playerchoice){
    const computer=choice[Math.floor(Math.random()*3)];
    if(computer===playerchoice){
       result="its tie";
        //computerchoice.textContent+='$computer';

    }else{
        switch(playerchoice){
            case "rock":
             result=(computer==="scissor")?"you win":"you lose";
             break;
             case "paper":
                result=(computer==="rock")?"you win":"you lose";
                break;
                case "scissor":
                    result=(computer==="paper")?"you win":"you lose";
                    break;

        }
    }
    playerdisplay.textContent=`you did:${playerchoice}`;
    computerdisplay.textContent=`computer did:${computer}`;
    resultdisplay.textContent=`${result}`;
    console.log(computer);
    console.log(playerchoice);
    

}
