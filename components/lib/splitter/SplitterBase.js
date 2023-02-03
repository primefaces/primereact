import { ObjectUtils } from '../utils/Utils';

export const SplitterDefaultProps = {
    __TYPE: 'Splitter',
    className: null,
    gutterSize: 4,
    id: null,
    layout: 'horizontal',
    onResizeEnd: null,
    stateKey: null,
    stateStorage: 'session',
    style: null
};

export const SplitterPanelDefaultProps = {
    __TYPE: 'SplitterPanel',
    className: null,
    minSize: null,
    size: null,
    style: null
};

export const getPanelProp = (panel, name) => ObjectUtils.getProp(panel, name, SplitterPanelDefaultProps);
