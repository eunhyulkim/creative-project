import React, { useContext } from 'react';
import { WritingError, ErrorsContext, Modal, ModalHandler } from 'apps/WritingApp';
import { Heading } from 'apps/common';
import classNames from 'classnames';
import _ from 'lodash';

interface ReportModalProps {
	handler: ModalHandler;
}

const ReportModal = React.memo(
	({ handler }: ReportModalProps): JSX.Element => {
		const errors = useContext(ErrorsContext) as WritingError[];
		const errorGroups = Array<JSX.Element>();
		_.forOwn(_.chain(errors).groupBy('name').value(), (group, name) =>
			errorGroups.push(<ErrorGroup key={name} name={name} group={group} />)
		);

		return (
			<Modal handler={handler} type="REPORT">
				<Heading>리스크 분석</Heading>
				<div
					className={classNames('box--report', {
						'bg-green': errors.length === 0,
						'bg-orange': errors.length > 0 && errors.length <= 5,
						'bg-red': errors.length > 5,
					})}
				>
					<div className="box--header">Total Risk</div>
					<div className="box--body">{`${errors.length}개`}</div>
				</div>
				{errorGroups}
			</Modal>
		);
	},
	() => true
);

const ErrorGroup = ({ name, group }: { name: string; group: WritingError[] }): JSX.Element => {
	return (
		<div className="error--group">
			<div className={classNames('error--group--title', 'badge--large', 'bg-neon-red')}>{name}</div>
			<div className={classNames('error--group--description', 'bg-real-white')}>{group[0].description}</div>
			{group.map((error) => (
				<Error key={error.toKey()} error={error} />
			))}
		</div>
	);
};

const Error = React.memo(({ error }: { error: WritingError }): JSX.Element => {
	const { location, expression } = error;
	return (
		<div className="error">
			<div className={classNames('error--location', 'badge', 'bg-gray')}>{location.join('-')}</div>
			<span className="error--expression">{expression}</span>
		</div>
	);
}, ErrorPropsAreEqual);

function ErrorPropsAreEqual(prevError: { error: WritingError }, nextError: { error: WritingError }) {
	return prevError.error.toKey() === nextError.error.toKey();
}

Error.displayName = 'Error';

export default ReportModal;
