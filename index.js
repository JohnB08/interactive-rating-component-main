const subBtn = document.getElementById("button");
const main = document.getElementById("main");
const thankYou = document.getElementById("thank-you");
let rating = document.getElementById("rating");
subBtn.addEventListener("click", (event) => {
  const radioBtn = document.querySelector("input[type='radio']:checked");
  if (radioBtn.value) {
    console.log(radioBtn.value);
    main.style.display = "none";
    thankYou.style.display = "flex";
    rating.textContent = `You selected ${radioBtn.value} out of 5`;
  }
});
