import React from 'react';
import Button from 'apps/common/components/Button';
import { fireEvent, render } from '@testing-library/react';

describe('Button', () => {
	it('render', () => {
		const { container } = render(<Button label="sample" />);
		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild).toHaveTextContent('sample');
	});

	it('classNames', () => {
		const { container } = render(<Button classes={['classA classB']} label="sample" />);
		expect(container.firstChild).toHaveClass('classA', 'classB');
		expect(container.firstChild).not.toHaveClass('classC');
	});

	it('click event', () => {
		const mockFunc = jest.fn(() => 'default');
		const { getByText } = render(<Button onClick={mockFunc} label="sample" />);
		const element = getByText(/sample/);
		fireEvent.click(element);
		expect(mockFunc).toBeCalledTimes(1);
	});
});
