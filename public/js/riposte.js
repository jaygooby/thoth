var Riposte = function () {
  var Y   = YAHOO,
      yud = Y.util.Dom,
      yue = Y.util.Event;

  // -- Private Methods --------------------------------------------------------
  function hotkey(e) {
    if (e.ctrlKey && e.altKey && e.keyCode === 'A'.charCodeAt()) {
      toggleAdminToolbar();
    }
  }

  function toggleAdminToolbar() {
    var toolbar  = yud.get('adminToolbar'),
        username = yud.get('username');

    if (yud.hasClass(toolbar, 'hidden')) {
      yud.removeClass(toolbar, 'hidden');
      if (username) { username.focus(); }
    }
    else {
      yud.addClass(toolbar, 'hidden');
      if (username) { username.blur(); }
    }
  }

  yue.onDOMReady(function () {
    yue.on(window, 'keyup', hotkey, this, true);
  }, this, true);
}();