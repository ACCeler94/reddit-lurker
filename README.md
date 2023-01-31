# Reddit Lurker

**Have you ever wanted to use Reddit but without all those social aspects? If You don't like posting, writing comments or interacting with other people - in other words: You like lurking - then Reddit Lurker is perfect for Your needs.**


## What is it?

Reddit Lurker is a minimalistic Reddit.com clone project build using Reddit JSON API. The goal of this project was to create a familiar experience but without many of Reddit.com quirks and social media aspects.

## Features

 - stripped of all human to human interactions - You consume content, not create it
 - top subreddits available for quick access
 - familiar UI design
 - dark mode
 - open on reddit button - just in case You would like to become a meaningful redditor and add some comments
 - ad free
 - NSFW content without logging in

---
**Tech Stack:**
 - React
 - Redux
 - CSS
 - [React Markdown](https://github.com/remarkjs/react-markdown)

**Known issues:**

 -  Videos play without any sound - Reddit.com separates audio and video in its files and uses custom video player to combine those two together. Solution would be to find or build similar video player
 - Galleries show link or only the first picture - galleries are fetched in a completely different format. To solve this issue separate method of displaying and fetching content would need to be build. Right now these are out of scope for this project
