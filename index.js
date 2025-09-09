// Detect button click
document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function () {
    const key = this.innerHTML;
    playSound(key);
    animateButton(key);
  });
});

// Detect keypress
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  playSound(key);
  animateButton(key);
});

// Play sound
function playSound(key) {
  let sound;
  switch (key) {
    case "w": sound = "sounds/tom-1.mp3"; break;
    case "a": sound = "sounds/tom-2.mp3"; break;
    case "s": sound = "sounds/tom-3.mp3"; break;
    case "d": sound = "sounds/tom-4.mp3"; break;
    case "j": sound = "sounds/snare.mp3"; break;
    case "k": sound = "sounds/crash.mp3"; break;
    case "l": sound = "sounds/kick-bass.mp3"; break;
    default: return;
  }
  const audio = new Audio(sound);
  audio.play();
}

// Animate button
function animateButton(key) {
  const activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}
