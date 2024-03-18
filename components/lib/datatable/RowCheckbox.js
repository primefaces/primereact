import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { IconUtils } from '../utils/Utils';

export const RowCheckbox = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
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
            setFocusedState(true);

            props.onChange(event);
            event.preventDefault();
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
