"use strict";

defer(() => {
  Array.from(document.getElementsByClassName("scroll-region")).map(
    (node) => new ScrollRegion(node)
  );
});

class ScrollRegion {
  constructor(domNode) {
    this.domNode = domNode;
    this.scrollNode = domNode.children[0];
    this.items = domNode.querySelectorAll(".scroll-region__item");

    Array.from(this.items).forEach((itemNode) => {
      itemNode.addEventListener(
        "focus",
        (event) => this.scrollToFocus(event),
        true
      );
    });

    (this.scrollToNextButton = domNode.querySelector(
      ".scroll-region__next"
    )).addEventListener("click", () => this.scrollToNext());

    (this.scrollToPreviousButton = domNode.querySelector(
      ".scroll-region__previous"
    )).addEventListener("click", () => this.scrollToPrevious());
  }

  scrollToFocus({ currentTarget }) {
    currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  scrollToNext() {
    const index = this.getCurrentScrollIndex() + 1;
    if (this.items[index]) this.scrollToIndex(index);
  }

  scrollToPrevious() {
    const index = this.getCurrentScrollIndex() - 1;
    if (this.items[index]) this.scrollToIndex(index);
  }

  scrollToIndex(index) {
    this.items[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  getCurrentScrollIndex() {
    // NOTE: this doesn't yet support RTL, where scrollX is negative as
    // scrolling occurs, and we should consult offsetRight, not offsetLeft.
    const scrollPadding = parseInt(
      getComputedStyle(this.items[0].parentNode).paddingInlineStart
    );
    // Return the index of the smallest absolute difference between left offset
    // and left scroll
    return Array.from(this.items)
      .map((note, index) => ({
        index,
        value: Math.abs(
          note.offsetLeft - (this.scrollNode.scrollLeft - scrollPadding)
        ),
      }))
      .sort((a, b) => {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
      })[0].index;
  }
}

function defer(callbackFn) {
  setTimeout(callbackFn, 0);
}
