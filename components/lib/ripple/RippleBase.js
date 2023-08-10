import { ObjectUtils } from '../utils/Utils';

const styles = `
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
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`;

export const RippleBase = {
    defaultProps: {
        __TYPE: 'Ripple',
        children: undefined
    },
    css: {
        styles
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, RippleBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RippleBase.defaultProps)
};
