# Deprecating a block version

You will need to deprecate a block anytime it is used by content,
and you have updated any part of the markup or attributes.

**Deprecate your block before making any changes to the code.**

To deprecate a block, simply do the following:

- Create a new folder inside this folder with the deprecated version number.
- Copy all files from the block's `current` folder to the deprecated version folder.
- In `index.js` in the deprecated version folder:
	- Import the new config as the deprecated version number.
	- Add the deprecated version number to the deprecated array.

## Writing a migration function for your deprecated block

You can optionally write migration functions for your deprecated blocks.
An example is here: https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation/#example-4

To include a migration function: 

- In the deprecated version folder:
	- Create a new migrate.js file.
	- Write a function and export it from migrate.js, following the same pattern as save.js.
	- Import and set the migrate function in config.js, following the same pattern as save.js.

From developer.wordpress.org, the following is worth keeping in mind when writing migration scripts:

> Deprecations do not operate as a chain of updates in the way other software data updates, like database migrations, do. At first glance, it is easy to think that each deprecation is going to make the required changes to the data and then hand this new form of the block onto the next deprecation to make its changes. What happens instead, is that each deprecation is passed the original saved content, and if its save method produces valid content the deprecation is used to parse the block attributes. If it has a migrate method it will also be run using the attributes parsed by the deprecation. The current block is updated with the migrated attributes and inner blocks before the current block’s save function is run to generate new valid content for the block. At this point the current block should now be in a valid state. 
