console.log("popup");

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
    div.append(bigX);
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
  (div) => {
    //
    const video = document.createElement("video");
    video.src = "https://cdn.fluff.pw/slackcdn/d6e349e1b7f2d8e04e1c6e4c8c03b9c0.mp4";
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    div.append(video);
  },
  (div) => {
    const img = document.createElement("img");
    const a = document.createElement("a");
    a.download = "notavirus.exe";
    a.target = "_blank";
    a.src = "https://github.com/xmrig/xmrig/releases/download/v6.22.2/xmrig-6.22.2-msvc-win64.zip";
    img.src = chrome.runtime.getURL("images/download.png");
    a.append(img);
    div.append(img);
  },
  (div) => {
    // docume
    const img = ``;

    const imgElement = document.createElement("img");
    imgElement.src = chrome.runtime.getURL("images/gamba.png");

    div.append(imgElement);
  },
];
async function createPopup(posX, posY) {
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
  await sPopup(div);
  document.body.append(div);
}
Promise.all([createPopup("right", "top"), createPopup("left", "bottom")]);
