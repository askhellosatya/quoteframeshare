import { useBlockProps, RichText } from '@wordpress/block-editor';

// Kept identical to v1 so saved markup doesn't change for social buttons.
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

/**
 * Colors, border, spacing, shadow and quote typography come from core block
 * supports, which WordPress applies to the root <blockquote> automatically.
 *
 * @param {Object} props            Block props.
 * @param {Object} props.attributes Block attributes.
 * @return {Element} Saved markup.
 */
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
		citationFontSize,
		citationFontFamily,
		citationFontWeight,
		citationColor,
		maxWidth,
		quote = '',
		citation = '',
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'qfs-blockquote',
		style: { maxWidth: maxWidth ? `${ maxWidth }px` : undefined },
	} );

	const btnStyle = ( platform ) => ( {
		background: getSocialBg( platform ),
		width: `${ btnSize }px`,
		height: `${ btnSize }px`,
		textDecoration: 'none',
	} );

	return (
		<blockquote { ...blockProps }>
			<RichText.Content tagName="p" value={ quote } />

			<RichText.Content
				tagName="cite"
				value={ citation }
				style={ {
					fontSize: `${ citationFontSize }px`,
					fontFamily:
						citationFontFamily !== 'inherit'
							? citationFontFamily
							: undefined,
					fontWeight:
						citationFontWeight !== 'normal'
							? citationFontWeight
							: undefined,
					color: citationColor,
				} }
			/>

			<div className="qfs-actions">
				{ showCopy && (
					<button
						className="qfs-copy"
						type="button"
						tabIndex={ -1 }
						style={ btnStyle( 'copy' ) }
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
						style={ btnStyle( 'facebook' ) }
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
						style={ btnStyle( 'whatsapp' ) }
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
						style={ btnStyle( 'telegram' ) }
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
						style={ btnStyle( 'x' ) }
					>
						<i className={ `fa-brands ${ xIcon }` }></i>
					</a>
				) }
			</div>
		</blockquote>
	);
}
