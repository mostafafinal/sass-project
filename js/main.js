// Select Toggle Menue
document.querySelector(".toggle-menu").onclick = function () {
  toggler(this);
  toggler(document.querySelector(".nav-links"));
};

// Toggle Function
function toggler(event) {
  event.classList.toggle("active");
}
