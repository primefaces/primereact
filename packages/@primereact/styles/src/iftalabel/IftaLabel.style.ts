import { createStyles } from '@primereact/styles/utils';
import type { IftaLabelInstance } from '@primereact/types/shared/iftalabel';
import { style } from '@primeuix/styles/iftalabel';

export const styles = createStyles<IftaLabelInstance>({
    name: 'iftalabel',
    style,
    classes: {
        root: 'p-iftalabel'
    }
});
