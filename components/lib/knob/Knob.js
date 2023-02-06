import * as React from 'react';
import { useEventListener } from '../hooks/Hooks';
import { classNames } from '../utils/Utils';
import { KnobBase } from './KnobBase';

const radius = 40;
const midX = 50;
const midY = 50;
const minRadians = (4 * Math.PI) / 3;
const maxRadians = -Math.PI / 3;

export const Knob = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = KnobBase.getProps(inProps);

        const elementRef = React.useRef(null);
        const enabled = !props.disabled && !props.readOnly;

        const [bindWindowMouseMoveListener, unbindWindowMouseMoveListener] = useEventListener({
            target: 'window',
            type: 'mousemove',
            listener: (event) => {
                updateValue(event.offsetX, event.offsetY);
                event.preventDefault();
            },
            when: enabled
        });

        const [bindWindowMouseUpListener, unbindWindowMouseUpListener] = useEventListener({
            target: 'window',
            type: 'mouseup',
            listener: (event) => {
                unbindWindowMouseMoveListener();
                unbindWindowMouseUpListener();
                event.preventDefault();
            },
            when: enabled
        });

        const [bindWindowTouchMoveListener, unbindWindowTouchMoveListener] = useEventListener({
            target: 'window',
            type: 'touchmove',
            listener: (event) => {
                if (event.touches.length === 1) {
                    const rect = elementRef.current.getBoundingClientRect();
                    const touch = event.targetTouches.item(0);
                    const offsetX = touch.clientX - rect.left;
                    const offsetY = touch.clientY - rect.top;

                    updateValue(offsetX, offsetY);
                    event.preventDefault();
                }
            },
            when: enabled
        });

        const [bindWindowTouchEndListener, unbindWindowTouchEndListener] = useEventListener({
            target: 'window',
            type: 'touchend',
            listener: () => {
                unbindWindowTouchMoveListener();
                unbindWindowTouchEndListener();
            },
            when: enabled
        });

        const mapRange = (x, inMin, inMax, outMin, outMax) => ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

        const zeroRadians = () => mapRange(props.min > 0 && props.max > 0 ? props.min : 0, props.min, props.max, minRadians, maxRadians);

        const valueRadians = () => mapRange(props.value, props.min, props.max, minRadians, maxRadians);

        const minX = () => midX + Math.cos(minRadians) * radius;

        const minY = () => midY - Math.sin(minRadians) * radius;

        const maxX = () => midX + Math.cos(maxRadians) * radius;

        const maxY = () => midY - Math.sin(maxRadians) * radius;

        const zeroX = () => midX + Math.cos(zeroRadians()) * radius;

        const zeroY = () => midY - Math.sin(zeroRadians()) * radius;

        const valueX = () => midX + Math.cos(valueRadians()) * radius;

        const valueY = () => midY - Math.sin(valueRadians()) * radius;

        const largeArc = () => (Math.abs(zeroRadians() - valueRadians()) < Math.PI ? 0 : 1);

        const sweep = () => (valueRadians() > zeroRadians() ? 0 : 1);

        const rangePath = `M ${minX()} ${minY()} A ${radius} ${radius} 0 1 1 ${maxX()} ${maxY()}`;

        const valuePath = `M ${zeroX()} ${zeroY()} A ${radius} ${radius} 0 ${largeArc()} ${sweep()} ${valueX()} ${valueY()}`;

        const valueToDisplay = () => props.valueTemplate.replace('{value}', props.value.toString());

        const updateValue = (offsetX, offsetY) => {
            const dx = offsetX - props.size / 2;
            const dy = props.size / 2 - offsetY;
            const angle = Math.atan2(dy, dx);
            const start = -Math.PI / 2 - Math.PI / 6;

            updateModel(angle, start);
        };

        const updateModel = (angle, start) => {
            let mappedValue;

            if (angle > maxRadians) mappedValue = mapRange(angle, minRadians, maxRadians, props.min, props.max);
            else if (angle < start) mappedValue = mapRange(angle + 2 * Math.PI, minRadians, maxRadians, props.min, props.max);
            else return;

            if (props.onChange) {
                props.onChange({
                    value: Math.round((mappedValue - props.min) / props.step) * props.step + props.min
                });
            }
        };

        const onClick = (event) => {
            if (!props.disabled && !props.readOnly) {
                updateValue(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
            }
        };

        const onMouseDown = (event) => {
            bindWindowMouseMoveListener();
            bindWindowMouseUpListener();
            event.preventDefault();
        };

        const onMouseUp = () => {
            unbindWindowMouseMoveListener();
            unbindWindowMouseUpListener();
        };

        const onTouchStart = () => {
            bindWindowTouchMoveListener();
            bindWindowTouchEndListener();
        };

        const onTouchEnd = () => {
            unbindWindowTouchMoveListener();
            unbindWindowTouchEndListener();
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const otherProps = KnobBase.getOtherProps(props);
        const className = classNames(
            'p-knob p-component',
            {
                'p-disabled': props.disabled
            },
            props.className
        );
        const text = props.showValue && (
            <text x={50} y={57} textAnchor={'middle'} fill={props.textColor} className={'p-knob-text'} name={props.name}>
                {valueToDisplay()}
            </text>
        );

        return (
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                <svg viewBox="0 0 100 100" width={props.size} height={props.size} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <path d={rangePath} strokeWidth={props.strokeWidth} stroke={props.rangeColor} className={'p-knob-range'}></path>
                    <path d={valuePath} strokeWidth={props.strokeWidth} stroke={props.valueColor} className={'p-knob-value'}></path>
                    {text}
                </svg>
            </div>
        );
    })
);

Knob.displayName = 'Knob';
