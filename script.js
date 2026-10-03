const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", function() {
    result.innerHTML = "YAY! ♡ I was hoping you'd say yes!";
});

noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", function() {
    result.innerHTML = "Hmm... are you sure? 👀";
});