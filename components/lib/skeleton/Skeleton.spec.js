import '@testing-library/jest-dom';
import { Skeleton } from './Skeleton';

import { snapshot } from '../../test';

describe('Skeleton', () => {
    snapshot(<Skeleton />, 'default');
    snapshot(<Skeleton shape="circle" />, 'shape circle');
    snapshot(<Skeleton shape="rectangle" />, 'shape rectangle');
    snapshot(<Skeleton animation="none" />, 'animation none');
    snapshot(<Skeleton animation="wave" />, 'animation wave');
    snapshot(<Skeleton borderRadius="16px" />, 'border radius');
    snapshot(<Skeleton borderRadius="16px" />, 'border radius');
    snapshot(<Skeleton width="100%" height="2rem" />, 'size width and height');
    snapshot(<Skeleton size="50px" />, 'size in pixels');
});
