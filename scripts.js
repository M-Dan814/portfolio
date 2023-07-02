var background = document.querySelector(".s1");
background.addEventListener("mousemove", function (event) {
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;
  var mouseX = event.clientX - centerX;
  var mouseY = event.clientY - centerY;
  var rotationX = (mouseY / centerY) * 3; // Adjust rotation intensity as needed
  var rotationY = (-mouseX / centerX) * 3; // Adjust rotation intensity as needed

  background.style.transform =
    "rotateX(" + rotationX + "deg) rotateY(" + rotationY + "deg)";
});
