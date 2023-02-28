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

**Known issues:**

 -  Videos play without any sound - Reddit.com separates audio and video in its files and uses a custom video player to combine those two together. The solution would be to find or build similar video player
  - Galleries show link or only the first picture - galleries are fetched in a completely different format. To solve this issue, separate method of displaying and fetching content would need to be built. Right now, these are out of scope for this project 
  - Only the first batch of comments is loaded under the post - getting more comments would require making POST request with a list of comment IDs to fetch. Problem with this solution is that manual reconstruction of the comment tree (which comment is a reply, which is the parent comment). Doing so would be labor intensive and not necessary for the purpose of this project.