document.getElementById('sunday').onclick = getLeather;
document.getElementById('monday').onclick = getShirtJeans;
document.getElementById('tuesday').onclick = getPlaidSkirt;
document.getElementById('wednesday').onclick = getCardigan;
document.getElementById('thursday').onclick = getBlackTank;
document.getElementById('friday').onclick = getPlaidJacket;
document.getElementById('saturday').onclick = getBrownJacket;

function getLeather(){
  document.getElementById('leather').classList.toggle("hidden");
}

function getShirtJeans(){
  document.getElementById('shirtjeans').classList.toggle("hidden");
}

function getPlaidSkirt(){
  document.getElementById('plaidskirt').classList.toggle("hidden");
}

function getCardigan(){
  document.getElementById('cardigan').classList.toggle("hidden");
}

function getBlackTank(){
  document.getElementById('blacktank').classList.toggle("hidden");
}


function getPlaidJacket(){
  document.getElementById('plaidjacket').classList.toggle("hidden");
}

function getBrownJacket(){
  document.getElementById('brownjacket').classList.toggle("hidden");
}
