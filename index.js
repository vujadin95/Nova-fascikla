import { navbarData } from "./data.js";
const navbarElement = document.querySelectorAll(".navbar-item");
const levels = [
  "Elementarty",
  "Pre-intermediate",
  "Intermediate",
  "Upper-intermediate",
  "Pre-advanced",
];

// creating sub-navigation link when user hovers over main navigations links

navbarElement.forEach((item, index) => {
  item.addEventListener("mouseover", () => renderMenu(item, index), false);
  item.addEventListener("mouseleave", function () {
    document.querySelector(".active").remove();
  });
});

function renderMenu(item, index) {
  const id = item.children[0].id;
  if (id && !document.querySelector(".active")) {
    const filteredData = navbarData.filter((item) => item.listItem === id)[0];
    const divEl = document.createElement("div");
    divEl.classList.add("active");
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
    navigationElement.style.backgroundColor = "";
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
  document.getElementById("nav").classList.toggle("nabar-slide");
  document.body.classList.toggle("hidden");
}

function handleWindowsWidth() {
  const width = window.innerWidth;
  if (width >= 900) {
    menuBtn.children[0].classList.remove("line1");
    menuBtn.children[1].classList.remove("line2");
    menuBtn.children[2].classList.remove("line3");
    document.getElementById("navbar").classList.remove("navbar-column");
    document.getElementById("nav").classList.remove("nabar-slide");
    document.body.classList.remove("hidden");
  }
}

menuBtn.addEventListener("click", handleMenuBtnClick);
window.addEventListener("resize", handleWindowsWidth);
