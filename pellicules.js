//

//
// ⛩️ IIFE
//
(function () {
  const $pellicules = document.querySelectorAll(".pellicule");
  $pellicules.forEach(($el, id) => {
    const position = `translate(${Math.random() * 5}px, ${
      Math.random() * 5
    }px)`;
    const rotation = `rotate(${id * 5}deg)`;
    $el.style.transform = rotation + position;

    if ($pellicules.length - 1 === id) {
      $el.style.transform = "";
    }

    $el.onclick = () => {
      $el.parentNode.prepend($el);
    };
  });
})();

// function lol (paramter1,parameter2) {
//   return "lol"
//  }

// (paramter1,parameter2) => {
// (paramter1,parameter2) => {}
// {}
