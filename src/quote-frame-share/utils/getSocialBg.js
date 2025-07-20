// utils/getSocialBg.js
export function getSocialBg( platform ) {
	const map = {
		copy: '#222',
		facebook: '#3b5998',
		whatsapp: '#25D366',
		telegram: '#0088cc',
		x: '#000',
	};
	return map[ platform ] || '#000';
}
