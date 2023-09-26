import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    handle: ({ index, handleIndex }) =>
        classNames('p-slider-handle', {
            'p-slider-handle-start': index === 0,
            'p-slider-handle-end': index === 1,
            'p-slider-handle-active': handleIndex.current === index
        }),
    range: 'p-slider-range',
    root: ({ props, vertical, horizontal }) =>
        classNames('p-slider p-component', props.className, {
            'p-disabled': props.disabled,
            'p-slider-horizontal': horizontal,
            'p-slider-vertical': vertical
        })
};

const styles = `
@layer primereact {
    .p-slider {
        position: relative;
    }
    
    .p-slider .p-slider-handle {
        position: absolute;
        cursor: grab;
        touch-action: none;
        display: block;
        z-index: 1;
    }
    
    .p-slider .p-slider-handle.p-slider-handle-active {
        z-index: 2;
    }
    
    .p-slider-range {
        position: absolute;
        display: block;
    }
    
    .p-slider-horizontal .p-slider-range {
        top: 0;
        left: 0;
        height: 100%;
    }
    
    .p-slider-horizontal .p-slider-handle {
        top: 50%;
    }
    
    .p-slider-vertical {
        height: 100px;
    }
    
    .p-slider-vertical .p-slider-handle {
        left: 50%;
    }
    
    .p-slider-vertical .p-slider-range {
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
`;

const inlineStyles = {
    handle: { position: 'absolute' },
    range: { position: 'absolute' }
};

export const SliderBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Slider',
        id: null,
        value: null,
        min: 0,
        max: 100,
        orientation: 'horizontal',
        step: null,
        range: false,
        style: null,
        className: null,
        disabled: false,
        tabIndex: 0,
        onChange: null,
        onSlideEnd: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
