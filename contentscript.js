// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // alert('updated from contentscript');
// });
console.log("get currentpage", window.location.href);

var vid = $('video').get(0);
vid.addEventListener('ended', function (e) {
  console.log('The video ended!');
});
console.log(vid)