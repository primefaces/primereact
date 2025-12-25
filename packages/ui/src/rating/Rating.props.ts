import * as HeadlessRating from '@primereact/headless/rating';
import { RatingProps } from '@primereact/types/shared/rating';

export const defaultProps: RatingProps = {
    ...HeadlessRating.defaultProps,
    as: 'div',
    name: undefined,
    invalid: false
};
