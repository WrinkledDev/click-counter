const $showResult = document.querySelector(".show-result");
const $result = document.getElementById("result");
const $decrease = document.getElementById("decrease");
const $increase = document.getElementById("increase");

let total = 0;

window.addEventListener("load", (e) => {
  $result.innerText = total;
});

$decrease.addEventListener("click", (e) => {
  decreaseCount();
});

$increase.addEventListener("click", (e) => {
  increaseCount();
});

const decreaseCount = () => {
  total -= 1;
  updateScoreAndColor();
};

const increaseCount = () => {
  total += 1;
  updateScoreAndColor();
};

const updateScoreAndColor = () => {
  $result.innerText = total;
  if (total > 0) {
    $result.style.color = "#0F9643";
  } else if (total < 0) {
    $result.style.color = "#DC143C";
  } else {
    $result.style.color = "#000000";
  }
};
