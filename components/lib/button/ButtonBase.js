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
            [`p-button-${props.severity}`]: props.severity,
            'p-button-plain': props.plain
        })
};

export const ButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Button',
        __parentMetadata: null,
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
        plain: false,
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
        classes
    }
});
