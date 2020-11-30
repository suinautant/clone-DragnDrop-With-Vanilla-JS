// define variable from html
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// listener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
for(const empty of empties){
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// function
function dragStart(){
  this.className += ' drag';
  setTimeout(() => {
    this.className = 'invisable';
  }, 0);
}

function dragEnd(){
  this.className = 'fill';
}

function dragOver(e){
  e.preventDefault();
  this.className += ' hovered';
}

function dragEnter(e){
  e.preventDefault();
}

function dragLeave(){
  this.className = 'empty';
}

function dragDrop(){
  this.append(fill);
  this.className = 'empty';
}