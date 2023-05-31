import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

export const KnobBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Knob',
        id: null,
        style: null,
        className: null,
        value: null,
        size: 100,
        disabled: false,
        readOnly: false,
        showValue: true,
        step: 1,
        min: 0,
        max: 100,
        strokeWidth: 14,
        name: null,
        valueColor: 'var(--primary-color, Black)',
        rangeColor: 'var(--surface-border, LightGray)',
        textColor: 'var(--text-color-secondary, Black)',
        valueTemplate: '{value}',
        onChange: null,
        children: undefined
    }
});
