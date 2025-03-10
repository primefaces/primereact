import { useProps } from '@primereact/hooks';

export const getCurrentInstance = (inInstance, inProps, defaultProps) => {
    const { props, attrs } = useProps(inProps, defaultProps);

    return {
        ...inInstance,
        props,
        attrs
    };
};
