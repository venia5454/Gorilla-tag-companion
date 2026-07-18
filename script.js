// Tab system

function openTab(tab){

document.querySelectorAll(".tab").forEach(page=>{
page.classList.add("hidden");
});

document.getElementById(tab).classList.remove("hidden");

}



// XP System

let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;


function addXP(amount){

xp += amount;


if(xp >= 100){

level++;
xp -= 100;

}


localStorage.setItem("xp",xp);
localStorage.setItem("level",level);


updateXP();

}



function updateXP(){

document.getElementById("level").innerHTML =
"Level " + level;


document.getElementById("xpText").innerHTML =
"XP " + xp + " / 100";


document.getElementById("xpbar").style.width =
xp + "%";

}


updateXP();





// Challenge system

let challenges=[

"Tag 10 monkeys",

"Escape as the last player",

"Wall climb for 5 minutes",

"Practice branching",

"Win 3 rounds",

"Learn a new route",

"Play without stopping"

];


function spinChallenge(){

let result =
challenges[Math.floor(Math.random()*challenges.length)];


document.getElementById("challenge").innerHTML =
result;


addXP(10);

}






// Daily goal

let dailyGoals=[

"Complete one challenge",

"Practice climbing",

"Play 3 rounds",

"Learn a map route"

];


document.getElementById("daily").innerHTML =
dailyGoals[Math.floor(Math.random()*dailyGoals.length)];







// Game stats

let games =
Number(localStorage.getItem("games")) || 0;


function addGame(){

games++;


localStorage.setItem("games",games);


document.getElementById("games").innerHTML =
"Games: " + games;


document.getElementById("achievements").innerHTML =
"🏆 First games completed!";


addXP(15);

}


document.getElementById("games").innerHTML =
"Games: " + games;







// Timer

let minutes = 0;
let timer;


function startTimer(){

if(timer) return;


timer=setInterval(()=>{

minutes++;


document.getElementById("time").innerHTML =
"Play Time: " + minutes + " min";


},60000);

}







// Cosmetic saving

let items=[
"hat",
"badge",
"face"
];


function saveCosmetics(){

items.forEach(item=>{

let box=document.getElementById(item);

localStorage.setItem(
item,
box.checked
);

});

}



function loadCosmetics(){

items.forEach(item=>{

let box=document.getElementById(item);


box.checked =
localStorage.getItem(item) === "true";


box.onchange=saveCosmetics;

});

}


loadCosmetics();






// Install support

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}
