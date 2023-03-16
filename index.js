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
  divEl.innerHTML = `
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>A<span class="medal-num-lvl">1</span></p>
              </div>
              <p class="modal-text-lvl">Elementary</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>A<span class="medal-num-lvl">2</span></p>
              </div>
              <p class="modal-text-lvl">Pre-intermediate</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>B<span class="medal-num-lvl">1</span></p>
              </div>
              <p class="modal-text-lvl">Intermediate</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>B<span class="medal-num-lvl">1+</span></p>
              </div>
              <p class="modal-text-lvl">Upper-intermediate</p>
            </a>
            <a class="dropdown-item" href="#">
              <div class="medal-container">
                <img class="medal-icon" src=${filteredData[0].img} />
                <p class="medal-text" style='color: ${filteredData[0].color}'>B<span class="medal-num-lvl">2</span></p>
              </div>
              <p class="modal-text-lvl">Pre-advanced</p>
            </a>
  `;
  navbarElement[i].appendChild(divEl);
}
