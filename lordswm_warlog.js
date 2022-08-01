// ==UserScript==
// @name         Lordswm warlog
// @namespace    https://github.com/spapanik
// @version      0.1.1
// @description  Link to full battle
// @author       spapanik
// @match        https://www.lordswm.com/*
// @license      LGPL-3.0-or-later
// ==/UserScript==

(function() {
    'use strict';

    let hyperlinks = document.getElementsByTagName( 'a' );
    let i;

    for (i=0; i < hyperlinks.length; i++) {
        let element = hyperlinks[i];
        if (element.href.indexOf('/warlog.php?') != -1) {
            element.href = element.href + '&lt=-1';
        }
    }
})();
