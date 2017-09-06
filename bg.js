function notify (url) {
  chrome.notifications.create({
    'type': 'basic',
    'iconUrl': 'icons/froggie128.png',
    'title': 'Submitting URI to archive:',
    'message': url
  })
}

function bookmarkAdded () {
  chrome.tabs.query(
    { currentWindow: true, active: true },
    function (tabArray) { 
      notify(tabArray[0].url)
    }
  )
}

chrome.bookmarks.onCreated.addListener(bookmarkAdded)