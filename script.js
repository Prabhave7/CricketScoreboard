let score1 = document.querySelector('.team1');
let score2 = document.querySelector('.team2');
let ball = 0;
let changeInning = document.querySelector('.inning');
let reset = document.querySelector('.reset');
changeInning.addEventListener('click',function(){
  score1 = score2;
  console.log('Inning Changed');
  alert('2nd Inning');
  description.innerHTML = '';
  ball = 0;
  changeInning.style.display = 'none';
  reset.style.display='block';
});
let btns = document.querySelectorAll
('.b');
let description = document.querySelector('.description');
for(let i= 0; i<btns.length; i++){
  btns[i].addEventListener('click',function(){
    score1.children[1].innerHTML = Number(score1.children[1].innerHTML)+Number(btns[i].innerHTML);
    console.log('button was clicked');
    ball +=1;
  });
};
let w = document.querySelector('.w');
w.addEventListener('click',function(){
  score1.children[3].innerHTML = Number(score1.children[3].innerHTML) + 1;
  description.innerHTML += w.innerHTML+',';
  ball +=1;
});
w.addEventListener('click',over);

function ballTrack(){
    description.innerHTML += this.innerHTML+',';
};
for(let i= 0; i<btns.length; i++){
  btns[i].addEventListener('click',ballTrack)
  btns[i].addEventListener('click',over);
};
function over(){
  if(ball==6){
    score1.children[4].innerHTML = Number(score1.children[4].innerHTML) + 1;
    ball = 0;
    description.innerHTML += '||';
  }
};
reset.addEventListener('click',function(){
  alert('ready for new match');
  location.reload();
});