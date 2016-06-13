var tabId = 0;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  tabId = tabs[0].id
});

$(window).load(chrome.tabs.reload())

$("#bug").on("click", function () {
  var title = "[バグ] "
  var body = "# 事象\n\n# 環境\n\n# 原因\n\n# 対応\n\n# Close条件\n\nbug fixがマージされる"
  chrome.tabs.sendMessage(
    tabId,
    {
      title: title,
      body: body
    },
    function(response) {}
  )
});

$("#discussion").on("click", function () {
  var title = "[議論] "
  var body = "# 議題\n\n# 背景\n\n# Close条件\n"
  chrome.tabs.sendMessage(
    tabId,
    {
      title: title,
      body: body
    },
    function(response) {}
  )
});

$("#task").on("click", function () {
  var title = "[タスク] "
  var body = "# やること\n- [ ]\n\n# Close条件\n"
  chrome.tabs.sendMessage(
    tabId,
    {
      title: title,
      body: body
    },
    function(response) {}
  )
});

$("#request").on("click", function () {
  var title = "[要望] "
  var body = "# 実現したいこと\n\n# 理由\n\n# 要望者\n\n# 希望期限\n\n# 要望度合(高・中・低)"
  chrome.tabs.sendMessage(
    tabId,
    {
      title: title,
      body: body
    },
    function(response) {}
  )
});
