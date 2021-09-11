import React, { useState } from 'react';
import classNames from 'classnames';
import { ColorType } from 'ui-types';
import _ from 'lodash';
import produce from 'immer';
import useModal from 'hooks/useModal';

interface ComponentWithHookProps {
	children: React.ReactElement;
	hooks: Array<string>;
}

const ComponentWithHook = ({ children, hooks = [] }: ComponentWithHookProps): JSX.Element => {
	return <>{React.cloneElement(children, { handler: useModal() })}</>;
};

export default ComponentWithHook;
