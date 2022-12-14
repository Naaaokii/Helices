let create = document.querySelector('.fa-puzzle-piece');
let escape_game = document.querySelector('.fa-diamond');
let share = document.querySelector('.fa-share');

create.addEventListener('click', path1);
escape_game.addEventListener('click', path2);
share.addEventListener('click', path3);

function path1(){
    console.log('azerty');
    document.location.href="create_escape.html"; 
}

function path2(){
    document.location.href="#"; 
}

function path3(){
    document.location.href="#"; 
}