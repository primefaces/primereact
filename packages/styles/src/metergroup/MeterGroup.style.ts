import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/metergroup';

export const classes = {
    root: ({ props }) => [
        'p-metergroup p-component',
        {
            'p-metergroup-horizontal': props.orientation === 'horizontal',
            'p-metergroup-vertical': props.orientation === 'vertical'
        }
    ],
    meters: 'p-metergroup-meters',
    meter: 'p-metergroup-meter',
    labelList: ({ orientation }) => [
        'p-metergroup-label-list',
        {
            'p-metergroup-label-list-horizontal': orientation === 'horizontal',
            'p-metergroup-label-list-vertical': orientation === 'vertical'
        }
    ],
    label: 'p-metergroup-label',
    labelIcon: 'p-metergroup-label-icon',
    labelMarker: 'p-metergroup-label-marker',
    labelText: 'p-metergroup-label-text'
};

export const styles = createStyles({
    name: 'metergroup',
    style,
    classes
});
