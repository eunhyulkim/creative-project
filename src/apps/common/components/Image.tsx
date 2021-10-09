import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { ComponentProps } from 'ui-types';

interface ImageProps extends ComponentProps {
	src: string;
	alt: string;
	link?: string;
}

const Image = ({ src, className, alt, link }: ImageProps): JSX.Element => {
	const image = <img alt={alt} src={`/${src}`} className={classNames(className)} />;
	return link ? <a href={link}>{image}</a> : image;
};

export default Image;
