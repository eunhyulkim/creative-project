import React, { useContext } from 'react';
import classNames from 'classnames';
import { DynamicWord } from 'apps/HomeApp/components';
import { ThemeContext } from 'apps/HomeApp';

const values = ['상상력', '감수성', '호기심'];

function InfoPage(): JSX.Element {
	const theme = useContext(ThemeContext);
	const dark = theme === 'dark';

	return (
		<div className={classNames('info-page', { dark: theme === 'dark' })}>
			<div className="info-page--title">
				<div>새로운</div>
				<div>
					<DynamicWord classes={['ability']} values={values} />
					으로 여는
				</div>
				<div>모험의 세계</div>
			</div>
			<div className="info-page--description">
				<div>
					상상력 풍부한 기획자로 살다가 기술을 더하기 위해 개발자 취업을 준비하고 있습니다. 변화의 핵심은 상상력과
					기술에 있다고 믿기 때문입니다.
				</div>
				<div>
					이론을 역량으로 전환하기 위해서는 프로젝트가 필요하고, 실제 사용자의 존재가 있을 때 효과가 극대화된다고 생각해
					이 프로젝트를 만들게 되었습니다.
				</div>
				<div>
					분야를 가리지 않고 떠오르는 상상들을 하나씩 구체화시켜 갈 예정입니다. 발견되는 문제나 추가하고 싶은 기능, 기타
					의견이 있으시면 자유롭게 이슈를 남겨주세요.
				</div>
			</div>
		</div>
	);
}

export default InfoPage;
