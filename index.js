import { navbarData } from "./data.js";
const navbarElement = document.querySelectorAll(".navbar-item");

// creating sub-navigation link when user hovers over main navigations links
navbarElement.forEach((item, index) => {
  item.addEventListener("mouseover", function (e) {
    if (e.target.id) {
      if (!document.getElementsByClassName("active")[0]) {
        renderMenu(e.target.id, index);
      }
    }
  });
  item.addEventListener("mouseleave", function () {
    document.querySelector(".active").remove();
  });
});

function renderMenu(id, index) {
  const filteredData = navbarData.filter((item) => item.listItem === id)[0];
  const divEl = document.createElement("div");
  divEl.classList.add("active");

  const levels = [
    "Elementarty",
    "Pre-intermediate",
    "Intermediate",
    "Upper-intermediate",
    "Pre-advanced",
  ];

  let elementary = "Elementary";
  let preIntermediate = "Pre-intermediate";
  let intermediate = "Intermediate";
  let upperIntermediate = "Upper-intermediate";
  let preAdvanced = "Pre-advanced";
  if (id === "exams") {
    elementary = filteredData.A2;
    preIntermediate = filteredData.B1;
    intermediate = filteredData.B2;
    upperIntermediate = filteredData.ielt;
    preAdvanced = filteredData.toe;
  }
  let renderText = "";

  levels.forEach(
    (lvl) =>
      (renderText += `
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData.img} />
                <p class="medal-text" style='color: ${filteredData.color}'>A<span class="medal-num-lvl">1</span></p>
              </div>
              <p class="modal-text-lvl">${lvl}</p>
            </a>
  `)
  );

  divEl.innerHTML = renderText;
  document.getElementById("navbar").children[index].appendChild(divEl);
}

// handling navigation menu to show and hide on mouse scroll
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  let navigationElement = document.getElementById("nav");
  let headerHeight = element[0].offsetHeight;
  let distanceToTop = window.scrollY;

  if (distanceToTop >= navigationElement.offsetHeight) {
    navigationElement.style.backgroundColor = "#37424e";
  } else {
    navigationElement.style.backgroundColor = "unset";
  }

  if (distanceToTop >= headerHeight / 3.5) {
    navigationElement.classList.add("none");
  } else {
    navigationElement.classList.remove("none");
  }
}

function scrollHandler() {
  const header = document.getElementsByTagName("header");
  fadeOutOnScroll(header);
}

window.addEventListener("scroll", scrollHandler);

// creating hamburger manu for smaller screens
const menuBtn = document.getElementById("menu-button");

function handleMenuBtnClick() {
  menuBtn.children[0].classList.toggle("line1");
  menuBtn.children[1].classList.toggle("line2");
  menuBtn.children[2].classList.toggle("line3");
  document.getElementById("navbar").classList.toggle("navbar-column");
}

menuBtn.addEventListener("click", handleMenuBtnClick);
