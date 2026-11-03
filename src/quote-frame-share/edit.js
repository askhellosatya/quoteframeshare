import {
	PanelBody,
	ToggleControl,
	SelectControl,
	RangeControl,
	ColorPalette,
	Button,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import {
	RichText,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getSocialBg } from './utils/getSocialBg';

import './editor.scss';

/**
 * Colors, typography, spacing, border and shadow for the quote use core block
 * supports, so their controls appear in the block's Styles tab and work with
 * theme.json presets and fluid typography.
 *
 * @param {Object}   props               Block props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Attribute setter.
 * @return {Element} Block editor UI.
 */
export default function Edit( { attributes, setAttributes } ) {
	const [ copied, setCopied ] = useState( false );

	const {
		showCopy,
		copyIcon,
		showFacebook,
		facebookIcon,
		showWhatsapp,
		whatsappIcon,
		showTelegram,
		telegramIcon,
		showX,
		xIcon,
		btnSize,
		citationFontSize,
		citationFontFamily,
		citationFontWeight,
		citationColor,
		maxWidth,
		quote,
		citation,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'qfs-blockquote',
		style: { maxWidth: maxWidth ? `${ maxWidth }px` : undefined },
	} );

	function showCopied() {
		setCopied( true );
		setTimeout( () => setCopied( false ), 1200 );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="Socials" initialOpen>
					<ToggleControl
						label="Show Copy Button"
						checked={ showCopy }
						onChange={ ( val ) =>
							setAttributes( { showCopy: val } )
						}
					/>
					<SelectControl
						label="Copy Icon"
						value={ copyIcon }
						options={ [
							{
								label: 'Default (Copy)',
								value: 'fa-copy',
							},
							{
								label: 'Clipboard',
								value: 'fa-clipboard',
							},
							{
								label: 'Check',
								value: 'fa-check',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { copyIcon: val } )
						}
					/>
					<ToggleControl
						label="Show Facebook"
						checked={ showFacebook }
						onChange={ ( val ) =>
							setAttributes( {
								showFacebook: val,
							} )
						}
					/>
					<SelectControl
						label="Facebook Icon"
						value={ facebookIcon }
						options={ [
							{
								label: 'Default (f)',
								value: 'fa-facebook-f',
							},
							{
								label: 'Square',
								value: 'fa-facebook-square',
							},
							{
								label: 'Circle',
								value: 'fa-facebook',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( {
								facebookIcon: val,
							} )
						}
					/>
					<ToggleControl
						label="Show WhatsApp"
						checked={ showWhatsapp }
						onChange={ ( val ) =>
							setAttributes( {
								showWhatsapp: val,
							} )
						}
					/>
					<SelectControl
						label="WhatsApp Icon"
						value={ whatsappIcon }
						options={ [
							{
								label: 'Default',
								value: 'fa-whatsapp',
							},
							{
								label: 'Square',
								value: 'fa-whatsapp-square',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( {
								whatsappIcon: val,
							} )
						}
					/>
					<ToggleControl
						label="Show Telegram"
						checked={ showTelegram }
						onChange={ ( val ) =>
							setAttributes( {
								showTelegram: val,
							} )
						}
					/>
					<SelectControl
						label="Telegram Icon"
						value={ telegramIcon }
						options={ [
							{
								label: 'Default',
								value: 'fa-telegram',
							},
							{
								label: 'Plane',
								value: 'fa-paper-plane',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( {
								telegramIcon: val,
							} )
						}
					/>
					<ToggleControl
						label="Show X (Twitter)"
						checked={ showX }
						onChange={ ( val ) => setAttributes( { showX: val } ) }
					/>
					<SelectControl
						label="X (Twitter) Icon"
						value={ xIcon }
						options={ [
							{
								label: 'X (Twitter)',
								value: 'fa-x-twitter',
							},
							{
								label: 'Twitter',
								value: 'fa-twitter',
							},
							{
								label: 'Twitter Square',
								value: 'fa-twitter-square',
							},
						] }
						onChange={ ( val ) => setAttributes( { xIcon: val } ) }
					/>
					<RangeControl
						label="Button Size (px)"
						value={ btnSize }
						min={ 40 }
						max={ 100 }
						onChange={ ( val ) =>
							setAttributes( { btnSize: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="styles">
				<PanelBody title="Citation" initialOpen={ false }>
					<RangeControl
						label="Font Size (px)"
						value={ citationFontSize }
						min={ 10 }
						max={ 32 }
						onChange={ ( val ) =>
							setAttributes( {
								citationFontSize: val,
							} )
						}
					/>
					<SelectControl
						label="Font Family"
						value={ citationFontFamily }
						options={ [
							{
								label: 'Default',
								value: 'inherit',
							},
							{ label: 'Serif', value: 'serif' },
							{
								label: 'Sans-serif',
								value: 'sans-serif',
							},
							{
								label: 'Monospace',
								value: 'monospace',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( {
								citationFontFamily: val,
							} )
						}
					/>
					<SelectControl
						label="Font Weight"
						value={ citationFontWeight }
						options={ [
							{
								label: 'Normal',
								value: 'normal',
							},
							{ label: 'Bold', value: 'bold' },
							{
								label: 'Bolder',
								value: 'bolder',
							},
							{
								label: 'Light',
								value: 'lighter',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( {
								citationFontWeight: val,
							} )
						}
					/>
					<p>Citation Text Color</p>
					<ColorPalette
						value={ citationColor }
						onChange={ ( color ) =>
							setAttributes( {
								citationColor: color,
							} )
						}
					/>
				</PanelBody>
				<PanelBody title="Width" initialOpen={ false }>
					<RangeControl
						label="Block Max Width (px)"
						value={ maxWidth }
						min={ 300 }
						max={ 900 }
						step={ 10 }
						onChange={ ( val ) =>
							setAttributes( { maxWidth: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<blockquote { ...blockProps }>
				<RichText
					tagName="p"
					value={ quote }
					onChange={ ( val ) => setAttributes( { quote: val } ) }
					placeholder="Add quote…"
				/>
				<RichText
					tagName="cite"
					value={ citation }
					onChange={ ( val ) => setAttributes( { citation: val } ) }
					placeholder="Citation (optional)"
					style={ {
						fontSize: `${ citationFontSize }px`,
						fontFamily: citationFontFamily,
						fontWeight: citationFontWeight,
						color: citationColor,
					} }
				/>
				<div className="qfs-actions">
					{ showCopy && (
						<Button
							className="qfs-copy"
							type="button"
							tabIndex={ -1 }
							style={ {
								width: `${ btnSize }px`,
								height: `${ btnSize }px`,
								textDecoration: 'none',
								background: getSocialBg( 'copy' ),
							} }
							onClick={ showCopied }
						>
							<i className={ `fa ${ copyIcon }` }></i>
						</Button>
					) }
					{ showFacebook && (
						<a
							className="qfs-share qfs-facebook"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={ -1 }
							style={ {
								width: `${ btnSize }px`,
								height: `${ btnSize }px`,
								textDecoration: 'none',
								background: getSocialBg( 'facebook' ),
							} }
						>
							<i className={ `fa-brands ${ facebookIcon }` }></i>
						</a>
					) }
					{ showWhatsapp && (
						<a
							className="qfs-share qfs-whatsapp"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={ -1 }
							style={ {
								width: `${ btnSize }px`,
								height: `${ btnSize }px`,
								textDecoration: 'none',
								background: getSocialBg( 'whatsapp' ),
							} }
						>
							<i className={ `fa-brands ${ whatsappIcon }` }></i>
						</a>
					) }
					{ showTelegram && (
						<a
							className="qfs-share qfs-telegram"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={ -1 }
							style={ {
								width: `${ btnSize }px`,
								height: `${ btnSize }px`,
								textDecoration: 'none',
								background: getSocialBg( 'telegram' ),
							} }
						>
							<i className={ `fa-brands ${ telegramIcon }` }></i>
						</a>
					) }
					{ showX && (
						<a
							className="qfs-share qfs-x"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={ -1 }
							style={ {
								width: `${ btnSize }px`,
								height: `${ btnSize }px`,
								textDecoration: 'none',
								background: getSocialBg( 'x' ),
							} }
						>
							<i className={ `fa-brands ${ xIcon }` }></i>
						</a>
					) }
				</div>
				{ copied && <div className="qfs-copied-alert">Copied!</div> }
			</blockquote>
		</>
	);
}
