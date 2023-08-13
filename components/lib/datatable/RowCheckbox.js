import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { CheckIcon } from '../icons/check';
import { IconUtils, mergeProps } from '../utils/Utils';

export const RowCheckbox = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const getColumnProps = () => ColumnBase.getCProps(props.column);
    const { ptmo, cx } = props.ptCallbacks;

    const getColumnPTOptions = (key) => {
        return ptmo(ColumnBase.getCProp(props.column, 'pt'), key, {
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
            setFocusedState(true);

            props.onChange(event);
            event.stopPropagation();
        }
    };

    const onKeyDown = (event) => {
        if (event.code === 'Space' || event.key === ' ') {
            // event.key is for Android support
            onClick(event);
            event.preventDefault();
        }
    };

    const checkboxIconProps = mergeProps(
        {
            className: cx('checkboxIcon')
        },
        getColumnPTOptions('checkboxIcon')
    );
    const icon = props.checked ? props.checkIcon || <CheckIcon {...checkboxIconProps} /> : null;
    const checkIcon = IconUtils.getJSXIcon(icon, { ...checkboxIconProps }, { props });
    const tabIndex = props.disabled ? null : '0';
    const checkboxWrapperProps = mergeProps(
        {
            className: cx('checkboxWrapper', { rowProps: props, focusedState }),
            onClick: (e) => onClick(e)
        },
        getColumnPTOptions('checkboxWrapper')
    );

    const checkboxProps = mergeProps(
        {
            className: cx('checkbox', { rowProps: props, focusedState }),
            role: 'checkbox',
            'aria-checked': props.checked,
            tabIndex: tabIndex,
            onKeyDown: (e) => onKeyDown(e),
            onFocus: (e) => onFocus(e),
            onBlur: (e) => onBlur(e),
            'aria-label': props.ariaLabel
        },
        getColumnPTOptions('checkbox')
    );

    return (
        <div {...checkboxWrapperProps}>
            <div {...checkboxProps}>{checkIcon}</div>
        </div>
    );
});

RowCheckbox.displayName = 'RowCheckbox';
