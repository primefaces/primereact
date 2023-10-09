import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    button: 'p-image-preview-indicator',
    mask: 'p-image-mask p-component-overlay p-component-overlay-enter',
    toolbar: 'p-image-toolbar',
    downloadButton: 'p-image-action p-link',
    rotateRightButton: 'p-image-action p-link',
    rotateLeftButton: 'p-image-action p-link',
    zoomOutButton: 'p-image-action p-link',
    zoomInButton: 'p-image-action p-link',
    closeButton: 'p-image-action p-link',
    preview: 'p-image-preview',
    icon: 'p-image-preview-icon',
    root: ({ props }) =>
        classNames('p-image p-component', props.className, {
            'p-image-preview-container': props.preview
        }),
    transition: 'p-image-preview'
};

const styles = `
@layer primereact {
    .p-image-mask {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-image-preview-container {
        position: relative;
        display: inline-block;
        line-height: 0;
    }
    
    .p-image-preview-indicator {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity .3s;
        border: none;
        padding: 0;
    }
    
    .p-image-preview-icon {
        font-size: 1.5rem;
    }
    
    .p-image-preview-container:hover > .p-image-preview-indicator {
        opacity: 1;
        cursor: pointer;
    }
    
    .p-image-preview-container > img {
        cursor: pointer;
    }
    
    .p-image-toolbar {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        z-index: 1;
    }
    
    .p-image-action.p-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .p-image-preview {
        transition: transform .15s;
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
    }
    
    .p-image-preview-enter {
        opacity: 0;
        transform: scale(0.7);
    }
    
    .p-image-preview-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-image-preview-enter-done {
        transform: none;
    }
    
    .p-image-preview-exit {
        opacity: 1;
    }
    
    .p-image-preview-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }
}
`;

const inlineStyles = {
    preview: ({ rotateState, scaleState }) => ({
        transform: 'rotate(' + rotateState + 'deg) scale(' + scaleState + ')'
    })
};

export const ImageBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Image',
        alt: null,
        className: null,
        closeIcon: null,
        crossOrigin: null,
        decoding: null,
        downloadIcon: null,
        downloadable: false,
        height: null,
        imageClassName: null,
        imageStyle: null,
        indicatorIcon: null,
        loading: null,
        onError: null,
        onHide: null,
        onShow: null,
        preview: false,
        referrerPolicy: null,
        rotateLeftIcon: null,
        rotateRightIcon: null,
        src: null,
        template: null,
        useMap: null,
        width: null,
        zoomInIcon: null,
        zoomOutIcon: null,
        zoomSrc: null,
        children: undefined,
        closeOnEscape: true
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
