(function(M) {
   'use strict';
  document.addEventListener("DOMContentLoaded", function() {
	  const domElement = document.querySelector('.autocomplete');
	  let autoComplete; // M.Autocomplete(domElement, options);
	  chrome.tabs.query({}, function(tabs) {
      const data = {};
      tabs.forEach(function(t) {
		    data[t.title] = {
          value: t.title,
          tabId: t.id,
          windowId: t.windowId,
          status: t.status,
          icon: t.favIconUrl
		    }
      });
      let autoComplete
      const onAutocomplete = function(title) {
         chrome.tabs.query({title}, function(tabs) {
            if(!tabs.length) {
               console.log("no tab found with title %s", title);
               return;
            }
            let tab_ = tabs[0];
            chrome.tabs.get(tab_.id, function(tab) {
               console.log(tab);
               const windowId = tab.windowId;
               const tabId = tab.id;
               chrome.windows.update(windowId, { focused: true}, function() {
                  chrome.tabs.update(tabId, {active: true}, function() {
                     console.log("tab successfully activated");
                  });
               });
            });
         });
      }
      const options = {data, onAutocomplete};
      autoComplete = M.Autocomplete.init(domElement, options)
	  });
  });
})(M);
