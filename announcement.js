document.getElementById("profileImg").addEventListener("click", function() {
  var profileMenu = document.getElementById("profileMenu");
  if (profileMenu.style.display === "block") {
    profileMenu.style.display = "none";
  } else {
    profileMenu.style.display = "block";
  }
});

// Optionally, close the menu if clicked outside
window.addEventListener("click", function(event) {
  var profileMenu = document.getElementById("profileMenu");
  if (!event.target.matches('#profileImg') && !profileMenu.contains(event.target)) {
    profileMenu.style.display = "none";
  }
});