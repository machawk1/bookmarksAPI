function notify (url) {
  chrome.notifications.create({
    'type': 'basic',
    'iconUrl': 'icons/froggie128.png',
    'title': 'Submit URI to archive',
    'message': url//,
    //'buttons': [{'title': 'Archive Now'}, {'title': 'ipsum'}],
    //'items': [{'title': 'lorem', 'message': 'ipsum'}, {'title': 'foo', 'message': 'bar'}],
    //'requireInteraction': true
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