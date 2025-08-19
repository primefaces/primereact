import * as React from 'react';
import { ariaLabel } from '../api/Locale';
import { Checkbox } from '../checkbox/Checkbox';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { IconUtils } from '../utils/Utils';

export const HeaderCheckbox = React.memo((props) => {
    const mergeProps = useMergeProps();
    const getColumnProps = () => ColumnBase.getCProps(props.column);
    const { ptm, ptmo, cx } = props.ptCallbacks;

    const getColumnPTOptions = (key) => {
        const cProps = getColumnProps();

        const columnMetaData = {
            props: cProps,
            parent: props.metaData,
            hostName: props.hostName,
            state: {},
            context: {
                checked: props.checked,
                disabled: props.disabled
            }
        };

        return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
    };

    const onChange = (event) => {
        if (!props.disabled) {
            props.onChange({
                originalEvent: event,
                checked: !props.checked
            });
        }
    };

    const headerCheckboxIconProps = mergeProps(
        {
            className: cx('checkIcon')
        },
        getColumnPTOptions('headerCheckbox.icon')
    );

    const icon = props.checked ? props.checkIcon || <CheckIcon {...headerCheckboxIconProps} /> : null;
    const checkIcon = IconUtils.getJSXIcon(icon, { ...headerCheckboxIconProps }, { props });
    const tabIndex = props.disabled ? null : 0;

    const headerCheckboxProps = {
        role: 'checkbox',
        'aria-label': props.checked ? ariaLabel('selectAll') : ariaLabel('unselectAll'),
        tabIndex: tabIndex,
        onChange: onChange,
        icon: checkIcon,
        checked: props.checked,
        disabled: props.disabled,
        unstyled: props.unstyled,
        pt: getColumnPTOptions('headerCheckbox')
    };

    return <Checkbox {...headerCheckboxProps} />;
});

HeaderCheckbox.displayName = 'HeaderCheckbox';
