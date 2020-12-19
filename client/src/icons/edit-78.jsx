import React from 'react';

function Edit78(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const title = props.title || "edit 78";

	return (
		<svg height="32" width="32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>{title}</title>
	<g fill={secondaryfill}>
		<path d="M24.846,12.899C25.578,14.45,26,16.174,26,18c0,6.617-5.383,12-12,12S2,24.617,2,18 S7.383,6,14,6c1.826,0,3.55,0.422,5.101,1.154l1.507-1.49C18.638,4.604,16.389,4,14,4C6.28,4,0,10.28,0,18s6.28,14,14,14 s14-6.28,14-14c0-2.389-0.604-4.638-1.663-6.608L24.846,12.899z"/>
		<polygon fill={fill} points="25.864,3.278 13,16 12,20 16,19 28.722,6.136 "/>
		<path d="M31.414,0.586c-0.781-0.781-2.047-0.781-2.828,0l-1.3,1.286l2.842,2.842l1.286-1.3 C32.195,2.633,32.195,1.367,31.414,0.586z"/>
	</g>
</svg>
	);
};

export default Edit78;