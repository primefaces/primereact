import * as HeadlessRating from '@primereact/headless/rating';
import { RatingRootProps } from '@primereact/types/shared/rating';

export const defaultRootProps: RatingRootProps = {
    ...HeadlessRating.defaultProps,
    as: 'div',
    name: undefined,
    invalid: false
};
