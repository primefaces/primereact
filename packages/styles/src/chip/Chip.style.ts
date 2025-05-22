import { createStyles } from '@primereact/styles/utils';
import type { ChipInstance } from '@primereact/types/shared/chip';
import { style } from '@primeuix/styles/chip';

export const styles = createStyles<ChipInstance>({
    name: 'chip',
    style,
    classes: {
        root: 'p-chip p-component',
        image: 'p-chip-image',
        icon: 'p-chip-icon',
        label: 'p-chip-label',
        removeIcon: 'p-chip-remove-icon'
    }
});
