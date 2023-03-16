const navbarElement = document.getElementsByClassName("navbar");
const dropdownElement = document.getElementsByClassName("dropdown-menu");

console.log(navbarElement);
console.log(navbarElement[0].children);
const liElements = navbarElement[0].children;

for (let i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener("mouseover", function (e) {
    if (liElements[i].children[1]) {
      liElements[i].children[1].classList.add("active");

      let vuja = document.getElementsByClassName("active")[0].children[3];
      console.log(vuja);
      vuja.addEventListener("mouseover", function () {
        vuja.style.color = "red";
      });
    }
  });
  liElements[i].addEventListener("mouseleave", function () {
    if (liElements[i].children[1]) {
      liElements[i].children[1].classList.remove("active");
    }
  });
}

// navbarElement[0].children.forEach((element) => {
//   console.log(element);
//   element.addEventListener("mouseover", function (e) {
//     console.log(element);
//     document.getElementById("gremmar").style.display = "flex";
//   });
//   element.addEventListener("mouseleave", function (e) {
//     document.getElementById("gremmar").style.display = "none";
//   });
// });
