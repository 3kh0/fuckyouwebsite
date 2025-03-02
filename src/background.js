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

const scripts = ["src/punish/paywallSite.js", "src/punish/popup.js", "src/punish/censorship.js", "src/punish/chinese.js"];

function getRandomScript() {
  const randomIndex = Math.floor(Math.random() * scripts.length);
  return scripts[randomIndex];
}

// on update
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
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
