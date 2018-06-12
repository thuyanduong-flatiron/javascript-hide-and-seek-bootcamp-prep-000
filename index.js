function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let currentNode = document.querySelector('#grand-node');
  while(currentNode.children[0]){
    currentNode = currentNode.children[0];
  }
  return currentNode;
}

function increaseRankBy(n){
  let list = document.querySelectorAll('.ranked-list li');
  for(let j=0; j<list.length; j++){
    list[j].innerHTML = parseInt(list[j].innerHTML) + n;
  }
}
