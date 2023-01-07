"use strict";

class ScrollToNotes {
  constructor(domNode) {
    this.domNode = domNode;
    this.scrollButtons = Array.from(
      domNode.querySelectorAll(".scroll-to-note")
    ).map((node) => new ScrollButton(node));
  }
}

class ScrollButton {
  constructor(domNode) {
    this.domNode = domNode;
    this.target = document.getElementById(
      `note-${domNode.getAttribute("id").match(/scroll-to-note-(\w+)/)[1]}`
    );

    domNode.addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    this.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }
}

new ScrollToNotes(document.getElementById("recent-notes"));
