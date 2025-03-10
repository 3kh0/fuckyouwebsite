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

const scripts = ["src/punish/paywallSite.js", "src/punish/popup.js", "src/punish/censorship.js", "src/punish/chinese.js", "src/punish/colorize.js", "src/punish/spinningWheel.js"];

function getRandomScript() {
  const randomIndex = Math.floor(Math.random() * scripts.length);
  console.log(scripts[randomIndex]);
  return scripts[randomIndex];
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis.getVoices().find((voice) => voice.name === "Google UK English Male");
  speechSynthesis.speak(utterance);
}

function speak2(text) {
  console.log("wdugfztruhiejorfhuwrgzfe");
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis.getVoices().find((voice) => voice.name === "Google UK English Male");
  speechSynthesis.speak(utterance);
}

// on update
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    if (tab.url.includes("chrome://extensions")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: speak,
        args: ["Oh no please do not remove me!"],
      });

      setTimeout(() => {
        chrome.tabs.remove(tabId);
      }, 1000);
      return;
    }

    if (tab.url.includes("slack.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: speak,
        args: ["You definitely don't need Slack. Closing it for you."],
      });

      setTimeout(() => {
        chrome.tabs.remove(tabId);
      }, 5500);
      return;
    }

    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        files: ["src/punish/logoReplace.js"],
      },
      (results) => {
        if (chrome.runtime.lastError) {
          console.error("it broke ", chrome.runtime.lastError.message);
        } else {
          console.log("we ball");
        }
      }
    );

    if (tab.url.includes("google.com")) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: ["src/punish/google.js"],
        },
        (results) => {
          if (chrome.runtime.lastError) {
            console.error("it broke ", chrome.runtime.lastError.message);
          } else {
            console.log("we ball");
          }
        }
      );
      //chrome.tabs.update(tabId, { url: "https://www.yahoo.com" });
      //return;
    }

    // valid?
    let coinflip = Math.floor(Math.random() * 2);

    //if (coinflip === 1) {
    if (!tab.url.startsWith("chrome://") && !tab.url.startsWith("about:")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: [getRandomScript()],
      });
    }
    //}
  }
});

// Optional: Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
