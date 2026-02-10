import * as HeadlessPositioner from '@primereact/headless/positioner';
import type { AutoCompletePositionerProps } from '@primereact/types/shared/autocomplete';

export const defaultPositionerProps: AutoCompletePositionerProps = {
    ...HeadlessPositioner.defaultProps,
    as: 'div'
};
