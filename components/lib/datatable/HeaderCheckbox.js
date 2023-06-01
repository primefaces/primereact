import * as React from 'react';
import { IconUtils, classNames, mergeProps } from '../utils/Utils';
import { CheckIcon } from '../icons/check';
import { ColumnBase } from '../column/ColumnBase';

export const HeaderCheckbox = React.memo((props) => {
    const [focusedState, setFocusedState] = React.useState(false);
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

    const boxClassName = classNames('p-checkbox-box p-component', {
        'p-highlight': props.checked,
        'p-disabled': props.disabled,
        'p-focus': focusedState
    });
    const iconClassName = 'p-checkbox-icon';
    const headerCheckboxIconProps = mergeProps(
        {
            className: iconClassName
        },
        getColumnPTOptions('headerCheckboxIcon')
    );
    const icon = props.checked ? props.checkIcon || <CheckIcon {...headerCheckboxIconProps} /> : null;
    const checkIcon = IconUtils.getJSXIcon(icon, { ...headerCheckboxIconProps }, { props });
    const tabIndex = props.disabled ? null : 0;
    const headerCheckboxWrapperProps = mergeProps(
        {
            className: 'p-checkbox p-component',
            onClick: (e) => onClick(e)
        },
        getColumnPTOptions('headerCheckboxWrapper')
    );

    const headerCheckboxProps = mergeProps(
        {
            className: boxClassName,
            role: 'checkbox',
            'aria-checked': props.checked,
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
