import { createStyles } from '@primereact/styles/utils';
import type { ToastRootInstance } from '@primereact/types/shared/toast';

const style = `
    
`;

export const styles = createStyles<ToastRootInstance>({
    name: 'toast',
    style,
    classes: {
        region: 'p-toast-region',
        title: 'p-toast-title',
        item: 'p-toast',
        icon: 'p-toast-icon',
        description: 'p-toast-description',
        close: 'p-toast-close',
        action: 'p-toast-action'
    }
});
