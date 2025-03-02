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

const scripts = ["src/punish/paywallSite.js", "src/punish/popup.js", "src/punish/censorship.js", "src/punish/chinese.js", "src/punish/colorize.js"];

function getRandomScript() {
  const randomIndex = Math.floor(Math.random() * scripts.length);
  return scripts[randomIndex];
}
// on update
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    // valid?
    let coinflip = Math.floor(Math.random() * 2);

    if (coinflip === 1) {
      if (!tab.url.startsWith("chrome://") && !tab.url.startsWith("about:")) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: [getRandomScript()],
        });
      }
    }
  }
});

// Optional: Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
