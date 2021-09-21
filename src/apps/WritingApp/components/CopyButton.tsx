import React from 'react';
import { AiOutlineCopy } from 'react-icons/ai';

interface CopyButtonProps {
	onClick: () => void;
}

const CopyButton = React.memo(
	({ onClick }: CopyButtonProps): JSX.Element => {
		return (
			<div onClick={() => onClick()} className="icon--button">
				<AiOutlineCopy />
			</div>
		);
	},
	() => true
);

CopyButton.displayName = 'CopyButton';
export default CopyButton;
