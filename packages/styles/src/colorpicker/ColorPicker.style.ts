import { createStyles } from '@primereact/styles/utils';
import type { ColorPickerInstance } from '@primereact/types/shared/colorpicker';
// import { style } from '@primeuix/styles/colorpicker';

const theme = `
    .p-color-picker-area{
        position: relative;
        aspect-ratio: 4 / 3;
        border-radius: 0.5rem;
        background: var(--area-background);
    }

    .p-color-picker-area-thumb{
        width: 1rem;
        height: 1rem;
        position: absolute;
        z-index: 1;
        border-radius: 999px;
        pointer-events: none;
        user-select: none;
        touch-action: none;
        forced-color-adjust: none;
        -webkit-user-select: none;
        border: 3px solid rgb(255,255,255);
        cursor: pointer;
        transform: translate(-50%, -50%);
        top: var(--thumb-position-top)    ;
        left: var(--thumb-position-left);
        background: var(--thumb-background);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    .p-color-picker-area-background{
        position: absolute;
        inset: 0;
        z-index: 0;
        border-radius: inherit;
        pointer-events: none;
        background: var(--area-gradient);
        user-select: none;
        touch-action: none;
        forced-color-adjust: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
    }

    .p-dark .p-color-picker-area-background{
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
    }

    .p-color-picker-slider{
        position:relative;
        border-radius: 0.25rem;
    }

    .p-color-picker-slider-horizontal{
        height: 1rem;
        width: auto;
        touch-action: pan-x;
    }


    .p-color-picker-slider-vertical{
        height: auto;
        width: 1rem;
        touch-action: pan-y;
    }

    .p-color-picker-slider-thumb{
        width: 1rem;
        height: 1rem;
        position: absolute;
        z-index: 1;
        border-radius: 999px;
        pointer-events: none;
        user-select: none;
        touch-action: none;
        transform: translate(-50%, -50%);
        top: var(--thumb-position-top);
        left: var(--thumb-position-left);
        background: var(--thumb-background);
        border: 3px solid rgb(255,255,255);
        cursor: pointer;
        box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    .p-color-picker-slider-track{
        position: absolute;
        inset: 0;
        z-index: 0;
        border-radius: inherit;
        pointer-events: none;
        user-select: none;
        touch-action: none;
        forced-color-adjust: none;
        -webkit-user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
        background: var(--slider-background);
    }

    .p-dark .p-color-picker-slider-track{
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
    }

    .p-color-picker-transparency-grid{
        position: absolute;
        inset: 0;
        z-index: 0;
        background: conic-gradient(var(--p-surface-100) 0deg, var(--p-surface-100) 25%, transparent 0deg, transparent 50%, var(--p-surface-100) 0deg, var(--p-surface-100) 75%, transparent 0deg);
        background-size: 0.5rem 0.5rem;
        background-color: rgb(255, 255, 255);
        border-radius: inherit;
        pointer-events: none;
        user-select: none;
        touch-action: none;
        forced-color-adjust: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
    }

    .p-color-picker-swatch{
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 0.375rem;
        position: relative;
    }

    .p-color-picker-swatch-background{
        background: var(--swatch-background);
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
        position: absolute;
        inset: 0;
        z-index: 0;
        border-radius: inherit;
        pointer-events: none;
        user-select: none;
        touch-action: none;
        forced-color-adjust: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
    }

    .p-dark .p-color-picker-swatch-background{
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
    }
`;

export const styles = createStyles<ColorPickerInstance>({
    name: 'colorpicker',
    style: theme,
    classes: {
        area: 'p-color-picker-area',
        areaThumb: ({ context }) => ['p-color-picker-area-thumb', { 'p-disabled': context.disabled }],
        areaBackground: 'p-color-picker-area-background',
        slider: ({ context }) => ['p-color-picker-slider', `p-color-picker-slider-${context.orientation}`],
        sliderThumb: ({ context }) => ['p-color-picker-slider-thumb', { 'p-disabled': context.disabled }],
        sliderTrack: 'p-color-picker-slider-track',
        transparencyGrid: 'p-color-picker-transparency-grid',
        swatch: 'p-color-picker-swatch',
        swatchBackground: 'p-color-picker-swatch-background'
    }
});
