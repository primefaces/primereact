import * as HeadlessCard from '@primereact/headless/card';
import type { CardProps } from '@primereact/types/shared/card';

export const defaultProps: CardProps = {
    ...HeadlessCard.defaultProps,
    as: 'div'
};
