let road = document.getElementById("road");
let kamion = document.getElementById("kamion");
let  stromy= document.getElementById("stromy");
let  stromy2= document.getElementById("stromy2");
let  labut= document.getElementById("labut");
let labut2 = document.getElementById("labut2");
let  sklad= document.getElementById("sklad");

window.onload = () => {
    showstromy();
    showstromy2();
    showsklad();
    setTimeout(() => {
        showkamion();
    }, );
    setTimeout(() => {
        runAway();
    }, 1000);
    setTimeout(() => {
        showlabut();
    }, 3000);
    setTimeout(() => {
        runAway2();
    }, 2000);
    setTimeout(() => {
        hidelabut();
    }, 5000);

    setTimeout(() => {
        showlabut2();
    }, 5000);
    setTimeout(() => {
        runAway3();
    }, 9000);
    setTimeout(() => {
        hidelabut2();
    }, 8300);
    setTimeout(() => {
        runAway4();
    }, 9000);
    setTimeout(() => {
        runAway5();
    }, 9500);
    setTimeout(() => {
        runAway6();
    }, 9500);
    setTimeout(() => {
        runAway7();
    }, 11500);
    setTimeout(() => {
        hidekamion();
    }, 16500);
}

let showkamion = () => {
    kamion.style.opacity = 1;
}
let showstromy = () => {
    stromy.style.opacity = 1;
}

let showstromy2 = () => {
    stromy2.style.opacity = 1;
}

let showsklad = () => {
    sklad.style.opacity = 1;
}

let showlabut = () => {
    labut.style.opacity = 1;
}
let hidelabut = () => {
    labut.style.opacity = 0;
}
let hidelabut2 = () => {
    labut2.style.opacity = 0;
}
let showlabut2 = () => {
    labut2.style.opacity = 1;
}

let hidekamion = () => {
    kamion.style.opacity = 0;
}

let hidstromy = () => {
    stromy.style.opacity = 0;
}

let hidstromy2 = () => {
    stromy2.style.opacity = 0;
}

let hidsklad = () => {
    sklad.style.opacity = 0;
}




let runAway = () => {
    kamion.style.left = "0px";  
}
let runAway2 = () => {
    labut.style.top = "840px";
}
let runAway3 = () => {
    labut2.style.top = "-840px";
}
let runAway4 = () => {
    kamion.style.left = "400px";
}
let runAway5 = () => {
    stromy.style.left = "-1500px";  
}
let runAway6 = () => {
    stromy2.style.left = "-1500px";  
}
let runAway7 = () => {
    sklad.style.left = "-400px";  
}
