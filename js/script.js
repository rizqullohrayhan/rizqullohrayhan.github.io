document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan nilai hash dari URL
    var hashValue = window.location.hash;
    if (hashValue) {
        let cleanHashValue = hashValue.slice(1);
        showSection(cleanHashValue);
        document.querySelector("#sidebar-" + cleanHashValue).classList.add("active");
    } else {
        document.querySelector("#sidebar-home").classList.add("active");
        document.querySelector("#home").classList.add("active");
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
    
        // Menambahkan kelas "active" dan "show" ke div dengan id yang sesuai
        var targetPanel = document.getElementById(targetId);
        targetPanel.classList.add("active");
        tab.classList.add("active");
    });
});

function getAge() {
    const d = new Date();
    let year = d.getFullYear();
    return year - 2003
}

const age = document.getElementById("age")
age.innerHTML = getAge()

document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 6;
    const prevPage = document.getElementById("prevPage");
    const nextPage = document.getElementById("nextPage");
    let currentPage = 1;
    
    const portfolioItems = [
        { link: "https://manage-produk.vercel.app/", img: "images/porto/manage-produk.png", title: "Manajemen Produk (Django, PostgreSQL)" },
        { link: "https://djcrm-smoky.vercel.app/", img: "images/porto/djcrm.png", title: "DjCRM (Django, PostgreSQL)" },
        { link: "https://deploy-django-crm.vercel.app/", img: "images/porto/django_projectx.png", title: "Project X (Django, PostgreSQL)" },
        { link: "https://portal.vokasi.uns.ac.id/", img: "images/porto/portal sv.png", title: "Portal SV UNS (HTML, CSS, JS)" },
        { link: "https://vokasi.uns.ac.id/", img: "images/porto/vokasi.png", title: "Profile SV UNS (Laravel, MySQL)" },
        { link: "https://yanma.vokasi.uns.ac.id/", img: "images/porto/yanma.png", title: "Pelayanan Mahasiswa (Laravel, MySQL)" },
        { link: "https://simonsi.vokasi.uns.ac.id/", img: "images/porto/simonsi.png", title: "SIMONSI (Laravel, MySQL)" },
        { link: "https://github.com/rizqullohrayhan/bukutamu", img: "images/porto/buku_tamu.png", title: "Buku Tamu (Laravel, MySQL)" },
        { link: "https://bappeda.surakarta.go.id/", img: "images/porto/bappeda.png", title: "Bappeda Surakarta (Laravel, MySQL)" },
        { link: "https://uns.id/GymThings", img: "images/porto/gymthings.png", title: "Gymthings (ML Tensorflow)" },
        { link: "http://manajemenperpustakaan.azurewebsites.net/", img: "images/porto/perpustakaan.png", title: "Perpustakaan (Laravel, MySQL)" },
        { link: "https://v3421083.mhs.d3tiuns.com/javatrain/", img: "images/porto/javatrain.png", title: "Javatrain (PHP Native, MySQL)" },
        { link: "https://pkm.integrasi.uns.ac.id/", img: "images/porto/pkm.png", title: "PKM UNS (Laravel, MySQL)" }
    ];

    const totalPage = Math.ceil((portfolioItems.length + 1)/itemsPerPage);

    function showHideNav() {
        if (currentPage == 1) {
            prevPage.style.display = "none";
        } else {
            prevPage.style.removeProperty("display");
        }
        if (currentPage == totalPage) {
            nextPage.style.display = "none";
        } else {
            nextPage.style.removeProperty("display");
        }
    }

    function renderPortfolio() {
        const portfolioContainer = document.getElementById("portfolio-container");
        portfolioContainer.innerHTML = "";
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        
        portfolioItems.slice(start, end).forEach(item => {
            const portfolioItem = `
                <div class="portfolio-item padd-15">
                    <div class="portfolio-item-inner shadow-dark">
                        <a href="${item.link}" target="_blank" class="portfolio-img">
                            <img src="${item.img}" alt="${item.title}">
                        </a>
                        <div class="portfolio-title">${item.title}</div>
                    </div>
                </div>`;
            portfolioContainer.innerHTML += portfolioItem;
        });
        showHideNav()
        document.getElementById("pageNumber").textContent = currentPage + '/' + totalPage;
    }
    
    prevPage.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            renderPortfolio();
        }
    });
    
    nextPage.addEventListener("click", function () {
        if (currentPage * itemsPerPage < portfolioItems.length) {
            currentPage++;
            renderPortfolio();
        }
    });
    
    renderPortfolio();
});