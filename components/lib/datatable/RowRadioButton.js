import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { DomHandler } from '../utils/Utils';

export const RowRadioButton = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const inputRef = React.useRef(null);
    const mergeProps = useMergeProps();
    const getColumnProps = () => ColumnBase.getCProps(props.column);
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnPTOptions = (key) => {
        const columnMetaData = {
            props: getColumnProps(),
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                focused: focusedState
            },
            context: {
                index: props.tabIndex,
                checked: props.checked,
                disabled: props.disabled
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(getColumnProps(), key, columnMetaData));
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

    const name = `${props.tableSelector}_dt_radio`;
    const radiobuttonWrapperProps = mergeProps(
        {
            className: cx('radiobuttonWrapper', { rowProps: props, focusedState })
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
            className: cx('radiobutton', { rowProps: props, focusedState }),
            onClick: (e) => onClick(e),
            role: 'radio',
            'aria-checked': props.checked
        },
        getColumnPTOptions('radiobutton')
    );

    const radiobuttonIconProps = mergeProps(
        {
            className: cx('radiobuttonIcon')
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
