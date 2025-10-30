document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector(".bars"); // birinci elementi götürür
  const fixedDiv = document.querySelector(".fixedDiv");

  let isOpen = false;

  bars.onclick = () => {
    if (isOpen) {
      fixedDiv.style.left = "-300px"; // menyunu gizlə
    } else {
      fixedDiv.style.left = "0px"; // menyunu göstər
    }
    isOpen = !isOpen;
  };
});

const texts = ["I'm Frontend Developer", "I'm IT Support"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;
const speed = 100; // yazma sürəti
const deleteSpeed = 50; // silmə sürəti
const pause = 1000; // mətn tam yazıldıqdan sonra dayanma

const typedText = document.getElementById("typed-text");

function type() {
  const fullText = texts[count];

  if (isDeleting) {
    currentText = fullText.substring(0, index - 1);
    index--;
  } else {
    currentText = fullText.substring(0, index + 1);
    index++;
  }

  typedText.textContent = currentText;

  if (!isDeleting && index === fullText.length) {
    // Mətni tam yazdıqdan sonra bir az dayan
    setTimeout(() => {
      isDeleting = true;
      type();
    }, pause);
  } else if (isDeleting && index === 0) {
    // Silindikdən sonra növbəti mətni götür
    isDeleting = false;
    count = (count + 1) % texts.length;
    type();
  } else {
    setTimeout(type, isDeleting ? deleteSpeed : speed);
  }
}

// Başlat
type();

// Sidebar menu click eventləri
//gvubhsxio,'l;kmnjbhgvyfctdrfgvbhjkml,;kmjbhfydtreswedtryuiojkplmnjbvhcfgdte5r6tyuijhgjhfgdfsadtrfgyuhuijlklmnjvbc

document.addEventListener("DOMContentLoaded", function () {
  // Menu itemləri üçün event listener
  const menuItems = document.querySelectorAll(".fixedDivCenter p");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const menuText = this.textContent.trim();
      navigateToSection(menuText);
    });
  });

  // Navigation funksiyası
  function navigateToSection(sectionName) {
    const sections = {
      Home: "home",
      About: "about",
      Resume: "resume",
      Portfolio: "portfolio",
      Services: "services",
      Contact: "contact",
    };

    const targetSection = sections[sectionName];

    if (targetSection) {
      // Əgər Home seçilibsə, xüsusi işlər gör
      if (targetSection === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Digər sectionları tap və scroll et
        const sectionElement = document.getElementById(targetSection);
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }

      // Mobile sidebaru bağla
      if (window.innerWidth < 1200) {
        closeSidebar();
      }
    }
  }

  // Sidebar açıb-bağlama funksiyaları
  const bars = document.querySelector(".bars");
  const fixedDiv = document.querySelector(".fixedDiv");
  const overlay = document.querySelector(".overlay");

  if (bars && fixedDiv) {
    bars.addEventListener("click", function () {
      fixedDiv.style.left = "0";
      if (overlay) {
        overlay.style.display = "block";
      }
    });
  }

  // Overlay click zamanı sidebar bağlama
  if (overlay) {
    overlay.addEventListener("click", function () {
      closeSidebar();
    });
  }

  function closeSidebar() {
    fixedDiv.style.left = "-300px";
    if (overlay) {
      overlay.style.display = "none";
    }
  }

  // Window resize zamanı sidebarı resetlə
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1200) {
      fixedDiv.style.left = "0";
      if (overlay) {
        overlay.style.display = "none";
      }
    } else {
      fixedDiv.style.left = "-300px";
    }
  });

  // Active menu item göstəricisi
  function setActiveMenu() {
    const scrollPosition = window.scrollY + 100;

    // Bütün sectionları yoxla
    const sections = [
      "home",
      "about",
      "resume",
      "portfolio",
      "services",
      "contact",
    ];
    let activeSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          activeSection = section;
        }
      }
    });

    // Menu itemlərinə active class əlavə et/çıxart
    menuItems.forEach((item) => {
      const menuText = item.textContent.trim();
      const sectionsMap = {
        Home: "home",
        About: "about",
        Resume: "resume",
        Portfolio: "portfolio",
        Services: "services",
        Contact: "contact",
      };

      if (sectionsMap[menuText] === activeSection) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Scroll eventi üçün active menu
  window.addEventListener("scroll", setActiveMenu);

  // İlk yüklənmədə active menu təyin et
  setActiveMenu();
});
//sdfghjkl

function dropDown(element) {
  const allDropdowns = document.querySelectorAll(".sumaryDropdown");
  allDropdowns.forEach((el) => {
    if (el !== element) el.classList.remove("active");
  });
  element.classList.toggle("active");
}

// Dropdown funksiyasını yaxşılaşdırın
// function dropDown(element) {
//   element.classList.toggle("active");

//   // Digər dropdownları bağlayın
//   document.querySelectorAll('.sumaryDropdown').forEach(dropdown => {
//     if (dropdown !== element) {
//       dropdown.classList.remove("active");
//     }
//   });
// }

// sumaryDropdown.onclick = () => {};

