import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

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
        tabIndex: 0,
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
    },
    css: {
        classes: {
            range: 'p-knob-range',
            value: 'p-knob-value',
            label: 'p-knob-text',
            root: ({ props }) =>
                classNames(
                    'p-knob p-component',
                    {
                        'p-disabled': props.disabled
                    },
                    props.className
                )
        },
        styles: `
        @keyframes dash-frame {
            100% {
                stroke-dashoffset: 0;
            }
        }
        @layer primereact {
            .p-knob-range {
                fill: none;
                transition: stroke .1s ease-in;
            }
            .p-knob-value {
                animation-name: dash-frame;
                animation-fill-mode: forwards;
                fill: none;
            }
            .p-knob-text {
                font-size: 1.3rem;
                text-align: center;
            }
        }
        `
    }
});
