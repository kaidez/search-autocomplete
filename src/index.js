"use strict";
exports.__esModule = true;
exports.clearSearchButton = exports.searchField = void 0;
var acronyms_1 = require("./acronyms");
exports.searchField = document.querySelector('#searchField');
exports.clearSearchButton = document.querySelector('#clearSearchButton');
exports.searchField.addEventListener('keyup', function () {
    (0, acronyms_1.showAcronymSearchResults)(exports.searchField.value);
});
exports.clearSearchButton.addEventListener('click', function () {
    exports.searchField.value = '';
    acronyms_1.searchResults.innerHTML = '';
});
