let theme = document.querySelector("#theme");
let sous_theme1 = document.querySelector("#sous_theme1");
let sous_theme2 = document.querySelector("#sous_theme2");
let sous_theme3 = document.querySelector("#sous_theme3");
let sous_theme4 = document.querySelector("#sous_theme4");
let img1 = document.querySelector('#aa')
let img2 = document.querySelector('#bb')
let img3 = document.querySelector('#cc')
let img4 = document.querySelector('#dd')
let img5 = document.querySelector('#ee')
let img6 = document.querySelector('#ff')
let img7 = document.querySelector('#gg')
let quete1 = document.querySelector('#hh')
let quete2 = document.querySelector('#ii')
let quete3 = document.querySelector('#jj')
let quete4 = document.querySelector('#kk')
let quete5 = document.querySelector('#ll')

theme.addEventListener('change', choice1);
sous_theme1.addEventListener('change', choice2);
sous_theme2.addEventListener('change', choice3);
sous_theme3.addEventListener('change', choice4);

function choice1(){
    if(theme.value != ""){
        sous_theme1.style.visibility = "visible";
    }
    else{
        sous_theme1.style.visibility = "hidden";
        sous_theme1.value = "";
        sous_theme2.style.visibility = "hidden";
        sous_theme2.value = "";
        sous_theme3.style.visibility = "hidden";
        sous_theme3.value = "";
        sous_theme4.style.visibility = "hidden";
        sous_theme4.value = "";
    }
}

function choice2(){
    if(sous_theme1.value != ""){
        sous_theme2.style.visibility = "visible";
    }
    else{
        sous_theme2.style.visibility = "hidden";
        sous_theme2.value = "";
        sous_theme3.style.visibility = "hidden";
        sous_theme3.value = "";
        sous_theme4.style.visibility = "hidden";
        sous_theme4.value = "";
    }
}

function choice3(){
    if(sous_theme2.value != ""){
        sous_theme3.style.visibility = "visible";
    }
    else{
        sous_theme3.style.visibility = "hidden";
        sous_theme3.value = "";
        sous_theme4.style.visibility = "hidden";
        sous_theme4.value = "";
    }
}

function choice4(){
    if(sous_theme3.value != ""){
        sous_theme4.style.visibility = "visible";
    }
    else{
        sous_theme4.style.visibility = "hidden";
        sous_theme4 .value = "";
    }
}

img1.addEventListener('click', d1);
img2.addEventListener('click', d2);
img3.addEventListener('click', d3);
img4.addEventListener('click', d4);
img5.addEventListener('click', d5);
img6.addEventListener('click', d6);
img7.addEventListener('click', d7);

function d1(){
    if(img1.style.zoom == "125%"){
        img1.style.border = "";
        img1.style.borderRadius = "";
        img1.style.zoom = "";
    }else{
        img1.style.border = "rgb(126, 217, 87) solid 3px";
        img1.style.borderRadius = "5px";
        img1.style.zoom = "125%";
        img2.style.border = "";
        img2.style.borderRadius = "";
        img2.style.zoom = "";
        img3.style.border = "";
        img3.style.borderRadius = "";
        img3.style.zoom = "";
        img4.style.border = "";
        img4.style.borderRadius = "";
        img4.style.zoom = "";
        img5.style.border = "";
        img5.style.borderRadius = "";
        img5.style.zoom = "";
        img6.style.border = "";
        img6.style.borderRadius = "";
        img6.style.zoom = "";
        img7.style.border = "";
        img7.style.borderRadius = "";
        img7.style.zoom = "";
    }
}

function d2(){
    if(img2.style.zoom == "125%"){
        img2.style.border = "";
        img2.style.borderRadius = "";
        img2.style.zoom = "";
    }else{
        img2.style.border = "rgb(126, 217, 87) solid 3px";
        img2.style.borderRadius = "5px";
        img2.style.zoom = "125%";
        img1.style.border = "";
        img1.style.borderRadius = "";
        img1.style.zoom = "";
        img3.style.border = "";
        img3.style.borderRadius = "";
        img3.style.zoom = "";
        img4.style.border = "";
        img4.style.borderRadius = "";
        img4.style.zoom = "";
        img5.style.border = "";
        img5.style.borderRadius = "";
        img5.style.zoom = "";
        img6.style.border = "";
        img6.style.borderRadius = "";
        img6.style.zoom = "";
        img7.style.border = "";
        img7.style.borderRadius = "";
        img7.style.zoom = "";
    }
}

