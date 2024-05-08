let nav = document.querySelector(".navBar");

let search = document.getElementById("Search");

let step_of_syberScurity_roadMap = document.getElementsByClassName("step-discribtion");

let step_discribtion_link = document.getElementsByClassName("step-discribtion-link");

let li_Links = document.getElementsByClassName("li-Links");
let swichToLightMode = document.getElementById("swichToLightMode");



function lightMode() {

    document.querySelector("body").style.backgroundColor = "#ddd";
    document.getElementById("swichToLightMode").style.backgroundColor = "#000000";
    document.getElementById("swichToLightMode").style.color = "#ffffff";
    nav.style.backgroundColor = "#ffffff";


    let navLinks = document.getElementsByClassName("navlinks");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "#000000";
    }



    search.style.backgroundColor = "#000000";


    document.querySelector(".Login").style.color = "#000000";
    document.querySelector(".Register").style.color = "#000000";
    document.getElementById("bar1").style.backgroundColor = "#000000";
    document.getElementById("bar2").style.backgroundColor = "#000000";
    document.getElementById("bar3").style.backgroundColor = "#000000";


    for (let x = 0; x < step_of_syberScurity_roadMap.length; x++) {
        step_of_syberScurity_roadMap[x].style.backgroundColor = "#eff5fb";
        step_of_syberScurity_roadMap[x].style.color = "#000000";
    }



    for (let y = 0; y < 9; y++) {
        step_discribtion_link[y].style.color = "#000000";
    }

    document.querySelector(".footer").style.backgroundColor = "#ffffff";
    document.querySelector(".footer").style.color = "#000000";


    for (let i = 0; i < navLinks.length; i++) {
        li_Links[i].style.color = "#000000";
    }
    let navPhoto = document.getElementById("logo");
    let footerPhoto = document.getElementById("footerLogo");
    navPhoto.src = "photo_2022-09-07_16-31-26-removebg-preview.png";
    footerPhoto.src = "photo_2022-09-07_16-31-26-removebg-preview.png";

}


function swichToDarckMode() {
    document.querySelector("body").style.backgroundColor = "#444";
    nav.style.backgroundColor = "#000000";
    document.getElementById("swichToLightMode").style.backgroundColor = "#ffffff";
    document.getElementById("swichToLightMode").style.color = "#000000";

    let navLinks = document.getElementsByClassName("navlinks");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "#ffffff";
    }



    search.style.backgroundColor = "#ffffff";


    document.querySelector(".Login").style.color = "#ffffff";
    document.querySelector(".Register").style.color = "#ffffff";
    document.getElementById("bar1").style.backgroundColor = "#ffffff";
    document.getElementById("bar2").style.backgroundColor = "#ffffff";
    document.getElementById("bar3").style.backgroundColor = "#ffffff";


    for (let x = 0; x < step_of_syberScurity_roadMap.length; x++) {
        step_of_syberScurity_roadMap[x].style.backgroundColor = "#000000";
        step_of_syberScurity_roadMap[x].style.color = "#ffffff";
    }



    for (let y = 0; y < 9; y++) {
        step_discribtion_link[y].style.color = "#ffffff";
    }

    document.querySelector(".footer").style.backgroundColor = "#000000";
    document.querySelector(".footer").style.color = "#ffffff";


    for (let i = 0; i < navLinks.length; i++) {
        li_Links[i].style.color = "#ffffff";
    }


}

// up to top of the bage

let up = document.getElementById("btnScroll");

window.onscroll = function () {
    if (scrollY >= 100) {
        up.style.display = 'block';
    } else {
        up.style.display = 'none';
    }
}

up.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

window.onload = function () {

    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// =====================================================================   
// sideList
let sideList = document.getElementById("sideList");
let sideList_links = document.getElementsByClassName("sideList_links");
let sideListStyle = window.getComputedStyle(sideList);
document.getElementById("con").onclick = function () {
    if (sideListStyle.display == "block") {

        sideList.style.display = "none";
    }
    else {
        sideList.style.display = "block";
    }

}
// =====================================================================
