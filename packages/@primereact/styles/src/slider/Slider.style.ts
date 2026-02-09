import { createStyles } from '@primereact/styles/utils';
import type { SliderRootInstance } from '@primereact/types/shared/slider';

export const style = /*css*/ `
    .p-slider {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .p-slider-track {
        background: dt('slider.track.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider-handle {
        cursor: grab;
        touch-action: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: dt('slider.handle.height');
        width: dt('slider.handle.width');
        background: dt('slider.handle.background');
        border-radius: dt('slider.handle.border.radius');
        transition:
            background dt('slider.transition.duration'),
            color dt('slider.transition.duration'),
            border-color dt('slider.transition.duration'),
            box-shadow dt('slider.transition.duration'),
            outline-color dt('slider.transition.duration');
        outline-color: transparent;
    }

    .p-slider-handle::before {
        content: '';
        width: dt('slider.handle.content.width');
        height: dt('slider.handle.content.height');
        display: block;
        background: dt('slider.handle.content.background');
        border-radius: dt('slider.handle.content.border.radius');
        box-shadow: dt('slider.handle.content.shadow');
        transition: background dt('slider.transition.duration');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover {
        background: dt('slider.handle.hover.background');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {
        background: dt('slider.handle.content.hover.background');
    }

    .p-slider-handle:has(.p-slider-input:focus-visible){
        box-shadow: dt('slider.handle.focus.ring.shadow');
        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');
        outline-offset: dt('slider.handle.focus.ring.offset');
    }

    .p-slider-range {
        display: block;
        background: dt('slider.range.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider.p-slider-horizontal {
        height: dt('slider.handle.height');
    }

    .p-slider.p-slider-horizontal .p-slider-track {
        height: dt('slider.track.size');
    }

    .p-slider-horizontal .p-slider-range {
        height: 100%;
    }

    .p-slider-vertical {
        flex-direction: column;
        width: dt('slider.handle.width');
    }
        
    .p-slider-vertical .p-slider-track {
        min-height: 100px;
        width: dt('slider.track.size');
    }


    .p-slider-vertical .p-slider-range {
        width: 100%;
    }

    .p-slider-input {
        clip-path:inset(50%);
        overflow:hidden;
        white-space:nowrap;
        border:0;
        padding:0;
        width:100%;
        height:100%;
        margin:-1px;
        position:fixed;top:0;left:0;
    }
`;

export const styles = createStyles<SliderRootInstance>({
    name: 'slider',
    style,
    classes: {
        root: ({ props }) => [
            'p-slider p-component',
            {
                'p-disabled': props.disabled,
                'p-slider-horizontal': props.orientation === 'horizontal',
                'p-slider-vertical': props.orientation === 'vertical'
            }
        ],
        track: 'p-slider-track',
        range: 'p-slider-range',
        thumb: 'p-slider-handle',
        input: 'p-slider-input'
    }
});
