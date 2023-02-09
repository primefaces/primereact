import '@testing-library/jest-dom';
import { snapshot } from '../../test';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
    snapshot(<ProgressBar />, 'default');
    snapshot(<ProgressBar value={50} />, 'value');
    snapshot(<ProgressBar value={50} showValue={false} />, 'hide value');
    snapshot(<ProgressBar value={50} unit="%" />, 'value with unit');
    snapshot(<ProgressBar mode="determinate" value={20} />, 'mode determinate');
    snapshot(<ProgressBar mode="indeterminate" style={{ height: '6px' }} />, 'mode indeterminate');
});
