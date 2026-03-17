const form = document.getElementById("loveForm");

if(form){
form.addEventListener("submit", function(e){

e.preventDefault();

let active = 0;
let care = 0;
let stable = 0;
let depend = 0;

for(let i = 1; i <= 20; i++){

let selected = document.querySelector(`input[name="q${i}"]:checked`);

if(!selected) continue;

let value = Number(selected.value);

if([1,3,6,12,14].includes(i)){
active += value;
}

else if([2,11,18,17].includes(i)){
care += value;
}

else if([4,10,16,20].includes(i)){
stable += value;
}

else if([5,7,8,9,13,15,19].includes(i)){
depend += value;
}

}

localStorage.setItem("active",active);
localStorage.setItem("care",care);
localStorage.setItem("stable",stable);
localStorage.setItem("depend",depend);

location.href = "result.html";

});
}

const container = document.querySelector(".hearts");

function createHeart(startRandom = false){

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  const size = Math.random() * 20 + 10;
  heart.style.fontSize = size + "px";

  heart.style.left = Math.random() * 100 + "vw";

  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = duration + "s";

  if(startRandom){
    heart.style.bottom = Math.random() * 100 + "vh";
  }

  container.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  }, duration * 1000);
}

/* 最初に散らばったハートを作る */
for(let i = 0; i < 20; i++){
  createHeart(true);
}

/* その後は普通に生成 */
setInterval(()=>createHeart(false), 500);