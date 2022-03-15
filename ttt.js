const X_CLASS="x";
const CIRCLE_CLASS="circle";
 
const cellElements=document.querySelectorAll('[data-cell]');
let circleTurn;
 
start();
  function start(){     
 cellElements.forEach(cell => {
     cell.addEventListener("click", handleClick,{once:true})
 });
 hover();
}


 
 function handleClick(element){
  const cell=element.target
  const currentClass= circleTurn ? CIRCLE_CLASS : X_CLASS
 
  placeMark(cell,currentClass)

  swap();
  hover();
 }
 function placeMark(cell,currentClass){
     cell.classList.add(currentClass)
   

}
function swap(){
    circleTurn=!circleTurn;
    
}
function hover(){
   const board=document.getElementById("board");
   board.classList.remove(X_CLASS)
   board.classList.remove(CIRCLE_CLASS)
 if(circleTurn){
    board.classList.add(CIRCLE_CLASS)
    
 }else{
    board.classList.add(X_CLASS)
 }
}
 