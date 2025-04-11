import { BaseComponentProps } from '..';

export interface InplaceDisplayProps extends BaseComponentProps<null, 'div', ['onClick']> {
    readonly __TYPE?: 'InplaceDisplay';
}
