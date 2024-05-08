let firstLink = document.getElementById('firstLink');
let secondLink = document.getElementById('secondLink');
let thirdLink = document.getElementById('thirdLink');
let fourthLink = document.getElementById('fourthLink');
let firstPosition = document.getElementById('firstPosition');
let secondPosition = document.getElementById('secondPosition');
let thirdPosition = document.getElementById('thirdPosition');
let fourthPosition = document.getElementById('fourthPosition');
let btn = document.getElementById('btnScroll');
let project = document.getElementById('project');
let projectsforbegia = document.getElementById('projectsforbegia');
let name=document.getElementById('name');
let email= document.getElementById('email');
let comment= document.getElementById('comment');
let submit=document.getElementById('submit');
let stars = document.getElementsByClassName("star");
let data;

window.onscroll = function () {
    if (scrollY >= 100) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}
btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}
// window.onload = function () {

//     scroll({
//         left: 0,
//         top: 0,
//         behavior: "smooth"
//     })
// }

firstLink.onclick = function () {
    firstPosition.scrollIntoView({ behavior: 'smooth' });
}

secondLink.onclick = function () {
    secondPosition.scrollIntoView({ behavior: 'smooth' });
}

thirdLink.onclick = function () {
    thirdPosition.scrollIntoView({ behavior: 'smooth' });
}

fourthLink.onclick = function () {
    fourthPosition.scrollIntoView({ behavior: 'smooth' });
}
project.onclick = function () {
    projectsforbegia.scrollIntoView({ behavior: 'smooth' });
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
// add comment
if(localStorage.commentsofpython!=null)
{
    data=JSON.parse(localStorage.commentsofpython);
}
else{
    data=[];
}
submit.onclick=function()
{
    let newcomment={
       name:name.value,
       comment:comment.value
    }
    if(name.value!='' && comment.value!='')
    {
        data.push(newcomment);
    }
    localStorage.setItem('commentsofpython',JSON.stringify(data));
    showComment()
}
function showComment()
{
    let personcomment='';
    for(let i=0;i<data.length;i++)
    {
        personcomment +=`
        <td>
            <tr>${data[i].name} :</tr>
            <tr>${data[i].comment}.</tr>

            <hr>      
        </td>
        `  
        // name.style.fontSize='20px';
       ;   
    }
    document.getElementById('tbody').innerHTML=personcomment;
  
    
}
showComment()
// ===============================================================================================================================

// let isStarColored0 =false;
// let isStarColored1 =false;
// let isStarColored2 =false;
// let isStarColored3 =false;
// let isStarColored4 =false;


// stars[0].onclick=function(){
//     if(!isStarColored0)
//     {
//      stars[0].src="../media/148839.png";
//      isStarColored0=true;
//     }
//     else{
//         stars[0].src="../media/149220.png";
//         stars[1].src="../media/149220.png";
//         stars[2].src="../media/149220.png";
//         stars[3].src="../media/149220.png";
//         stars[4].src="../media/149220.png";
//          isStarColored0=false;
//          isStarColored1=false;
//          isStarColored2=false;
//          isStarColored3=false;
//          isStarColored4=false;
//     }
// }
// stars[1].onclick=function(){
//     if(!isStarColored1)
//     {
//      stars[0].src="../media/148839.png";
//      stars[1].src="../media/148839.png";
//      isStarColored0=true;
//      isStarColored1=true;
//     }
//     else{
//         stars[1].src="../media/149220.png";
//         stars[2].src="../media/149220.png";
//         stars[3].src="../media/149220.png";
//         stars[4].src="../media/149220.png";
//          isStarColored1=false;
//          isStarColored2=false;
//          isStarColored3=false;
//          isStarColored4=false;
//     }
// }
// stars[2].onclick=function(){
//     if(!isStarColored2)
//     {
//      stars[0].src="../media/148839.png";
//      stars[1].src="../media/148839.png";
//      stars[2].src="../media/148839.png";
//      isStarColored0=true;
//      isStarColored1=true;
//      isStarColored2=true;
//     }
//     else{
//         stars[2].src="../media/149220.png";
//         stars[3].src="../media/149220.png";
//         stars[4].src="../media/149220.png";
//          isStarColored2=false;
//          isStarColored3=false;
//          isStarColored4=false;
//     }
// }
// stars[3].onclick=function(){
//     if(!isStarColored3)
//     {
//      stars[0].src="../media/148839.png";
//      stars[1].src="../media/148839.png";
//      stars[2].src="../media/148839.png";
//      stars[3].src="../media/148839.png";
//      isStarColored0=true;
//      isStarColored1=true;
//      isStarColored2=true;
//      isStarColored3=true;
//     }
//     else{
//         stars[3].src="../media/149220.png";
//         stars[4].src="../media/149220.png";
//          isStarColored3=false;
//          isStarColored4=false;
//     }
// }
// stars[4].onclick=function(){
//     if(!isStarColored4)
//     {
//      stars[0].src="../media/148839.png";
//      stars[1].src="../media/148839.png";
//      stars[2].src="../media/148839.png";
//      stars[3].src="../media/148839.png";
//      stars[4].src="../media/148839.png";
//      isStarColored0=true;
//      isStarColored1=true;
//      isStarColored2=true;
//      isStarColored3=true;
//      isStarColored4=true;
//     }
//     else{
//         stars[4].src="../media/149220.png";
//          isStarColored4=false;
//     }
// }

