import { ComponentInstance } from '.';
import { StylesOptions } from '../styles';

export interface IconProps {
    spin?: boolean;
}

export declare type withIconOptions<IProps, DProps, RData> = {
    name?: string | undefined;
    defaultProps?: DProps | undefined;
    styles?: StylesOptions | undefined;
    render?: React.FC<ComponentInstance<DProps, IProps, ComponentInstance, RData>>;
};
