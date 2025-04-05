document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
          });
        }
      });
    });
  });
  

  // Scroll to top on page load if there's a hash in the URL
// Force scroll to top on page load, even with hash in URL
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
  });
  