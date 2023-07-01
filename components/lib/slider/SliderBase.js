import { ComponentBase } from '../componentbase/ComponentBase';

export const SliderBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Slider',
        id: null,
        value: null,
        min: 0,
        max: 100,
        orientation: 'horizontal',
        step: null,
        range: false,
        style: null,
        className: null,
        disabled: false,
        tabIndex: 0,
        onChange: null,
        onSlideEnd: null,
        children: undefined
    }
});
