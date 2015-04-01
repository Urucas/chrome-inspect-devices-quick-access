chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "chrome://inspect/devices#devices";
  chrome.tabs.create({ url: newURL });
});
