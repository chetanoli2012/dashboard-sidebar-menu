const menuToggle = document.querySelector(".menu-toogle");
const sidebar = document.querySelector(".sidebar");

const menuList = document.querySelectorAll(".menu-list li");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};

function activeLink() {
  menuList.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

menuList.forEach((item) => item.addEventListener("click", activeLink));
