import { ObjectUtils } from '../utils/Utils';

export const PanelMenuBase = {
    defaultProps: {
        __TYPE: 'Panel',
        id: null,
        model: null,
        style: null,
        className: null,
        multiple: false,
        transitionOptions: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, PanelMenuBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, PanelMenuBase.defaultProps)
};
