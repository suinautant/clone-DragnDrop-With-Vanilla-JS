// Variable
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Listener
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for(const empty of empties){
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
  // 대상 위로 드래그 했을 때
  empty.addEventListener("dragenter", dragEnter);
  // 대상으로 부터 벗어났을 때
  empty.addEventListener("dragleave", dragLeave);
}

// Function
function dragStart(){
  this.className += " hold";
  setTimeout(()=>{
    this.className = "invisable";
  }, 0);
}
function dragEnd(){
  this.className = "fill";
}
function dragOver(e){
  e.preventDefault();
}
function dragEnter(e){
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave(){
  this.className = "empty";
}
function dragDrop(){
  this.className = "empty";
  this.append(fill);
}