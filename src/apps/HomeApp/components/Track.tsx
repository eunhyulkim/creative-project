import React from 'react';
import _ from 'lodash';

interface StyleProps {
	[key: string]: string;
}

const Track = ({ style }: { style: StyleProps }): JSX.Element => {
	const [originXStr, originYStr] = style.transformOrigin.split(' ');
	const originX = +originXStr.substring(0, originXStr.length - 2);
	const originY = +originYStr.substring(0, originYStr.length - 2);
	const planetRadius = +style.width.substring(0, style.width.length - 2) / 2;
	const planetLTPos = [+style.left.substring(0, style.left.length - 2), +style.top.substring(0, style.top.length - 2)];
	const planetCPos = [planetLTPos[0] + planetRadius, planetLTPos[1] + planetRadius];
	const trackCPos = [planetLTPos[0] + originX, planetLTPos[1] + originY];
	const radius = Math.sqrt((trackCPos[0] - planetCPos[0]) ** 2 + (trackCPos[1] - planetCPos[1]) ** 2);

	const trackStyle = {
		top: `${trackCPos[1] - radius}vw`,
		left: `${trackCPos[0] - radius}vw`,
		width: `${radius * 2}vw`,
		height: `${radius * 2}vw`,
	};
	return <div style={trackStyle} className="track" />;
};

export default Track;
