import * as HeadlessPlacer from '@primereact/headless/placer';
import type { PlacerRootProps } from '@primereact/types/shared/placer';

export const defaultRootProps: PlacerRootProps = {
    ...HeadlessPlacer.defaultProps,
    as: 'div'
};
