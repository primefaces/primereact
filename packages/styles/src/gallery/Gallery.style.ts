import { createStyles } from '@primereact/styles/utils';
import type { GalleryInstance } from '@primereact/types/shared/gallery';

const theme = `
    .p-gallery {
        width: 100%;
        position: relative;
        overflow: hidden;
        display: grid;
        grid-template-columns: 2.5rem 1fr 2.5rem;
        grid-template-rows: 2.5rem 1fr 4rem;
        padding: 1rem;
        gap: 0.75rem;
    }
    .p-gallery-backdrop {
        position: absolute;
        inset: 0;
        z-index: 0;
        background-color: var(--p-surface-950);
    }
    .p-gallery-content {
        position: relative;
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
        z-index: 1;
        place-self: stretch center;
        width: 100%;
    }

    .p-gallery-item {
        --position-x: 0px;
        --position-y: 0px;
        --scale: 1;
        --rotation: 0deg;
        --flip-x: 1;
        --flip-y: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: center;
        user-select: none;
        touch-action: none;
        align-items: center;
        justify-content: center;
        transform: translate(calc(-50% + var(--position-x)), calc(-50% + var(--position-y))) scale(var(--scale)) rotate(calc(var(--rotation))) scaleX(var(--flip-x)) scaleY(var(--flip-y));
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
        z-index: 0;
        display: none;
        cursor: pointer;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .p-gallery-item[data-active="true"] {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
        z-index: 1;
        display: flex;
        cursor: zoom-in;
    }

    .p-gallery-toolbar {
        grid-column: 1 / span 3;
        grid-row: 1;
        place-self: flex-end;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid var(--p-surface-800);
        background-color: var(--p-surface-900);
        padding: 0.25rem;
    }

    .p-gallery-toolbar-item {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        border-radius: 0.5rem;
        border: 1px solid transparent;
        color: var(--p-surface-400);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-gallery-toolbar-item:hover {
        border-color: var(--p-surface-700);
        background-color: var(--p-surface-800);
    }

    .p-gallery-next,
    .p-gallery-prev {
        grid-row: 1 / span 3;
        place-self: center;
        z-index: 2;
        width: 100%;
        aspect-ratio: 1 / 1;
        cursor: pointer;
        border-radius: 0.5rem;
        border: 1px solid var(--p-surface-800);
        background-color: var(--p-surface-900);
        color: var(--p-surface-400);
        transition-property: background-color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-gallery-next:hover,
    .p-gallery-prev:hover {
        background-color: var(--p-surface-800);
    }

    .p-gallery-next {
        grid-column: 3;
    }

    .p-gallery-prev {
        grid-column: 1;
    }

    .p-gallery-thumbnail {
        max-width: 600px;
        grid-column: 1 / span 3;
        grid-row: 3;
        place-self: center;
        z-index: 2;
    }
`;

export const styles = createStyles<GalleryInstance>({
    name: 'gallery',
    style: theme,
    classes: {
        root: 'p-gallery',
        backdrop: 'p-gallery-backdrop',
        content: 'p-gallery-content',
        item: 'p-gallery-item',
        next: 'p-gallery-next',
        prev: 'p-gallery-prev',
        toolbar: 'p-gallery-toolbar',
        toolbarItem: 'p-gallery-toolbar-item',
        thumbnail: 'p-gallery-thumbnail',
        thumbnailContent: 'p-gallery-thumbnail-content',
        thumbnailItem: 'p-gallery-thumbnail-item'
    }
});
