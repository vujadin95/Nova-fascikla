import { navbarData } from "./data.js";
const navbarElement = document.getElementById("navbar").children;

for (let i = 0; i < navbarElement.length; i++) {
  navbarElement[i].addEventListener("mouseover", function (e) {
    if (e.target.id) {
      if (!document.getElementsByClassName("active")[0]) {
        renderMenu(e.target.id, i);
      }
    }
  });
  navbarElement[i].addEventListener("mouseleave", function (e) {
    document.querySelector(".active").remove();
  });
}

function renderMenu(id, i) {
  const filteredData = navbarData.filter((item) => item.listItem === id);
  const divEl = document.createElement("div");
  divEl.classList.add("active");
  let elementary = "Elementary";
  let preIntermediate = "Pre-intermediate";
  let intermediate = "Intermediate";
  let upperIntermediate = "Upper-intermediate";
  let preAdvanced = "Pre-advanced";
  if (id === "exams") {
    elementary = filteredData[0].A2;
    preIntermediate = filteredData[0].B1;
    intermediate = filteredData[0].B2;
    upperIntermediate = filteredData[0].ielt;
    preAdvanced = filteredData[0].toe;
  }
  divEl.innerHTML = `
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>A<span class="medal-num-lvl">1</span></p>
              </div>
              <p class="modal-text-lvl">${elementary}</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>A<span class="medal-num-lvl">2</span></p>
              </div>
              <p class="modal-text-lvl">${preIntermediate}</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>B<span class="medal-num-lvl">1</span></p>
              </div>
              <p class="modal-text-lvl">${intermediate}</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>B<span class="medal-num-lvl">1+</span></p>
              </div>
              <p class="modal-text-lvl">${upperIntermediate}</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>B<span class="medal-num-lvl">2</span></p>
              </div>
              <p class="modal-text-lvl">${preAdvanced}</p>
            </a>
  `;
  navbarElement[i].appendChild(divEl);
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
