import React from 'react';
import classNames from 'classnames';
import { TitleStyle, colors } from 'store/book';

interface CoverTitleProps {
	cover: number;
	color: string;
	title: string;
	titleStyle: TitleStyle;
}

/*
 ** - Line(3): 한 줄(Single), 두 줄(Double), 여러 줄(Multi)
 ** - align(3): 좌, 중, 우
 ** - size(3): 대, 중, 소
 ** - position(9): 좌상~우하
 */

function parseTitle(title: string, titleStyle: TitleStyle) {
	switch (titleStyle.line) {
		case 'single':
			return <>{title}</>;
		case 'double': {
			const words = title.split(' ');
			if (words.length === 1) return words[0];

			const front = words.slice(0, Math.ceil(words.length / 2)).join(' ');
			const back = words.slice(Math.ceil(words.length / 2)).join(' ');
			return (
				<>
					<div key={`idx-${front}`}>{front}</div>
					<div key={`idx-${back}`}>{back}</div>
				</>
			);
		}
		case 'multi':
		default:
			return title.split(' ').map((word, idx) => <div key={`idx-${word}`}>{word}</div>);
	}
}

function parseColor(cover: number, color: string, titleStyle: TitleStyle) {
	const { position } = titleStyle;
	const [white, black] = ['real-white', 'black'];

	if (color === colors[colors.length - 1]) return black;

	switch (cover) {
		case 0:
			return white;
		case 1:
			return position[1] === 'D' ? white : black;
		case 2:
			return position[0] === 'L' ? black : white;
		case 3:
			return position === 'LC' || position === 'RD' ? white : black;
		case 4:
			return black;
		case 5:
			return position === 'RT' || position === 'LD' ? white : black;
		case 6:
			return position[1] === 'T' ? white : black;
		case 7:
			return position[1] === 'D' ? white : black;
		default:
			return white;
	}
}

function CoverTitle({ cover, color, title, titleStyle }: CoverTitleProps): JSX.Element {
	const element = parseTitle(title, titleStyle);
	const fontColor = parseColor(cover, color, titleStyle);
	return (
		<div className={classNames('cover--title', `size--${titleStyle.size}`, `pos--${titleStyle.position}`, fontColor)}>
			<div className={`align--${titleStyle.align}`}>{element}</div>
		</div>
	);
}

export default CoverTitle;
