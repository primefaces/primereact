import { createStyles } from '@primereact/styles/utils';
import type { ToastRootInstance } from '@primereact/types/shared/toast';

const style = /*css*/ `
.p-toaster-region {
    position: fixed;
    width: 18.75rem;
    z-index: 2000;
}

.p-toaster-region[data-position="bottom-right"] {
    right: 2rem;
    bottom: 2rem;
}

.p-toaster-region[data-position="bottom-center"] {
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
}

.p-toaster-region[data-position="bottom-left"] {
    left: 2rem;
    bottom: 2rem;
}

.p-toaster-region[data-position="top-right"] {
    right: 2rem;
    top: 2rem;
}

.p-toaster-region[data-position="top-center"] {
    left: 50%;
    transform: translateX(-50%);
    top: 2rem;
}

.p-toaster-region[data-position="top-left"] {
    left: 2rem;
    top: 2rem;
}

`;

export const styles = createStyles<ToastRootInstance>({
    name: 'toaster',
    style,
    classes: {
        region: 'p-toaster-region'
    }
});
