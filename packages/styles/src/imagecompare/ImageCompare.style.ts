import { createStyles } from '@primereact/styles/utils';
import type { ImageCompareInstance } from '@primereact/types/shared/imagecompare';
import { style } from '@primeuix/styles/imagecompare';

export const styles = createStyles<ImageCompareInstance>({
    name: 'imagecompare',
    style,
    classes: {
        root: 'p-imagecompare',
        slider: 'p-imagecompare-slider'
    }
});
