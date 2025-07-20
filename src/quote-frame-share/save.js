import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
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
		quote = '',
		citation = '',
	} = attributes || {};

	const getSocialBg = ( platform ) => {
		switch ( platform ) {
			case 'facebook':
				return '#1877F2';
			case 'whatsapp':
				return '#25D366';
			case 'telegram':
				return '#0088cc';
			case 'x':
				return '#000000';
			case 'copy':
				return '#222222';
			default:
				return '#ccc';
		}
	};

	const btnStyle = ( bg ) => ( {
		background: bg,
		width: `${ btnSize }px`,
		height: `${ btnSize }px`,
		textDecoration: 'none',
	} );

	function showCopied() {
		setCopied( true );
		setTimeout( () => setCopied( false ), 1200 );
	}

	return (
		<blockquote
			{ ...useBlockProps.save() }
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
			<RichText.Content
				tagName="p"
				value={ quote }
				style={ {
					fontSize: `${ quoteFontSize }px`,
					fontFamily: quoteFontFamily,
					fontWeight: quoteFontWeight,
					color: quoteColor,
				} }
			/>

			<RichText.Content
				tagName="cite"
				value={ citation }
				style={ {
					fontSize: `${ citationFontSize }px`,
					fontFamily: citationFontFamily,
					fontWeight: citationFontWeight,
					color: citationColor,
				} }
			/>

			<div className="qfs-actions">
				{ showCopy && (
					<button
						className="qfs-copy"
						type="button"
						tabIndex={ -1 }
						style={ btnStyle( getSocialBg( 'copy' ) ) }
					>
						<i className={ `fa ${ copyIcon }` }></i>
					</button>
				) }

				{ showFacebook && (
					<a
						className="qfs-share qfs-facebook"
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={ -1 }
						style={ btnStyle( getSocialBg( 'facebook' ) ) }
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
						style={ btnStyle( getSocialBg( 'whatsapp' ) ) }
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
						style={ btnStyle( getSocialBg( 'telegram' ) ) }
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
						style={ btnStyle( getSocialBg( 'x' ) ) }
					>
						<i className={ `fa-brands ${ xIcon }` }></i>
					</a>
				) }
			</div>
		</blockquote>
	);
}
