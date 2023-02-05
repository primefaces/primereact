import { ObjectUtils } from '../utils/Utils';

export const SplitterBase = {
    defaultProps: {
        __TYPE: 'Splitter',
        className: null,
        gutterSize: 4,
        id: null,
        layout: 'horizontal',
        onResizeEnd: null,
        stateKey: null,
        stateStorage: 'session',
        style: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, SplitterBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, SplitterBase.defaultProps)
};

export const SplitterPanelBase = {
    defaultProps: {
        __TYPE: 'SplitterPanel',
        className: null,
        minSize: null,
        size: null,
        style: null,
        children: undefined
    },
    getCProps: (panel) => ObjectUtils.getComponentProps(panel, SplitterPanelBase.defaultProps),
    getCOtherProps: (panel) => ObjectUtils.getComponentDiffProps(panel, SplitterPanelBase.defaultProps),
    getCProp: (panel, name) => ObjectUtils.getComponentProp(panel, name, SplitterPanelBase.defaultProps)
};
