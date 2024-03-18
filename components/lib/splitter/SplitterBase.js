import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames(`p-splitter p-component p-splitter-${props.layout}`),
    gutter: 'p-splitter-gutter',
    gutterHandler: 'p-splitter-gutter-handle',
    panel: {
        root: 'p-splitter-panel'
    }
};

const styles = `
@layer primereact {
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-panel {
        flex-grow: 1;
    }

    .p-splitter-panel-nested {
        display: flex;
    }

    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: col-resize;
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: 24px;
        width: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: 24px;
        height: 100%;
    }
}

`;

export const SplitterBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Splitter',
        className: null,
        gutterSize: 4,
        id: null,
        step: 5,
        layout: 'horizontal',
        onResizeEnd: null,
        stateKey: null,
        stateStorage: 'session',
        style: null,
        children: undefined
    },
    css: {
        classes,
        styles
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
