# Starter Block

Welcome to the starter block! This block will help you get started
with all your Gutenberg-y needs.

## What's in here?

- A `current` folder. This is the current version of your block,
and where you will be working most of the time. Inside of this folder,
you'll find:
	- `_style.scss`: Write all styles for the frontend of this block here. 
	(Editor-specific styles should go in editor.scss.)
	- `config.js`: Your block configuration goes here.
	- `edit.js`: All block admin editing functions go here.
	- `markup.js`: Your basic HTML and output will go here. Designers - start here! 
	Developers: this is where you will go to connect frontend to backend code. This
	file controls the display of both the Gutenberg view and the website view of the block
	by default.
	- `save.js`: Code related to how the block displays on the frontend goes here.
- A `deprecated` folder. This is where you should go if you need to
deprecate a block. **Always deprecate before changing code that could
affect existing content on websites, even markup!** Inside, you'll find:
	- A set of folders which holds the code for each version of the block that has been
	deprecated
	- A file which controls the deprecated versions
- `index.js` is responsible for registering your block. You'll only
need to update this once with the namespace of the block, when you
begin development.

## To make your new block available to WordPress

- Duplicate this folder, modify the namespace and `block-starter`, and the magic
of Webpack will take care of the rest.
- You will need to run `npm run start` again.
- If the block is still not available, clear the cache by running `npm clear cache --force`.
- If that doesn't work, see the instructions below.
- Once things have been compiled, be sure to upload the `build` folder that is generated.

## Can't compile?

- If you've removed the deprecated folder because you are using PHP rendering
insted of JavaScript rendering, you may run into an error where even though you've 
deleted all references to a certain file or folder, you still get an error that it is 
missing. To fix this, you need to clear the cache by deleting node_modules and rerunning 
`npm install`.
