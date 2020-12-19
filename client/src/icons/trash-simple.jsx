import React from 'react';

function TrashSimple(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const title = props.title || "trash simple";

	return (
		<svg height="32" width="32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>{title}</title>
	<g fill={secondaryfill}>
		<path d="M30,7c0.553,0,1-0.448,1-1s-0.447-1-1-1h-8V1c0-0.552-0.447-1-1-1H11c-0.553,0-1,0.448-1,1v4 H2C1.447,5,1,5.448,1,6s0.447,1,1,1H30z M12,2h8v3h-8V2z"/>
		<path d="M4,9v22c0,0.552,0.447,1,1,1h22c0.553,0,1-0.448,1-1V9H4z M12,27h-2V14h2V27z M17,27h-2V14h2V27z M22,27h-2 V14h2V27z" fill={fill}/>
	</g>
</svg>
	);
};

export default TrashSimple;