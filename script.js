let grid = document.querySelector(".pixel-container");
let pallette = document.querySelectorAll(".color-option");
console.log(pallette);
let colorClicked = "";

for (let i = 0; i <= 3481; i++) {
  let newPixel = document.createElement("div");
  newPixel.setAttribute("class", "pixel");
  grid.appendChild(newPixel);
  newPixel.onclick = function() {
    newPixel.style.backgroundColor = colorClicked;
  };
}
for (let i = 0; i < pallette.length; i++) {
  document.getElementById(pallette[i].id).addEventListener("click", function() {
    colorClicked = pallette[i].id.toString();
    pallette[i].style.borderColor = "black";
  });
}
