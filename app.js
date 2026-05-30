const IMAGES = [
  { src: "real/real 1.png", label: "real" },
  { src: "real/real 2.png", label: "real" },
  { src: "real/real 3.jpg", label: "real" },
  { src: "real/real 4.jpg", label: "real" },
  { src: "real/real 5.jpg", label: "real" },
  { src: "fake/deepfake 1.jpg", label: "fake" },
  { src: "fake/deepfake 2.jpg", label: "fake" },
  { src: "fake/deepfake 3.jpg", label: "fake" },
  { src: "fake/deepfake 4.jpg", label: "fake" },
  { src: "fake/deepfake 5.jpg", label: "fake" },
];

const photo = document.getElementById("photo");
const feedback = document.getElementById("feedback");
const realBtn = document.getElementById("real-btn");
const fakeBtn = document.getElementById("fake-btn");
const scoreEl = document.getElementById("score");

let queue = [];
let currentIndex = 0;
let correct = 0;
let answered = 0;
let waiting = false;

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetQueue() {
  queue = shuffle(IMAGES);
  currentIndex = 0;
}

function updateScore() {
  scoreEl.textContent = `${correct} / ${answered} correct`;
}

function showImage() {
  if (currentIndex >= queue.length) {
    resetQueue();
  }

  const item = queue[currentIndex];
  photo.src = encodeURI(item.src);
  photo.alt = "Is this image real or fake?";
  photo.classList.remove("answered");
  feedback.classList.add("hidden");
  feedback.textContent = "";
  realBtn.disabled = false;
  fakeBtn.disabled = false;
  waiting = false;
}

function nextImage() {
  currentIndex++;
  showImage();
}

function handleGuess(guess) {
  if (waiting) return;
  waiting = true;

  const item = queue[currentIndex];
  const isCorrect = guess === item.label;

  answered++;
  if (isCorrect) correct++;
  updateScore();

  photo.classList.add("answered");
  feedback.classList.remove("hidden");
  feedback.classList.toggle("correct", isCorrect);
  feedback.classList.toggle("incorrect", !isCorrect);
  feedback.textContent = isCorrect ? "Nicely done!" : "Not quite — you got it wrong.";

  realBtn.disabled = true;
  fakeBtn.disabled = true;

  setTimeout(nextImage, 1500);
}

realBtn.addEventListener("click", () => handleGuess("real"));
fakeBtn.addEventListener("click", () => handleGuess("fake"));

resetQueue();
updateScore();
showImage();
