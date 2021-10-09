import React, { useContext } from 'react';
import { Select } from 'apps/common/components';
import classNames from 'classnames';
import { ThemeContext } from 'apps/HomeApp';
import { submitIssue } from 'apps/HomeApp/scripts';

const config = {
	options: ['테크니컬 라이팅', '책 만들기', '기타'],
	value: '테크니컬 라이팅',
};

function IssuePage(): JSX.Element {
	const theme = useContext(ThemeContext);
	return (
		<div className="issue-page">
			<div className="issue-box">
				<div className={classNames('issue-box--header', { dark: theme === 'dark' })}>Issue Report</div>
				<form onSubmit={submitIssue} className={classNames('issue-box--form', 'p-16')} action="/" id="issue-form">
					<Select label="이슈" name="select" options={config.options} value={config.value} />
					<textarea name="message" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
}

export default IssuePage;
