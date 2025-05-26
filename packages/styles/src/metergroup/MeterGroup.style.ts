import { createStyles } from '@primereact/styles/utils';
import type { MeterGroupInstance } from '@primereact/types/shared/metergroup';
import { style } from '@primeuix/styles/metergroup';

export const styles = createStyles<MeterGroupInstance>({
    name: 'metergroup',
    style,
    classes: {
        root: ({ props }) => [
            'p-metergroup p-component',
            {
                'p-metergroup-horizontal': props.orientation === 'horizontal',
                'p-metergroup-vertical': props.orientation === 'vertical'
            }
        ],
        meters: 'p-metergroup-meters',
        meter: 'p-metergroup-meter',
        labelList: ({ props }) => [
            'p-metergroup-label-list',
            {
                'p-metergroup-label-list-horizontal': props.orientation === 'horizontal',
                'p-metergroup-label-list-vertical': props.orientation === 'vertical'
            }
        ],
        label: 'p-metergroup-label',
        labelIcon: 'p-metergroup-label-icon',
        labelMarker: 'p-metergroup-label-marker',
        labelText: 'p-metergroup-label-text'
    }
});
