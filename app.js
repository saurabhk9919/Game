let boxes=document.querySelectorAll('.box');
let resey=document.querySelector('.reset');
let turn=document.querySelector('.turn');

let turnCount=True;
const winCombos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{{box.addEventListener('click',()=>{console.log('clicked')
    if(turnCount){
        box.innerHTML='0';
        turnCount=false;
        else{
        turn.innerHTML='X';
        turnCount=true;}
        box.disabled=true;
        checkWin();

})}});
const checkWin=()=>{
}