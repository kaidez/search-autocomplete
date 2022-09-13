/**
 * @jest-environment jsdom
 */

describe('Search Field Clear button', () => {
  it("should empty the search field's value when clicked", () => {
    document.body.innerHTML = `<div id="clearSearchButton" class="clearButton" title="Clear searches" style="opacity: 1; cursor: pointer;">×</div><input id="searchField" class="acronymInput" title="Search for an acronym" placeholder="your acronym" value = 'NCDPS' autofocus=""><section id="searchResults"><article>foo</article></section>`;

    require('../index.ts');

    const clearSearchStart = document.querySelector(
      '#clearSearchButton'
    ) as HTMLButtonElement;

    const searchField = document.querySelector(
      '#searchField'
    ) as HTMLInputElement;

    clearSearchStart.click();

    const expectedSearchFieldValue = '';

    expect(searchField.value).toEqual(expectedSearchFieldValue);
  });
});
