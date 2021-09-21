import React from 'react';
import axios from 'axios';

export default function submitIssue(event: React.FormEvent<HTMLFormElement>): void {
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
}
