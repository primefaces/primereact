import { createStyles } from '@primereact/styles/utils';
import type { PopoverRootInstance } from '@primereact/types/shared/popover';

const theme = /*css*/ `
.p-popover-positioner{
    z-index: 2000;
}

.p-popover-popup{
    position: relative;
    background: light-dark(var(--p-surface-0), var(--p-surface-900));
    border-radius: 0.5rem;
    border: 1px solid var(--p-content-border-color);
    opacity: 0;
    scale: 0.93;
    transition: opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), scale 250ms cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: var(--transform-origin);
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 0.05);

    &[data-open]{
        opacity: 1;
        scale: 1;
    }
}

.p-popover-content{
    padding: 0.5rem 1rem 1rem 1rem;
}

.p-popover-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1rem 0 1rem;
}

.p-popover-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem 1rem 1rem;
}

.p-popover-title{
    color: light-dark(var(--p-surface-900), var(--p-surface-0));
    font-size: 0.875rem;
    font-weight: 500;
}

.p-popover-description{
    color: light-dark(var(--p-surface-500), var(--p-surface-400));
    font-size: 0.875rem;
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
        popup: 'p-popover-popup',
        content: 'p-popover-content',
        positioner: 'p-popover-positioner',
        arrow: 'p-popover-arrow',
        title: 'p-popover-title',
        description: 'p-popover-description',
        footer: 'p-popover-footer',
        header: 'p-popover-header'
    }
});
