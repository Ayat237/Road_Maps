let btn = document.getElementById('btnScroll');

// =====================================================================================

window.onscroll = function () {
    if (scrollY >= 100) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

// =====================================================================================

btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// =====================================================================================

window.onload = function () {

    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// =====================================================================================

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