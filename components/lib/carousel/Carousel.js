import * as React from 'react';
import PrimeReact, { ariaLabel } from '../api/Api';
import { useMountEffect, usePrevious, useResizeListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { CarouselBase } from './CarouselBase';

const CarouselItem = React.memo((props) => {
    const content = props.template(props.item);
    const className = classNames(props.className, 'p-carousel-item', {
        'p-carousel-item-active': props.active,
        'p-carousel-item-start': props.start,
        'p-carousel-item-end': props.end
    });

    return <div className={className}>{content}</div>;
});

export const Carousel = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = CarouselBase.getProps(inProps);

        const [numVisibleState, setNumVisibleState] = React.useState(props.numVisible);
        const [numScrollState, setNumScrollState] = React.useState(props.numScroll);
        const [totalShiftedItemsState, setTotalShiftedItemsState] = React.useState(props.page * props.numScroll * -1);
        const [pageState, setPageState] = React.useState(props.page);
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
        const currentPage = props.onPageChange ? props.page : pageState;
        const totalIndicators = props.value ? Math.max(Math.ceil((props.value.length - numVisibleState) / numScrollState) + 1, 0) : 0;
        const isAutoplay = totalIndicators && props.autoplayInterval && allowAutoplay.current;

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
                DomHandler.removeClass(itemsContainerRef.current, 'p-items-hidden');
                changePosition(totalShiftedItems);
                itemsContainerRef.current.style.transition = 'transform 500ms ease 0s';
            }

            if (props.onPageChange) {
                setTotalShiftedItemsState(totalShiftedItems);
                props.onPageChange({
                    page
                });
            } else {
                setPageState(page);
                setTotalShiftedItemsState(totalShiftedItems);
            }
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

                    if (props.onPageChange) {
                        props.onPageChange({
                            page
                        });
                    } else {
                        setPageState(page);
                    }
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
            if (Math.abs(diff) > swipeThreshold) {
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
            interval.current = setInterval(() => {
                if (pageState === totalIndicators - 1) {
                    step(-1, 0);
                } else {
                    step(-1, pageState + 1);
                }
            }, props.autoplayInterval);
        };

        const stopAutoplay = () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };

        const createStyle = () => {
            if (!carouselStyle.current) {
                carouselStyle.current = DomHandler.createInlineStyle(PrimeReact.nonce);
            }

            let innerHTML = `
            .p-carousel[${attributeSelector.current}] .p-carousel-item {
                flex: 1 0 ${100 / numVisibleState}%
            }
        `;

            if (props.responsiveOptions) {
                responsiveOptions.current = [...props.responsiveOptions];
                responsiveOptions.current.sort((data1, data2) => {
                    const value1 = data1.breakpoint;
                    const value2 = data2.breakpoint;

                    return ObjectUtils.sort(value1, value2, -1, PrimeReact.locale, PrimeReact.nullSortOrder);
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

        const changePosition = (totalShiftedItems) => {
            if (itemsContainerRef.current) {
                itemsContainerRef.current.style.transform = isVertical ? `translate3d(0, ${totalShiftedItems * (100 / numVisibleState)}%, 0)` : `translate3d(${totalShiftedItems * (100 / numVisibleState)}%, 0, 0)`;
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            if (elementRef.current) {
                attributeSelector.current = UniqueComponentId();
                elementRef.current.setAttribute(attributeSelector.current, '');
            }

            createStyle();
            calculatePosition();
            changePosition(totalShiftedItemsState);
            bindWindowResizeListener();
        });

        useUpdateEffect(() => {
            let stateChanged = false;
            let totalShiftedItems = totalShiftedItemsState;

            if (props.autoplayInterval) {
                stopAutoplay();
            }

            if (prevNumScroll !== numScrollState || prevNumVisible !== numVisibleState || (props.value && prevValue && prevValue.length !== props.value.length)) {
                remainingItems.current = (props.value.length - numVisibleState) % numScrollState;

                let page = currentPage;

                if (totalIndicators !== 0 && page >= totalIndicators) {
                    page = totalIndicators - 1;

                    if (props.onPageChange) {
                        props.onPageChange({
                            page
                        });
                    } else {
                        setPageState(page);
                    }

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
        });

        useUnmountEffect(() => {
            if (props.autoplayInterval) {
                stopAutoplay();
            }
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

                        return <CarouselItem key={key} className="p-carousel-item-cloned" template={props.itemTemplate} item={item} active={isActive} start={start} end={end} />;
                    });

                    clonedElements = props.value.slice(0, numVisibleState);
                    clonedItemsForFinishing = clonedElements.map((item, index) => {
                        const isActive = totalShiftedItemsState === 0;
                        const start = index === 0;
                        const end = index === clonedElements.length - 1;
                        const key = index + '_fcloned';

                        return <CarouselItem key={key} className="p-carousel-item-cloned" template={props.itemTemplate} item={item} active={isActive} start={start} end={end} />;
                    });
                }

                const items = props.value.map((item, index) => {
                    const firstIndex = isCircular ? -1 * (totalShiftedItemsState + numVisibleState) : totalShiftedItemsState * -1;
                    const lastIndex = firstIndex + numVisibleState - 1;
                    const isActive = firstIndex <= index && lastIndex >= index;
                    const start = firstIndex === index;
                    const end = lastIndex === index;

                    return <CarouselItem key={index} template={props.itemTemplate} item={item} active={isActive} start={start} end={end} />;
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
                return <div className="p-carousel-header">{props.header}</div>;
            }

            return null;
        };

        const createFooter = () => {
            if (props.footer) {
                return <div className="p-carousel-footer">{props.footer}</div>;
            }

            return null;
        };

        const createContent = () => {
            const items = createItems();
            const height = isVertical ? props.verticalViewPortHeight : 'auto';
            const backwardNavigator = createBackwardNavigator();
            const forwardNavigator = createForwardNavigator();
            const className = classNames('p-carousel-container', props.containerClassName);

            return (
                <div className={className}>
                    {backwardNavigator}
                    <div className="p-carousel-items-content" style={{ height: height }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                        <div ref={itemsContainerRef} className="p-carousel-items-container" onTransitionEnd={onTransitionEnd}>
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
                const className = classNames('p-carousel-prev p-link', {
                    'p-disabled': isDisabled
                });
                const iconClassName = classNames('p-carousel-prev-icon pi', {
                    'pi-chevron-left': !isVertical,
                    'pi-chevron-up': isVertical
                });

                return (
                    <button type="button" className={className} onClick={navBackward} disabled={isDisabled} aria-label={ariaLabel('previousPageLabel')}>
                        <span className={iconClassName}></span>
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createForwardNavigator = () => {
            if (props.showNavigators) {
                const isDisabled = (!circular || (props.value && props.value.length < numVisibleState)) && (currentPage === totalIndicators - 1 || totalIndicators === 0);
                const className = classNames('p-carousel-next p-link', {
                    'p-disabled': isDisabled
                });
                const iconClassName = classNames('p-carousel-next-icon pi', {
                    'pi-chevron-right': !isVertical,
                    'pi-chevron-down': isVertical
                });

                return (
                    <button type="button" className={className} onClick={navForward} disabled={isDisabled} aria-label={ariaLabel('nextPageLabel')}>
                        <span className={iconClassName}></span>
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createIndicator = (index) => {
            const isActive = currentPage === index;
            const key = 'carousel-indicator-' + index;
            const className = classNames('p-carousel-indicator', {
                'p-highlight': isActive
            });

            return (
                <li key={key} className={className}>
                    <button type="button" className="p-link" onClick={(e) => onDotClick(e, index)} aria-label={`${ariaLabel('pageLabel')} ${index + 1}`}>
                        <Ripple />
                    </button>
                </li>
            );
        };

        const createIndicators = () => {
            if (props.showIndicators) {
                const className = classNames('p-carousel-indicators p-reset', props.indicatorsContentClassName);
                let indicators = [];

                for (let i = 0; i < totalIndicators; i++) {
                    indicators.push(createIndicator(i));
                }

                return <ul className={className}>{indicators}</ul>;
            }

            return null;
        };

        const otherProps = CarouselBase.getOtherProps(props);
        const className = classNames(
            'p-carousel p-component',
            {
                'p-carousel-vertical': isVertical,
                'p-carousel-horizontal': !isVertical
            },
            props.className
        );
        const contentClassName = classNames('p-carousel-content', props.contentClassName);
        const content = createContent();
        const indicators = createIndicators();
        const header = createHeader();
        const footer = createFooter();

        return (
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                {header}
                <div className={contentClassName}>
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
