import * as React from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { IconUtils } from '../utils/Utils';

export const RowCheckbox = React.memo((props) => {
    const mergeProps = useMergeProps();
    const getColumnProps = () => ColumnBase.getCProps(props.column);
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnPTOptions = (key) => {
        const columnMetaData = {
            props: getColumnProps(),
            parent: props.metaData,
            hostName: props.hostName,
            state: {},
            context: {
                index: props.tabIndex,
                checked: props.checked,
                disabled: props.disabled
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(getColumnProps(), key, columnMetaData));
    };

    const onChange = (event) => {
        if (!props.disabled) {
            props.onChange(event);
        }
    };

    const checkboxIconProps = mergeProps(
        {
            className: cx('checkIcon')
        },
        getColumnPTOptions('rowCheckbox.icon')
    );
    const icon = props.checked ? props.checkIcon || <CheckIcon {...checkboxIconProps} /> : null;
    const checkIcon = IconUtils.getJSXIcon(icon, { ...checkboxIconProps }, { props });
    const tabIndex = props.disabled ? null : '0';

    const checkboxProps = {
        role: 'checkbox',
        tabIndex: tabIndex,
        onChange: onChange,
        'aria-label': props.ariaLabel,
        checked: props.checked,
        icon: checkIcon,
        disabled: props.disabled,
        unstyled: props.unstyled,
        pt: getColumnPTOptions('rowCheckbox')
    };

    return <Checkbox {...checkboxProps} />;
});

RowCheckbox.displayName = 'RowCheckbox';
