import { ObjectUtils } from '../utils/Utils';

export const InplaceDisplayBase = {
    defaultProps: {
        __TYPE: 'InplaceDisplay',
        children: undefined
    },
    getOtherProps: (display) => ObjectUtils.getComponentDiffProps(display, InplaceDisplayBase.defaultProps)
};

export const InplaceContentBase = {
    defaultProps: {
        __TYPE: 'InplaceContent',
        children: undefined
    },
    getOtherProps: (content) => ObjectUtils.getComponentDiffProps(content, InplaceContentBase.defaultProps)
};

export const InplaceBase = {
    defaultProps: {
        __TYPE: 'Inplace',
        style: null,
        className: null,
        active: false,
        closable: false,
        disabled: false,
        tabIndex: 0,
        ariaLabel: null,
        onOpen: null,
        onClose: null,
        onToggle: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, InplaceBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InplaceBase.defaultProps)
};
