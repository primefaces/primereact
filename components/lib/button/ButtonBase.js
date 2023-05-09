import { ComponentBase } from '../componentbase/ComponentBase';

export const ButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Button',
        label: null,
        icon: null,
        iconPos: 'left',
        badge: null,
        severity: null,
        rounded: false,
        raised: false,
        outlined: false,
        text: false,
        link: false,
        badgeClassName: null,
        tooltip: null,
        size: null,
        tooltipOptions: null,
        disabled: false,
        loading: false,
        loadingIcon: null,
        visible: true,
        children: undefined
    }
});
