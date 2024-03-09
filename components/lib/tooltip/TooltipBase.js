import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ positionState, classNameState }) =>
        classNames(
            'p-tooltip p-component',
            {
                [`p-tooltip-${positionState}`]: true
            },
            classNameState
        ),
    arrow: 'p-tooltip-arrow',
    text: 'p-tooltip-text'
};

const inlineStyles = {
    arrow: ({ context }) => ({
        top: context.bottom ? '0' : context.right || context.left || (!context.right && !context.left && !context.top && !context.bottom) ? '50%' : null,
        bottom: context.top ? '0' : null,
        left: context.right || (!context.right && !context.left && !context.top && !context.bottom) ? '0' : context.top || context.bottom ? '50%' : null,
        right: context.left ? '0' : null
    })
};

const styles = `
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`;

export const TooltipBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Tooltip',
        appendTo: null,
        at: null,
        autoHide: true,
        autoZIndex: true,
        baseZIndex: 0,
        className: null,
        content: null,
        disabled: false,
        event: null,
        hideDelay: 0,
        hideEvent: 'mouseleave',
        id: null,
        mouseTrack: false,
        mouseTrackLeft: 5,
        mouseTrackTop: 5,
        my: null,
        onBeforeHide: null,
        onBeforeShow: null,
        onHide: null,
        onShow: null,
        position: 'right',
        showDelay: 0,
        showEvent: 'mouseenter',
        showOnDisabled: false,
        style: null,
        target: null,
        updateDelay: 0,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
