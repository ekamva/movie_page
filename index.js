
// animation for the projector´s movement:
let moveFilm = [
    {transform: 'translateY(0)'},
    {transform: 'translateY(3px)'}
]
let moveFilmTiming = {
    duration: 1000, 
    iterations: Infinity
}    
     
    document.getElementById("first_ring").animate(
        moveFilm,
        moveFilmTiming
    );
    document.getElementById("second_ring").animate(
        moveFilm,
        moveFilmTiming
    );



let changePic = [
    {transform: 'scale(1)', opacity: 0.5},
    {transform: 'scale(1.2)', opacity: 1}
];
let changePicTiming = {
    duration: 1000,
}

document.querySelector("#one").onclick = function(){
    one.animate(changePic, changePicTiming);

}
document.querySelector("#to").onclick = function(){
    to.animate(changePic, changePicTiming);
}
document.querySelector("#three").onclick = function(){
    three.animate(changePic, changePicTiming);
}
document.querySelector("#four").onclick = function(){
    four.animate(changePic, changePicTiming);
}


// chose and show popcorn or cola:

//animation for food:

let showFoodTiming= {
    duration: 2000,
    fill: 'forwards'
}

let showFood = [
    {transform: 'scale(1)'},
    {transform: 'scale(2)'},
]


const btnPopcorn = document.getElementById("btnPopcorn");
const btnCola = document.getElementById("btnCola");
const matVarer = document.getElementById("matVarer");

//picture of the food appears depending on customers choice:

function changeFood(evt) {
    const knapp = evt.target;    
    const pic = knapp.dataset.pic;    
    matVarer.style.backgroundImage = `url("${pic}")`;   
    matVarer.animate(showFood, showFoodTiming); 
    
}
       
function noFood(evt) {
    const knapp = evt.target;   
    const pic = knapp.dataset.pic;    
    matVarer.style.backgroundImage = ""; 
}
   
btnPopcorn.addEventListener("click", changeFood);
btnCola.addEventListener("click", changeFood);
btnNo.addEventListener("click", noFood);

