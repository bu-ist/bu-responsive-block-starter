/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */
import { registerBlockVariation } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * A block variation's content.
 *
 * This is a map of either custom or core blocks to place inside the variation.
 * Use the name of the block.
 *
 * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src
 * for a list of possible core blocks to use here.
 *
 * @see https://css-tricks.com/how-to-use-block-variations-in-wordpress/ for a tutorial
 * on block variations.
 *
 * Below, a structure for including two columns of content in a group block is shown.
 */

const CONTENT = [
	[ 'core/columns', {}, [
		[ 'core/column', {}, [
			[ 'core/heading', {
				level: 3,
				placeholder: 'Welcome to your first block variation',
			} ],
		] ],
		[ 'core/column', {}, [
			[ 'core/paragraph', {
				placeholder: 'Block variations make it easy to put together sets of core blocks to suggest a particular content structure.',
			} ],
			[ 'core/buttons', {}, [
				[ 'core/button', {
					className: 'is-style-outline',
					textColor: 'your-color',
					placeholder: 'Give the user a reason to click'
				} ],
			] ],
		] ],
	] ],
];

/*
 * A new `core/group` block variation.
 *
 * It will show in the block inserter, just like a custom block would.
 *
 * This makes it easy to create customized content recommendations and guidance
 * without developing new blocks from scratch.
 */
const starterVariation = {
	name: 'burbs-variation-starter',
	title: __( 'Variation Block Example', 'burbs' ),
	description: __( 'An example of a block variation.', 'burbs' ),
	scope: [ 'inserter' ],
	attributes: {
		align: 'full',
	},
	icon: {
		background: '#21759b',
		foreground: '#fff',
		src: 'smiley'
	},
	innerBlocks: CONTENT,
};

registerBlockVariation( 'core/group', starterVariation );
