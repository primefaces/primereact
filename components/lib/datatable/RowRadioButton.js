import * as React from 'react';
import { ColumnBase } from '../column/ColumnBase';
import { useMergeProps } from '../hooks/Hooks';
import { RadioButton } from '../radioButton/RadioButton';

export const RowRadioButton = React.memo((props) => {
    const mergeProps = useMergeProps();
    const getColumnProps = () => ColumnBase.getCProps(props.column);
    const { ptm, ptmo } = props.ptCallbacks;

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

    const radioButtonProps = mergeProps(
        {
            role: 'radio',
            'aria-checked': props.checked,
            checked: props.checked,
            disabled: props.disabled,
            name: `${props.tableSelector}_dt_radio`,
            onChange: onChange
        },
        getColumnPTOptions('radiobutton')
    );

    return <RadioButton {...radioButtonProps} />;
});

RowRadioButton.displayName = 'RowRadioButton';
