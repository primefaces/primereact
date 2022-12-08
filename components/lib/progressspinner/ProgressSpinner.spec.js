import '@testing-library/jest-dom';
import { ProgressSpinner } from './ProgressSpinner';

import { snapshot } from '../../test';

describe('ProgressSpinner', () => {
    snapshot(<ProgressSpinner />, 'default');
    snapshot(<ProgressSpinner strokeWidth="3" />, 'strokeWidth');
    snapshot(<ProgressSpinner fill="green" />, 'fill');
    snapshot(<ProgressSpinner animationDuration="5s" />, 'animationDuration');
});
