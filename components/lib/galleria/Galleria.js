import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useInterval, useUnmountEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { GalleriaItem } from './GalleriaItem';
import { GalleriaThumbnails } from './GalleriaThumbnails';

export const Galleria = React.memo(React.forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = React.useState(false);
    const [numVisibleState, setNumVisibleState] = React.useState(props.numVisible);
    const [slideShowActiveState, setSlideShowActiveState] = React.useState(false);
    const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
    const elementRef = React.useRef(null);
    const previewContentRef = React.useRef(null);
    const maskRef = React.useRef(null);
    const activeItemIndex = props.onItemChange ? props.activeIndex : activeIndexState;
    const isVertical = props.thumbnailsPosition === 'left' || props.thumbnailsPosition === 'right';

    useInterval(() => {
        onActiveItemChange({ index: (props.circular && (props.value.length - 1) === activeItemIndex) ? 0 : (activeItemIndex + 1) });
    }, props.transitionInterval, slideShowActiveState);

    const onActiveItemChange = (event) => {
        if (props.onItemChange) {
            props.onItemChange(event);
        }
        else {
            setActiveIndexState(event.index);
        }
    }

    const show = () => {
        setVisibleState(true);
    }

    const hide = () => {
        setVisibleState(false);
    }

    const onEnter = () => {
        DomHandler.addClass(document.body, 'p-overflow-hidden');
    }

    const onEntering = () => {
        ZIndexUtils.set('modal', maskRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['modal']);
        DomHandler.addMultipleClasses(maskRef.current, 'p-component-overlay p-component-overlay-enter');
    }

    const onEntered = () => {
        props.onShow && props.onShow();
    }

    const onExit = () => {
        DomHandler.removeClass(document.body, 'p-overflow-hidden');
        DomHandler.addClass(maskRef.current, 'p-component-overlay-leave');
    }

    const onExited = () => {
        ZIndexUtils.clear(maskRef.current);

        props.onHide && props.onHide();
    }

    const isAutoPlayActive = () => {
        return slideShowActiveState;
    }

    const startSlideShow = () => {
        setSlideShowActiveState(true);
    }

    const stopSlideShow = () => {
        setSlideShowActiveState(false);
    }

    const getPositionClassName = (preClassName, position) => {
        const positions = ['top', 'left', 'bottom', 'right'];
        const pos = positions.find(item => item === position);

        return pos ? `${preClassName}-${pos}` : '';
    }

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
        show,
        hide,
        isAutoPlayActive,
        startSlideShow,
        stopSlideShow
    }));

    const createHeader = () => {
        if (props.header) {
            return (
                <div className="p-galleria-header">
                    {props.header}
                </div>
            )
        }

        return null;
    }

    const createFooter = () => {
        if (props.footer) {
            return (
                <div className="p-galleria-footer">
                    {props.footer}
                </div>
            )
        }

        return null;
    }

    const createElement = () => {
        const otherProps = ObjectUtils.findDiffKeys(props, Galleria.defaultProps);
        const thumbnailsPosClassName = props.showThumbnails && getPositionClassName('p-galleria-thumbnails', props.thumbnailsPosition);
        const indicatorPosClassName = props.showIndicators && getPositionClassName('p-galleria-indicators', props.indicatorsPosition);
        const galleriaClassName = classNames('p-galleria p-component', props.className, {
            'p-galleria-fullscreen': props.fullScreen,
            'p-galleria-indicator-onitem': props.showIndicatorsOnItem,
            'p-galleria-item-nav-onhover': props.showItemNavigatorsOnHover && !props.fullScreen
        }, thumbnailsPosClassName, indicatorPosClassName);

        const closeIcon = props.fullScreen && (
            <button type="button" className="p-galleria-close p-link" onClick={hide}>
                <span className="p-galleria-close-icon pi pi-times"></span>
                <Ripple />
            </button>
        );

        const header = createHeader();
        const footer = createFooter();
        const element = (
            <div ref={elementRef} id={props.id} className={galleriaClassName} style={props.style} {...otherProps}>
                {closeIcon}
                {header}
                <div className="p-galleria-content">
                    <GalleriaItem ref={previewContentRef} value={props.value} activeItemIndex={activeItemIndex} onActiveItemChange={onActiveItemChange}
                        itemTemplate={props.item} circular={props.circular} caption={props.caption}
                        showIndicators={props.showIndicators} changeItemOnIndicatorHover={props.changeItemOnIndicatorHover} indicator={props.indicator}
                        showItemNavigators={props.showItemNavigators} autoPlay={props.autoPlay} slideShowActive={slideShowActiveState}
                        startSlideShow={startSlideShow} stopSlideShow={stopSlideShow} />

                    {
                        props.showThumbnails && <GalleriaThumbnails value={props.value} activeItemIndex={activeItemIndex} onActiveItemChange={onActiveItemChange}
                            itemTemplate={props.thumbnail} numVisible={numVisibleState} responsiveOptions={props.responsiveOptions} circular={props.circular}
                            isVertical={isVertical} contentHeight={props.verticalThumbnailViewPortHeight} showThumbnailNavigators={props.showThumbnailNavigators}
                            autoPlay={props.autoPlay} slideShowActive={slideShowActiveState} stopSlideShow={stopSlideShow} />
                    }
                </div>
                {footer}
            </div>
        )

        return element;
    }

    const createGalleria = () => {
        const element = createElement();

        if (props.fullScreen) {
            const maskClassName = classNames('p-galleria-mask', {
                'p-galleria-visible': visibleState
            });

            const galleriaWrapper = (
                <div ref={maskRef} className={maskClassName}>
                    <CSSTransition nodeRef={elementRef} classNames="p-galleria" in={visibleState} timeout={{ enter: 150, exit: 150 }} options={props.transitionOptions}
                        unmountOnExit onEnter={onEnter} onEntering={onEntering} onEntered={onEntered} onExit={onExit} onExited={onExited}>
                        {element}
                    </CSSTransition>
                </div>
            );

            return <Portal element={galleriaWrapper} />
        }

        return element;
    }

    return ObjectUtils.isNotEmpty(props.value) && createGalleria();
}));

Galleria.displayName = 'Galleria';
Galleria.defaultProps = {
    __TYPE: 'Galleria',
    id: null,
    value: null,
    activeIndex: 0,
    fullScreen: false,
    item: null,
    thumbnail: null,
    indicator: null,
    caption: null,
    className: null,
    style: null,
    header: null,
    footer: null,
    numVisible: 3,
    responsiveOptions: null,
    showItemNavigators: false,
    showThumbnailNavigators: true,
    showItemNavigatorsOnHover: false,
    changeItemOnIndicatorHover: false,
    circular: false,
    autoPlay: false,
    transitionInterval: 4000,
    showThumbnails: true,
    thumbnailsPosition: "bottom",
    verticalThumbnailViewPortHeight: "300px",
    showIndicators: false,
    showIndicatorsOnItem: false,
    indicatorsPosition: "bottom",
    baseZIndex: 0,
    transitionOptions: null,
    onItemChange: null
}
