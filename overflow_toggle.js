//

//
// ⛩️ IIFE
//
window.addEventListener("load", function () {
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
});

/* {} */
