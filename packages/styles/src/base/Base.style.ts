import type { StylesOptions } from '@primereact/types/styles';
import { style } from '@primeuix/styles/base';

const css = /*css*/ `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}

/* For PrimeReact Motion */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: var(--pui-motion-height, 1000px);
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 200ms ease-out;
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 200ms ease-out;
}
`;

export const styles = {
    name: 'base',
    css,
    style,
    classes: {},
    inlineStyles: {}
} satisfies StylesOptions;
