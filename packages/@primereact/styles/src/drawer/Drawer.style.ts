import { createStyles } from '@primereact/styles/utils';
import type { DrawerRootInstance } from '@primereact/types/shared/drawer';
import { style } from '@primeuix/styles/drawer';

const _style = /*css*/ `
${style}

/* For PrimeReact */
.p-drawer-backdrop {
    position: fixed;
    inset: 0;
    pointer-events: none;
}

.p-drawer-backdrop.p-overlay-mask {
    pointer-events: auto;
}

.p-drawer {
    position: fixed;
    pointer-events: auto;
}

.p-drawer[data-position='left'] {
    top: 0;
    inset-inline-start: 0;
    height: 100%;
    width: unset;
    border-inline-end-width: 1px;
}

.p-drawer[data-position='right'] {
    top: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
    height: 100%;
    width: unset;
    border-inline-start-width: 1px;
}

.p-drawer[data-position='top'] {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: unset;
    border-block-end-width: 1px;
}

.p-drawer[data-position='bottom'] {
    top: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: unset;
    border-block-start-width: 1px;
}

.p-drawer[data-position='full'] {
    transition: none;
    transform: none;
    top: 0;
    inset-inline-start: 0;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    border-width: 1px;
}

.p-drawer.p-drawer-enter-active[data-position='left'] {
    animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
.p-drawer.p-drawer-leave-active[data-position='left'] {
    animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer.p-drawer-enter-active[data-position='right'] {
    animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
.p-drawer.p-drawer-leave-active[data-position='right'] {
    animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer.p-drawer-enter-active[data-position='top'] {
    animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
.p-drawer.p-drawer-leave-active[data-position='top'] {
    animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer.p-drawer-enter-active[data-position='bottom'] {
    animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
.p-drawer.p-drawer-leave-active[data-position='bottom'] {
    animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer.p-drawer-enter-active[data-position='full'] {
    animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
.p-drawer.p-drawer-leave-active[data-position='full'] {
    animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
`;

export const styles = createStyles<DrawerRootInstance>({
    name: 'drawer',
    style: _style,
    classes: {
        backdrop: ({ props }) => {
            return [
                'p-drawer-backdrop p-overlay-mask',
                {
                    'p-drawer-full': props.position === 'full'
                }
            ];
        },
        root: ({ props }) => {
            const positions = ['left', 'right', 'top', 'bottom'];
            const pos = positions.find((item) => item === props.position);

            return [
                'p-drawer p-component',
                {
                    'p-drawer-full': props.position === 'full'
                },
                pos ? `p-drawer-${pos}` : ''
            ];
        },
        trigger: 'p-drawer-trigger-button',
        header: 'p-drawer-header',
        title: 'p-drawer-title',
        close: 'p-drawer-close-button',
        content: 'p-drawer-content',
        footer: 'p-drawer-footer'
    }
});
