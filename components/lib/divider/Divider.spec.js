import '@testing-library/jest-dom';
import { Divider } from './Divider';

import { snapshot } from '../../test';

describe('Divider', () => {
    snapshot(<Divider />, 'default');
    snapshot(<Divider layout="horizontal" align="left" />, 'horizontal left');
    snapshot(<Divider layout="horizontal" align="right" />, 'horizontal right');
    snapshot(<Divider layout="horizontal" align="center" />, 'horizontal center');
    snapshot(<Divider layout="vertical" align="center" />, 'vertical center');
    snapshot(<Divider layout="vertical" align="top" />, 'vertical top');
    snapshot(<Divider layout="vertical" align="bottom" />, 'vertical bottom');
    snapshot(<Divider type="dashed" />, 'type dashed');
    snapshot(<Divider type="dotted" />, 'type dotted');
});
