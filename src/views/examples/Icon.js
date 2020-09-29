import React from 'react';

function Award48(props) {
	const title = props.title || "award 48";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g>
		<polyline fill="none" points="16.672,34.849 8,53 17,52 22,60 30.389,41.936 " stroke="#444444" strokeLinecap="butt" strokeWidth="2"/>
		<polyline fill="none" points="47.328,34.849 56,53 47,52 42,60 33.611,41.936 " stroke="#444444" strokeLinecap="butt" strokeWidth="2"/>
		<circle cx="32" cy="22" fill="none" r="20" stroke="#444444" strokeLinecap="square" strokeWidth="2"/>
		<polygon fill="none" points="22,19.655 28.917,18.704 32.055,12.466 35.098,18.751 42,19.807 36.963,24.643 38.091,31.534 31.935,28.238 25.73,31.44 26.963,24.567 " stroke="#444444" strokeLinecap="square" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default Award48;