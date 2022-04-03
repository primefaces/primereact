import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useUnmountEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';

export const Image = React.memo(React.forwardRef((props, ref) => {
    const [maskVisibleState, setMaskVisibleState] = React.useState(false);
    const [previewVisibleState, setPreviewVisibleState] = React.useState(false);
    const [rotateState, setRotateState] = React.useState(0);
    const [scaleState, setScaleState] = React.useState(1);
    const elementRef = React.useRef(null);
    const maskRef = React.useRef(null);
    const previewRef = React.useRef(null);
    const previewClick = React.useRef(false);

    const onImageClick = () => {
        if (props.preview) {
            setMaskVisibleState(true);
            setTimeout(() => {
                setPreviewVisibleState(true);
            }, 25);
        }
    }

    const onPreviewImageClick = () => {
        previewClick.current = true;
    }

    const onMaskClick = () => {
        if (!previewClick.current) {
            setPreviewVisibleState(false);
            setRotateState(0);
            setScaleState(1);
        }

        previewClick.current = false;
    }

    const onDownload = () => {
        const { alt: name, src } = props;
        DomHandler.saveAs({ name, src });
        previewClick.current = true;
    }

    const rotateRight = () => {
        setRotateState(prevRotate => prevRotate + 90);
        previewClick.current = true;
    }

    const rotateLeft = () => {
        setRotateState(prevRotate => prevRotate - 90);
        previewClick.current = true;
    }

    const zoomIn = () => {
        setScaleState(prevScale => prevScale + 0.1);
        previewClick.current = true;
    }

    const zoomOut = () => {
        setScaleState(prevScale => prevScale - 0.1);
        previewClick.current = true;
    }

    const onEntering = () => {
        ZIndexUtils.set('modal', maskRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['modal']);
    }

    const onEntered = () => {
        props.onShow && props.onShow();
    }

    const onExit = () => {
        DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
    }

    const onExiting = () => {
        props.onHide && props.onHide();
    }

    const onExited = () => {
        ZIndexUtils.clear(maskRef.current);

        setMaskVisibleState(false);
    }

    useUnmountEffect(() => {
        maskRef.current && ZIndexUtils.clear(maskRef.current);
    });

    const createPreview = () => {
        if (props.preview) {
            return (
                <div className="p-image-preview-indicator" onClick={onImageClick} >
                    {content}
                </div>
            )
        }

        return null;
    }

    const createElement = () => {
        const { downloadable } = props;
        const imagePreviewStyle = { transform: 'rotate(' + rotateState + 'deg) scale(' + scaleState + ')' };
        const zoomDisabled = scaleState <= 0.5 || scaleState >= 1.5;
        // const rotateClassName = 'p-image-preview-rotate-' + rotateScale;

        return (
            <div ref={maskRef} className="p-image-mask p-component-overlay p-component-overlay-enter" onClick={onMaskClick}>
                <div className="p-image-toolbar">
                    {
                        downloadable && (
                            <button className="p-image-action p-link" onClick={onDownload} type="button">
                                <i className="pi pi-download"></i>
                            </button>
                        )
                    }
                    <button className="p-image-action p-link" onClick={rotateRight} type="button">
                        <i className="pi pi-refresh"></i>
                    </button>
                    <button className="p-image-action p-link" onClick={rotateLeft} type="button">
                        <i className="pi pi-undo"></i>
                    </button>
                    <button className="p-image-action p-link" onClick={zoomOut} type="button" disabled={zoomDisabled}>
                        <i className="pi pi-search-minus"></i>
                    </button>
                    <button className="p-image-action p-link" onClick={zoomIn} type="button" disabled={zoomDisabled}>
                        <i className="pi pi-search-plus"></i>
                    </button>
                    <button className="p-image-action p-link" type="button">
                        <i className="pi pi-times"></i>
                    </button>
                </div>
                <CSSTransition nodeRef={previewRef} classNames="p-image-preview" in={previewVisibleState} timeout={{ enter: 150, exit: 150 }}
                    unmountOnExit onEntering={onEntering} onEntered={onEntered} onExit={onExit} onExiting={onExiting} onExited={onExited}>
                    <div ref={previewRef}>
                        <img src={props.src} className="p-image-preview" style={imagePreviewStyle} onClick={onPreviewImageClick} alt={props.alt} />
                    </div>
                </CSSTransition>
            </div>
        )
    }

    const { src, alt, width, height } = props;
    const otherProps = ObjectUtils.findDiffKeys(props, Image.defaultProps);
    const containerClassName = classNames('p-image p-component', props.className, {
        'p-image-preview-container': props.preview
    });
    const element = createElement();
    const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : <i className="p-image-preview-icon pi pi-eye"></i>;
    const preview = createPreview();
    const image = <img src={src} className={props.imageClassName} width={width} height={height} style={props.imageStyle} alt={alt} />;

    return (
        <span ref={elementRef} className={containerClassName} style={props.style} {...otherProps}>
            {image}
            {preview}
            {maskVisibleState && <Portal element={element} appendTo={document.body} />}
        </span>
    )
}));

Image.displayName = 'Image';
Image.defaultProps = {
    __TYPE: 'Image',
    preview: false,
    className: null,
    downloadable: false,
    style: null,
    imageStyle: null,
    imageClassName: null,
    template: null,
    src: null,
    alt: null,
    width: null,
    height: null
}
