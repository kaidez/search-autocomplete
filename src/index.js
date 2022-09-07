"use strict";
exports.__esModule = true;
var acronyms_1 = require("./acronyms");
acronyms_1.searchField.addEventListener('keyup', function () {
    (0, acronyms_1.showAcronymSearchResults)(acronyms_1.searchField.value);
});
acronyms_1.clearBtn.addEventListener('click', function () {
    acronyms_1.searchField.value = '';
    acronyms_1.searchResults.innerHTML = '';
});
