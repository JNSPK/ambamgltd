//

//
// ⛩️ IIFE
//
window.addEventListener("load", function () {
  const $nav = document.querySelector("nav");
  const navbar_top = $nav.offsetTop;
  const $go_to_top = document.querySelector(".go-to-top");
  const $iframe_SC = document.querySelector("iframe");
  const $contacts = document.querySelector("#contactS");

  let contacts_top = $contacts.offsetTop;
  let requested_waypoint_update_frame = null;

  const update_waypoint = () => {
    contacts_top = $contacts.offsetTop
    setTimeout(() => requested_waypoint_update_frame = null, 1);
  }

  const on_scroll = () => {
    clearTimeout(requested_waypoint_update_frame);
    // NOTE(douglasduteil): ensure to have update waypoint after scroll
    requested_waypoint_update_frame = setTimeout(update_waypoint, 1);
    
    if (window.scrollY > navbar_top) {
      // below the dolphin...
      $nav.classList.add("fixed-top");
      $go_to_top.style.visibility = "visible";
    } else {
      $nav.classList.remove("fixed-top");
      $go_to_top.style.visibility = "hidden";
    }

    if (window.scrollY < contacts_top && window.scrollY > navbar_top) {
      $iframe_SC.classList.add("fixed-bottom");
      $go_to_top.style.visibility = "visible";
    } else {
      $iframe_SC.classList.remove("fixed-bottom");
      $go_to_top.style.visibility = "hidden";
    }
  };
  on_scroll();
  document.addEventListener("scroll", on_scroll);
});
