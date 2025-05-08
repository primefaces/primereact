import { InComponentInstance } from '.';
import { StylesOptions } from '../styles';

export interface IconProps {
    spin?: boolean;
}

export declare type withBaseIconOptions<IProps, Exposes> = {
    name?: string | undefined;
    render?: React.FC<InComponentInstance<IconProps, IProps, Record<PropertyKey, unknown>, Exposes>>;
};

export declare type withIconOptions<IProps, DProps, Exposes> = {
    name?: string | undefined;
    defaultProps?: DProps | undefined;
    styles?: StylesOptions | undefined;
    render?: React.FC<InComponentInstance<DProps, IProps, Record<PropertyKey, unknown>, Exposes>>;
};
