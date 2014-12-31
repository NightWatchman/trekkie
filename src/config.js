Pebble.addEventListener('showConfiguration', function(e) {
  Pebble.openURL('http://www.googledrive.com/host/0Byob0YSAXDCHTXNZTEUyWF9ZRTQ');
});

Pebble.addEventListener('webviewclosed', function(e) {
  console.log('config result: ' + e.response);
});
