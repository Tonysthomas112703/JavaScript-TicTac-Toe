let boxes= document.querySelectorAll(".Box");
let reset= document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]; 



const resetgame= ()=>{
    let turnO=true;
    enablebox();
    count=0;
      
      msgcontainer.classList.add("hide");
};
let count=0;

boxes.forEach((Box) =>{
    Box.addEventListener("click",() =>{
        console.log("button clicked");
        count=count+1;
        console.log(count);
        
        if(turnO){
            Box.innerText="O";
            turnO=false;
        }
        else{
            Box.innerText="X";
            turnO=true;
        }
        Box.disabled=true;

        winnercheck()
    
    });

    
    
});

const enablebox=() =>{
    for(let Box of boxes){
        Box.disabled=false;
        Box.innerText="";
        
       
    }
};
const disableboxes=()=>{
    for(let Box of boxes){
        Box.disabled=true;
    }
}

const draw=() =>{
    if(count===9){
        msg.innerText="sorry it's Draw";
        msgcontainer.classList.remove("hide") ;  

    }
}

const showwinner=( winner)=>{
    
    msg.innerText= `congratulations,winner is ${winner}` ;
 msgcontainer.classList.remove("hide") ;  
};


 const winnercheck = () =>{
    for( let pattern of  winpatterns){
        //console.log(pattern);
         let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText;


         if(pos1val !="" && pos2val!="" &&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                 console.log("Winner",pos1val);
                 showwinner(pos1val)
                 disableboxes();


              }
              else {
                draw();
              }
        


     }
    }

};

reset.addEventListener("click", resetgame);