const northKoreaLogo = "data:image/png;base64,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";

const popups = [
  (div) => {
    const video = document.createElement("video");
    video.src = "https://cdn.saahild.com/u/viqxku.mp4";
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    div.append(video);
  },
  (div) => {
    const bigX = document.createElement("div");
    bigX.innerHTML = "X";
    bigX.onmouseenter = () => {
      bigX.style.display = "none;";
    };
    bigX.onmouseleave = () => {
      bigX.style.display = "block";
    };
  },
  (div) => {
    const timerDiv = document.createElement("div");
    timerDiv.innerHTML = "Popup closes in 10s";
    timerDiv.style.padding = "30px";
    let i = 10;
    setInterval(() => {
      i--;
      timerDiv.innerHTML = `Popup closes in ${i}s`;
    }, 1000);
    div.append(timerDiv);
  },
  (div) => {
    const yesOrNoDiv = document.createElement("div");
    const yesButton = document.createElement("button");
    const noButton = document.createElement("button");
    yesButton.innerHTML = `Yes! i love selling my soul!`;
    noButton.innerHTML = `No! im a terrible person and want to keep my soul`;
    const h1 = document.createElement("h1");
    h1.innerHTML = `Do you want to sell your soul?`;
    yesOrNoDiv.style.padding = `20px`;
    yesOrNoDiv.append(h1);
    yesOrNoDiv.append(yesButton);
    yesOrNoDiv.append(noButton);
    div.append(yesOrNoDiv);
  },
];
function createPopup(posX, posY) {
  const sPopup = popups[Math.floor(Math.random() * popups.length)];

  const div = document.createElement("div");
  div.style.zIndex = 99999;
  div.style.border = "20px";
  div.style.padding = "10px";
  div.style.margin = "2px";
  div.style.position = "fixed";
  div.style[posY] = "0";
  div.style[posX] = "0";
  const x = document.createElement("span");
  x.innerHTML = "X";
  x.style.opacity = 0.7;
  div.append(x);
  sPopup(div);

  document.body.append(div);
}
createPopup("right", "top");
