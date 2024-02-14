import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useGlobalOnEscapeKey, useMergeProps, useUnmountEffect } from '../hooks/Hooks';
import { DownloadIcon } from '../icons/download';
import { EyeIcon } from '../icons/eye';
import { RefreshIcon } from '../icons/refresh';
import { SearchMinusIcon } from '../icons/searchminus';
import { SearchPlusIcon } from '../icons/searchplus';
import { TimesIcon } from '../icons/times';
import { UndoIcon } from '../icons/undo';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { ImageBase } from './ImageBase';

export const Image = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ImageBase.getProps(inProps, context);

        const [maskVisibleState, setMaskVisibleState] = React.useState(false);
        const [previewVisibleState, setPreviewVisibleState] = React.useState(false);
        const [rotateState, setRotateState] = React.useState(0);
        const [scaleState, setScaleState] = React.useState(1);
        const elementRef = React.useRef(null);
        const imageRef = React.useRef(null);
        const maskRef = React.useRef(null);
        const previewRef = React.useRef(null);
        const previewButton = React.useRef(null);
        const zoomOutDisabled = scaleState <= 0.5;
        const zoomInDisabled = scaleState >= 1.5;
        const { ptm, cx, sx, isUnstyled } = ImageBase.setMetaData({
            props,
            state: {
                maskVisible: maskVisibleState,
                previewVisible: previewVisibleState,
                rotate: rotateState,
                scale: scaleState
            }
        });

        useGlobalOnEscapeKey({
            callback: () => {
                if (props.closeOnEscape) {
                    hide();
                }
            },
            when: maskVisibleState,
            priority: [
                ESC_KEY_HANDLING_PRIORITIES.IMAGE,
                // Assume that there could be only one image mask activated, so it's safe
                // to provide one and the same priority all the time:
                0
            ]
        });

        useHandleStyle(ImageBase.css.styles, isUnstyled, { name: 'image' });

        const show = () => {
            if (props.preview) {
                setMaskVisibleState(true);
                DomHandler.blockBodyScroll();
                setTimeout(() => {
                    setPreviewVisibleState(true);
                }, 25);
            }
        };

        const hide = () => {
            setPreviewVisibleState(false);
            DomHandler.unblockBodyScroll();
            setRotateState(0);
            setScaleState(1);
        };

        const onMaskClick = (event) => {
            const isActionbarTarget = [event.target.classList].includes('p-image-action') || event.target.closest('.p-image-action');

            if (isActionbarTarget) {
                return;
            }

            hide();
        };

        const onMaskKeydown = (event) => {
            switch (event.code) {
                case 'Escape':
                    hide();
                    setTimeout(() => {
                        DomHandler.focus(previewButton.current);
                    }, 200);
                    event.preventDefault();

                    break;

                default:
                    break;
            }
        };

        const onDownload = () => {
            const { alt: name, src } = props;

            DomHandler.saveAs({ name, src });
        };

        const rotateRight = () => {
            setRotateState((prevRotate) => prevRotate + 90);
        };

        const rotateLeft = () => {
            setRotateState((prevRotate) => prevRotate - 90);
        };

        const zoomIn = () => {
            setScaleState((prevScale) => {
                if (zoomInDisabled) return prevScale;

                return prevScale + 0.1;
            });
        };

        const zoomOut = () => {
            setScaleState((prevScale) => {
                if (zoomOutDisabled) return prevScale;

                return prevScale - 0.1;
            });
        };

        const onEntering = () => {
            ZIndexUtils.set('modal', maskRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['modal']) || PrimeReact.zIndex['modal']);
        };

        const onEntered = () => {
            props.onShow && props.onShow();
        };

        const onExit = () => {
            !isUnstyled() && DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
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
            const ariaLabel = localeOption('aria') ? localeOption('aria').zoomImage : undefined;
            const buttonProps = mergeProps(
                {
                    ref: previewButton,
                    className: cx('button'),
                    onClick: show,
                    type: 'button',
                    'aria-label': ariaLabel
                },
                ptm('button')
            );

            if (props.preview) {
                return <button {...buttonProps}>{content}</button>;
            }

            return null;
        };

        const createElement = () => {
            const { downloadable, alt, crossOrigin, referrerPolicy, useMap, loading } = props;
            const downloadIconProps = mergeProps(ptm('downloadIcon'));
            const rotateRightIconProps = mergeProps(ptm('rotateRightIcon'));
            const rotateLeftIconProps = mergeProps(ptm('rotateLeftIcon'));
            const zoomOutIconProps = mergeProps(ptm('zoomOutIcon'));
            const zoomInIconProps = mergeProps(ptm('zoomInIcon'));
            const closeIconProps = mergeProps(ptm('closeIcon'));
            const downloadIcon = IconUtils.getJSXIcon(props.downloadIcon || <DownloadIcon />, { ...downloadIconProps }, { props });
            const rotateRightIcon = IconUtils.getJSXIcon(props.rotateRightIcon || <RefreshIcon />, { ...rotateRightIconProps }, { props });
            const rotateLeftIcon = IconUtils.getJSXIcon(props.rotateLeftIcon || <UndoIcon />, { ...rotateLeftIconProps }, { props });
            const zoomOutIcon = IconUtils.getJSXIcon(props.zoomOutIcon || <SearchMinusIcon />, { ...zoomOutIconProps }, { props });
            const zoomInIcon = IconUtils.getJSXIcon(props.zoomInIcon || <SearchPlusIcon />, { ...zoomInIconProps }, { props });
            const closeIcon = IconUtils.getJSXIcon(props.closeIcon || <TimesIcon />, { ...closeIconProps }, { props });

            const maskProps = mergeProps(
                {
                    ref: maskRef,
                    role: 'dialog',
                    className: cx('mask'),
                    'aria-modal': maskVisibleState,
                    onClick: onMaskClick,
                    onKeyDown: onMaskKeydown
                },
                ptm('mask')
            );

            const toolbarProps = mergeProps(
                {
                    className: cx('toolbar')
                },
                ptm('toolbar')
            );

            const downloadButtonProps = mergeProps(
                {
                    className: cx('downloadButton'),
                    onPointerUp: onDownload,
                    type: 'button'
                },
                ptm('downloadButton')
            );

            const rotateRightButtonProps = mergeProps(
                {
                    className: cx('rotateRightButton'),
                    onClick: rotateRight,
                    type: 'button',
                    'aria-label': localeOption('aria') ? localeOption('aria').rotateRight : undefined,
                    'data-pc-group-section': 'action'
                },
                ptm('rotateRightButton')
            );

            const rotateLeftButtonProps = mergeProps(
                {
                    className: cx('rotateLeftButton'),
                    onClick: rotateLeft,
                    type: 'button',
                    'aria-label': localeOption('aria') ? localeOption('aria').rotateLeft : undefined,
                    'data-pc-group-section': 'action'
                },
                ptm('rotateLeftButton')
            );

            const zoomOutButtonProps = mergeProps(
                {
                    className: classNames(cx('zoomOutButton'), { 'p-disabled': zoomOutDisabled }),
                    style: { pointerEvents: 'auto' },
                    onClick: zoomOut,
                    type: 'button',
                    disabled: zoomOutDisabled,
                    'aria-label': localeOption('aria') ? localeOption('aria').zoomOut : undefined,
                    'data-pc-group-section': 'action'
                },
                ptm('zoomOutButton')
            );

            const zoomInButtonProps = mergeProps(
                {
                    className: classNames(cx('zoomInButton'), { 'p-disabled': zoomInDisabled }),
                    style: { pointerEvents: 'auto' },
                    onClick: zoomIn,
                    type: 'button',
                    disabled: zoomInDisabled,
                    'aria-label': localeOption('aria') ? localeOption('aria').zoomIn : undefined,
                    'data-pc-group-section': 'action'
                },
                ptm('zoomInButton')
            );

            const closeButtonProps = mergeProps(
                {
                    className: cx('closeButton'),
                    type: 'button',
                    onClick: hide,
                    'aria-label': localeOption('aria') ? localeOption('aria').close : undefined,
                    autoFocus: true,
                    'data-pc-group-section': 'action'
                },
                ptm('closeButton')
            );

            const previewProps = mergeProps(
                {
                    src: props.zoomSrc || props.src,
                    className: cx('preview'),
                    style: sx('preview', { rotateState, scaleState }),
                    crossOrigin: crossOrigin,
                    referrerPolicy: referrerPolicy,
                    useMap: useMap,
                    loading: loading
                },
                ptm('preview')
            );
            const previewContainerProps = mergeProps(
                {
                    ref: previewRef
                },
                ptm('previewContainer')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: previewVisibleState,
                    timeout: { enter: 150, exit: 150 },
                    unmountOnExit: true,
                    onEntering: onEntering,
                    onEntered: onEntered,
                    onExit: onExit,
                    onExiting: onExiting,
                    onExited: onExited
                },
                ptm('transition')
            );

            return (
                <div {...maskProps}>
                    <div {...toolbarProps}>
                        {downloadable && <button {...downloadButtonProps}>{downloadIcon}</button>}
                        <button {...rotateRightButtonProps}>{rotateRightIcon}</button>
                        <button {...rotateLeftButtonProps}>{rotateLeftIcon}</button>
                        <button {...zoomOutButtonProps}>{zoomOutIcon}</button>
                        <button {...zoomInButtonProps}>{zoomInIcon}</button>
                        <button {...closeButtonProps}>{closeIcon}</button>
                    </div>
                    <CSSTransition nodeRef={previewRef} {...transitionProps}>
                        <div {...previewContainerProps}>
                            <img alt={alt} {...previewProps} />
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
        const element = createElement();
        const iconProp = mergeProps(
            {
                className: cx('icon')
            },
            ptm('icon')
        );
        const icon = props.indicatorIcon || <EyeIcon {...iconProp} />;
        const indicatorIcon = IconUtils.getJSXIcon(icon, { ...iconProp }, { props });
        const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : indicatorIcon;
        const preview = createPreview();
        const imageProp = mergeProps(
            {
                ref: imageRef,
                src: src,
                className: props.imageClassName,
                width: width,
                height: height,
                crossOrigin: crossOrigin,
                referrerPolicy: referrerPolicy,
                useMap: useMap,
                loading: loading,
                style: props.imageStyle,
                onError: props.onError
            },
            ptm('image')
        );
        const image = props.src && <img {...imageProp} alt={alt} />;

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: cx('root')
            },
            ImageBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <span {...rootProps}>
                {image}
                {preview}
                {maskVisibleState && <Portal element={element} appendTo={document.body} />}
            </span>
        );
    })
);

Image.displayName = 'Image';
