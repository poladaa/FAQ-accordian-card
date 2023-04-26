const text = document.querySelector(".main-text");
const text2 = document.querySelector(".main-text2");
const text3 = document.querySelector(".main-text3");
const text4 = document.querySelector(".main-text4");
const text5 = document.querySelector(".main-text5");

// sorry for hard-coding
const submit = document.querySelector(".arrow");
const submit2 = document.querySelector(".arrow2");
const submit3 = document.querySelector(".arrow3");
const submit4 = document.querySelector(".arrow4");
const submit5 = document.querySelector(".arrow5");
const answer = document.querySelector(".answer");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const answer5 = document.querySelector(".answer5");
const starting = document.querySelector(".starting");
const image = document.querySelector(".main-img");

/////////////////
submit.addEventListener("click", () => {
  answer.classList.toggle("hide");
  text.classList.toggle("active");
  // image.style.position = "fixed";
});
submit2.addEventListener("click", () => {
  answer2.classList.toggle("hide");
  text2.classList.toggle("active");
});
submit3.addEventListener("click", () => {
  answer3.classList.toggle("hide");
  text3.classList.toggle("active");
});
submit4.addEventListener("click", () => {
  answer4.classList.toggle("hide");
  text4.classList.toggle("active");
});
submit5.addEventListener("click", () => {
  answer5.classList.toggle("hide");
  text5.classList.toggle("active");
});
