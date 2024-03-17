// "use script";

// let sideBar = document.querySelector(".sidebar");

// let openIcon = document.querySelector(".open-icon");

// let closeIcon = document.querySelector(".close-icon");

// openIcon.addEventListener("click", function () {
//   sideBar.classList.remove("move-sidebar");
//   openIcon.classList.add("d-none");
//   closeIcon.classList.remove("d-none");
// });

// closeIcon.addEventListener("click", function () {
//   sideBar.classList.add("move-sidebar");
//   closeIcon.classList.add("d-none");
//   openIcon.classList.remove("d-none");
// });

$(document).ready(function () {
  $(".open-icon").click(function () {
    $(".sidebar").removeClass("move-sidebar");
    $(".open-icon").addClass("d-none");
    $(".close-icon").removeClass("d-none");
  });

  $(".close-icon").click(function () {
    $(".sidebar").addClass("move-sidebar");
    $(".close-icon").addClass("d-none");
    $(".open-icon").removeClass("d-none");
  });

});
