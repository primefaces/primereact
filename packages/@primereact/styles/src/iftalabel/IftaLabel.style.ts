import { createStyles } from '@primereact/styles/utils';
import type { IftaLabelInstance } from '@primereact/types/shared/label';
import { style } from '@primeuix/styles/iftalabel';

export const styles = createStyles<IftaLabelInstance>({
    name: 'iftalabel',
    style,
    classes: {
        root: 'p-iftalabel'
    }
});
