let firstLink = document.getElementById('firstLink');
let secondLink = document.getElementById('secondLink');
let thirdLink = document.getElementById('thirdLink');
let fourthLink = document.getElementById('fourthLink');
let fifthLink = document.getElementById('fifthLink');
let sixthLink = document.getElementById('sixthLink');
let firstPosition = document.getElementById('firstPosition');
let secondPosition = document.getElementById('secondPosition');
let thirdPosition = document.getElementById('thirdPosition');
let fourthPosition = document.getElementById('fourthPosition');
let fifthPosition = document.getElementById('fifthPosition');
let sixthPosition = document.getElementById('sixthPosition');
let btn = document.getElementById('btnScroll');
let name=document.getElementById('name');
let email= document.getElementById('email');
let comment= document.getElementById('comment');
let submit=document.getElementById('submit');

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
window.onload = function () {

    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}


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
fifthLink.onclick = function () {
    fifthPosition.scrollIntoView({ behavior: 'smooth' });
}
sixthLink.onclick = function () {
    sixthPosition.scrollIntoView({ behavior: 'smooth' });
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
if(localStorage.commentsofembeded!=null)
{
    data=JSON.parse(localStorage.commentsofembeded);
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
    localStorage.setItem('commentsofembeded',JSON.stringify(data));
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