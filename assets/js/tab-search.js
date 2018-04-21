((M) => {
    document.addEventListener("DOMContentLoaded", () => {
	const domElement = document.querySelector('.autocomplete');
	let autoComplete; // M.Autocomplete(domElement, options);
	chrome.tabs.query({}, tabs => {
	    const data = {};
	    tabs.forEach(t => {
		data[t.title] = {
		    value: t.title,
		    tabId: t.id,
		    windowId: t.windowId,
		    status: t.status,
		    icon: t.favIconUrl
		}
	    });
	    const options = {
		data: data
	    };
	    M.Autocomplete.init(domElement, options)
	    console.log(tabs);
	});
    });
})(M);
