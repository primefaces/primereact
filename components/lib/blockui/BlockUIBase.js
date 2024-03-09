import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames('p-blockui-container', props.containerClassName),
    mask: ({ props }) =>
        classNames('p-blockui p-component-overlay p-component-overlay-enter', {
            'p-blockui-document': props.fullScreen
        })
};

const styles = `
@layer primereact {
    .p-blockui-container {
        position: relative;
    }
    
    .p-blockui {
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-blockui.p-component-overlay {
        position: absolute;
    }
    
    .p-blockui-document.p-component-overlay {
        position: fixed;
    }
}
`;

export const BlockUIBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'BlockUI',
        autoZIndex: true,
        baseZIndex: 0,
        blocked: false,
        className: null,
        containerClassName: null,
        containerStyle: null,
        fullScreen: false,
        id: null,
        onBlocked: null,
        onUnblocked: null,
        style: null,
        template: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
