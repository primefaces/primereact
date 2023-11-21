import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`;

const classes = {
    root: 'p-ink'
};

export const RippleBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Ripple',
        children: undefined
    },
    css: {
        styles,
        classes
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, RippleBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RippleBase.defaultProps)
});
