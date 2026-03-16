const form = document.getElementById("loveForm");

if(form){
form.addEventListener("submit", function(e){

e.preventDefault();

let score = 0;

for(let i = 1; i <= 20; i++){

let selected = document.querySelector(`input[name="q${i}"]:checked`);

if(selected){
score += Number(selected.value);
}

}

localStorage.setItem("score", score);

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