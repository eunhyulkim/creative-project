import React from 'react';
import { Helmet } from 'react-helmet';

const config = {
	description: '기술과 상상을 엮어 변화를 실험합니다.',
	url: 'https://creative-project.netlify.app/',
	title: '크리에이티브-프로젝트',
};

function SEO(): JSX.Element {
	return (
		<Helmet>
			<title>새로운 상상력: 크리에이티브-프로젝트</title>
			<link rel="icon" href="./home_favicon.ico" />

			<meta name="description" content={config.description} />
			<meta name="url" content={config.url} />

			<meta property="og:title" content={config.title} />
			<meta property="og:type" content="website" />
			<meta property="og:description" content={config.description} />
			<meta property="og:url" content={config.url} />
			<meta property="og:image" content="https://creative-project.netlify.app/home_thumbnail.png" />
		</Helmet>
	);
}

export default SEO;
