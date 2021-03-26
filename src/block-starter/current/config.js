/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies, specific to this version of the block.
 */
import Edit from './edit';
import save from './save';

/**
 * You can change your block configuration here.
 * When deprecating, this is also used as a base for the deprecated block's
 * configuration. Do not change this configuration when deprecating a block.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
export const config = {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	//apiVersion: 1, // Can't use 2 just yet, as it requires WordPress 5.6

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Starter Block', 'burbs' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'A starter block for all blocks in this theme.',
		'burbs'
	),

	/**
	 * Controls the attributes, aka user editable values, associated with this block.
	 * These are the attributes available to you to use in markup.js.
	 * Without this, information will not save.
	 */
	attributes: {
		title: {
			type: 'string',
		},
		description: {
			type: 'string',
		}
	},

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'smiley',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
}
