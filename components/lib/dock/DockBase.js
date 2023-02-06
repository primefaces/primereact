import { ObjectUtils } from '../utils/Utils';

export const DockBase = {
    defaultProps: {
        __TYPE: 'Dock',
        id: null,
        style: null,
        className: null,
        model: null,
        position: 'bottom',
        magnification: true,
        header: null,
        footer: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, DockBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, DockBase.defaultProps)
};
