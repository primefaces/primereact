import * as React from 'react';
import { useEventListener } from '../hooks/Hooks';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const Slider = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const handleIndex = React.useRef(0);
    const sliderHandleClick = React.useRef(false);
    const dragging = React.useRef(false);
    const initX = React.useRef(0);
    const initY = React.useRef(0);
    const barWidth = React.useRef(0);
    const barHeight = React.useRef(0);
    const value = props.range ? props.value || [0, 100] : props.value || 0;
    const horizontal = props.orientation === 'horizontal';
    const vertical = props.orientation === 'vertical';

    const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({ type: 'mousemove', listener: (event) => onDrag(event) });
    const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({ type: 'mouseup', listener: (event) => onDragEnd(event) });
    const [bindDocumentTouchMoveListener, unbindDocumentTouchMoveListener] = useEventListener({ type: 'touchmove', listener: (event) => onDrag(event) });
    const [bindDocumentTouchEndListener, unbindDocumentTouchEndListener] = useEventListener({ type: 'touchend', listener: (event) => onDragEnd(event) });

    const spin = (event, dir) => {
        const val = props.range ? value[handleIndex.current] : value;
        const step = (props.step || 1) * dir;

        updateValue(event, val + step);
        event.preventDefault();
    }

    const onDragStart = (event, index) => {
        if (props.disabled) {
            return;
        }

        dragging.current = true;
        updateDomData();
        sliderHandleClick.current = true;
        handleIndex.current = index;
        //event.preventDefault();
    }

    const onDrag = (event) => {
        if (dragging.current) {
            setValue(event);
            event.preventDefault();
        }
    }

    const onDragEnd = (event) => {
        if (dragging.current) {
            dragging.current = false;

            props.onSlideEnd && props.onSlideEnd({ originalEvent: event, value: props.value });

            unbindDocumentMouseMoveListener();
            unbindDocumentMouseUpListener();
            unbindDocumentTouchMoveListener();
            unbindDocumentTouchEndListener();
        }
    }

    const onMouseDown = (event, index) => {
        bindDocumentMouseMoveListener();
        bindDocumentMouseUpListener();
        onDragStart(event, index);
    }

    const onTouchStart = (event, index) => {
        bindDocumentTouchMoveListener();
        bindDocumentTouchEndListener();
        onDragStart(event, index);
    }

    const onKeyDown = (event, index) => {
        if (props.disabled) {
            return;
        }

        handleIndex.current = index;
        const key = event.key;

        if (key === 'ArrowRight' || key === 'ArrowUp') {
            spin(event, 1);
        }
        else if (key === 'ArrowLeft' || key === 'ArrowDown') {
            spin(event, -1);
        }
    }

    const onBarClick = (event) => {
        if (props.disabled) {
            return;
        }

        if (!sliderHandleClick.current) {
            updateDomData();
            const value = setValue(event);

            props.onSlideEnd && props.onSlideEnd({ originalEvent: event, value });
        }

        sliderHandleClick.current = false;
    }

    const updateDomData = () => {
        const rect = elementRef.current.getBoundingClientRect();
        initX.current = rect.left + DomHandler.getWindowScrollLeft();
        initY.current = rect.top + DomHandler.getWindowScrollTop();
        barWidth.current = elementRef.current.offsetWidth;
        barHeight.current = elementRef.current.offsetHeight;
    }

    const setValue = (event) => {
        let handleValue;
        let pageX = event.touches ? event.touches[0].pageX : event.pageX;
        let pageY = event.touches ? event.touches[0].pageY : event.pageY;

        if (horizontal)
            handleValue = ((pageX - initX.current) * 100) / (barWidth.current);
        else
            handleValue = (((initY.current + barHeight.current) - pageY) * 100) / (barHeight.current);

        let newValue = (props.max - props.min) * (handleValue / 100) + props.min;

        if (props.step) {
            const oldValue = props.range ? value[handleIndex.current] : value;
            const diff = (newValue - oldValue);

            if (diff < 0)
                newValue = oldValue + Math.ceil(newValue / props.step - oldValue / props.step) * props.step;
            else if (diff > 0)
                newValue = oldValue + Math.floor(newValue / props.step - oldValue / props.step) * props.step;
        }
        else {
            newValue = Math.floor(newValue);
        }

        return updateValue(event, newValue);
    }

    const updateValue = (event, val) => {
        let parsedValue = parseFloat(val.toFixed(10));
        let newValue = parsedValue;

        if (props.range) {
            if (handleIndex.current === 0) {
                if (parsedValue < props.min)
                    parsedValue = props.min;
                else if (parsedValue > value[1])
                    parsedValue = value[1];
            }
            else {
                if (parsedValue > props.max)
                    parsedValue = props.max;
                else if (parsedValue < value[0])
                    parsedValue = value[0];
            }

            newValue = [...value];
            newValue[handleIndex.current] = parsedValue;

            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: newValue
                });
            }
        }
        else {
            if (parsedValue < props.min)
                parsedValue = props.min;
            else if (parsedValue > props.max)
                parsedValue = props.max;

            newValue = parsedValue;

            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: newValue
                });
            }
        }

        return newValue;
    }

    const createHandle = (leftValue, bottomValue, index) => {
        const style = {
            transition: dragging.current ? 'none' : null,
            left: leftValue !== null && (leftValue + '%'),
            bottom: bottomValue && (bottomValue + '%')
        };
        const className = classNames('p-slider-handle', {
            'p-slider-handle-start': index === 0,
            'p-slider-handle-end': index === 1,
            'p-slider-handle-active': handleIndex.current === index
        });

        return (
            <span className={className} style={style} tabIndex={props.tabIndex} role="slider"
                onMouseDown={(event) => onMouseDown(event, index)} onTouchStart={(event) => onTouchStart(event, index)} onKeyDown={(event) => onKeyDown(event, index)}
                aria-valuemin={props.min} aria-valuemax={props.max} aria-valuenow={leftValue || bottomValue} aria-labelledby={props['aria-labelledby']} aria-label={props['aria-label']}
                aria-orientation={props.orientation}></span>
        )
    }

    const createRangeSlider = () => {
        const handleValueStart = (value[0] < props.min ? 0 : value[0] - props.min) * 100 / (props.max - props.min);
        const handleValueEnd = (value[1] > props.max ? 100 : value[1] - props.min) * 100 / (props.max - props.min);
        const rangeStartHandle = horizontal ? createHandle(handleValueStart, null, 0) : createHandle(null, handleValueStart, 0);
        const rangeEndHandle = horizontal ? createHandle(handleValueEnd, null, 1) : createHandle(null, handleValueEnd, 1);
        const rangeStyle = horizontal ? { left: handleValueStart + '%', width: (handleValueEnd - handleValueStart) + '%' } : { bottom: handleValueStart + '%', height: (handleValueEnd - handleValueStart) + '%' };

        return (
            <>
                <span className="p-slider-range" style={rangeStyle}></span>
                {rangeStartHandle}
                {rangeEndHandle}
            </>
        )
    }

    const createSingleSlider = () => {
        let handleValue;

        if (value < props.min)
            handleValue = 0;
        else if (value > props.max)
            handleValue = 100;
        else
            handleValue = (value - props.min) * 100 / (props.max - props.min);

        const rangeStyle = horizontal ? { width: handleValue + '%' } : { height: handleValue + '%' };
        const handle = horizontal ? createHandle(handleValue, null, null) : createHandle(null, handleValue, null);

        return (
            <>
                <span className="p-slider-range" style={rangeStyle}></span>
                {handle}
            </>
        )
    }

    const otherProps = ObjectUtils.findDiffKeys(props, Slider.defaultProps);
    const className = classNames('p-slider p-component', props.className, {
        'p-disabled': props.disabled,
        'p-slider-horizontal': horizontal,
        'p-slider-vertical': vertical
    });
    const content = props.range ? createRangeSlider() : createSingleSlider();

    return (
        <div ref={elementRef} id={props.id} style={props.style} className={className} {...otherProps} onClick={onBarClick}>
            {content}
        </div>
    )
}));

Slider.displayName = 'Slider';
Slider.defaultProps = {
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
    'aria-label': null,
    'aria-labelledby': null
}
