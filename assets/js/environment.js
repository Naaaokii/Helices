let theme = document.querySelector("#theme");
let sous_theme1 = document.querySelector("#sous_theme1");
let sous_theme2 = document.querySelector("#sous_theme2");
let sous_theme3 = document.querySelector("#sous_theme3");
let sous_theme4 = document.querySelector("#sous_theme4");

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
