let menuList = document.querySelector(".menuList");
let menuIcon = document.querySelector(".menuIcon");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("start-0");
});

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});