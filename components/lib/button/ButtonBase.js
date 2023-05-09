import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
