import { createStyles } from '@primereact/styles/utils';
import type { OverlayBadgeInstance } from '@primereact/types/shared/badge';
import { style } from '@primeuix/styles/overlaybadge';

export const overlayStyles = createStyles<OverlayBadgeInstance>({
    name: 'overlaybadge',
    style,
    classes: {
        root: 'p-overlaybadge'
    }
});
