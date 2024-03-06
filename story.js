let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");

window.addEventListener("scroll", () => {
  let scrollValue = window.scrollY;
  circle1.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 0 0)`;
  circle2.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 100% 100%)`;
});

(function () {
  var step = 4;
  function scroll() {
    var position = window.pageYOffset;
    window.scrollBy(0, step);
    if (position === window.pageYOffset) {
      step *= -1;
    }
    window.setTimeout(scroll, 10);
  }
  scroll();
})();

setTimeout(() => {
  window.location.href = "book.html";
}, 9000);
