//

//
// ⛩️ IIFE
//
(function () {
  const $contactS = document.querySelector("#contactS small");
  const top = $contactS.offsetTop;

  const on_scroll = () => {
    if (window.scrollY > top) {
      $contactS.classList.add("contactS-titre");
    } else {
      $contactS.classList.remove("contactS-titre");
    }
  };

  document.addEventListener("scroll", on_scroll);
})();
