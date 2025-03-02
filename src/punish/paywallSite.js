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
  paywall.style.zIndex = "9999";
  paywall.innerHTML = `
      <img height="300" width="300" src="https://rawr.hackclub.com/dinosaur_sealing_letters_with_wax.png"/>
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

// https://commerce.coinbase.com/checkout/f574d05b-6b3e-40b2-aa24-2acb75613270
// pk_test_51QRPk8DwtWbetrx5qu9Rxz4oA0Yoa0DedeWWXkU7JvucLKY5gktoDyQHhqaOg8B30JjXq15vtsSfQjK4MCqDAdsN00Ldvop9tN
// sk_test_51QRPk8DwtWbetrx5nfBYGJl2ME2Q5avXyOSKWKHI4LCoKoVFc9QcmPlBJmPkDnlOl8gPTWwJ9EYlxjWd0SdCvtSE0059NUS4uE
// prod_Rrjw0rKdiZ2v3I
