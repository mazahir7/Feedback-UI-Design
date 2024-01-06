"use strict";

const reactionContainer = document.querySelector(".reaction-container");
const allEmojis = document.querySelectorAll(".emoji");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");

let feedbackStr = "Satisfied";

reactionContainer.addEventListener("click", function (e) {

  const target = e.target.closest(".emoji");

  if (!target) return;

  allEmojis.forEach(emoji => { emoji.classList.remove("active") });

  target.classList.add("active");
  feedbackStr = target.lastElementChild.textContent;
});

sendBtn.addEventListener("click", function () {

  const feedbackHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${feedbackStr}</strong>
    <p>${feedbackReactionStr()}</p>
  `;

  panel.innerHTML = feedbackHTML;
});

function feedbackReactionStr() {
  if (feedbackStr === "Unhappy") return `We apologize for any inconvenience caused. Please reach out to us directly for further assistance.`;
  else if (feedbackStr === "Neutral") return `Thank you for your feedback. We're committed to enhancing our services based on your input.`;
  else return `We're glad to hear your positive feedback! Your satisfaction is our priority, and we'll continue striving to serve you better.`;
}