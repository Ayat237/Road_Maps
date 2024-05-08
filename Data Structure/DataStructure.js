// put id for input search in HTML 
let search = document.getElementById("Search");

/* <ul>
    <h1>Site Menu</h1>
    <a href="roadMaps2.html" >
        <li class="li-Links">Home</li>
    </a>
    <a href="">
        <li class="li-Links">Tracks</li>
    </a>
    <a href="">
        <li class="li-Links">About Us</li>
    </a>
    <a href="">
        <li class="li-Links">Contact Us</li>
    </a>
 </ul> */

let li_Links = document.getElementsByClassName("li-Links");

let heads = document.getElementsByTagName("h1");
let paragraph = document.getElementsByTagName("p");
let ol = document.getElementsByTagName("li");
let navPhoto = document.getElementById("logo");
let footerPhoto = document.getElementById("footerLogo");
console.log(ol[0]);
function lightMode() {

    document.querySelector("body").style.backgroundColor = "#ddd";


    // <nav class="navBar" id="nav">
    nav.style.backgroundColor = "#ffffff";
    let navLinks = document.getElementsByClassName("navlinks");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "#000000";
    }

    search.style.backgroundColor = "#000000";

    document.querySelector(".Login").style.color = "#000000";
    document.querySelector(".Register").style.color = "#000000";

    // <div class="bar1" id="bar1"></div>
    // <div class="bar2" id="bar2"></div>
    // <div class="bar3" id="bar3"></div>

    document.getElementById("bar1").style.backgroundColor = "#000000";
    document.getElementById("bar2").style.backgroundColor = "#000000";
    document.getElementById("bar3").style.backgroundColor = "#000000";

    document.querySelector(".footer").style.backgroundColor = "#ffffff";
    document.querySelector(".footer").style.color = "#000000";


    for (let i = 0; i < navLinks.length; i++) {
        li_Links[i].style.color = "#000000";
    }


    // حط بقا الزياده من اول هنا

    for (let s = 0; s < heads.length; s++) {
        heads[s].style.color = "#000000";
    }
    for (let k = 0; k < paragraph.length; k++) {
        paragraph[k].style.color = "#000000";
    }

    for (let t = 0; t < ol.length; t++) {
        ol[t].style.color = "#000000";
    }
    navPhoto.src = "photo_2022-09-07_16-31-26-removebg-preview.png";
    footerPhoto.src = "photo_2022-09-07_16-31-26-removebg-preview.png";
}

// up to top of the bage
let up = document.getElementById("btnScroll");
window.onscroll = function () {
    if (scrollY > 700) {
        up.style.display = "block";

    }
    else {
        up.style.display = "none";
    }
}
up.onclick = function () {
    window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}
window.onload = function () {
    window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
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