import {
	PanelBody,
	TabPanel,
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

export default function Edit( { attributes, setAttributes } ) {
	const [ copied, setCopied ] = useState( false );
	const blockProps = useBlockProps();

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
		quoteFontSize,
		quoteFontFamily,
		quoteFontWeight,
		quoteColor,
		citationFontSize,
		citationFontFamily,
		citationFontWeight,
		citationColor,
		padding,
		margin,
		maxWidth,
		borderColor,
		borderWidth,
		borderRadius,
		borderStyle,
		shadow,
		bgColor,
		textColor,
		quote,
		citation,
	} = attributes;

	function showCopied() {
		setCopied( true );
		setTimeout( () => setCopied( false ), 1200 );
	}

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<TabPanel
					className="qfs-tabs"
					activeClass="is-active"
					tabs={ [
						{
							name: 'settings',
							title: 'Settings',
							className: 'qfs-tab-settings',
						},
						{
							name: 'style',
							title: 'Style',
							className: 'qfs-tab-style',
						},
					] }
					initialTabName="settings"
				>
					{ ( tab ) =>
						tab.name === 'settings' ? (
							<>
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
										onChange={ ( val ) =>
											setAttributes( { showX: val } )
										}
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
										onChange={ ( val ) =>
											setAttributes( { xIcon: val } )
										}
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

								<PanelBody
									title="Typography"
									initialOpen={ false }
								>
									<h4>Quote Typography</h4>
									<RangeControl
										label="Font Size (px)"
										value={ quoteFontSize }
										min={ 12 }
										max={ 48 }
										onChange={ ( val ) =>
											setAttributes( {
												quoteFontSize: val,
											} )
										}
									/>
									<SelectControl
										label="Font Family"
										value={ quoteFontFamily }
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
												quoteFontFamily: val,
											} )
										}
									/>
									<SelectControl
										label="Font Weight"
										value={ quoteFontWeight }
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
												quoteFontWeight: val,
											} )
										}
									/>
									<p>Quote Text Color</p>
									<ColorPalette
										value={ quoteColor }
										onChange={ ( color ) =>
											setAttributes( {
												quoteColor: color,
											} )
										}
									/>
									<h4>Citation Typography</h4>
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
							</>
						) : (
							<>
								<PanelBody title="Spacing & Border" initialOpen>
									<RangeControl
										label="Padding (px)"
										value={ padding }
										min={ 8 }
										max={ 64 }
										onChange={ ( val ) =>
											setAttributes( { padding: val } )
										}
									/>
									<RangeControl
										label="Margin Bottom (px)"
										value={ margin }
										min={ 0 }
										max={ 64 }
										onChange={ ( val ) =>
											setAttributes( { margin: val } )
										}
									/>
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
									<p>Border Color</p>
									<ColorPalette
										value={ borderColor }
										onChange={ ( color ) =>
											setAttributes( {
												borderColor: color,
											} )
										}
									/>
									<RangeControl
										label="Border Width (px)"
										value={ borderWidth }
										min={ 0 }
										max={ 12 }
										onChange={ ( val ) =>
											setAttributes( {
												borderWidth: val,
											} )
										}
									/>
									<RangeControl
										label="Border Radius (px)"
										value={ borderRadius }
										min={ 0 }
										max={ 64 }
										onChange={ ( val ) =>
											setAttributes( {
												borderRadius: val,
											} )
										}
									/>
									<SelectControl
										label="Border Style"
										value={ borderStyle }
										options={ [
											{ label: 'Solid', value: 'solid' },
											{
												label: 'Dashed',
												value: 'dashed',
											},
											{
												label: 'Dotted',
												value: 'dotted',
											},
										] }
										onChange={ ( val ) =>
											setAttributes( {
												borderStyle: val,
											} )
										}
									/>
									<ToggleControl
										label="Box Shadow"
										checked={ shadow }
										onChange={ ( val ) =>
											setAttributes( { shadow: val } )
										}
									/>
								</PanelBody>
								<PanelBody
									title="Quote Block Colors"
									initialOpen={ false }
								>
									<p>Block Background Color</p>
									<ColorPalette
										value={ bgColor }
										onChange={ ( color ) =>
											setAttributes( { bgColor: color } )
										}
									/>
								</PanelBody>
							</>
						)
					}
				</TabPanel>
			</InspectorControls>
			<blockquote
				className="qfs-blockquote"
				style={ {
					background: bgColor,
					color: textColor,
					borderRadius: `${ borderRadius }px`,
					padding: `${ padding }px`,
					textAlign: 'center',
					border: `${ borderWidth }px ${ borderStyle } ${ borderColor }`,
					boxShadow: shadow ? '0 2px 12px rgba(0,0,0,0.10)' : 'none',
					marginBottom: `${ margin }px`,
					maxWidth: `${ maxWidth || 500 }px`,
				} }
			>
				<RichText
					tagName="p"
					value={ quote }
					onChange={ ( val ) => setAttributes( { quote: val } ) }
					placeholder="Add quote…"
					style={ {
						fontSize: `${ quoteFontSize }px`,
						fontFamily: quoteFontFamily,
						fontWeight: quoteFontWeight,
						color: quoteColor,
					} }
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
		</div>
	);
}
