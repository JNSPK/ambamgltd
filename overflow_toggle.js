//

//
// ⛩️ IIFE
//
window.addEventListener("load", function () {
  const SMOOTH_SCROLL_AVG_DURATION = 444; // 444ms
  
  const $html = document.querySelector("html");
  const $menu = document.querySelector(".menu");
  const $closemenu = document.querySelector(".closemenu");

  const show_overlay = () => {
    $html.classList.add("overflow-hidden");
    overlay.removeAttribute("hidden");
  };
  const hide_overlay = () => {
    $html.classList.remove("overflow-hidden");
    overlay.setAttribute("hidden", "");
  };

  $menu.onclick = show_overlay;
  $closemenu.onclick = hide_overlay;
  
  //
  
  document.querySelectorAll(".overlay a").forEach(($link) => {
    $link.addEventListener('click', function (mouseEvent) {
      mouseEvent.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
      setTimeout(hide_overlay, SMOOTH_SCROLL_AVG_DURATION);
    });
  })
});

/* {} */
