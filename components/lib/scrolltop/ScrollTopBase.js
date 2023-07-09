import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

export const ScrollTopBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ScrollTop',
        target: 'window',
        threshold: 400,
        icon: null,
        behavior: 'smooth',
        className: null,
        style: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    css: {
        classes: {
            root: ({ props }) =>
                classNames(
                    'p-scrolltop p-link p-component',
                    {
                        'p-scrolltop-sticky': props.target !== 'window'
                    },
                    props.className
                ),
            icon: 'p-scrolltop-icon'
        },
        styles: `
        .p-scrolltop {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .p-scrolltop-sticky {
            position: sticky;
        }
        
        .p-scrolltop-sticky.p-link {
            margin-left: auto;
        }
        
        .p-scrolltop-helper {
            display: none !important;
        }
        
        .p-scrolltop-enter {
            opacity: 0;
        }
        
        .p-scrolltop-enter-active {
            opacity: 1;
            transition: opacity .15s;
        }
        
        .p-scrolltop-exit {
            opacity: 1;
        }
        
        .p-scrolltop-exit-active {
            opacity: 0;
            transition: opacity .15s;
        }
        `
    }
});
