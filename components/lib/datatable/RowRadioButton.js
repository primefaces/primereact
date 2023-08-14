import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { classNames, DomHandler, mergeProps } from '../utils/Utils';

export const RowRadioButton = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const inputRef = React.useRef(null);
    const getColumnProps = () => ColumnBase.getCProps(props.column);

    const getColumnPTOptions = (key) => {
        return props.ptCallbacks.ptmo(ColumnBase.getCProp(props.column, 'pt'), key, {
            props: getColumnProps(),
            parent: props.metaData,
            context: {
                checked: props.checked,
                disabled: props.disabled
            },
            state: {
                focused: focusedState
            }
        });
    };

    const onFocus = () => {
        setFocusedState(true);
    };

    const onBlur = () => {
        setFocusedState(false);
    };

    const onClick = (event) => {
        if (!props.disabled) {
            props.onChange(event);

            DomHandler.focus(inputRef.current);
        }
    };

    const onKeyDown = (event) => {
        if (event.code === 'Space' || event.key === ' ') {
            // event.key is for Android support
            onClick(event);
            event.preventDefault();
        }
    };

    const onChange = (event) => {
        onClick(event);
    };

    const className = classNames('p-radiobutton p-component', { 'p-radiobutton-focused': focusedState, 'p-disabled': props.disabled });
    const boxClassName = classNames('p-radiobutton-box p-component', { 'p-highlight': props.checked, 'p-focus': focusedState });
    const name = `${props.tableSelector}_dt_radio`;
    const radiobuttonWrapperProps = mergeProps(
        {
            className
        },
        getColumnPTOptions('radiobuttonWrapper')
    );
    const hiddenInputWrapperProps = mergeProps(
        {
            className: 'p-hidden-accessible'
        },
        getColumnPTOptions('hiddenInputWrapper')
    );

    const hiddenInputProps = mergeProps(
        {
            name,
            type: 'radio',
            checked: props.checked,
            onFocus: (e) => onFocus(e),
            onBlur: (e) => onBlur(e),
            onChange: (e) => onChange(e),
            onKeyDown: (e) => onKeyDown(e),
            'aria-label': props.ariaLabel
        },
        getColumnPTOptions('hiddenInput')
    );

    const radiobuttonProps = mergeProps(
        {
            className: boxClassName,
            onClick: (e) => onClick(e),
            role: 'radio',
            'aria-checked': props.checked
        },
        getColumnPTOptions('radiobutton')
    );

    const radiobuttonIconProps = mergeProps(
        {
            className: 'p-radiobutton-icon'
        },
        getColumnPTOptions('radiobuttonIcon')
    );

    return (
        <div {...radiobuttonWrapperProps}>
            <div {...hiddenInputWrapperProps}>
                <input ref={inputRef} {...hiddenInputProps} />
            </div>
            <div {...radiobuttonProps}>
                <div {...radiobuttonIconProps}></div>
            </div>
        </div>
    );
});

RowRadioButton.displayName = 'RowRadioButton';
