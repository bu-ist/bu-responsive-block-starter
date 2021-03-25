/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * This controls the user-facing markup of the block.
 * This file is imported into both the edit and save functions,
 * and called using <Markup {...attributes} />.
 *
 * There is no need to rename this function.
 * Each block's Markup element is scoped to that block.
 * Just write your markup here and go!
 *
 * For a list of available data you can use in this block,
 * see attributes in index.js.
 *
 * @return {WPElement} Element to render.
 */

export default function Markup( props ) {
    return (
		<div className="your-class-here">
			<h3>Welcome to the sample block!</h3>
			<h4>{ __( props.title, 'your-namespace' ) }</h4>
			This is the sample block. Add plain HTML here, or use attributes to spit out real data.
			{ props.content }
		</div>
    );
}
