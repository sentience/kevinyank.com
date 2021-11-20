// ==UserScript==
// @name	Del.icio.us Post UI field length fix
// @namespace	http://www.kevinyank.com/userscripts
// @description	Enforces the length limit on del.icio.us posting notes in the posting UI
// @include	http://del.icio.us/*
// ==/UserScript==

(function () {
	var lengthLimit = 255;

	var postui = document.getElementById('delForm');

	if (postui != null) {
		var notes = document.getElementById('notes');
		if (notes != null) {
			notes.addEventListener('change', function(e) {
				if (e.target.value.length > lengthLimit) {
					window.alert("Length limit of 255 characters exceeded (" + this.value.length + " chars).");
				}
			}, true);
			
			notes.addEventListener('keypress', function(e) {
				if (e.target.value.length >= lengthLimit) {
					if (e.charCode == 0) return; // Function keys OK
					if (e.ctrlKey || e.altKey) return; // Ctrl or Alt held down OK
					if (e.charCode < 32) return; // ASCII control character

					// Filter all other characters
					e.preventDefault();
				}
			}, true);
		}
	}
})();