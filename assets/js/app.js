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

// tabs section++++++++++++++++++++++++++++++++++++++++++++++++++

let tabBtn1 = document.querySelector(".tab-btn-1");
let tabBtn2 = document.querySelector(".tab-btn-2");
let tabBtn3 = document.querySelector(".tab-btn-3");
let cangedInfo = document.querySelector(".changing_para");
let tabCard = document.querySelectorAll(".tab-card");
let tabCard_1 = document.querySelector(".tab-card");

tabCard_1.classList.add("onClickSdow")

tabCard.forEach(element => {
    let click = element.querySelector(".click_part");
    click.addEventListener("click", () => {
        tabCard.forEach(otherelement => {
            if (otherelement !== element) {
                otherelement.classList.remove("onClickSdow")
            }
        })
        if (element.classList.contains("onClickSdow")) {
            element.classList.remove("onClickSdow");
        } else {
            element.classList.add("onClickSdow");
        }
    });
});



tabBtn1.addEventListener("click", () => {
    cangedInfo.innerHTML = `he Julian Project offers academic opportunities beyond theclassroom for aspiring historians
                            to dive deeper into
                            historical research.Our goal is to make the study of history more accessible to all.
                            Especiallyfor First-Generation and
                            Low-Income (FGLI) students, we offer free,individual mentorship throughout the year to help
                            guide you on thisenriching
                            journey. We rely on donations to make these opportunitiespossible and hope you could
                            contribute to The Julian Project`


});

tabBtn2.addEventListener("click", () => {
    cangedInfo.innerHTML = `Embarking on writing an extensive history research paper offers an immersive journey into the depths of the past.
    Especiallyfor First-Generation and
                            Low-Income (FGLI) students, we offer free,individual mentorship throughout the year to help
                            guide you on thisenriching
                            journey. We rely on donations to make these opportunitiespossible and hope you could
                            contribute to The Julian Project`

});

tabBtn3.addEventListener("click", () => {
    cangedInfo.innerHTML = `The Julian Project annually awards prizes to the authors of that year’s most distinguishing papers.
    Especiallyfor First-Generation and
                            Low-Income (FGLI) students, we offer free,individual mentorship throughout the year to help
                            guide you on thisenriching
                            journey. We rely on donations to make these opportunitiespossible and hope you could
                            contribute to The Julian Project`

});


