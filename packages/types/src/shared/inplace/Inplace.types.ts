import { BaseComponentProps } from '..';
import { useInplaceProps } from './useInplace.types';

export interface InplaceProps extends BaseComponentProps<useInplaceProps, 'div'> {
    readonly __TYPE?: 'Inplace';
}
