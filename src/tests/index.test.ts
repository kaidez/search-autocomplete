/**
 * @jest-environment jsdom
 */
describe('index.ts --> tests', () => {
  describe('Search Field Clear button', () => {
    it('should have a style property of "opacity: 0; cursor: none;" when clicked', () => {
      document.body.innerHTML = `<div id="clearSearchButton" class="clearButton" title="Clear searches" style="opacity: 1; cursor: pointer;">×</div><input id="searchField" class="acronymInput" title="Search for an acronym" placeholder="your acronym" value = 'NCDPS' autofocus=""><section id="searchResults"><article>foo</article></section>`;

      require('../index.ts');

      const clearSearchStart = document.querySelector(
        '#clearSearchButton'
      ) as HTMLButtonElement;

      clearSearchStart.click();

      const expectedFalseOpacityValue = '0';
      const expectedFalseCursorValue = 'none';

      expect(clearSearchStart.style.opacity).toBe(expectedFalseOpacityValue);

      expect(clearSearchStart.style.cursor).toBe(expectedFalseCursorValue);
    });

    it("should empty the search field's value when clicked", () => {
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
});
