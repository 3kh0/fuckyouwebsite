async function setStorageItem(key, value) {
  await chrome.storage.local.set({ [key]: JSON.stringify(value) });
}

async function getStorageItem(key) {
  const result = await chrome.storage.local.get(key);
  return result[key] ? JSON.parse(result[key]) : null;
}

async function init() {
  try {
    // Add listeners for tab changes to log counts
    chrome.tabs.onCreated.addListener(async () => {
      await logTabCount();
    });

    chrome.tabs.onRemoved.addListener(async () => {
      await logTabCount();
    });

    // Initial log of tab count
    await logTabCount();
  } catch (error) {
    console.error("Error during initialization:", error);
  }
}

async function logTabCount() {
  try {
    const windows = await chrome.windows.getAll({ populate: true });
    const totalOpenTabs = windows.reduce((sum, window) => sum + window.tabs.length, 0);

    console.log(`Current number of tabs open: ${totalOpenTabs}`);

    // Store the count but don't take any action
    await setStorageItem("tabsOpen", totalOpenTabs);

    // Log per-window breakdown
    windows.forEach((window, index) => {
      console.log(`Window ${index + 1}: ${window.tabs.length} tabs`);
    });
  } catch (error) {
    console.error("Error logging tab count:", error);
  }
}

// Export only the necessary functions
export { init, setStorageItem, getStorageItem, logTabCount };
