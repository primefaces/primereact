import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('when visible is false Button return null', () => {
        const { container } = render(<Button label={'test'} visible={false} />);

        expect(container.getElementsByClassName('p-button').length).toBe(0);
    });

    test('when visible is true Button render correctly', () => {
        const { container } = render(<Button label={'test'} visible={true} />);

        expect(container.getElementsByClassName('p-button').length).toBe(1);
    });

    test('when iconPos is bottom Button is vertical', () => {
        const { container } = render(<Button label={'test'} iconPos={'bottom'} visible={true} />);

        expect(container.getElementsByClassName('p-button-vertical').length).toBe(1);
    });

    test('when label is empty it returns empty button', async () => {
        const { container } = render(<Button visible={true} />);
        const button = container.getElementsByClassName('p-button-label p-c');

        expect(button[0].innerHTML).toBe('&nbsp;');
    });

    test('when badge is true it renders Button with badge', () => {
        const { container } = render(<Button badge={'test'} />);

        expect(container.getElementsByClassName('p-badge').length).toBe(1);
    });

    test('when badge is null it renders Button without badge', () => {
        const { container } = render(<Button />);

        expect(container.getElementsByClassName('p-badge').length).toBe(0);
    });

    test('when click the button if loading is true it renders Button with loading icon', () => {
        const { container } = render(<Button loading={'test'} />);

        expect(container.getElementsByClassName('p-button-icon').length).toBe(1);
    });

    test('when click the button if loading is false it renders Button without loading icon', () => {
        const { container } = render(<Button />);

        expect(container.getElementsByClassName('p-button-loading-icon').length).toBe(0);
    });

    test('when label is true it renders Button with default aria label', () => {
        const { container } = render(<Button />);
        const hasAriaLabel = container.getElementsByClassName('p-button')[0].getAttribute('aria-label');

        expect(hasAriaLabel).toBe(null);
    });

    test('when aria-label prop is not exist aria-label prop should be equal to label prop ', () => {
        const { container } = render(<Button label={'test'} />);
        const getAriaLabel = container.getElementsByClassName('p-button')[0].getAttribute('aria-label');

        expect(getAriaLabel).toBe('test');
    });

    test('when label prop is not exist label prop should be equal to aria-label prop', () => {
        const { container } = render(<Button aria-label={'test'} />);
        const getAriaLabel = container.getElementsByClassName('p-button')[0].getAttribute('aria-label');

        expect(getAriaLabel).toBe('test');
    });
    //
    test('when using badge and label the aria-label should contain both values', () => {
        const { container } = render(<Button label={'test'} badge={'lost'} />);
        const getAriaLabel = container.getElementsByClassName('p-button')[0].getAttribute('aria-label');

        expect(getAriaLabel).toBe('test lost');
    });
});
