import { createStyles } from '@primereact/styles/utils';
import type { ToastRootInstance } from '@primereact/types/shared/toast';

const style = /*css*/ `

.p-toast-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--title-color);
}

.p-toast-description {
    font-size: 0.875rem;
    color: var(--description-color);
}

.p-toast-icon {
    color: var(--icon-color);
}

.p-toast {
    --offset-y: calc(var(--swipe-amount-y) + (var(--toast-offset) + var(--toast-index) * var(--gap)) * var(--raise-factor));
    --offset-x: var(--swipe-amount-x);
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    outline: none;
    position: absolute;
    touch-action: none;
    opacity: 0;
    transform: translateX(var(--offset-x)) translateY(calc(100% * var(--raise-factor) * -1));
    z-index: var(--toast-z-index);
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.05),
        0 2px 4px -2px rgb(0 0 0 / 0.05);
    transition:
        transform 0.3s,
        opacity 0.3s,
        height 0.3s;
}

.p-toast:focus-visible {
    outline: 1px solid light-dark(var(--p-surface-950), var(--p-surface-0));
    outline-offset: 2px;
}

.p-toast[data-mounted] {
    opacity: 1;
    transform: translateY(0);
}

.p-toast:not([data-expanded]):not([data-front]) {
    overflow: hidden;
    height: var(--front-toast-height);
    transform: translateX(var(--offset-x)) translateY(calc(var(--raise-factor) * var(--toast-index) * var(--gap))) scale(calc(var(--toast-index) * -0.05 + 1));
}

.p-toast[data-mounted][data-expanded] {
    height: var(--initial-height);
    transform: translateX(var(--offset-x)) translateY(var(--offset-y));
}

.p-toast[data-expanded]::after {
    content: "";
    position: absolute;
    left: 0;
    height: calc(var(--gap) + 1px);
    width: 100%;
    bottom: 100%;
}

.p-toast:not([data-visible]) {
    opacity: 0;
    pointer-events: none;
    user-select: none;
}

.p-toast[data-removed][data-front]:not([data-swipe-out]) {
    opacity: 0;
    transform: translateX(var(--offset-x)) translateY(calc(var(--raise-factor) * -100%));
}

.p-toast[data-removed]:not([data-front]):not([data-swipe-out])[data-expanded] {
    opacity: 0;
    transform: translateX(var(--offset-x)) translateY(calc(var(--raise-factor) * var(--offset-y) * 0.4));
}

.p-toast[data-removed]:not([data-front]):not([data-swipe-out]):not([data-expanded]) {
    opacity: 0;
    transform: translateX(var(--offset-x)) translateY(calc(var(--raise-factor) * 40% * -1));
    transition:
        transform 500ms,
        opacity 200ms;
}

.p-toast[data-swiping] {
    transition: none;
    transform: translateX(var(--offset-x)) translateY(var(--offset-y)) !important;
}

.p-toast[data-swiped] {
    -webkit-user-select: none;
    user-select: none;
}

.p-toast[data-swipe-out][data-swipe-direction="up"] {
    opacity: 0;
    transform: translateX(var(--offset-x)) translateY(calc(var(--offset-y) - 100%)) !important;
}

.p-toast[data-swipe-out][data-swipe-direction="down"] {
    opacity: 0;
    transform: translateX(var(--offset-x)) translateY(calc(var(--offset-y) + 100%)) !important;
}

.p-toast[data-swipe-out][data-swipe-direction="left"] {
    opacity: 0;
    transform: translateX(calc(var(--offset-x) - 100%)) translateY(var(--offset-y)) !important;
}

.p-toast[data-swipe-out][data-swipe-direction="right"] {
    opacity: 0;
    transform: translateX(calc(var(--offset-x) + 100%)) translateY(var(--offset-y)) !important;
    transition:
        transform 500ms,
        opacity 200ms;
}

.p-toast {
    --background-color: light-dark(var(--p-surface-0), var(--p-surface-900));
    --border-color: light-dark(var(--p-surface-200), var(--p-surface-800));
    --text-color: light-dark(var(--p-surface-900), var(--p-surface-0));
    --title-color: light-dark(var(--p-surface-800), var(--p-surface-100));
    --description-color: light-dark(var(--p-surface-500), var(--p-surface-400));
    --icon-color: light-dark(var(--p-surface-800), var(--p-surface-100));
}

.p-toast[data-rich-colors][data-variant="danger"] {
    --background-color: light-dark(color-mix(in srgb, var(--p-red-50) 75%, white), color-mix(in srgb, var(--p-red-950) 50%, black));
    --border-color: light-dark(var(--p-red-200), var(--p-red-950));
    --text-color: light-dark(var(--p-red-500), var(--p-red-300));
    --title-color: light-dark(var(--p-red-600), var(--p-red-300));
    --description-color: light-dark(var(--p-red-500), var(--p-red-400));
    --icon-color: light-dark(var(--p-red-600), var(--p-red-300));
}

.p-toast[data-rich-colors][data-variant="success"] {
    --background-color: light-dark(color-mix(in srgb, var(--p-emerald-50) 75%, white), color-mix(in srgb, var(--p-emerald-950) 50%, black));
    --border-color: light-dark(var(--p-emerald-200), var(--p-emerald-950));
    --text-color: light-dark(var(--p-emerald-500), var(--p-emerald-300));
    --title-color: light-dark(var(--p-emerald-600), var(--p-emerald-300));
    --description-color: light-dark(var(--p-emerald-500), var(--p-emerald-400));
    --icon-color: light-dark(var(--p-emerald-600), var(--p-emerald-300));
}

.p-toast[data-rich-colors][data-variant="info"] {
    --background-color: light-dark(color-mix(in srgb, var(--p-blue-50) 75%, white), color-mix(in srgb, var(--p-blue-950) 50%, black));
    --border-color: light-dark(var(--p-blue-200), var(--p-blue-950));
    --text-color: light-dark(var(--p-blue-500), var(--p-blue-300));
    --title-color: light-dark(var(--p-blue-600), var(--p-blue-300));
    --description-color: light-dark(var(--p-blue-500), var(--p-blue-400));
    --icon-color: light-dark(var(--p-blue-600), var(--p-blue-300));
}

.p-toast[data-rich-colors][data-variant="warn"] {
    --background-color: light-dark(color-mix(in srgb, var(--p-amber-50) 75%, white), color-mix(in srgb, var(--p-amber-950) 50%, black));
    --border-color: light-dark(var(--p-amber-200), var(--p-amber-950));
    --text-color: light-dark(var(--p-amber-500), var(--p-amber-300));
    --title-color: light-dark(var(--p-amber-600), var(--p-amber-300));
    --description-color: light-dark(var(--p-amber-500), var(--p-amber-400));
    --icon-color: light-dark(var(--p-amber-600), var(--p-amber-300));
}

.p-toaster-region[data-position="bottom-right"] .p-toast {
    --raise-factor: -1;
    bottom: 0;
    right: 0;
}

.p-toaster-region[data-position="bottom-center"] .p-toast {
    --raise-factor: -1;
    bottom: 0;
}

.p-toaster-region[data-position="bottom-left"] .p-toast {
    --raise-factor: -1;
    bottom: 0;
    left: 0;
}

.p-toaster-region[data-position="top-right"] .p-toast {
    --raise-factor: 1;
    top: 0;
    right: 0;
}

.p-toaster-region[data-position="top-center"] .p-toast {
    --raise-factor: 1;
    top: 0;
}

.p-toaster-region[data-position="top-left"] .p-toast {
    --raise-factor: 1;
    top: 0;
    left: 0;
}
`;

export const styles = createStyles<ToastRootInstance>({
    name: 'toast',
    style,
    classes: {
        root: 'p-toast',
        title: 'p-toast-title',
        icon: 'p-toast-icon',
        description: 'p-toast-description',
        close: 'p-toast-close',
        action: 'p-toast-action'
    }
});
