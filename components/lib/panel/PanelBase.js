import { ObjectUtils } from '../utils/Utils';

export const PanelBase = {
    defaultProps: {
        __TYPE: 'Panel',
        id: null,
        header: null,
        headerTemplate: null,
        toggleable: null,
        style: null,
        className: null,
        collapsed: null,
        expandIcon: null,
        collapseIcon: null,
        icons: null,
        transitionOptions: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, PanelBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, PanelBase.defaultProps)
};