function d3(){
    if(img3.style.zoom == "125%"){
        img3.style.border = "";
        img3.style.borderRadius = "";
        img3.style.zoom = "";
    }else{
        img3.style.border = "rgb(126, 217, 87) solid 3px";
        img3.style.borderRadius = "5px";
        img3.style.zoom = "125%";
        img2.style.border = "";
        img2.style.borderRadius = "";
        img2.style.zoom = "";
        img1.style.border = "";
        img1.style.borderRadius = "";
        img1.style.zoom = "";
        img4.style.border = "";
        img4.style.borderRadius = "";
        img4.style.zoom = "";
        img5.style.border = "";
        img5.style.borderRadius = "";
        img5.style.zoom = "";
        img6.style.border = "";
        img6.style.borderRadius = "";
        img6.style.zoom = "";
        img7.style.border = "";
        img7.style.borderRadius = "";
        img7.style.zoom = "";
    }
}

function d4(){
    if(img4.style.zoom == "125%"){
        img4.style.border = "";
        img4.style.borderRadius = "";
        img4.style.zoom = "";
    }else{
        img4.style.border = "rgb(126, 217, 87) solid 3px";
        img4.style.borderRadius = "5px";
        img4.style.zoom = "125%";
        img2.style.border = "";
        img2.style.borderRadius = "";
        img2.style.zoom = "";
        img3.style.border = "";
        img3.style.borderRadius = "";
        img3.style.zoom = "";
        img1.style.border = "";
        img1.style.borderRadius = "";
        img1.style.zoom = "";
        img5.style.border = "";
        img5.style.borderRadius = "";
        img5.style.zoom = "";
        img6.style.border = "";
        img6.style.borderRadius = "";
        img6.style.zoom = "";
        img7.style.border = "";
        img7.style.borderRadius = "";
        img7.style.zoom = "";
    }
}

function d5(){
    if(img5.style.zoom == "125%"){
        img5.style.border = "";
        img5.style.borderRadius = "";
        img5.style.zoom = "";
    }else{
        img5.style.border = "rgb(126, 217, 87) solid 3px";
        img5.style.borderRadius = "5px";
        img5.style.zoom = "125%";
        img2.style.border = "";
        img2.style.borderRadius = "";
        img2.style.zoom = "";
        img3.style.border = "";
        img3.style.borderRadius = "";
        img3.style.zoom = "";
        img4.style.border = "";
        img4.style.borderRadius = "";
        img4.style.zoom = "";
        img1.style.border = "";
        img1.style.borderRadius = "";
        img1.style.zoom = "";
        img6.style.border = "";
        img6.style.borderRadius = "";
        img6.style.zoom = "";
        img7.style.border = "";
        img7.style.borderRadius = "";
        img7.style.zoom = "";
    }
}

function d6(){
    if(img6.style.zoom == "125%"){
        img6.style.border = "";
        img6.style.borderRadius = "";
        img6.style.zoom = "";
    }else{
        img6.style.border = "rgb(126, 217, 87) solid 3px";
        img6.style.borderRadius = "5px";
        img6.style.zoom = "125%";
        img2.style.border = "";
        img2.style.borderRadius = "";
        img2.style.zoom = "";
        img3.style.border = "";
        img3.style.borderRadius = "";
        img3.style.zoom = "";
        img4.style.border = "";
        img4.style.borderRadius = "";
        img4.style.zoom = "";
        img5.style.border = "";
        img5.style.borderRadius = "";
        img5.style.zoom = "";
        img1.style.border = "";
        img1.style.borderRadius = "";
        img1.style.zoom = "";
        img7.style.border = "";
        img7.style.borderRadius = "";
        img7.style.zoom = "";
    }
}

function d7(){
    if(img7.style.zoom == "125%"){
        img7.style.border = "";
        img7.style.borderRadius = "";
        img7.style.zoom = "";
    }else{
        img7.style.border = "rgb(126, 217, 87) solid 3px";
        img7.style.borderRadius = "5px";
        img7.style.zoom = "125%";
        img2.style.border = "";
        img2.style.borderRadius = "";
        img2.style.zoom = "";
        img3.style.border = "";
        img3.style.borderRadius = "";
        img3.style.zoom = "";
        img4.style.border = "";
        img4.style.borderRadius = "";
        img4.style.zoom = "";
        img5.style.border = "";
        img5.style.borderRadius = "";
        img5.style.zoom = "";
        img6.style.border = "";
        img6.style.borderRadius = "";
        img6.style.zoom = "";
        img1.style.border = "";
        img1.style.borderRadius = "";
        img1.style.zoom = "";
    }
}


