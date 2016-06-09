chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $("#issue_body").text(request.message);
  }
)
