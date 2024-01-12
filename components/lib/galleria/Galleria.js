import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useInterval, useMergeProps, useUnmountEffect } from '../hooks/Hooks';
import { TimesIcon } from '../icons/times';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { GalleriaBase } from './GalleriaBase';
import { GalleriaItem } from './GalleriaItem';
import { GalleriaThumbnails } from './GalleriaThumbnails';

export const Galleria = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = GalleriaBase.getProps(inProps, context);

        const [visibleState, setVisibleState] = React.useState(false);
        const [numVisibleState, setNumVisibleState] = React.useState(props.numVisible);
        const [slideShowActiveState, setSlideShowActiveState] = React.useState(false);
        const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
        const elementRef = React.useRef(null);
        const previewContentRef = React.useRef(null);
        const maskRef = React.useRef(null);
        const activeItemIndex = props.onItemChange ? props.activeIndex : activeIndexState;
        const isVertical = props.thumbnailsPosition === 'left' || props.thumbnailsPosition === 'right';
        const id = props.id || UniqueComponentId();

        const { ptm, cx, sx, isUnstyled } = GalleriaBase.setMetaData({
            props,
            state: {
                visible: visibleState,
                numVisible: numVisibleState,
                slideShowActive: slideShowActiveState,
                activeIndex: activeIndexState
            }
        });

        useHandleStyle(GalleriaBase.css.styles, isUnstyled, { name: 'galleria' });

        useInterval(
            () => {
                onActiveItemChange({ index: props.circular && props.value.length - 1 === activeItemIndex ? 0 : activeItemIndex + 1 });
            },
            props.transitionInterval,
            slideShowActiveState
        );

        const onActiveItemChange = (event) => {
            if (event.index >= props.value.length) {
                // #3973 AutoPlay without circular should stop the slideshow when it reaches the end
                stopSlideShow();

                return;
            }

            if (props.onItemChange) {
                props.onItemChange(event);
            } else {
                setActiveIndexState(event.index);
            }
        };

        const show = () => {
            setVisibleState(true);
        };

        const hide = () => {
            setVisibleState(false);
        };

        const onEnter = () => {
            DomHandler.blockBodyScroll();
        };

        const onEntering = () => {
            ZIndexUtils.set('modal', maskRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['modal']) || PrimeReact.zIndex['modal']);
            !isUnstyled() && DomHandler.addMultipleClasses(maskRef.current, 'p-component-overlay p-component-overlay-enter');
        };

        const onEntered = () => {
            props.onShow && props.onShow();
        };

        const onExit = () => {
            DomHandler.unblockBodyScroll();
            !isUnstyled() && DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
        };

        const onExited = () => {
            ZIndexUtils.clear(maskRef.current);

            props.onHide && props.onHide();
        };

        const isAutoPlayActive = () => {
            return slideShowActiveState;
        };

        const startSlideShow = () => {
            setSlideShowActiveState(true);
        };

        const stopSlideShow = () => {
            setSlideShowActiveState(false);
        };

        const getPositionClassName = (preClassName, position) => {
            const positions = ['top', 'left', 'bottom', 'right'];
            const pos = positions.find((item) => item === position);

            return pos ? `${preClassName}-${pos}` : '';
        };

        React.useEffect(() => {
            if (props.value && props.value.length < numVisibleState) {
                setNumVisibleState(props.value.length);
            }
        }, [props.value, numVisibleState]);

        React.useEffect(() => {
            setNumVisibleState(props.numVisible);
        }, [props.numVisible]);

        useUnmountEffect(() => {
            if (slideShowActiveState) {
                stopSlideShow();
            }

            ZIndexUtils.clear(maskRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            isAutoPlayActive,
            startSlideShow,
            stopSlideShow,
            getElement: () => elementRef.current,
            getPreviewContent: () => previewContentRef.current
        }));

        const createHeader = () => {
            const headerProps = mergeProps(
                {
                    className: cx('header')
                },
                ptm('header')
            );

            if (props.header) {
                return <div {...headerProps}>{props.header}</div>;
            }

            return null;
        };

        const createFooter = () => {
            const footerProps = mergeProps(
                {
                    className: cx('footer')
                },
                ptm('footer')
            );

            if (props.footer) {
                return <div {...footerProps}>{props.footer}</div>;
            }

            return null;
        };

        const createElement = () => {
            const thumbnailsPosClassName = props.showThumbnails && getPositionClassName('p-galleria-thumbnails', props.thumbnailsPosition);
            const indicatorPosClassName = props.showIndicators && getPositionClassName('p-galleria-indicators', props.indicatorsPosition);

            const closeIconProps = mergeProps(
                {
                    className: cx('closeIcon'),
                    'aria-hidden': true
                },
                ptm('closeIcon')
            );
            const icon = props.closeIcon || <TimesIcon {...closeIconProps} />;
            const closeIcon = IconUtils.getJSXIcon(icon, { ...closeIconProps }, { props });

            const closeButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('closeButton'),
                    'aria-label': localeOption('aria') ? localeOption('aria').close : undefined,
                    onClick: hide
                },
                ptm('closeButton')
            );

            const closeButton = props.fullScreen && (
                <button {...closeButtonProps}>
                    {closeIcon}
                    <Ripple />
                </button>
            );

            const header = createHeader();
            const footer = createFooter();

            const rootProps = mergeProps(
                {
                    ref: elementRef,
                    id: id,
                    className: classNames(props.className, cx('root', { context, thumbnailsPosClassName, indicatorPosClassName })),
                    style: props.style,
                    role: 'region'
                },
                GalleriaBase.getOtherProps(props),
                ptm('root')
            );

            const contentProps = mergeProps(
                {
                    className: cx('content'),
                    'aria-live': props.autoPlay ? 'polite' : 'off'
                },
                ptm('content')
            );

            const element = (
                <div {...rootProps}>
                    {closeButton}
                    {header}
                    <div {...contentProps}>
                        <GalleriaItem
                            hostName="Galleria"
                            ref={previewContentRef}
                            id={id}
                            value={props.value}
                            activeItemIndex={activeItemIndex}
                            onActiveItemChange={onActiveItemChange}
                            itemTemplate={props.item}
                            circular={props.circular}
                            caption={props.caption}
                            showIndicators={props.showIndicators}
                            itemPrevIcon={props.itemPrevIcon}
                            itemNextIcon={props.itemNextIcon}
                            changeItemOnIndicatorHover={props.changeItemOnIndicatorHover}
                            indicator={props.indicator}
                            showItemNavigators={props.showItemNavigators}
                            autoPlay={props.autoPlay}
                            slideShowActive={slideShowActiveState}
                            startSlideShow={startSlideShow}
                            stopSlideShow={stopSlideShow}
                            ptm={ptm}
                            cx={cx}
                        />

                        {props.showThumbnails && (
                            <GalleriaThumbnails
                                hostName="Galleria"
                                value={props.value}
                                containerId={id}
                                activeItemIndex={activeItemIndex}
                                onActiveItemChange={onActiveItemChange}
                                itemTemplate={props.thumbnail}
                                numVisible={numVisibleState}
                                nextThumbnailIcon={props.nextThumbnailIcon}
                                prevThumbnailIcon={props.prevThumbnailIcon}
                                responsiveOptions={props.responsiveOptions}
                                circular={props.circular}
                                isVertical={isVertical}
                                contentHeight={props.verticalThumbnailViewPortHeight}
                                showThumbnailNavigators={props.showThumbnailNavigators}
                                autoPlay={props.autoPlay}
                                slideShowActive={slideShowActiveState}
                                stopSlideShow={stopSlideShow}
                                isUnstyled={isUnstyled}
                                ptm={ptm}
                                cx={cx}
                                sx={sx}
                            />
                        )}
                    </div>
                    {footer}
                </div>
            );

            return element;
        };

        const createGalleria = () => {
            const element = createElement();

            if (props.fullScreen) {
                const maskProps = mergeProps(
                    {
                        className: cx('mask', { visibleState }),
                        role: 'dialog',
                        'aria-modal': 'true'
                    },
                    ptm('mask')
                );

                const transitionProps = mergeProps(
                    {
                        classNames: cx('transition'),
                        in: visibleState,
                        timeout: { enter: 150, exit: 150 },
                        options: props.transitionOptions,
                        unmountOnExit: true,
                        onEnter,
                        onEntering,
                        onEntered,
                        onExit,
                        onExited
                    },
                    ptm('transition')
                );

                const galleriaWrapper = (
                    <div ref={maskRef} {...maskProps}>
                        <CSSTransition nodeRef={elementRef} {...transitionProps}>
                            {element}
                        </CSSTransition>
                    </div>
                );

                return <Portal element={galleriaWrapper} />;
            }

            return element;
        };

        return ObjectUtils.isNotEmpty(props.value) && createGalleria();
    })
);

Galleria.displayName = 'Galleria';
