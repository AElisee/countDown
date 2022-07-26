let totalSeconds;
let interval;

const countDown = () => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = `${minutes} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.innerHTML = " C'est terminé";
    clearInterval(interval);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Entrez seulement que des chiffres");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
