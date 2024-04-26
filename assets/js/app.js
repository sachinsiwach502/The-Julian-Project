// hamburger+++++++++++++++++++++++++

let menuList = document.querySelector(".menuList");
let menuIcon = document.querySelector(".menuIcon");
let body = document.body;

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("start-0");
    if (menuList.classList.contains("start-0")) {
        body.classList.add("overflow-hidden");
    } else {
        body.classList.remove("overflow-hidden");
    }
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


// why history----------------------------
let changingTxt = document.querySelector(".changing_paragraph");
let changingHeading = document.querySelector(".changingHeading");
let clickPart1 = document.querySelector(".clickPart1");
let clickPart2 = document.querySelector(".clickPart2");
let clickPart3 = document.querySelector(".clickPart3");
let clickPart4 = document.querySelector(".clickPart4");
let clickPart5 = document.querySelector(".clickPart5");
let clickPart6 = document.querySelector(".clickPart6");
let clickPart7 = document.querySelector(".clickPart7");
let clickPart8 = document.querySelector(".clickPart8");
let changing_img_color = document.querySelector(".changing_arrow");
let clickTab = document.querySelectorAll(".histry_card_border");
let sideLine = document.querySelector(".sideline");
let txtcolor = document.querySelector(".txt-color-change ");

sideLine.style.opacity = "1";
txtcolor.classList.add("timeline-heading");

changing_img_color.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12L13 18M19 12L13 6M19 12L5 12" stroke="url(#paint0_linear_50775_599)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_50775_599" x1="19" y1="6" x2="4.69489" y2="16.925" gradientUnits="userSpaceOnUse">
<stop stop-color="#F4EAD8"/>
<stop offset="1" stop-color="#E0B764"/>
</linearGradient>
</defs>
</svg>
`

clickTab.forEach(tabs => {
    let changing_img_color = tabs.querySelector(".changing_arrow");
    let txtcolor = tabs.querySelector(".txt-color-change ");
    let sideLine = tabs.querySelector(".sideline");
    tabs.addEventListener("click", () => {
        clickTab.forEach(otherTabs => {
            let changing_img_color = otherTabs.querySelector(".changing_arrow");
            let txtcolor = otherTabs.querySelector(".txt-color-change ");
            let sideLine = otherTabs.querySelector(".sideline");
            if (otherTabs !== tabs) {
                txtcolor.classList.remove("timeline-heading");
                sideLine.style.opacity = "0";
                changing_img_color.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3635 12.7083C20.5509 12.5208 20.6562 12.2665 20.6562 12.0013C20.6562 11.7362 20.5509 11.4818 20.3635 11.2943L14.7065 5.63732C14.6142 5.54181 14.5039 5.46563 14.3819 5.41322C14.2599 5.36081 14.1286 5.33322 13.9959 5.33207C13.8631 5.33091 13.7314 5.35622 13.6085 5.4065C13.4856 5.45678 13.374 5.53103 13.2801 5.62492C13.1862 5.71882 13.1119 5.83047 13.0616 5.95337C13.0114 6.07626 12.9861 6.20794 12.9872 6.34072C12.9884 6.4735 13.016 6.60472 13.0684 6.72672C13.1208 6.84873 13.197 6.95907 13.2925 7.05132L17.2425 11.0013L3.99946 11.0013C3.73425 11.0013 3.47989 11.1067 3.29236 11.2942C3.10482 11.4817 2.99946 11.7361 2.99946 12.0013C2.99946 12.2665 3.10482 12.5209 3.29236 12.7084C3.47989 12.896 3.73425 13.0013 3.99946 13.0013L17.2425 13.0013L13.2925 16.9513C13.1103 17.1399 13.0095 17.3925 13.0118 17.6547C13.0141 17.9169 13.1192 18.1677 13.3046 18.3531C13.4901 18.5385 13.7409 18.6437 14.0031 18.646C14.2653 18.6483 14.5179 18.5475 14.7065 18.3653L20.3635 12.7083Z" fill="#FCF9F6" fill-opacity="0.7"/>
</svg>
`
            }
        });
        txtcolor.classList.add("timeline-heading")
        sideLine.style.opacity = "1"

        changing_img_color.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12L13 18M19 12L13 6M19 12L5 12" stroke="url(#paint0_linear_50775_599)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_50775_599" x1="19" y1="6" x2="4.69489" y2="16.925" gradientUnits="userSpaceOnUse">
<stop stop-color="#F4EAD8"/>
<stop offset="1" stop-color="#E0B764"/>
</linearGradient>
</defs>
</svg>
`
    })
})

clickPart1.addEventListener("click", () => {
    changingHeading.innerHTML = `Political History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `The origins of political history systems can be traced back to 
    ancient civilizations, where early forms of governance and societal organization emerged.
     One of the earliest political systems was found in ancient Mesopotamia, where city-states
      developed complex administrative structures and written legal codes. The ancient Egyptians
       also established centralized authority with the pharaohs ruling as both political and
        religious leaders. In ancient Greece,
    the city-state of Athens laid the groundwork for democratic principles, with
     citizens participating in decision-making processes. The Roman Republic, with its system
      of checks and balances, influenced later Western political thought.`

});
clickPart2.addEventListener("click", () => {
    changingHeading.innerHTML = `Military History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sequi tempora maxime et inventore ea, vel
    voluptatem eveniet, molestias amet tempore libero dolor nobis qui veritatis enim ipsam, saepe labore?`
});
clickPart3.addEventListener("click", () => {
    changingHeading.innerHTML = `Gender History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `The origins of political history systems can be traced back to 
    ancient civilizations, where early forms of governance and societal organization emerged.
     One of the earliest political systems was found in ancient Mesopotamia, where city-states
      developed complex administrative structures and written legal codes. The ancient Egyptians
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sequi tempora maxime et inventore ea, vel
    voluptatem eveniet, molestias amet tempore libero dolor nobis qui veritatis enim ipsam, saepe labore?`
});
clickPart4.addEventListener("click", () => {
    changingHeading.innerHTML = `Ecoomic History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sequi tempora maxime et inventore ea, vel
    voluptatem eveniet, molestias amet tempore libero dolor nobis qui veritatis enim ipsam, saepe labore?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sequi tempora maxime et inventore ea, vel
    voluptatem eveniet, molestias amet tempore libero dolor nobis qui veritatis enim ipsam, saepe labore?`
});
clickPart5.addEventListener("click", () => {
    changingHeading.innerHTML = `Environmntal History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis pariatur recusandae qui aperiam laborum in.
    Repudiandae asperiores temporibus alias molestias deserunt labore expedita neque rerum esse harum repellendus ipsam
    maiores iste distinctio est veritatis adipisci nemo, delectus in. Reprehenderit, praesentium reiciendis omnis veniam
    magnam, possimus temporibus mollitia impedit, alias similique fugit dolorem unde beatae. Quidem nostrum repellat
    unde facilis corrupti aliquid, atque autem enim recusandae ipsum ex doloremque excepturi?`
});

clickPart6.addEventListener("click", () => {
    changingHeading.innerHTML = `Cultural  History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `The origins of political history systems can be traced back to 
    ancient civilizations,Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis pariatur recusandae qui aperiam laborum in.
    Repudiandae asperiores temporibus alias molestias deserunt labore expedita neque rerum esse harum repellendus ipsam
    maiores iste distinctio est veritatis adipisci nemo, delectus in. Reprehenderit, praesentium reiciendis omnis veniam
    magnam, possimus temporibus mollitia impedit, alias similique fugit dolorem unde beatae. Quidem nostrum repellat
    unde facilis corrupti aliquid, atque autem enim recusandae ipsum ex doloremque excepturi?`
});
clickPart7.addEventListener("click", () => {
    changingHeading.innerHTML = `Social History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis pariatur recusandae qui aperiam laborum in.
    Repudiandae asperiores temporibus alias molestias deserunt labore expedita neque rerum esse harum repellendus ipsam
    maiores iste distinctio est veritatis adipisci nemo, delectus in. Reprehenderit, praesentium reiciendis omnis veniam
    magnam, possimus temporibus mollitia impedit, alias similique fugit dolorem unde beatae.`
});
clickPart8.addEventListener("click", () => {
    changingHeading.innerHTML = `Intellectual History`;
    changingHeading.classList.add("timeline-heading");
    changingTxt.innerHTML = `The origins of political history systems can be traced back to 
    ancient civilizations, where early forms of governance and societal organization emerged.
     One of the earliest political systems was found in ancient Mesopotamia, where city-states
      developed complex administrative structures and written legal codes. The ancient Egyptians
       alsoLorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis pariatur recusandae qui aperiam laborum in.
    Repudiandae asperiores temporibus alias molestias deserunt labore expedita neque rerum esse harum repellendus ipsam
    maiores iste distinctio est veritatis adipisci nemo, delectus in. Reprehenderit, praesentium reiciendis omnis veniam
    magnam, possimus temporibus mollitia impedit, alias similique fugit dolorem unde beatae. Quidem nostrum repellat
    unde facilis corrupti aliquid, atque autem enim recusandae ipsum ex doloremque excepturi?`
});

