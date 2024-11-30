let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn")
let turn =true;

const winPattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [2,4,6],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  ]