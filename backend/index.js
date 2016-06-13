chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    $("#issue_title").val(request.title)
    $("#issue_body").val(request.body)
  }
)
