export type ColorType =
	| 'primary'
	| 'secondary'
	| 'black'
	| 'gray'
	| 'white'
	| 'real-white'
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'blue'
	| 'purple'
	| 'pink'
	| 'teal'
	| 'brown'
	| 'neon-red'
	| 'neon-orange'
	| 'neon-yellow'
	| 'neon-green'
	| 'neon-blue'
	| 'neon-purple'
	| 'neon-pink'
	| 'neon-teal'
	| 'neon-brown';

export interface ComponentProps {
	color?: ColorType;
	className?: string[] | string;
	children?: React.ReactNode;
}
