import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useUnmountEffect } from '../hooks/Hooks';
import { DownloadIcon } from '../icons/download';
import { EyeIcon } from '../icons/eye';
import { RefreshIcon } from '../icons/refresh';
import { SearchMinusIcon } from '../icons/searchminus';
import { SearchPlusIcon } from '../icons/searchplus';
import { TimesIcon } from '../icons/times';
import { UndoIcon } from '../icons/undo';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, IconUtils, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { ImageBase } from './ImageBase';

export const Image = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ImageBase.getProps(inProps);

        const [maskVisibleState, setMaskVisibleState] = React.useState(false);
        const [previewVisibleState, setPreviewVisibleState] = React.useState(false);
        const [rotateState, setRotateState] = React.useState(0);
        const [scaleState, setScaleState] = React.useState(1);
        const elementRef = React.useRef(null);
        const imageRef = React.useRef(null);
        const maskRef = React.useRef(null);
        const previewRef = React.useRef(null);
        const previewClick = React.useRef(false);

        const show = () => {
            if (props.preview) {
                setMaskVisibleState(true);
                setTimeout(() => {
                    setPreviewVisibleState(true);
                }, 25);
            }
        };

        const hide = () => {
            if (!previewClick.current) {
                setPreviewVisibleState(false);
                setRotateState(0);
                setScaleState(1);
            }

            previewClick.current = false;
        };

        const onPreviewImageClick = () => {
            previewClick.current = true;
        };

        const onDownload = () => {
            const { alt: name, src } = props;

            DomHandler.saveAs({ name, src });
            previewClick.current = true;
        };

        const rotateRight = () => {
            setRotateState((prevRotate) => prevRotate + 90);
            previewClick.current = true;
        };

        const rotateLeft = () => {
            setRotateState((prevRotate) => prevRotate - 90);
            previewClick.current = true;
        };

        const zoomIn = () => {
            setScaleState((prevScale) => prevScale + 0.1);
            previewClick.current = true;
        };

        const zoomOut = () => {
            setScaleState((prevScale) => prevScale - 0.1);
            previewClick.current = true;
        };

        const onEntering = () => {
            ZIndexUtils.set('modal', maskRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['modal']);
        };

        const onEntered = () => {
            props.onShow && props.onShow();
        };

        const onExit = () => {
            DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
        };

        const onExiting = () => {
            props.onHide && props.onHide();
        };

        const onExited = () => {
            ZIndexUtils.clear(maskRef.current);

            setMaskVisibleState(false);
        };

        useUnmountEffect(() => {
            maskRef.current && ZIndexUtils.clear(maskRef.current);
        });

        const createPreview = () => {
            if (props.preview) {
                return (
                    <div className="p-image-preview-indicator" onClick={show}>
                        {content}
                    </div>
                );
            }

            return null;
        };

        const createElement = () => {
            const { downloadable, alt, crossOrigin, referrerPolicy, useMap, loading } = props;
            const imagePreviewStyle = { transform: 'rotate(' + rotateState + 'deg) scale(' + scaleState + ')' };
            const zoomOutDisabled = scaleState <= 0.5;
            const zoomInDisabled = scaleState >= 1.5;
            const downloadIcon = IconUtils.getJSXIcon(props.downloadIcon || <DownloadIcon />, undefined, { props });
            const rotateRightIcon = IconUtils.getJSXIcon(props.rotateRightIcon || <RefreshIcon />, undefined, { props });
            const rotateLeftIcon = IconUtils.getJSXIcon(props.rotateLeftIcon || <UndoIcon />, undefined, { props });
            const zoomOutIcon = IconUtils.getJSXIcon(props.zoomOutIcon || <SearchMinusIcon />, undefined, { props });
            const zoomInIcon = IconUtils.getJSXIcon(props.zoomInIcon || <SearchPlusIcon />, undefined, { props });
            const closeIcon = IconUtils.getJSXIcon(props.closeIcon || <TimesIcon />, undefined, { props });

            return (
                <div ref={maskRef} className="p-image-mask p-component-overlay p-component-overlay-enter" onPointerUp={hide}>
                    <div className="p-image-toolbar">
                        {downloadable && (
                            <button className="p-image-action p-link" onPointerUp={onDownload} type="button">
                                {downloadIcon}
                            </button>
                        )}
                        <button className="p-image-action p-link" onPointerUp={rotateRight} type="button">
                            {rotateRightIcon}
                        </button>
                        <button className="p-image-action p-link" onPointerUp={rotateLeft} type="button">
                            {rotateLeftIcon}
                        </button>
                        <button className="p-image-action p-link" onPointerUp={zoomOut} type="button" disabled={zoomOutDisabled}>
                            {zoomOutIcon}
                        </button>
                        <button className="p-image-action p-link" onPointerUp={zoomIn} type="button" disabled={zoomInDisabled}>
                            {zoomInIcon}
                        </button>
                        <button className="p-image-action p-link" type="button" aria-label={localeOption('close')}>
                            {closeIcon}
                        </button>
                    </div>
                    <CSSTransition
                        nodeRef={previewRef}
                        classNames="p-image-preview"
                        in={previewVisibleState}
                        timeout={{ enter: 150, exit: 150 }}
                        unmountOnExit
                        onEntering={onEntering}
                        onEntered={onEntered}
                        onExit={onExit}
                        onExiting={onExiting}
                        onExited={onExited}
                    >
                        <div ref={previewRef}>
                            <img
                                src={props.zoomSrc || props.src}
                                className="p-image-preview"
                                style={imagePreviewStyle}
                                onPointerUp={onPreviewImageClick}
                                alt={alt}
                                crossOrigin={crossOrigin}
                                referrerPolicy={referrerPolicy}
                                useMap={useMap}
                                loading={loading}
                            />
                        </div>
                    </CSSTransition>
                </div>
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            getElement: () => elementRef.current,
            getImage: () => imageRef.current
        }));

        const { src, alt, width, height, crossOrigin, referrerPolicy, useMap, loading } = props;
        const otherProps = ImageBase.getOtherProps(props);
        const containerClassName = classNames('p-image p-component', props.className, {
            'p-image-preview-container': props.preview
        });
        const element = createElement();
        const iconClassName = 'p-image-preview-icon';
        const icon = props.indicatorIcon || <EyeIcon className={iconClassName} />;
        const indicatorIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });
        const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : indicatorIcon;
        const preview = createPreview();
        const image = props.src && (
            <img
                ref={imageRef}
                src={src}
                className={props.imageClassName}
                width={width}
                height={height}
                crossOrigin={crossOrigin}
                referrerPolicy={referrerPolicy}
                useMap={useMap}
                loading={loading}
                alt={alt}
                style={props.imageStyle}
                onError={props.onError}
            />
        );

        return (
            <span ref={elementRef} className={containerClassName} {...otherProps}>
                {image}
                {preview}
                {maskVisibleState && <Portal element={element} appendTo={document.body} />}
            </span>
        );
    })
);

Image.displayName = 'Image';
