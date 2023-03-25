var scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.2) {
    // Show button
    scrollToTopBtn.classList.add("show");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
