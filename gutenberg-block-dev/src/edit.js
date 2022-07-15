/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { InspectorControls } from "@wordpress/block-editor";
import { TextControl } from '@wordpress/components';
//import { more } from '@wordpress/icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div>
			   
	<InspectorControls>
		<Panel header="My Panel">
			<PanelBody title="Enter password">
				<PanelRow>
					<input/>
				</PanelRow>
			</PanelBody>
			<PanelBody title="Protect page or Just Block ">
				<PanelRow>
				<select >
				<option value="A">Protect Page </option>
				<option value="B">Protect Block </option>
				</select>		
				</PanelRow>
			</PanelBody>
		</Panel>
	</InspectorControls>
		<p { ...useBlockProps() }>
		
			{ __(
				'Gutenberg Protect Block – hello 2 from the editor!',
				'gutenberg-protect-block'
			) }
		</p>
		</div>
	);
}
