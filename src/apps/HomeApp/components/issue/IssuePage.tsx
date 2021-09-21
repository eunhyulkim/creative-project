import React, { useContext } from 'react';
import { Select, Header } from 'apps/WritingApp';
import axios from 'axios';
import classNames from 'classnames';
import { ThemeContext } from 'apps/HomeApp/type';

const config = {
	options: ['테크니컬 라이팅', '기타'],
	value: '테크니컬 라이팅',
};

const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
	const columnId = process.env.REACT_APP_GIT_API_ISSUE_COLUMN;
	const token = process.env.REACT_APP_GIT_API_TOKEN;
	const subject = event.currentTarget.select.value;
	const message = event.currentTarget.message.value;
	axios.post(
		`https://api.github.com/projects/columns/${columnId}/cards`,
		{
			note: `[${subject}] ${message}`,
		},
		{
			headers: {
				Accept: 'application/vnd.github.inertia-preview+json,',
				Authorization: `TOKEN ${token}`,
			},
		}
	);
};

function IssuePage(): JSX.Element {
	const theme = useContext(ThemeContext);
	return (
		<div className="issue-page">
			<div className="issue-box">
				<div className={classNames('issue-box--header', { dark: theme === 'dark' })}>Issue Report</div>
				<form onSubmit={onsubmit} className="issue-box--form" action="/" id="issue-form">
					<Select label="이슈" name="select" options={config.options} value={config.value} />
					<textarea name="message" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
}

export default IssuePage;
