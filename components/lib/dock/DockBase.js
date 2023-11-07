import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: 'p-dock-action-icon',
    action: ({ disabled }) => classNames('p-dock-action', { 'p-disabled': disabled }),
    menuitem: ({ currentIndexState, index }) =>
        classNames('p-dock-item', {
            'p-dock-item-second-prev': currentIndexState - 2 === index,
            'p-dock-item-prev': currentIndexState - 1 === index,
            'p-dock-item-current': currentIndexState === index,
            'p-dock-item-next': currentIndexState + 1 === index,
            'p-dock-item-second-next': currentIndexState + 2 === index
        }),
    header: 'p-dock-header',
    menu: 'p-dock-list',
    footer: 'p-dock-footer',
    root: ({ props }) =>
        classNames(`p-dock p-component p-dock-${props.position}`, {
            'p-dock-magnification': props.magnification
        }),
    container: 'p-dock-container'
};

const styles = `
@layer primereact {
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }
    
    .p-dock-container {
        display: flex;
        pointer-events: auto;
    }
    
    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
    }
    
    .p-dock-magnification .p-dock-item {
        transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }
    
    .p-dock-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
    }
    
    .p-dock-magnification .p-dock-item-second-prev,
    .p-dock-magnification .p-dock-item-second-next {
        transform: scale(1.2);
    }
    
    .p-dock-magnification .p-dock-item-prev,
    .p-dock-magnification .p-dock-item-next {
        transform: scale(1.4);
    }
    
    .p-dock-magnification .p-dock-item-current {
        transform: scale(1.6);
        z-index: 1;
    }
    
    /* Position */
    /* top */
    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }
    
    .p-dock-top.p-dock-magnification .p-dock-item {
        transform-origin: center top;
    }
    
    .p-dock-top .p-dock-container {
        flex-direction: column-reverse;
    }
    
    /* bottom */
    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }
    
    .p-dock-bottom.p-dock-magnification .p-dock-item {
        transform-origin: center bottom;
    }
    
    .p-dock-bottom .p-dock-container {
        flex-direction: column;
    }
    
    /* right */
    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }
    
    .p-dock-right.p-dock-magnification .p-dock-item {
        transform-origin: center right;
    }
    
    .p-dock-right .p-dock-list {
        flex-direction: column;
    }
    
    /* left */
    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }
    
    .p-dock-left.p-dock-magnification .p-dock-item {
        transform-origin: center left;
    }
    
    .p-dock-left .p-dock-list {
        flex-direction: column;
    }
    
    .p-dock-left .p-dock-container {
        flex-direction: row-reverse;
    }
}
`;

export const DockBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Dock',
        id: null,
        style: null,
        className: null,
        model: null,
        position: 'bottom',
        magnification: true,
        header: null,
        footer: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
