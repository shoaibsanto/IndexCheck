chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;
  const siteSearchUrl = `https://www.google.com/search?q=site:${encodeURIComponent(url)}`;
  
  chrome.tabs.create({ url: siteSearchUrl });
});
