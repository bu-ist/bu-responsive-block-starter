/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Get the markup.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import Markup from './markup';

/**
 * Import required libraries for the editor.
 */
const { InspectorControls } = wp.blockEditor;
const { Button, TextControl, TextareaControl, RadioControl, PanelBody } = wp.components;

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import 'src/editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit( props ) {
	const { setAttributes, attributes } = props;

	const {
		title,
		description
	} = attributes;

    return (
    	<>
	        <Markup {...attributes} />
			<InspectorControls>
				<PanelBody title={__('Block Options', 'your-namespace')} key={'display'}>
					<TextControl
						label={__('Title', 'your-namespace')}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
				</PanelBody>
			</InspectorControls>
		</>
    );
}
