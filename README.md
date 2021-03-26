# BU Responsive Block Starter (BURBS)

<img align="right" width="300" src="https://user-images.githubusercontent.com/1828613/112646259-ad712000-8e1d-11eb-90c5-f1d9e3f7a87c.jpg">

A starter repository for building custom Gutenberg blocks in WordPress with built-in deprecation and a handy folder structure. Leverages the [BU Responsive Foundation](https://github.com/bu-ist/responsive-foundation) library.

For folks at BU, this repository is based on the work in the [Questrom theme](https://github.com/bu-ist/r-questrom/tree/develop/blocks), which adds custom Gutenberg blocks at the theme level.

**And by the way... it's open source!** You can use this!

## Is this repository for me?

Good question! Do you like:

- Using the tools `wp-scripts` gives you, but need a little more direction?
- Having a system in place for multiple blocks?
- Having a "checklist" for what to style, with pre-defined partials?
- Extensive code examples?
- Having an easy way to deprecate your block JavaScript?
- The idea of grabbing a starter block template, modifying a few names in it, and then just getting on with your code?

If you do, this repository is indeed probably for you!

## What this repository will not give you 

- PHP and server-side rendering of blocks, though it can certainly work with code that does that. Check out the [Questrom Apply block](https://github.com/bu-ist/r-questrom/tree/develop/blocks/src/apply-block) if you want to do that.

## Installation and Dependencies

This repo uses Responsive Foundation version 3, which requires an update to your environment
to install from Github Packages. Please see [installation instructions here](https://github.com/bu-ist/responsive-foundation#installation).

From there, simply run `npm install`, and then `npm run start`, and go!

Please take note that this repository makes no assumptions about whether your
block will be inside a theme or plugin, and it is up to you to move this code 
to the proper place for your project.

## Checklist

- [ ] Grab a copy of this code and move it to your theme or plugin
- [ ] Search for `burbs` in the folder and replace it with your namespace
- [ ] Remove any unnecessary code (variations, core styles, etc)
