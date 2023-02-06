import { ObjectUtils } from '../utils/Utils';

export const ToolbarBase = {
    defaultProps: {
        __TYPE: 'Toolbar',
        id: null,
        style: null,
        className: null,
        left: null,
        right: null,
        start: null,
        center: null,
        end: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ToolbarBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ToolbarBase.defaultProps)
};
