import { createStyles } from '@primereact/styles/utils';
import type { OverlayBadgeInstance } from '@primereact/types/shared/overlaybadge';
import { style } from '@primeuix/styles/overlaybadge';

export const styles = createStyles<OverlayBadgeInstance>({
    name: 'overlaybadge',
    style,
    classes: {
        root: 'p-overlaybadge'
    }
});
