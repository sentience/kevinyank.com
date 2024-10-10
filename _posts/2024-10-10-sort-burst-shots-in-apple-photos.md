---
date: 2024-10-10T22:00:38+11:00
title: "Sorting Burst Shots in Apple Photos"
author: Kevin Yank
tags:
  - Apple
  - cameras
  - tech
---

As I settle into my new [Apple Photos-centric camera workflow](2024-09-28-refreshing-my-m43-camera-workflow.md), one of the first limitations I encountered was sorting shots taken less than a second apart.

When you add a batch of photos to an album, Apple Photos lets you sort them by:

- by title
- by oldest first
- by newest first
- by drag-and-drop (manual order)

When I import a large batch of shots from my camera into Photos, I usually want them in an album, sorted in the order I shot them. The **Keep Sorted By Oldest First** option would seem to be what I want, but unfortunately its sorting is only based on the capture time of each photo **in seconds**.

Like many prosumer cameras, my camera lets me shoot in rapid bursts of shots, and can be configured to shoot as many as 30 shots per second! With many photos captured during the same second, **Apple Photos sorts these into seemingly random order!**

## The workaround

**Keep Sorted by Title** to the rescue!

In order to get the photos into the order I want them, I just need to sort them in the order of their filenames. PA020007.ORF comes after PA020006.ORF, and so on. But Apple Photos can only sort by _title_, not by _filename_.

So, to get the sort order I want, I must first assign every photo in the album a title based on its original filename. Of course, typing all these titles in by hand would be impossibly tedious. Thankfully, there's an open-source tool for that!

[OSXPhotos](https://rhettbull.github.io/osxphotos/) is a tool written in Python that provides a powerful command-line interface for making changes to your Apple Photos library.

Once I have OSXPhotos installed, I can simply select all the photos in the album in Apple Photos, then in a Terminal window run this command:

```sh
osxphotos batch-edit --title "{original_name}"
```

Seconds later, my photos all have titles that match their original filenames, and I can **Keep Sorted by Title**. And if I want to later give some or all of the photos actual titles, I can drag a single photo into a different position in the list and then back to disable the "keep sorted" option, and then retitle the photos as I please while keeping the now-custom sort order.

OSXPhotos is just one of several new apps I've discovered that sit alongside Apple Photos and enhance its capabilities while I leverage the convenience of iCloud Photo Library and all the other benefits that have led me to [go Photos-first](2024-09-28-refreshing-my-m43-camera-workflow.md). I plan to write about the others as I settle on ways they fit into my workflow.
