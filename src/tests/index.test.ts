/**
 * @jest-environment jsdom
 */

describe('Search Field Clear button', () => {
  it('should have a style property of "opacity: 0; cursor: none;"', () => {
    document.body.innerHTML = `<div id="clearSearchButton" class="clearButton" title="Clear searches" style="opacity: 1; cursor: pointer;">×</div><input id="searchField" class="acronymInput" title="Search for an acronym" placeholder="your acronym" autofocus=""><section id="searchResults"><article>foo</article></section>`;

    require('../index.ts');

    const clearSearchStart = document.querySelector(
      '#clearSearchButton'
    ) as HTMLButtonElement;

    const searchResults = document.querySelector(
      '#searchResults'
    ) as HTMLDivElement;

    clearSearchStart.click();

    const expectedFalseOpacityValue = '0';
    const expectedFalseCursorValue = 'none';

    expect(clearSearchStart.style.opacity).toBe(expectedFalseOpacityValue);

    expect(clearSearchStart.style.cursor).toBe(expectedFalseCursorValue);
  });
});
