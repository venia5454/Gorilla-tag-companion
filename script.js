// Page switching
function page(name){

document.querySelectorAll(".page").forEach(p=>{
p.classList.add("hidden");
});

document.getElementById(name).classList.remove("hidden");

}


// XP system
let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;


function addXP(amount){

xp += amount;

if(xp >= 100){
level++;
xp = xp - 100;
}

localStorage.setItem("xp",xp);
localStorage.setItem("level",level);

updateXP();

}


function updateXP(){

document.getElementById("level").innerHTML =
"Level " + level;

document.getElementById("xptext").innerHTML =
"XP: " + xp + " / 100";

document.getElementById("xpbar").style.width =
xp + "%";

}

updateXP();



// Challenges

let challenges=[
"Tag 10 players",
"Escape as the last monkey",
"Practice wall climbing",
"Learn a new route",
"Win 3 rounds",
"Practice branching",
"Climb without stopping"
];


function spin(){

let random =
challenges[Math.floor(Math.random()*challenges.length)];

document.getElementById("challenge").innerHTML =
random;

addXP(10);

}



// Cosmetics saving

let cosmetics=[
"hat",
"badge",
"face"
];


function saveCosmetics(){

cosmetics.forEach(item=>{

let box=document.getElementById(item);

localStorage.setItem(
item,
box.checked
);

});

}


function loadCosmetics(){

cosmetics.forEach(item=>{

let box=document.getElementById(item);

box.checked =
localStorage.getItem(item) === "true";

box.onchange=saveCosmetics;

});

}

loadCosmetics();



// Stats

let games =
Number(localStorage.getItem("games")) || 0;


function addGame(){

games++;

localStorage.setItem("games",games);

document.getElementById("games").innerHTML =
"Games: " + games;

document.getElementById("achievement").innerHTML =
"🏆 Played your first games!";

addXP(15);

}


document.getElementById("games").innerHTML =
"Games: " + games;



// Timer

let seconds=0;
let timer;


function startTimer(){

if(timer) return;

timer=setInterval(()=>{

seconds++;

document.getElementById("time").innerHTML =
"Time: " + seconds + " seconds";

},1000);

}



// Service worker for app mode

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}