quete1.addEventListener('click', q1);
quete2.addEventListener('click', q2);
quete3.addEventListener('click', q3);
quete4.addEventListener('click', q4);
quete5.addEventListener('click', q5);

function q1(){
    if(quete1.style.zoom == "125%"){
        quete1.style.border = "";
        quete1.style.borderRadius = "";
        quete1.style.zoom = "";
    }else{
        quete1.style.border = "rgb(126, 217, 87) solid 3px";
        quete1.style.borderRadius = "5px";
        quete1.style.zoom = "125%";
        quete2.style.border = "";
        quete2.style.borderRadius = "";
        quete2.style.zoom = "";
        quete3.style.border = "";
        quete3.style.borderRadius = "";
        quete3.style.zoom = "";
        quete4.style.border = "";
        quete4.style.borderRadius = "";
        quete4.style.zoom = "";
        quete5.style.border = "";
        quete5.style.borderRadius = "";
        quete5.style.zoom = "";
    }
}

function q2(){
    if(quete2.style.zoom == "125%"){
        quete2.style.border = "";
        quete2.style.borderRadius = "";
        quete2.style.zoom = "";
    }else{
        quete2.style.border = "rgb(126, 217, 87) solid 3px";
        quete2.style.borderRadius = "5px";
        quete2.style.zoom = "125%";
        quete1.style.border = "";
        quete1.style.borderRadius = "";
        quete1.style.zoom = "";
        quete3.style.border = "";
        quete3.style.borderRadius = "";
        quete3.style.zoom = "";
        quete4.style.border = "";
        quete4.style.borderRadius = "";
        quete4.style.zoom = "";
        quete5.style.border = "";
        quete5.style.borderRadius = "";
        quete5.style.zoom = "";
    }
}

function q3(){
    if(quete3.style.zoom == "125%"){
        quete3.style.border = "";
        quete3.style.borderRadius = "";
        quete3.style.zoom = "";
    }else{
        quete3.style.border = "rgb(126, 217, 87) solid 3px";
        quete3.style.borderRadius = "5px";
        quete3.style.zoom = "125%";
        quete2.style.border = "";
        quete2.style.borderRadius = "";
        quete2.style.zoom = "";
        quete1.style.border = "";
        quete1.style.borderRadius = "";
        quete1.style.zoom = "";
        quete4.style.border = "";
        quete4.style.borderRadius = "";
        quete4.style.zoom = "";
        quete5.style.border = "";
        quete5.style.borderRadius = "";
        quete5.style.zoom = "";
    }
}

function q4(){
    if(quete4.style.zoom == "125%"){
        quete4.style.border = "";
        quete4.style.borderRadius = "";
        quete4.style.zoom = "";
    }else{
        quete4.style.border = "rgb(126, 217, 87) solid 3px";
        quete4.style.borderRadius = "5px";
        quete4.style.zoom = "125%";
        quete2.style.border = "";
        quete2.style.borderRadius = "";
        quete2.style.zoom = "";
        quete3.style.border = "";
        quete3.style.borderRadius = "";
        quete3.style.zoom = "";
        quete1.style.border = "";
        quete1.style.borderRadius = "";
        quete1.style.zoom = "";
        quete5.style.border = "";
        quete5.style.borderRadius = "";
        quete5.style.zoom = "";
    }
}

function q5(){
    if(quete5.style.zoom == "125%"){
        quete5.style.border = "";
        quete5.style.borderRadius = "";
        quete5.style.zoom = "";
    }else{
        quete5.style.border = "rgb(126, 217, 87) solid 3px";
        quete5.style.borderRadius = "5px";
        quete5.style.zoom = "125%";
        quete2.style.border = "";
        quete2.style.borderRadius = "";
        quete2.style.zoom = "";
        quete3.style.border = "";
        quete3.style.borderRadius = "";
        quete3.style.zoom = "";
        quete4.style.border = "";
        quete4.style.borderRadius = "";
        quete4.style.zoom = "";
        quete1.style.border = "";
        quete1.style.borderRadius = "";
        quete1.style.zoom = "";
    }
}