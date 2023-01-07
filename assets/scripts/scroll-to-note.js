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

    this.updateButtonStates();
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
    this.updateButtonStates(index);
  }

  updateButtonStates(index = this.getCurrentScrollIndex()) {
    this.scrollToNextButton.disabled = index + 1 >= this.notes.length;
    this.scrollToPreviousButton.disabled = index <= 0;
  }

  getCurrentScrollIndex() {
    // NOTE: this doesn't yet support RTL, where scrollX is negative as
    // scrolling occurs, and we should consult offsetRight, not offsetLeft.
    const scrollPadding = parseInt(
      getComputedStyle(this.notes[0].parentNode).paddingInlineStart
    );
    return Array.from(this.notes).findIndex(
      (note) => note.offsetLeft >= note.parentNode.scrollLeft - scrollPadding
    );
  }
}

function defer(callbackFn) {
  setTimeout(callbackFn, 0);
}
