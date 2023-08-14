import { ComponentBase } from '../componentbase/ComponentBase';

export const RatingBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Rating',
        id: null,
        value: null,
        disabled: false,
        readOnly: false,
        stars: 5,
        cancel: true,
        style: null,
        className: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        onIcon: null,
        offIcon: null,
        cancelIcon: null,
        cancelIconProps: null,
        onIconProps: null,
        offIconProps: null,
        children: undefined
    }
});
