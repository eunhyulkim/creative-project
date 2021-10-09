import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { RandomIcon, Paragraph } from 'apps/common/components';
import { BookActions } from 'store/book';
import { useDispatch } from 'react-redux';
import * as Svg from 'assets/book_cover';

interface CoverProps {
	nth: number;
	color?: string;
}

function convert(nth: number, color?: string): JSX.Element {
	switch (nth) {
		case 0:
			return <Svg.CoverZero fill={color} />;
		case 1:
			return <Svg.CoverOne fill={color} />;
		case 2:
			return <Svg.CoverTwo fill={color} />;
		case 3:
			return <Svg.CoverThree fill={color} />;
		case 4:
			return <Svg.CoverFour fill={color} />;
		case 5:
			return <Svg.CoverFive fill={color} />;
		case 6:
			return <Svg.CoverSix fill={color} />;
		case 7:
			return <Svg.CoverSeven fill={color} />;
		default:
			return <Svg.CoverZero fill={color} />;
	}
}

function Cover({ nth, color }: CoverProps): JSX.Element {
	return <div className="cover">{convert(nth, color)}</div>;
}

export default Cover;
