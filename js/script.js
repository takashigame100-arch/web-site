const form = document.getElementById("loveForm");

/* =========================
   たかしの回答（ここを自分で変更）
========================= */

const takashiAnswers = [

3,3,3,3,3,
3,3,3,3,3,
3,3,3,3,3,
3,3,3,3,3

];

/* =========================
   選択肢ランダム表示
========================= */

document.querySelectorAll("p").forEach(q => {

let choices = Array.from(q.querySelectorAll("label"));

for(let i = choices.length - 1; i > 0; i--){

let j = Math.floor(Math.random() * (i + 1));

[choices[i], choices[j]] = [choices[j], choices[i]];

}

choices.forEach(c => q.appendChild(c));

});

/* =========================
   フォーム送信
========================= */

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let active = 0;
let care = 0;
let stable = 0;
let depend = 0;

let aisho = 0;

/* ---------- 診断計算 ---------- */

for(let i = 1; i <= 20; i++){

let selected = document.querySelector(`input[name="q${i}"]:checked`);

if(!selected) continue;

let value = Number(selected.value);

/* 恋愛タイプ */

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

/* ---------- 相性計算 ---------- */

/* ---------- 相性計算 ---------- */

let takashi = takashiAnswers[i-1];

/* 例外処理（Q9 甘えたい×甘えたい） */

if(i === 9 && value === 3 && takashi === 3){

aisho += 0;

}

else if(value === takashi){

aisho += 5;

}

else if(Math.abs(value - takashi) === 1){

aisho += 2;

}

}

/* ---------- 保存 ---------- */

localStorage.setItem("active", active);
localStorage.setItem("care", care);
localStorage.setItem("stable", stable);
localStorage.setItem("depend", depend);

localStorage.setItem("aisho", aisho);

/* ---------- 結果ページ ---------- */

location.href = "result.html";

});

}

/* =========================
   ハートアニメーション
========================= */

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

/* 初期ハート */

for(let i = 0; i < 20; i++){

createHeart(true);

}

/* 生成 */

setInterval(()=>createHeart(false), 500);