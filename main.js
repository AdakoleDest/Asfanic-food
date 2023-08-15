const sideBar = document.querySelector(".mobile-nav-btn");
const sideBarMenu = document.querySelector(".mobile-nav");
const navBtn1 = document.querySelector("#nav-btn")
const navBtn2 = document.querySelector("#nav-btn-cancel")


navBtn1.onclick = function(){
    sideBarMenu.style.display = "block";
    navBtn1.style.display = "none";
    navBtn2.style.display = "block";
}

navBtn2.onclick = function(){
    sideBarMenu.style.display = "none";
    navBtn1.style.display = "block";
    navBtn2.style.display = "none";
}


