document.addEventListener("scroll", function () {
  let toTop = document.querySelector(".toTop");
  if (window.scrollY >= 500) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
  toTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
