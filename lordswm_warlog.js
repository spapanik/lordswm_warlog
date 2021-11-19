// ==UserScript==
// @name         Lordswm warlog
// @namespace    https://openuserjs.org/users/spapanik
// @updateURL    https://openuserjs.org/meta/spapanik/Lordswm_warlog.meta.js
// @version      0.1.1
// @description  Link to full battle
// @author       spapanik
// @match        https://www.lordswm.com/*
// @licence      LGPL-3.0-or-later
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
