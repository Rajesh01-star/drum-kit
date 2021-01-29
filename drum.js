window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function all together
  audio.currentTime = 0;
  audio.play();
  box.classList.add("playing");
  setTimeout(function () {
    box.classList.remove("playing");
  }, 70);
});