const projects = {
  All: [
    "https://polo-sayt.vercel.app/",
    "https://shapely-demo-bice.vercel.app/",
    "https://fitness-sayt.vercel.app/",
    "https://switch-sayt.vercel.app/",
    "https://medical-sayt.vercel.app/",
    "https://foody-sayt.vercel.app/",
    "https://apple-site-xi-sepia.vercel.app/",
    "https://turboaz-byrashid.vercel.app/",
    "https://papa-jons-codezza.vercel.app/index.htm",
    "https://oxu-azbyrashid.vercel.app/",
    "https://my-libraff-byrashid.vercel.app/",
    "https://sayt-az-byrashid122.vercel.app/index.htm",
    "https://byrashidemporium.vercel.app/",
    "https://credit-calculator-olive.vercel.app/",
    "https://country-app-mu-sage.vercel.app/",
    "https://country-app-with-react.vercel.app/countries",
    "https://dailyweather-jet.vercel.app/",
  ],
  Sites: [
    "https://polo-sayt.vercel.app/",
    "https://shapely-demo-bice.vercel.app/",
    "https://fitness-sayt.vercel.app/",
    "https://switch-sayt.vercel.app/",
    "https://medical-sayt.vercel.app/",
    "https://foody-sayt.vercel.app/",
    "https://apple-site-xi-sepia.vercel.app/",
    "https://turboaz-byrashid.vercel.app/",
    "https://papa-jons-codezza.vercel.app/index.htm",
    "https://oxu-azbyrashid.vercel.app/",
    "https://my-libraff-byrashid.vercel.app/",
    "https://sayt-az-byrashid122.vercel.app/index.htm",
    "https://byrashidemporium.vercel.app/",
  ],
  Apps: [
    "https://credit-calculator-olive.vercel.app/",
    "https://country-app-mu-sage.vercel.app/",
    "https://country-app-with-react.vercel.app/countries",
    "https://dailyweather-jet.vercel.app/",
  ],
  Games: [],
};

const projectImg = {
  "https://polo-sayt.vercel.app/": "./img/polo.png",
  "https://shapely-demo-bice.vercel.app/": "./img/shaplely.png",
  "https://fitness-sayt.vercel.app/": "./img/fitness.png",
  "https://switch-sayt.vercel.app/": "./img/switch.png",
  "https://medical-sayt.vercel.app/": "./img/medicine.png",
  "https://foody-sayt.vercel.app/": "./img/foody.png",
  "https://apple-site-xi-sepia.vercel.app/": "./img/apple.png",
  "https://turboaz-byrashid.vercel.app/": "./img/turbo-az.png",
  "https://papa-jons-codezza.vercel.app/index.htm": "./img/papa-jhons.png",
  "https://oxu-azbyrashid.vercel.app/": "./img/oxu-az.png",
  "https://my-libraff-byrashid.vercel.app/": "./img/libraff.png",
  "https://sayt-az-byrashid122.vercel.app/index.htm": "./img/sayt-az.png",
  "https://byrashidemporium.vercel.app/": "./img/emporium.png",
  "https://credit-calculator-olive.vercel.app/": "./img/credit-calculator.png",
  "https://country-app-mu-sage.vercel.app/": "./img/counrty-app.png",
  "https://country-app-with-react.vercel.app/countries":
    "./img/counrty-app.png",
  "https://dailyweather-jet.vercel.app/": "./img/daily-weather.png",
};

const projNameObj = {
  "https://polo-sayt.vercel.app/": "Polo",
  "https://shapely-demo-bice.vercel.app/": "Shapely",
  "https://fitness-sayt.vercel.app/": "Fitness",
  "https://switch-sayt.vercel.app/": "Switch",
  "https://medical-sayt.vercel.app/": "Medical",
  "https://foody-sayt.vercel.app/": "Foody",
  "https://apple-site-xi-sepia.vercel.app/": "Apple",
  "https://turboaz-byrashid.vercel.app/": "Turbo.az",
  "https://papa-jons-codezza.vercel.app/index.htm": "Papa Jhons",
  "https://oxu-azbyrashid.vercel.app/": "Oxu.az",
  "https://my-libraff-byrashid.vercel.app/": "Libraff.az",
  "https://sayt-az-byrashid122.vercel.app/index.htm": "Sayt.az",
  "https://byrashidemporium.vercel.app/": "Emporium.az",
  "https://credit-calculator-olive.vercel.app/": "Credit Calculator",
  "https://country-app-mu-sage.vercel.app/": "Countries",
  "https://country-app-with-react.vercel.app/countries": "Countries with React",
  "https://dailyweather-jet.vercel.app/": "Daily Weather",
};

const projectsDiv = document.getElementById("projectsDiv");

// ==================== ƏLAVƏ EDİLƏN SHUFFLE FUNKSİYASI ====================
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
// =========================================================================

window.onload = () => {
  const firstBtn = document.querySelector("#projname p");
  selectProject("All", firstBtn);
};

let pName = "All";

function selectProject(n, element) {
  pName = n;

  // Aktiv class düzəlişi
  const allButtons = document.querySelectorAll("#projname p");
  allButtons.forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");

  // Div-i təmizləyirik
  projectsDiv.innerHTML = "";

  // ==================== DƏYİŞDİRİLƏN HİSSƏ ====================
  // Layihələri SHUFFLE edib əlavə edirik
  const shuffledProjects = shuffleArray(projects[pName]);

  shuffledProjects.forEach((item, index) => {
    const imgSrc = projectImg[item] || "./img/no-image.png";
    const projectTitle = projNameObj[item] || "No name";

    const projectCard = document.createElement("div");
    projectCard.className = "sitesapps";
    projectCard.style.animationDelay = `${index * 0.1}s`;

    projectCard.innerHTML = `
      <img  src="${imgSrc}" alt="${projectTitle}" loading="lazy">
      <a href="${item}" target="_blank">${projectTitle}</a>
    `;

    projectsDiv.appendChild(projectCard);
  });
  // ============================================================
}