// accordina-----------------------------------

let accrodian = document.querySelectorAll(".accrodina-click-box");

accrodian.forEach(items => {
    let hiddenTxt = items.querySelector(".hidden-txt");
    let changeImg = items.querySelector(".addIcon");


    items.addEventListener("click", () => {

        accrodian.forEach(otheritems => {
            let hiddenTxt = otheritems.querySelector(".hidden-txt");
            let changeImg = otheritems.querySelector(".addIcon");
            if (otheritems !== items) {
                hiddenTxt.classList.add("d-none");
                changeImg.innerHTML = "+";
            }
        })
        let textDisplay = window.getComputedStyle(hiddenTxt).display;

        if (textDisplay === "none") {
            hiddenTxt.classList.add("d-block");
            hiddenTxt.classList.remove("d-none");
            hiddenTxt.classList.add("pb-4")
            changeImg.innerHTML = "-";
        } else {
            hiddenTxt.classList.add("d-none");
            hiddenTxt.classList.remove("d-block");
            changeImg.innerHTML = "+";
        }
    });
});

// slick slider-------------------------------
$('.slick_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                nextArrow: false,
                prevArrow: false,
                autoplay: true,
                autoplaySpeed: 1500
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//---------------------- scroll to top
let scroll_top = document.querySelector(".scroll_to_top");
let scrol_pt = 200;
scroll_top.style.display = "none";
window.addEventListener("scroll", () => {
    if (window.scrollY > scrol_pt) {
        scroll_top.style.display = "block"
    } else {
        scroll_top.style.display = "none";
    }
});

scroll_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0, behaviour: "smooth",
    })
});

// preloader---------------------
let preloader = document.querySelector(".preloader");
preloader.classList.add("d-flex");
setTimeout(() => {
    preloader.classList.add("d-none");
}, 3000);



