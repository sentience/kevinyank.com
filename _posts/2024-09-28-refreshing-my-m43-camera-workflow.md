---
date: 2024-09-28T16:33:56+10:00
title: "Refreshing my m43 Camera Workflow"
visibility: public
tags:
  - Apple
  - cameras
  - tech
---

Even though the camera that's always in my pocket (an iPhone) keeps getting better and better, I still love shooting with my relatively chonky Olympus Micro Four Thirds camera. Its relatively large sensor and lenses capture a lot more light, which means creamy, out-of-focus backgrounds (the real thing – not the fake ones that my iPhone can simulate) and sharper detail in low light.

In recent years, however, it has been a challenge consistently to get the photos I take with my "good camera" off of its memory card and into a place that I can enjoy them. My workflow here has felt "broken" for a couple of years, now, so it's time for me to rethink it.

## The Old Way

I'm a die-hard fan of Adobe Lightroom Classic for the amount of power it gives me to sort, refine, and publish finely-adjusted images (especially in combination with an integrated RAW processor like DxO PhotoLab). My past workflow has always started with shooting JPEG+RAW pairs on my camera. Although the RAW is a more versatile file for editing, there are still times where I like the default JPEG rendering of my camera more than anything I can pull out of the RAW myself. (I remember some vibrant red paper lanterns from a Tokyo lane that I could never get to look right in the RAW-sourced image.)

These image pairs I would import into Lightroom Classic from the memory card on my Mac. From there, I'd make the call to either treat the images as "casual shots" and just export them unprocessed into Apple Photos, or take the time to process them – give them all star ratings, tweak the settings of the "keepers" to a look I was happy with – then export the processed images into Apple Photos and publish the best ones to Flickr for family and friends.

## The iPhone Problem

It's a problem that I suspect I share with many casual photographers: the camera in my pocket creates a parallel, competing workflow, and I end up fully committing to neither.

My phone shoots images that are instantly deposited into a cloud library, from which they are surfaced on all my synced devices, can be searched and shared, with as much or as little time spent to process them as I like. In theory, if I am diligent about getting the photos off my camera and into this same library, they can all reside in one place. In practice, however, this consolidation doesn't always happen, because of friction from a few sources:

- Importing images from my camera's memory card happens on my Mac in Lightroom Classic, which isn't always with me. Every shot I take on my camera creates "homework" for me to do later, and I don't always find the time to do it.
- That decision to either treat a batch of photos as "casual shots" that I won't immediately – and likely never will – process manually, or as "art" that I'll take extra time to refine, is a frequent moment of indecision.
- And even when I _do_ decide to spend that extra time to process a batch of photos, I often get distracted or run out of time before I finish.

As a result of these points of friction, I have many folders of photos taken over the years where I never actually completed the workflow. These photos mostly languish in my Lightroom library, and are missing from Apple Photos, where I could be enjoying them.

## The New Workflow: Apple Photos First

Too often, the photos stuck in Lightroom or on my camera's memory card were "out of sight, out of mind." Really, this is a symptom of the fact that Apple Photos has become by _actual_ primary photo library, but I've continued to persist with workflows that I devised when Lightroom was my primary photo library.

It's worth acknowledging that I _could_ still be using Lightroom as my primary library. The Lightroom app on my iPhone can be configured automatically to import and sync photos from my phone's camera roll (including those shot by my partner that appear in our shared library) into Lightroom, where they could reside alongside my camera photos. The reason I don't do this is that Apple has steadily added features to iPhone-shot photos (live photos, depth maps, etc.) that Adobe has failed to fully support in Lightroom. And while Adobe has _some_ options for surfacing my library of images on the various screens in my life, Apple is doing a lot more here too, auto-surfacing featured images, memories, and more in my Apple Photos Library. In short, I now get more value from Apple Photos being my primary, unified photo library than I would from Lightroom.

So the first change I'm making is to import photos from my camera directly into Apple Photos. Photos even does a nicer job with JPEG+RAW photo pairs than Lightroom ever did (letting me switch freely between using the JPEG or the RAW version of each image as the primary file). And on those occasions where I _do_ want to process a batch of images to get the most out of them, I can move them into Lightroom as a group, where I can treat them as a work-in-progress rather than a permanent archive.

I may well discover that after some time in this workflow, Lightroom isn't actually doing much for me anymore. [Nitro](https://www.gentlemencoders.com/nitro-for-macos/index.html) is an app that adds much of the metadata-based image sorting features that I value in Lightroom to your Apple Photos library, and I may find that DxO PhotoLab is as good a temporary repository for my photo processing projects as Lightroom.

So yes, this may be the beginning of the end of my use of Adobe Lightroom. And much as that triggers a pang of nostalgia for me, I think I need to take the plunge knowing that may be the outcome. Continuing to live in a world where Lightroom is the only library with all my photos in it, but I only get value out of the photos I have in Apple Photos, just doesn't make sense.

## Going Mobile

The other main point of friction to integrating my "good camera" into a comfortable workflow is getting the photos off of my camera's memory card and into Apple Photos.

My camera, an Olympus OM-D E-M5 mk.III, actually supports wirelessly transferring photos to my iPhone's photo library, using an app called [OI.Share](https://software.omsystem.com/oishare/en/) (aka OM Image Share). In theory, it's really slick: even when my camera is turned off in my bag, it can accept a Bluetooth LE connection from my phone to wake it up and activate a short-range Wi-Fi network to which my phone can connect to download images.

In practice, this works _almost_ perfectly, with one minor but frustrating issue: JPEG+RAW image pairs get imported as two separate images, rather than as a combined pair. And there is no way to combine the two images into one stacked image after the fact – except perhaps by exporting and re-importing the original files later on a Mac.

Worse yet, this importing of two separate images reveals what appears to be a bug in Apple Photos (at least on iOS 18 and macOS 15 Sequoia), where the capture timestamps of JPEG images from my camera are interpreted in the London, England time zone (GMT or GMT+1, depending on the time of year), rather than my device's current time zone as they are for RAW images. When the two files are imported as a pair the correct time zone is applied to the pair, but when the two files are imported separately, the RAW gets my current time zone, but the JPEG is 10 hours out (since I'm 10 hours from London), putting the two identical images far apart from each other in my grid of photos. This is easy enough to correct by selecting all the JPEGs in a batch and using Image > Adjust Date and Time… on my Mac, but that's another bit of the tedious post-shooting "homework" that I'm trying to avoid.

One solution to this issue is to give up the crutch of shooting JPEG+RAW on my camera, and just shoot RAW. Another is to keep shooting both, so that I have the JPEGs in a pinch, but only import the RAWs. I think I'll start with this latter approach for now, and if I don't find myself missing the JPEGs, I'll stop shooting them entirely at some point in the future.

In the meantime, I will be filing two bug reports with Apple: incorrect handling of time zones on JPEGs, and the failure to detect JPEG+RAW pairs when importing images from a third party app.

And now I'm off to import the last couple of months' photos from my camera directly into Apple Photos, before I start the slow process of going back through Lightroom to rescue all the images that are missing from my Apple Photos library.
