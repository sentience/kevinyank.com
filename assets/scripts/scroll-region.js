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

    // Capture current scroll position before the browser has a chance to
    // auto-scroll on focus. Chrome auto-scrolls even before dispatching the
    // focus event, so we must do this on the keydown that triggers the focus
    // change to get ahead of it.
    this.scrollNode.addEventListener("keydown", () =>
      this.saveScrollPosition()
    );

    Array.from(this.items).forEach((itemNode) => {
      itemNode.addEventListener(
        "focus",
        // Safari auto-scrolls after the focus (and focusin) event, so we must
        // wait for the next animation frame to avoid our scrolling being
        // clobbered by Safari's auto-scroll.
        () => requestAnimationFrame(() => this.scrollToFocus(itemNode)),
        true // focus events don't bubble
      );
    });

    (this.scrollToNextButton = domNode.querySelector(
      ".scroll-region__next"
    )).addEventListener("click", () => this.scrollToNext());

    (this.scrollToPreviousButton = domNode.querySelector(
      ".scroll-region__previous"
    )).addEventListener("click", () => this.scrollToPrevious());
  }

  saveScrollPosition() {
    this.scrollNode._savedScrollPosition = this.scrollNode.scrollLeft;
  }

  scrollToFocus(itemNode) {
    // Restore saved scroll position to pre-focus position before doing our
    // own smooth-scrolling.
    this.scrollNode.scrollLeft = this.scrollNode._savedScrollPosition;

    const scrollPadding = parseInt(
      getComputedStyle(this.scrollNode).paddingInlineStart
    );
    this.scrollNode.scrollTo({
      left: itemNode.offsetLeft - scrollPadding,
      top: 0,
      behavior: "smooth",
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
