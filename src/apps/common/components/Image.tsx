import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

interface ImageProps {
	src: string;
	alt: string;
	classes?: string | string[];
	link?: string;
}

const Image = ({ src, classes, alt, link }: ImageProps): JSX.Element => {
	const image = <img alt={alt} src="create-book-main.png" className={classNames(classes)} />;
	return link ? <a href={link}>{image}</a> : image;
};

export default Image;
