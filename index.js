const dodger = document.getElementById("dodger");
dodger.style.left = dodger.style.left || "0px";
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight () {
    let left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (!isNaN(left) && left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
  }