export const globalProps = {
    pIf: true,
    pt: undefined,
    ptOptions: undefined,
    unstyled: undefined,
    dt: undefined,
    template: undefined,
    children: undefined
};

export const withGlobalProps = (defaultProps: P) => mergeProps(globalProps, defaultProps);
