document.getElementById("loveForm").addEventListener("submit", function(e){

e.preventDefault();

let score = 0;

for(let i = 1; i <= 20; i++){

let selected = document.querySelector(`input[name="q${i}"]:checked`);

score += Number(selected.value);

}

localStorage.setItem("score", score);

location.href = "result.html";

});