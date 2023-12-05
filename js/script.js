document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan nilai hash dari URL
    var hashValue = window.location.hash;
    if (hashValue) {
        let cleanHashValue = hashValue.slice(1);
        showSection(cleanHashValue);
        document.querySelector("#sidebar-" + cleanHashValue).classList.add("active");
    } else {
        document.querySelector("#sidebar-home").classList.add("active");
    }
});

// typing animation
var typed = new Typed(".typing",{
    strings:["Software Developer","Back End Developer","Machine Learning Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// Aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element instanceof Element ? element.getAttribute("href").split("#")[1] : element;
    // console.log( element instanceof Element);
    document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () =>
{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}

var tabs = document.querySelectorAll(".nav-link");

// Menambahkan event listener untuk setiap tautan
tabs.forEach(function(tab) {
    tab.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah tautan dari berpindah ke halaman lain
    
        tabs.forEach(function(tombol) {
            tombol.classList.remove("active");
        })

        // Menghapus kelas "active" dan "show" dari semua div tab-pane
        var tabPanel = document.querySelectorAll("[role='tabpanel']");
        tabPanel.forEach(function(pane) {
            pane.classList.remove("active");
        });
    
        // Mendapatkan id yang sesuai dari href tautan yang diklik
        var targetId = tab.getAttribute("href").substring(1);
        console.log(targetId);
    
        // Menambahkan kelas "active" dan "show" ke div dengan id yang sesuai
        var targetPanel = document.getElementById(targetId);
        targetPanel.classList.add("active");
        tab.classList.add("active");
    });
});

