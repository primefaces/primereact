import * as HeadlessCard from '@primereact/headless/card';
import type { CardRootProps } from '@primereact/types/shared/card';

export const defaultRootProps: CardRootProps = {
    ...HeadlessCard.defaultProps,
    as: 'div'
};
