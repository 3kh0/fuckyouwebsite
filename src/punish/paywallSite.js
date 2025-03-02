// paywall yea
console.log("pay");

function showPaywall() {
  const paywall = document.createElement("div");
  paywall.id = "paywall";
  paywall.style.position = "fixed";
  paywall.style.top = "0";
  paywall.style.left = "0";
  paywall.style.width = "100%";
  paywall.style.height = "100%";
  paywall.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  paywall.style.color = "white";
  paywall.style.display = "flex";
  paywall.style.flexDirection = "column";
  paywall.style.justifyContent = "center";
  paywall.style.alignItems = "center";
  paywall.style.zIndex = "9999999";
  paywall.innerHTML = `
      <img height="300" width="300" src="${chrome.runtime.getURL("images/dino_stamp.png")}"/>
      <h1 style="font-size: 3em; margin-top: 1rem;">We need money</h1>
      <p style="font-size: 1.5em;">Please pay $5 to continue.</p>
      <button id="payButton" style="padding: 10px 20px; font-size: 1.5em; cursor: pointer;">Pay Now</button>
    `;

  document.body.appendChild(paywall);

  document.getElementById("payButton").addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = chrome.runtime.getURL("views/payment.html");
    iframe.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      border: none;
      z-index: 10000;
    `;
    document.body.appendChild(iframe);
  });

  setInterval(() => {
    if (!document.getElementById("paywall")) {
      alert("You tried to delete it :(");
      showPaywall();
    }
  }, 250);
}

showPaywall();
