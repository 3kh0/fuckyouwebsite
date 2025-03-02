const tabs = [];

function checktabs() {
  chrome.tabs.query({}, function (tabResults) {
    tabs.length = 0;
    tabs.push(...tabResults);

    if (tabs.length > 5) {
      const randomIndex = Math.floor(Math.random() * tabs.length);
      chrome.tabs.remove(tabs[randomIndex].id);
      chrome.notifications.create({
        type: "basic",
        iconUrl: "https://rawr.hackclub.com/dinosaur_sealing_letters_with_wax.png",
        title: "Tab Limit",
        message: "You have too many tabs open. Closing one for you.",
      });
    }
  });
}

chrome.tabs.onCreated.addListener(checktabs);

const scripts = ["src/punish/paywallSite.js", "src/punish/popup.js", "src/punish/censorship.js"];

function getRandomScript() {
  const randomIndex = Math.floor(Math.random() * scripts.length);
  return scripts[randomIndex];
}

// Replace logos
const logoMap = {
  "mcdonalds.com": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Burger_King_logo.svg",
  "coca-cola.com": "https://www.pepsi.com/assets/images/pepsi-logos/logo-0.png",
  "apple.com": "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "tesla.com": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
  "amazon.com": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Walmart_logo.svg",
  //add more
};

//celebration
const date = "Hackclub";
const footer = document.createElement("footer");
footer.innerHTML = `Today we are celebrating ${date}. <button>Donate</button>`;
footer.style = `height: 3rem; color: black; font-size: 2rem; position: absolute; bottom: 0; left: 0; right: 0; z-index: 2000;`;
document.body.appendChild(footer);

function replaceLogos() {
  document.querySelectorAll("img").forEach((img) => {
    if (img.src) {
      try {
        const url = new URL(img.src);
        console.log(url.hostname.replace("www.", ""));
        if (logoMap[url.hostname.replace("www.", "")]) {
          img.src = logoMap[url.hostname.replace("www.", "")];
          img.style = "height: 48px !important; width: 48px !important;";
        }
      } catch (e) {
        console.error("Error processing image URL:", e);
      }
    }
  });
}

function changeFont(fontFamily = "Comic Sans MS") {
  document.body.style.fontFamily = fontFamily;
  document.querySelectorAll("*").forEach((el) => {
    el.style.fontFamily = fontFamily;
  });
}

replaceLogos();
changeFont("Papyrus");

// on update
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    // valid?
    if (!tab.url.startsWith("chrome://") && !tab.url.startsWith("about:")) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: [getRandomScript()],
        },
        (results) => {
          if (chrome.runtime.lastError) {
            console.error("it broke ", chrome.runtime.lastError.message);
          } else {
            console.log("we ball");
          }
        }
      );
    }
  }
});

// Optional: Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
