import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: ({ props }) =>
        classNames('p-button-icon p-c', {
            [`p-button-icon-${props.iconPos}`]: props.label
        }),
    loadingIcon: ({ props, className }) =>
        classNames(className, {
            'p-button-loading-icon': props.loading
        }),
    label: 'p-button-label p-c',
    badge: ({ props }) => classNames('p-badge', props.badgeClassName),
    root: ({ props, size, disabled }) =>
        classNames('p-button p-component', {
            'p-button-icon-only': (props.icon || props.loading) && !props.label && !props.children,
            'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'p-disabled': disabled,
            'p-button-loading': props.loading,
            'p-button-outlined': props.outlined,
            'p-button-raised': props.raised,
            'p-button-link': props.link,
            'p-button-text': props.text,
            'p-button-rounded': props.rounded,
            'p-button-loading-label-only': props.loading && !props.icon && props.label,
            [`p-button-loading-${props.iconPos}`]: props.loading && props.label,
            [`p-button-${size}`]: size,
            [`p-button-${props.severity}`]: props.severity
        })
};

const styles = `
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`;

export const ButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Button',
        badge: null,
        badgeClassName: null,
        className: null,
        children: undefined,
        disabled: false,
        icon: null,
        iconPos: 'left',
        label: null,
        link: false,
        loading: false,
        loadingIcon: null,
        outlined: false,
        raised: false,
        rounded: false,
        severity: null,
        size: null,
        text: false,
        tooltip: null,
        tooltipOptions: null,
        visible: true
    },
    css: {
        classes,
        styles
    }
});
