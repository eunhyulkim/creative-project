import React from 'react';
import { FaRandom } from 'react-icons/fa';

interface RandomIconProps {
	handler: () => void;
}

const RandomIcon = ({ handler }: RandomIconProps): JSX.Element => {
	return <FaRandom className="random-icon" onClick={handler} />;
};

export default RandomIcon;
