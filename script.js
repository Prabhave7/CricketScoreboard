let score1 = document.querySelector('.team1');
let score2 = document.querySelector('.team2');
let ball = 0;
let wicket = 0;
let target = 1;
let changeInning = document.querySelector('.inning');
let reset = document.querySelector('.reset');
changeInning.addEventListener('click',secondInning);
let btns = document.querySelectorAll
('.b');
let description = document.querySelector('.description');
let w = document.querySelector('.w');
for(let i= 0; i<btns.length; i++){
  btns[i].addEventListener('click',function(){
    if(wicket < 10){
      score1.children[1].innerHTML = Number(score1.children[1].innerHTML)+Number(btns[i].innerHTML);
      console.log('Run added');
      ball +=1;
      score1.children[6].innerHTML = ball;
    }
  });
  btns[i].addEventListener('click',chased);
};
w.addEventListener('click',function(){
  if(wicket<10){
    score1.children[3].innerHTML = Number(score1.children[3].innerHTML) + 1;
    description.innerHTML += w.innerHTML+',';
    ball +=1;
    wicket +=1;
    score1.children[6].innerHTML = ball;
  }
});
w.addEventListener('click',over);
w.addEventListener('click',allOut);
w.addEventListener('click',defend);
function ballTrack(){
  if(wicket<10){
    description.innerHTML += this.innerHTML+',';
  }
};
for(let i= 0; i<btns.length; i++){
  btns[i].addEventListener('click',ballTrack)
  btns[i].addEventListener('click',over);
};
function over(){
  if(ball==6 && wicket<10){
    score1.children[4].innerHTML = Number(score1.children[4].innerHTML) + 1;
    ball = 0;
    description.innerHTML += '||';
    score1.children[6].innerHTML = ball;
  }
};
reset.addEventListener('click',function(){
  alert('ready for new match');
  location.reload();
});

function allOut(){
  if(wicket == 10){
    alert('All Out!');
    target = Number(score1.children[1].innerHTML)+1;
    secondInning(); 
  }
}

function secondInning(){
  target = Number(score1.children[1].innerHTML)+1;
  score1 = score2;
  wicket = 0;
  console.log('Inning Changed');
  alert('2nd Inning');
  description.innerHTML = '';
  ball = 0;
  changeInning.style.display = 'none';
  reset.style.display='block';
};

function chased(){
  if(score2.children[3].innerHTML<10 && score2.children[1].innerHTML >= target){
    console.log('Target chased successfully.');
    let b = document.querySelectorAll('.b');
    for(btn of b){
      btn.style.opacity = 0.5;
      btn.style.pointerEvents = 'none';
    }
    let w = document.querySelector('.w');
    w.style.opacity = 0.5;
    w.style.pointerEvents = 'none';
    return true;
  }
};
function defend(){
  if(Number(score2.children[3].innerHTML)==10 && score2.children[1].innerHTML < target){
    console.log('Target defended successfully.');
    let b = document.querySelectorAll('.b');
    for(btn of b){
      btn.style.opacity = 0.5;
      btn.style.pointerEvents = 'none';
    }
    let w = document.querySelector('.w');
    w.style.opacity = 0.5;
    w.style.pointerEvents = 'none';
    return true;
  }
};