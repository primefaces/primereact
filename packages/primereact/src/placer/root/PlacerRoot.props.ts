import * as HeadlessPlacer from '@primereact/headless/placer';
import type { PlacerProps } from '@primereact/types/shared/placer';

export const defaultRootProps: PlacerProps = {
    ...HeadlessPlacer.defaultProps,
    as: 'div'
};
