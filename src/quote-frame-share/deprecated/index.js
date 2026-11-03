/**
 * Block deprecations.
 *
 * v1 (up to 3.2.0.1) stored colors, border, spacing, shadow and quote
 * typography in custom attributes and rendered them as inline styles on an
 * inner <blockquote>. v2 uses WordPress core block supports instead.
 *
 * Existing blocks still validate against v1 and are migrated to v2 the next
 * time they are opened in the editor.
 */
import saveV1 from './v1-save';
import v1Metadata from './v1-block.json';

/**
 * v1 values that match the v2 stylesheet defaults. These are not copied into
 * `style`, so migrated blocks keep the theme-overridable CSS defaults.
 */
const V2_DEFAULTS = {
	bgColor: '#e0e0e0',
	textColor: '#222',
	borderColor: '#e0e0e0',
	borderWidth: 0,
	borderRadius: 32,
	borderStyle: 'solid',
	padding: 32,
	margin: 24,
	shadow: true,
	quoteFontSize: 24,
	quoteFontFamily: 'inherit',
	quoteFontWeight: 'normal',
};

export const V1_SHADOW = '0 2px 12px rgba(0,0,0,0.10)';

const px = ( value ) => `${ value }px`;

/**
 * Remove empty objects and undefined values so we don't save `style: {}`.
 *
 * @param {Object} obj Object to clean.
 * @return {Object|undefined} Cleaned object, or undefined when empty.
 */
export function compact( obj ) {
	const out = {};
	Object.keys( obj ).forEach( ( key ) => {
		const value =
			obj[ key ] && typeof obj[ key ] === 'object'
				? compact( obj[ key ] )
				: obj[ key ];
		if ( value !== undefined && value !== '' ) {
			out[ key ] = value;
		}
	} );
	return Object.keys( out ).length ? out : undefined;
}

/**
 * Map v1 custom style attributes to the core `style` attribute.
 *
 * @param {Object} attributes v1 attributes.
 * @return {Array} New attributes and inner blocks.
 */
export function migrateV1( attributes ) {
	const {
		bgColor,
		textColor,
		quoteColor,
		borderColor,
		borderWidth,
		borderRadius,
		borderStyle,
		padding,
		margin,
		shadow,
		quoteFontSize,
		quoteFontFamily,
		quoteFontWeight,
		...rest
	} = attributes;

	const changed = ( key, value ) =>
		value !== undefined && value !== null && value !== V2_DEFAULTS[ key ];

	// In v1 the quote paragraph used quoteColor, falling back to textColor.
	const text = quoteColor || textColor;
	const hasBorder = borderWidth > 0;
	const padValue = changed( 'padding', padding ) ? px( padding ) : undefined;

	const style = compact( {
		color: {
			background: changed( 'bgColor', bgColor ) ? bgColor : undefined,
			text: changed( 'textColor', text ) ? text : undefined,
		},
		border: {
			radius: changed( 'borderRadius', borderRadius )
				? px( borderRadius )
				: undefined,
			width: hasBorder ? px( borderWidth ) : undefined,
			style: hasBorder ? borderStyle || 'solid' : undefined,
			color: hasBorder ? borderColor : undefined,
		},
		spacing: {
			padding: padValue && {
				top: padValue,
				right: padValue,
				bottom: padValue,
				left: padValue,
			},
			margin: changed( 'margin', margin )
				? { bottom: px( margin ) }
				: undefined,
		},
		shadow: shadow === false ? 'none' : undefined,
		typography: {
			fontSize: changed( 'quoteFontSize', quoteFontSize )
				? px( quoteFontSize )
				: undefined,
			fontFamily: changed( 'quoteFontFamily', quoteFontFamily )
				? quoteFontFamily
				: undefined,
			fontWeight: changed( 'quoteFontWeight', quoteFontWeight )
				? String( quoteFontWeight )
				: undefined,
		},
	} );

	return [ style ? { ...rest, style } : rest, [] ];
}

const v1 = {
	attributes: v1Metadata.attributes,
	supports: v1Metadata.supports,
	save: saveV1,
	migrate: ( attributes ) => migrateV1( attributes )[ 0 ],
};

export default [ v1 ];
