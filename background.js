chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "Selecty",
    title: "Search for \"%s\"",
    type: "normal",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  chrome.tabs.create({
    url: "https://dictionary.cambridge.org/dictionary/english/" + encodeURIComponent(info.selectionText)
  });
});
chrome.action.onClicked.addListener(async (tab) =>
{
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ["getText.js"],
    });
    /*
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      func: getSelectionText
    });*/
    await chrome.tabs.create({
      url: "index.html",
    });
}); 


