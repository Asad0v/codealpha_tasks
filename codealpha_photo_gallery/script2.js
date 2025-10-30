const autumn = [
  "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/32/1024x753/gallery-1438877659-12-gettyimages-168257000.jpg?resize=640:*",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCc_5z2bQ5DjHf8uaJya41TX32-x48tWIsQ&s",
  "https://www.shutterstock.com/image-photo/baku-azerbaijan-10162016-people-walk-600nw-2049875093.jpg",
  "https://thumbs.dreamstime.com/b/national-seaside-park-fall-season-azerbaijan-baku-october-162555789.jpg",
];
const winter = [
  "https://visaforazerbaijan.org.uk/wp-content/uploads/winter-in-azerbaijan.jpg",
  "https://storage.googleapis.com/stateless-www-justwravel-com/2024/08/fbbb2d62-baku-in-winter.jpg",
  "https://t4.ftcdn.net/jpg/09/59/97/59/360_F_959975905_JzACGY6UL7f860ZuqYtm9v8IB2w1e6pP.jpg",
  "https://wallpapercave.com/wp/wp13088307.jpg",
];
const spring = [
  "https://www.faithinnature.co.uk/cdn/shop/articles/spring_things_header.png?v=1712663248",
  "https://guideposts.org/wp-content/uploads/2018/04/cherry_blossoms.jpg.optimal.jpg",
  "https://preview.redd.it/spring-in-baku-v0-jk9f44l0wvtc1.jpg?width=640&crop=smart&auto=webp&s=ea6985fa4bebb0fd1385c6342ddf684a12a13d9b",
  "https://preview.redd.it/spring-in-baku-v0-jf2y65vwhkqe1.jpg?width=640&crop=smart&auto=webp&s=b458906c8abc21dc2707aa87974410bc224042bb",
];
const summer = [
  "https://hips.hearstapps.com/hmg-prod/images/beautiful-tropical-sunset-scenery-two-sun-beds-royalty-free-image-1595368231.jpg?crop=0.668xw:1.00xh;0.0849xw,0&resize=640:*",
  "https://www.southernliving.com/thmb/CU1g5B6WJLd93l6kbRwgIMXNlmg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-906502922-2000-c01a984d2a7b4a84a26c4c1bd49dfd1a.jpg",
  "https://guidedazerbaijan.com/uploads/0000/1/2023/01/11/summer-activities-guided-azerbaijan.jpg",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/586181418.jpg?k=074c492a617cb620195265aef2aa9164231ee19da6d9b5f503a3db77f8b7a79a&o=&hp=1",
];

const totalArr = {
  payiz: autumn,
  qis: winter,
  yaz: spring,
  yay: summer,
};
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");
let indexbtn2 = 2;
console.log(indexbtn2);

const arrName = [autumn, winter, spring, summer];
const arrForHtml = ["autumn", "winter", "spring", "summer"];
prev2.onclick = () => {
  if (indexbtn2 === 0) {
    indexbtn2 = arrName.length - 1;
  } else {
    indexbtn2--;
  }
  // console.log(arrName[indexbtn2]);
  renderImages();
};

next2.onclick = () => {
  if (indexbtn2 === arrName.length - 1) {
    indexbtn2 = 0;
  } else {
    indexbtn2++;
  }
  // console.log(arrName[indexbtn2]);
  // console.log(indexbtn2);
  renderImages();
};
console.log(arrName[indexbtn2]);


const parent = document.getElementById("parent");
const total = document.getElementById("total");

const closebtn = document.getElementById("closebtn");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const chapter = document.getElementById("chapter");
let indexbtn = -1;
function showImageByIndex(index) {
  const all = document.querySelectorAll(".child");
  all.forEach((el) => el.classList.remove("enlarged"));
  const img = all[index];
  img.classList.add("enlarged");
}

prev.onclick = () => {
  if (indexbtn === 0) {
    indexbtn = arrName[indexbtn2].length - 1;
  } else {
    indexbtn--;
  }
  showImageByIndex(indexbtn);
};

next.onclick = () => {
  if (indexbtn === arrName[indexbtn2].length - 1) {
    indexbtn = 0;
  } else {
    indexbtn++;
  }
  showImageByIndex(indexbtn);
};

closebtn.onclick = () => {
  document
    .querySelectorAll(".child")
    .forEach((el) => el.classList.remove("enlarged"));
  closebtn.style.display = "none";
  total.style.backgroundColor = "#334255";
  next.style.display = "none";
  prev.style.display = "none";
  next2.style.display = "block";
  prev2.style.display = "block";
};
function enlargeChild(img, e, index) {
  e.stopPropagation();
  indexbtn = index;
  if (img.classList.contains("enlarged")) {
    document
      .querySelectorAll(".child")
      .forEach((el) => el.classList.remove("enlarged"));
  } else {
    document
      .querySelectorAll(".child")
      .forEach((el) => el.classList.remove("enlarged"));
    img.classList.add("enlarged");
    closebtn.style.display = "flex";
    total.style.backgroundColor = "#334255";
    next.style.display = "flex";
    prev.style.display = "flex";
    next.style.display = "flex";
    prev.style.display = "flex";
    next2.style.display = "none";
    prev2.style.display = "none";
  }
}

function renderImages() {
  parent.innerHTML = arrName[indexbtn2]
    .map(
      (src, i) =>
        `<img onclick="enlargeChild(this,event,${i})" class="child" src="${src}" />`
    )
    .join("");
    chapter.innerHTML = arrForHtml[indexbtn2]
    
}
renderImages();
