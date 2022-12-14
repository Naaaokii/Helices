let scenario = document.querySelector('.fa-file-alt');
let environment = document.querySelector('.fa-seedling');
let actors = document.querySelector('.fa-diamond');
let activity = document.querySelector('.fa-puzzle-piece');
let generate = document.querySelector('.fa-gear');

scenario.addEventListener('click', path1);
environment.addEventListener('click', path2);
actors.addEventListener('click', path3);
activity.addEventListener('click', path4);
generate.addEventListener('click', path5);

function path1(){
    console.log('azerty');
    document.location.href="scenario.html"; 
}

function path2(){
    document.location.href="environment.html"; 
}

function path3(){
    document.location.href="actors.html"; 
}

function path4(){
    document.location.href="activity.html"; 
}

function path5(){
    document.location.href="#"; 
}
