/**
 * A list of current and deprecated block versions for this block.
 * To deprecate a block version, copy the existing files
 * in your block to a new folder with the version number.
 * Then, import the default as the version number from
 * that folder, as below.
 *
 * You may wish to add migration options. If you would
 * like to write a migration function, the index.js file
 * in the version folder would be the best place to add that.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation/#example-3
 */

import { config as v1 } from './v1/config';

/**
 * An array of deprecated blocks, and the order
 * in which WordPress should process them.
 *
 * This should be in reverse chronoligcal order.
 * Example: const deprecated = [ v3, v2, v1 ];
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-deprecation/#example
 */

const deprecated = [ v1 ];

export default deprecated;
