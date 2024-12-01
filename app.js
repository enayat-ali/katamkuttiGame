let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn")
let turn =true;
let newBtn = document.querySelector("#new-btn");
let msgBox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");
const winPattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [2,4,6],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  ];

  const resetGame = () => {
    turn = true;
    enableBoxes();
    msgBox.classList.add("hide");
  }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turn) {
        box.innerText ="O";
        turn = false;
      } else{
        box.innerText ="X";
        turn = true;
      }
      box.disabled = true;
      checkWinner();
  });
  });

  const disableBoxes = () =>{
    for (const box of boxes) {
      box.disabled = true;
    }
  }

  const enableBoxes = () =>{
    for (const box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  }

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgBox.classList.remove("hide");
  disableBoxes();
}
  const checkWinner = () => {
    for (const pattern of winPattern) {
      console.log(pattern[0], pattern[1],pattern[2]);
      let position1 = boxes[pattern[0]].innerText;
      let position2 = boxes[pattern[1]].innerText;
      let position3 = boxes[pattern[2]].innerText;
      
      if(position1 !== "", position2 !== "", position3 !== ""){
        if(position1 === position2 && position2 === position3){
          console.log("winner", position1);

         showWinner(position1);
        }
      }
    }
  }

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);