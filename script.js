const emoji = document.querySelector("h1");
const passWord = document.getElementById("one-one");
// console.log(emoji, passWord);

passWord.addEventListener("focus", function (event) {
  if (event.target) {
    emoji.innerHTML = "🙈";
  }
});
passWord.addEventListener("blur", function (event) {
  if (event.target) {
    emoji.innerHTML = "🐵";
  }
});
