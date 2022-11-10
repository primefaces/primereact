import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { snapshot } from '../../test';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
    snapshot(<ProgressBar />, 'default');
    snapshot(<ProgressBar value={50} />, 'value');
    snapshot(<ProgressBar value={50} showValue={false} />, 'hide value');
    snapshot(<ProgressBar value={50} unit="%" />, 'value with unit');
    snapshot(<ProgressBar mode="determinate" value={20} />, 'mode determinate');
    snapshot(<ProgressBar mode="indeterminate" style={{ height: '6px' }} />, 'mode indeterminate');
    test('when mode is invalid throws exception', () => {
        try {
            const { container } = render(<ProgressBar mode="invalid" value={20} />);
        } catch (error) {
            expect(error.toString().startsWith("Error: invalid is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")).toBeTruthy();
        }
    });
});
