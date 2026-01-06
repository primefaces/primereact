import { createStyles } from '@primereact/styles/utils';
import type { ImageCompareRootInstance } from '@primereact/types/shared/imagecompare';
import { style } from '@primeuix/styles/imagecompare';

export const styles = createStyles<ImageCompareRootInstance>({
    name: 'imagecompare',
    style,
    classes: {
        root: 'p-imagecompare',
        slider: 'p-imagecompare-slider'
    }
});
