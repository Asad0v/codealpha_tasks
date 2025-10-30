const gallery = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2Y2ONHvhNe2i4UNX0wDLeKF9L3B7JejQNQ&s",
  "https://s1.cdn.autoevolution.com/images/models/MERCEDES%20BENZ_E-Klasse--W210--1999_main.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCUCNY4poDXBjipv1skyH5SgFsN774enYkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cbgUT3mWe3K7P1vny2CqXDC4H4kkw_ye4w&s",
];

const parent = document.getElementById("parent");
const total = document.getElementById("total");

let currentIndex = -1; // hazırda böyüdülən şəkilin index-i

// Bütün şəkilləri bağla
total.onclick = () => {
  document
    .querySelectorAll(".child")
    .forEach((el) => el.classList.remove("enlarged"));
  hideButtons();
  currentIndex = -1;
};

// Şəkli böyüt
function enlargeChild(img, event, index) {
  event.stopPropagation();
    console.log(index);
    
  if (img.classList.contains("enlarged")) {
    img.classList.remove("enlarged");
    hideButtons();
    currentIndex = -1;
  } else {
    document
      .querySelectorAll(".child")
      .forEach((el) => el.classList.remove("enlarged"));
    img.classList.add("enlarged");

    currentIndex = index;
    showButtons();
  }
}

// Növbəti şəkil
function nextImage(event) {
  event.stopPropagation();
  if (currentIndex < gallery.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // axırıncıdan sonra birinciyə qayıtsın
  }
  showImage();
}

// Əvvəlki şəkil
function prevImage(event) {
  event.stopPropagation();
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = gallery.length - 1; // birincidən əvvəl axırıncıya keçsin
  }
  showImage();
}

// Cari şəkli göstər
function showImage() {
  document
    .querySelectorAll(".child")
    .forEach((el) => el.classList.remove("enlarged"));
  const allImages = document.querySelectorAll(".child");
  allImages[currentIndex].classList.add("enlarged");
}

// Düymələri göstər/gizlət
function showButtons() {
  document.getElementById("prevBtn").style.display = "block";
  document.getElementById("nextBtn").style.display = "block";
}
function hideButtons() {
  document.getElementById("prevBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
}

// Şəkilləri əlavə et
parent.innerHTML = gallery
  .map(
    (src, i) =>
      `<img onclick="enlargeChild(this,event,${i})" class="child" src="${src}" />`
  )
  .join("");
