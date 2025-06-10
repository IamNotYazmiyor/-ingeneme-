const sky = document.getElementById("sky");
const popup = document.getElementById("popup");

const messages = [
  "Gözlerin yıldızlardan parlak.",
  "Seni her düşündüğümde bir yıldız daha doğuyor.",
  "Kalbim gece gökyüzü gibi, seninle dolu.",
  "Sonsuz evrende tek dileğim sensin.",
  "Sen benim en parlak yıldızımsın."
];

for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  star.addEventListener("click", (e) => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    popup.textContent = message;
    popup.style.top = `${e.clientY}px`;
    popup.style.left = `${e.clientX}px`;
    popup.classList.remove("hidden");

    setTimeout(() => {
      popup.classList.add("hidden");
    }, 3000);
  });

  sky.appendChild(star);
}
