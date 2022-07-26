const shareButton = document.querySelector(".parent .data button");
const toolkit = document.querySelector(".parent .data .toolkit");
const toolkitMobile = document.querySelector(".parent .data .toolkit-mobile");

shareButton.addEventListener("click", function () {
  if (window.screen.width < 778) {
    toolkitMobile.classList.toggle("display-non");
  } else {
    toolkit.classList.toggle("display-non");
  }
});
