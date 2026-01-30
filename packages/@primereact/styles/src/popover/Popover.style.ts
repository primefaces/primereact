import { createStyles } from '@primereact/styles/utils';
import type { PopoverRootInstance } from '@primereact/types/shared/popover';

const theme = /*css*/ `
.p-popover-positioner{
z-index: 2000;
}
.p-popover-content{
    position: relative;
    padding: 1rem;
    background: light-dark(var(--p-surface-0), var(--p-surface-900));
    border-radius: 0.5rem;
    border: 1px solid var(--p-content-border-color);
    opacity: 0;
    scale: 0.93;
    transition: opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), scale 250ms cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: var(--transform-origin);

    &[data-open]{
        opacity: 1;
        scale: 1;
    }
}

.p-popover-arrow{
    position: absolute;
    border: 1px solid var(--p-content-border-color);
    background: light-dark(var(--p-surface-0), var(--p-surface-900));
    width:0.75rem;
    height:0.75rem;
    border-bottom-left-radius: 3px;
    clip-path: polygon(0 100%, 0 0, 100% 100%);

    &[data-side='top']{
        left: var(--placer-arrow-x);
        bottom: -0.375rem;
        transform: translateX(-50%) rotate(-45deg);
    }

    &[data-side='bottom']{
        left: var(--placer-arrow-x);
        top: -0.375rem;     
        transform: translateX(-50%) rotate(135deg);
    }

    &[data-side='left']{
        top: var(--placer-arrow-y);
        right: -0.375rem;
        transform: translateY(-50%) rotate(-135deg);
    }

    &[data-side='right']{
        top: var(--placer-arrow-y);
        left: -0.375rem;
        transform: translateY(-50%) rotate(45deg);
    }
}
`;

export const styles = createStyles<PopoverRootInstance>({
    name: 'popover',
    style: theme,
    classes: {
        overlay: 'p-popover p-component',
        content: 'p-popover-content',
        positioner: 'p-popover-positioner',
        arrow: 'p-popover-arrow'
    }
});
