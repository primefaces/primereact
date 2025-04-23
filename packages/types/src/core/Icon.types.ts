import { ComponentInstance } from '.';
import { StylesOptions } from '../styles';

export interface IconProps {
    spin?: boolean;
}

export declare type withBaseIconOptions<IProps, RData extends Record<PropertyKey, unknown>> = {
    name?: string | undefined;
    render?: React.FC<ComponentInstance<IconProps, IProps, ComponentInstance, RData>>;
};

export declare type withIconOptions<IProps, DProps, RData extends Record<PropertyKey, unknown>> = {
    name?: string | undefined;
    defaultProps?: DProps | undefined;
    styles?: StylesOptions | undefined;
    render?: React.FC<ComponentInstance<DProps, IProps, ComponentInstance, RData>>;
};
