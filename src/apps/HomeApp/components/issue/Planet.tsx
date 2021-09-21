import React from 'react';
import _ from 'lodash';
import { Track } from 'apps/HomeApp/components';

interface PlanetProps {
	app: {
		path: string;
		name: string;
	};
}

const Planet = ({ app }: PlanetProps): JSX.Element => {
	const rand = _.random(25) + 5;
	const originX = rand * (_.random(1) === 1 ? 1 : -1);
	const originY = rand * (_.random(1) === 1 ? 1 : -1);

	const styles = {
		left: `${String(_.random(0, 70))}vw`,
		top: `${String(_.random(2, 50))}vw`,
		width: window.innerWidth > 480 ? '10vw' : '20vw',
		height: window.innerWidth > 480 ? '10vw' : '20vw',
		transformOrigin: `${String(originX)}vw ${String(originY)}vw`,
	};

	return (
		<>
			<a href={app.path} style={styles} className="planet">
				{app.name.split(' ').map((word) => (
					<div key={word}>{word}</div>
				))}
			</a>
			<Track style={styles} />
		</>
	);
};

export default Planet;
