"use strict";

defer(() => {
  new ScrollToNotes(document.getElementById("recent-notes"));
});

class ScrollToNotes {
  constructor(domNode) {
    this.domNode = domNode;
    this.notes = domNode.querySelectorAll(".scroll-to-note");

    (this.scrollToNextButton = domNode.querySelector(
      ".scroll-to-note-next"
    )).addEventListener("click", () => this.scrollToNext());

    (this.scrollToPreviousButton = domNode.querySelector(
      ".scroll-to-note-previous"
    )).addEventListener("click", () => this.scrollToPrevious());
  }

  scrollToNext() {
    const index = this.getCurrentScrollIndex() + 1;
    if (this.notes[index]) this.scrollToIndex(index);
  }

  scrollToPrevious() {
    const index = this.getCurrentScrollIndex() - 1;
    if (this.notes[index]) this.scrollToIndex(index);
  }

  scrollToIndex(index) {
    this.notes[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  getCurrentScrollIndex() {
    // NOTE: this doesn't yet support RTL, where scrollX is negative as
    // scrolling occurs, and we should consult offsetRight, not offsetLeft.
    const scrollPadding = parseInt(
      getComputedStyle(this.notes[0].parentNode).paddingInlineStart
    );
    // Return the index of the smallest absolute difference between left offset
    // and left scroll
    return Array.from(this.notes)
      .map((note, index) => ({
        index,
        value: Math.abs(
          note.offsetLeft - (note.parentNode.scrollLeft - scrollPadding)
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
