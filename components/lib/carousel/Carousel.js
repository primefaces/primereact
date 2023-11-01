import * as React from 'react';
import PrimeReact, { PrimeReactContext, ariaLabel } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect, usePrevious, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { ChevronUpIcon } from '../icons/chevronup';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames, useMergeProps } from '../utils/Utils';
import { CarouselBase } from './CarouselBase';

const CarouselItem = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, cx } = props;
    const key = props.className && props.className === 'p-carousel-item-cloned' ? 'itemCloned' : 'item';
    const content = props.template(props.item);
    const itemClonedProps = mergeProps(
        {
            className: cx(key, { itemProps: props }),
            'data-p-carousel-item-active': props.active,
            'data-p-carousel-item-start': props.start,
            'data-p-carousel-item-end': props.end
        },
        ptm(key)
    );

    return <div {...itemClonedProps}>{content}</div>;
});

export const Carousel = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = CarouselBase.getProps(inProps, context);
        const mergeProps = useMergeProps();

        const [numVisibleState, setNumVisibleState] = React.useState(props.numVisible);
        const [numScrollState, setNumScrollState] = React.useState(props.numScroll);
        const [totalShiftedItemsState, setTotalShiftedItemsState] = React.useState(props.page * props.numScroll * -1);
        const [pageState, setPageState] = React.useState(props.page);
        const { ptm, cx, sx, isUnstyled } = CarouselBase.setMetaData({
            props,
            state: {
                numVisible: numVisibleState,
                numScroll: numScrollState,
                totalShiftedItems: totalShiftedItemsState,
                page: pageState
            }
        });

        useHandleStyle(CarouselBase.css.styles, isUnstyled, { name: 'carousel' });
        const elementRef = React.useRef(null);
        const itemsContainerRef = React.useRef(null);
        const remainingItems = React.useRef(0);
        const allowAutoplay = React.useRef(!!props.autoplayInterval);
        const attributeSelector = React.useRef('');
        const swipeThreshold = React.useRef(20);
        const startPos = React.useRef(null);
        const interval = React.useRef(null);
        const carouselStyle = React.useRef(null);
        const isRemainingItemsAdded = React.useRef(false);
        const responsiveOptions = React.useRef(null);
        const prevNumScroll = usePrevious(numScrollState);
        const prevNumVisible = usePrevious(numVisibleState);
        const prevValue = usePrevious(props.value);
        const prevPage = usePrevious(props.page);
        const isVertical = props.orientation === 'vertical';
        const circular = props.circular || !!props.autoplayInterval;
        const isCircular = circular && props.value && props.value.length >= numVisibleState;
        const totalIndicators = props.value ? Math.max(Math.ceil((props.value.length - numVisibleState) / numScrollState) + 1, 0) : 0;
        const isAutoplay = totalIndicators && props.autoplayInterval && allowAutoplay.current;
        const isControlled = props.onPageChange && !isAutoplay;
        const currentPage = isControlled ? props.page : pageState;

        const [bindWindowResizeListener] = useResizeListener({
            listener: () => {
                calculatePosition();
            },
            when: props.responsiveOptions
        });

        const step = (dir, page) => {
            let totalShiftedItems = totalShiftedItemsState;

            if (page != null) {
                totalShiftedItems = numScrollState * page * -1;

                if (isCircular) {
                    totalShiftedItems -= numVisibleState;
                }

                isRemainingItemsAdded.current = false;
            } else {
                totalShiftedItems += numScrollState * dir;

                if (isRemainingItemsAdded.current) {
                    totalShiftedItems += remainingItems.current - numScrollState * dir;
                    isRemainingItemsAdded.current = false;
                }

                const originalShiftedItems = isCircular ? totalShiftedItems + numVisibleState : totalShiftedItems;

                page = Math.abs(Math.floor(originalShiftedItems / numScrollState));
            }

            if (isCircular && pageState === totalIndicators - 1 && dir === -1) {
                totalShiftedItems = -1 * (props.value.length + numVisibleState);
                page = 0;
            } else if (isCircular && pageState === 0 && dir === 1) {
                totalShiftedItems = 0;
                page = totalIndicators - 1;
            } else if (page === totalIndicators - 1 && remainingItems.current > 0) {
                totalShiftedItems += remainingItems.current * -1 - numScrollState * dir;
                isRemainingItemsAdded.current = true;
            }

            if (itemsContainerRef.current) {
                !isUnstyled() && DomHandler.removeClass(itemsContainerRef.current, 'p-items-hidden');
                changePosition(totalShiftedItems);
                itemsContainerRef.current.style.transition = 'transform 500ms ease 0s';
            }

            changePage(page);
            setTotalShiftedItemsState(totalShiftedItems);
        };

        const calculatePosition = () => {
            if (itemsContainerRef.current && responsiveOptions.current) {
                let windowWidth = window.innerWidth;
                let matchedResponsiveData = {
                    numVisible: props.numVisible,
                    numScroll: props.numScroll
                };

                for (let i = 0; i < responsiveOptions.current.length; i++) {
                    let res = responsiveOptions.current[i];

                    if (parseInt(res.breakpoint, 10) >= windowWidth) {
                        matchedResponsiveData = res;
                    }
                }

                if (numScrollState !== matchedResponsiveData.numScroll) {
                    let page = Math.floor((currentPage * numScrollState) / matchedResponsiveData.numScroll);
                    let totalShiftedItems = matchedResponsiveData.numScroll * page * -1;

                    if (isCircular) {
                        totalShiftedItems -= matchedResponsiveData.numVisible;
                    }

                    setTotalShiftedItemsState(totalShiftedItems);
                    setNumScrollState(matchedResponsiveData.numScroll);
                    changePage(page);
                }

                if (numVisibleState !== matchedResponsiveData.numVisible) {
                    setNumVisibleState(matchedResponsiveData.numVisible);
                }
            }
        };

        const navBackward = (e, page) => {
            if (circular || currentPage !== 0) {
                step(1, page);
            }

            allowAutoplay.current = false;

            if (e.cancelable) {
                e.preventDefault();
            }
        };

        const navForward = (e, page) => {
            if (circular || currentPage < totalIndicators - 1) {
                step(-1, page);
            }

            allowAutoplay.current = false;

            if (e.cancelable) {
                e.preventDefault();
            }
        };

        const onDotClick = (e, page) => {
            if (page > currentPage) {
                navForward(e, page);
            } else if (page < currentPage) {
                navBackward(e, page);
            }
        };

        const onTransitionEnd = (e) => {
            if (itemsContainerRef.current && e.propertyName === 'transform') {
                DomHandler.addClass(itemsContainerRef.current, 'p-items-hidden');
                itemsContainerRef.current.style.transition = '';

                if ((pageState === 0 || pageState === totalIndicators - 1) && isCircular) {
                    changePosition(totalShiftedItemsState);
                }
            }
        };

        const onTouchStart = (e) => {
            const touchobj = e.changedTouches[0];

            startPos.current = {
                x: touchobj.pageX,
                y: touchobj.pageY
            };
        };

        const onTouchMove = (e) => {
            if (e.cancelable) {
                e.preventDefault();
            }
        };

        const onTouchEnd = (e) => {
            const touchobj = e.changedTouches[0];

            if (isVertical) {
                changePageOnTouch(e, touchobj.pageY - startPos.current.y);
            } else {
                changePageOnTouch(e, touchobj.pageX - startPos.current.x);
            }
        };

        const changePageOnTouch = (e, diff) => {
            if (Math.abs(diff) > swipeThreshold.current) {
                if (diff < 0) {
                    // left
                    navForward(e);
                } else {
                    // right
                    navBackward(e);
                }
            }
        };

        const startAutoplay = () => {
            if (props.autoplayInterval > 0) {
                interval.current = setInterval(() => {
                    if (pageState === totalIndicators - 1) {
                        step(-1, 0);
                    } else {
                        step(-1, pageState + 1);
                    }
                }, props.autoplayInterval);
            }
        };

        const stopAutoplay = () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };

        const createStyle = () => {
            if (!carouselStyle.current) {
                carouselStyle.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);
            }

            let innerHTML = `
            .p-carousel[${attributeSelector.current}] .p-carousel-item {
                flex: 1 0 ${100 / numVisibleState}%
            }
        `;

            if (props.responsiveOptions) {
                const comparator = ObjectUtils.localeComparator((context && context.locale) || PrimeReact.locale);

                responsiveOptions.current = [...props.responsiveOptions];
                responsiveOptions.current.sort((data1, data2) => {
                    const value1 = data1.breakpoint;
                    const value2 = data2.breakpoint;

                    return ObjectUtils.sort(value1, value2, -1, comparator, (context && context.nullSortOrder) || PrimeReact.nullSortOrder);
                });

                for (let i = 0; i < responsiveOptions.current.length; i++) {
                    let res = responsiveOptions.current[i];

                    innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        .p-carousel[${attributeSelector.current}] .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
                }
            }

            carouselStyle.current.innerHTML = innerHTML;
        };

        const destroyStyle = () => {
            carouselStyle.current = DomHandler.removeInlineStyle(carouselStyle.current);
        };

        const changePosition = (totalShiftedItems) => {
            if (itemsContainerRef.current) {
                itemsContainerRef.current.style.transform = isVertical ? `translate3d(0, ${totalShiftedItems * (100 / numVisibleState)}%, 0)` : `translate3d(${totalShiftedItems * (100 / numVisibleState)}%, 0, 0)`;
            }
        };

        const changePage = (page) => {
            !isControlled && setPageState(page);
            props.onPageChange && props.onPageChange({ page });
        };

        React.useImperativeHandle(ref, () => ({
            props,
            startAutoplay,
            stopAutoplay,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            if (elementRef.current) {
                attributeSelector.current = UniqueComponentId();
                elementRef.current.setAttribute(attributeSelector.current, '');
            }

            if (!carouselStyle.current) {
                calculatePosition();
                changePosition(totalShiftedItemsState);
                bindWindowResizeListener();
            }
        });

        useUpdateEffect(() => {
            let stateChanged = false;
            let totalShiftedItems = totalShiftedItemsState;

            createStyle();

            if (props.autoplayInterval) {
                stopAutoplay();
            }

            if (prevNumScroll !== numScrollState || prevNumVisible !== numVisibleState || (props.value && prevValue && prevValue.length !== props.value.length)) {
                remainingItems.current = (props.value.length - numVisibleState) % numScrollState;

                let page = currentPage;

                if (totalIndicators !== 0 && page >= totalIndicators) {
                    page = totalIndicators - 1;

                    changePage(page);

                    stateChanged = true;
                }

                totalShiftedItems = page * numScrollState * -1;

                if (isCircular) {
                    totalShiftedItems -= numVisibleState;
                }

                if (page === totalIndicators - 1 && remainingItems.current > 0) {
                    totalShiftedItems += -1 * remainingItems.current + numScrollState;
                    isRemainingItemsAdded.current = true;
                } else {
                    isRemainingItemsAdded.current = false;
                }

                if (totalShiftedItems !== totalShiftedItemsState) {
                    setTotalShiftedItemsState(totalShiftedItems);
                    stateChanged = true;
                }

                changePosition(totalShiftedItems);
            }

            if (isCircular) {
                if (pageState === 0) {
                    totalShiftedItems = -1 * numVisibleState;
                } else if (totalShiftedItems === 0) {
                    totalShiftedItems = -1 * props.value.length;

                    if (remainingItems.current > 0) {
                        isRemainingItemsAdded.current = true;
                    }
                }

                if (totalShiftedItems !== totalShiftedItemsState) {
                    setTotalShiftedItemsState(totalShiftedItems);
                    stateChanged = true;
                }
            }

            if (prevPage !== props.page) {
                if (props.page > prevPage && props.page <= totalIndicators - 1) {
                    step(-1, props.page);
                } else if (props.page < prevPage) {
                    step(1, props.page);
                }
            }

            if (!stateChanged && isAutoplay) {
                startAutoplay();
            }

            return () => {
                if (props.autoplayInterval) {
                    stopAutoplay();
                }

                destroyStyle();
            };
        });

        const createItems = () => {
            if (props.value && props.value.length) {
                let clonedItemsForStarting = null;
                let clonedItemsForFinishing = null;

                if (isCircular) {
                    let clonedElements = null;

                    clonedElements = props.value.slice(-1 * numVisibleState);
                    clonedItemsForStarting = clonedElements.map((item, index) => {
                        const isActive = totalShiftedItemsState * -1 === props.value.length + numVisibleState;
                        const start = index === 0;
                        const end = index === clonedElements.length - 1;
                        const key = index + '_scloned';

                        return <CarouselItem key={key} className="p-carousel-item-cloned" template={props.itemTemplate} item={item} active={isActive} start={start} end={end} ptm={ptm} cx={cx} />;
                    });

                    clonedElements = props.value.slice(0, numVisibleState);
                    clonedItemsForFinishing = clonedElements.map((item, index) => {
                        const isActive = totalShiftedItemsState === 0;
                        const start = index === 0;
                        const end = index === clonedElements.length - 1;
                        const key = index + '_fcloned';

                        return <CarouselItem key={key} className="p-carousel-item-cloned" template={props.itemTemplate} item={item} active={isActive} start={start} end={end} ptm={ptm} cx={cx} />;
                    });
                }

                const items = props.value.map((item, index) => {
                    const firstIndex = isCircular ? -1 * (totalShiftedItemsState + numVisibleState) : totalShiftedItemsState * -1;
                    const lastIndex = firstIndex + numVisibleState - 1;
                    const isActive = firstIndex <= index && lastIndex >= index;
                    const start = firstIndex === index;
                    const end = lastIndex === index;

                    return <CarouselItem key={index} template={props.itemTemplate} item={item} active={isActive} start={start} end={end} ptm={ptm} cx={cx} />;
                });

                return (
                    <>
                        {clonedItemsForStarting}
                        {items}
                        {clonedItemsForFinishing}
                    </>
                );
            }
        };

        const createHeader = () => {
            if (props.header) {
                const headerProps = mergeProps(
                    {
                        className: cx('header')
                    },
                    ptm('header')
                );

                return <div {...headerProps}>{props.header}</div>;
            }

            return null;
        };

        const createFooter = () => {
            if (props.footer) {
                const footerProps = mergeProps(
                    {
                        className: cx('footer')
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{props.footer}</div>;
            }

            return null;
        };

        const createContent = () => {
            const items = createItems();
            const height = isVertical ? props.verticalViewPortHeight : 'auto';
            const backwardNavigator = createBackwardNavigator();
            const forwardNavigator = createForwardNavigator();
            const itemsContentProps = mergeProps(
                {
                    className: cx('itemsContent'),
                    style: sx('itemsContent', { height }),
                    onTouchStart: (e) => onTouchStart(e),
                    onTouchMove: (e) => onTouchMove(e),
                    onTouchEnd: (e) => onTouchEnd(e)
                },
                ptm('itemsContent')
            );

            const containerProps = mergeProps(
                {
                    className: classNames(props.containerClassName, cx('container'))
                },
                ptm('container')
            );

            const itemsContainerProps = mergeProps(
                {
                    className: cx('itemsContainer'),
                    onTransitionEnd: onTransitionEnd
                },
                ptm('itemsContainer')
            );

            return (
                <div {...containerProps}>
                    {backwardNavigator}
                    <div {...itemsContentProps}>
                        <div ref={itemsContainerRef} {...itemsContainerProps}>
                            {items}
                        </div>
                    </div>
                    {forwardNavigator}
                </div>
            );
        };

        const createBackwardNavigator = () => {
            if (props.showNavigators) {
                const isDisabled = (!circular || (props.value && props.value.length < numVisibleState)) && currentPage === 0;
                const previousButtonIconProps = mergeProps(
                    {
                        className: cx('previousButtonIcon')
                    },
                    ptm('previousButtonIcon')
                );
                const icon = isVertical ? props.prevIcon || <ChevronUpIcon {...previousButtonIconProps} /> : props.prevIcon || <ChevronLeftIcon {...previousButtonIconProps} />;
                const backwardNavigatorIcon = IconUtils.getJSXIcon(icon, { ...previousButtonIconProps }, { props });
                const previousButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('previousButton', { isDisabled }),
                        onClick: (e) => navBackward(e),
                        disabled: isDisabled,
                        'aria-label': ariaLabel('previousPageLabel')
                    },
                    ptm('previousButton')
                );

                return (
                    <button {...previousButtonProps}>
                        {backwardNavigatorIcon}
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createForwardNavigator = () => {
            if (props.showNavigators) {
                const isDisabled = (!circular || (props.value && props.value.length < numVisibleState)) && (currentPage === totalIndicators - 1 || totalIndicators === 0);
                const nextButtonIconProps = mergeProps(
                    {
                        className: cx('nextButtonIcon')
                    },
                    ptm('nextButtonIcon')
                );
                const icon = isVertical ? props.nextIcon || <ChevronDownIcon {...nextButtonIconProps} /> : props.nextIcon || <ChevronRightIcon {...nextButtonIconProps} />;
                const forwardNavigatorIcon = IconUtils.getJSXIcon(icon, { ...nextButtonIconProps }, { props });
                const nextButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('nextButton', { isDisabled }),
                        onClick: (e) => navForward(e),
                        disabled: isDisabled,
                        'aria-label': ariaLabel('nextPageLabel')
                    },
                    ptm('nextButton')
                );

                return (
                    <button {...nextButtonProps}>
                        {forwardNavigatorIcon}
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createIndicator = (index) => {
            const isActive = currentPage === index;

            const getPTOptions = (key) => {
                return ptm(key, {
                    context: {
                        active: isActive
                    }
                });
            };

            const key = 'carousel-indicator-' + index;
            const indicatorProps = mergeProps(
                {
                    key,
                    className: cx('indicator', { isActive }),
                    'data-p-highlight': isActive
                },
                getPTOptions('indicator')
            );
            const indicatorButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('indicatorButton'),
                    onClick: (e) => onDotClick(e, index),
                    'aria-label': `${ariaLabel('pageLabel')} ${index + 1}`
                },
                getPTOptions('indicatorButton')
            );

            return (
                <li {...indicatorProps}>
                    <button {...indicatorButtonProps}>
                        <Ripple />
                    </button>
                </li>
            );
        };

        const createIndicators = () => {
            if (props.showIndicators) {
                let indicators = [];

                for (let i = 0; i < totalIndicators; i++) {
                    indicators.push(createIndicator(i));
                }

                const indicatorsProps = mergeProps(
                    {
                        className: classNames(props.indicatorsContentClassName, cx('indicators'))
                    },
                    ptm('indicators')
                );

                return <ul {...indicatorsProps}>{indicators}</ul>;
            }

            return null;
        };

        const content = createContent();
        const indicators = createIndicators();
        const header = createHeader();
        const footer = createFooter();
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: classNames(props.className, cx('root', { isVertical })),
                style: props.style
            },
            CarouselBase.getOtherProps(props),
            ptm('root')
        );

        const contentProps = mergeProps(
            {
                className: classNames(props.contentClassName, cx('content'))
            },
            ptm('content')
        );

        return (
            <div {...rootProps}>
                {header}
                <div {...contentProps}>
                    {content}
                    {indicators}
                </div>
                {footer}
            </div>
        );
    })
);

CarouselItem.displayName = 'CarouselItem';

Carousel.displayName = 'Carousel';
