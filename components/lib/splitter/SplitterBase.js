import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

export const SplitterBase = ComponentBase.extend({
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
    }
});

export const SplitterPanelBase = ComponentBase.extend({
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
});
