/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import 'src/style.scss';

/**
 * Import the current block configuration.
 */
import { config as config } from './current/config';

/**
 * Import all deprecated block versions.
 *
 * A deprecated "v1" is provided as an example. You should
 * delete it once you understand what's happening.
 *
 * @see deprecated/README.md for how to deprecate a block.
 */
import deprecated from './deprecated';

const deprecateConfig = {
	deprecated: deprecated,
};

const blockConfig = {
	...config,
	...deprecateConfig
};

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
const starterBlock = registerBlockType( 'burbs/starter-block', blockConfig );

export default starterBlock;
