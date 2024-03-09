import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { IconUtils } from '../utils/Utils';
import { ariaLabel } from '../api/Locale';

export const HeaderCheckbox = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const mergeProps = useMergeProps();
    const getColumnProps = () => ColumnBase.getCProps(props.column);
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnPTOptions = (key) => {
        const cProps = getColumnProps();

        const columnMetaData = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            state: {
                focused: focusedState
            },
            context: {
                checked: props.checked,
                disabled: props.disabled
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
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

            props.onChange({
                originalEvent: event,
                checked: !props.checked
            });
        }
    };

    const onKeyDown = (event) => {
        if (event.code === 'Space' || event.key === ' ') {
            // event.key is for Android support
            onClick(event);
            event.preventDefault();
        }
    };

    const headerCheckboxIconProps = mergeProps(
        {
            className: cx('headerCheckboxIcon')
        },
        getColumnPTOptions('headerCheckboxIcon')
    );
    const icon = props.checked ? props.checkIcon || <CheckIcon {...headerCheckboxIconProps} /> : null;
    const checkIcon = IconUtils.getJSXIcon(icon, { ...headerCheckboxIconProps }, { props });
    const tabIndex = props.disabled ? null : 0;
    const headerCheckboxWrapperProps = mergeProps(
        {
            className: cx('headerCheckboxWrapper'),
            onClick: (e) => onClick(e)
        },
        getColumnPTOptions('headerCheckboxWrapper')
    );

    const headerCheckboxProps = mergeProps(
        {
            className: cx('headerCheckbox', { headerProps: props, focusedState }),
            role: 'checkbox',
            'aria-checked': props.checked,
            'aria-label': props.checked ? ariaLabel('selectAll') : ariaLabel('unselectAll'),
            tabIndex: tabIndex,
            onFocus: (e) => onFocus(e),
            onBlur: (e) => onBlur(e),
            onKeyDown: (e) => onKeyDown(e)
        },
        getColumnPTOptions('headerCheckbox')
    );

    return (
        <div {...headerCheckboxWrapperProps}>
            <div {...headerCheckboxProps}>{checkIcon}</div>
        </div>
    );
});

HeaderCheckbox.displayName = 'HeaderCheckbox';
