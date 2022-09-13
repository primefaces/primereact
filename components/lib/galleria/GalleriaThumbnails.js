import * as React from 'react';
import PrimeReact from '../api/Api';
import { useMountEffect, usePrevious, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils, UniqueComponentId } from '../utils/Utils';

const GalleriaThumbnailItem = React.memo((props) => {
    const onItemClick = (event) => {
        props.onItemClick({
            originalEvent: event,
            index: props.index
        });
    };

    const onItemKeyDown = (event) => {
        if (event.which === 13) {
            props.onItemClick({
                originalEvent: event,
                index: props.index
            });
        }
    };

    const tabIndex = props.active ? 0 : null;
    const content = props.template && props.template(props.item);
    const className = classNames(
        'p-galleria-thumbnail-item',
        {
            'p-galleria-thumbnail-item-current': props.current,
            'p-galleria-thumbnail-item-active': props.active,
            'p-galleria-thumbnail-item-start': props.start,
            'p-galleria-thumbnail-item-end': props.end
        },
        props.className
    );

    return (
        <div className={className}>
            <div className="p-galleria-thumbnail-item-content" tabIndex={tabIndex} onClick={onItemClick} onKeyDown={onItemKeyDown}>
                {content}
            </div>
        </div>
    );
});

export const GalleriaThumbnails = React.memo(
    React.forwardRef((props, ref) => {
        const [numVisibleState, setNumVisibleState] = React.useState(props.numVisible);
        const [totalShiftedItemsState, setTotalShiftedItemsState] = React.useState(0);
        const itemsContainerRef = React.useRef(null);
        const startPos = React.useRef(null);
        const attributeSelector = React.useRef('');
        const thumbnailsStyle = React.useRef(null);
        const responsiveOptions = React.useRef(null);
        const prevNumVisible = usePrevious(numVisibleState);
        const prevActiveItemIndex = usePrevious(props.activeItemIndex);

        const [bindWindowResizeListener] = useResizeListener({
            listener: () => {
                calculatePosition();
            },
            when: props.responsiveOptions
        });

        const step = (dir) => {
            let totalShiftedItems = totalShiftedItemsState + dir;

            if (dir < 0 && -1 * totalShiftedItems + numVisibleState > props.value.length - 1) {
                totalShiftedItems = numVisibleState - props.value.length;
            } else if (dir > 0 && totalShiftedItems > 0) {
                totalShiftedItems = 0;
            }

            if (props.circular) {
                if (dir < 0 && props.value.length - 1 === props.activeItemIndex) {
                    totalShiftedItems = 0;
                } else if (dir > 0 && props.activeItemIndex === 0) {
                    totalShiftedItems = numVisibleState - props.value.length;
                }
            }

            if (itemsContainerRef.current) {
                DomHandler.removeClass(itemsContainerRef.current, 'p-items-hidden');
                itemsContainerRef.current.style.transform = props.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / numVisibleState)}%, 0)` : `translate3d(${totalShiftedItems * (100 / numVisibleState)}%, 0, 0)`;
                itemsContainerRef.current.style.transition = 'transform 500ms ease 0s';
            }

            setTotalShiftedItemsState(totalShiftedItems);
        };

        const stopSlideShow = () => {
            if (props.slideShowActive && props.stopSlideShow) {
                props.stopSlideShow();
            }
        };

        const getMedianItemIndex = () => {
            const index = Math.floor(numVisibleState / 2);

            return numVisibleState % 2 ? index : index - 1;
        };

        const navBackward = (e) => {
            stopSlideShow();

            let prevItemIndex = props.activeItemIndex !== 0 ? props.activeItemIndex - 1 : 0;
            let diff = prevItemIndex + totalShiftedItemsState;

            if (numVisibleState - diff - 1 > getMedianItemIndex() && (-1 * totalShiftedItemsState !== 0 || props.circular)) {
                step(1);
            }

            props.onActiveItemChange({
                index: props.circular && props.activeItemIndex === 0 ? props.value.length - 1 : prevItemIndex
            });

            if (e.cancelable) {
                e.preventDefault();
            }
        };

        const navForward = (e) => {
            stopSlideShow();

            let nextItemIndex = props.activeItemIndex + 1;

            if (nextItemIndex + totalShiftedItemsState > getMedianItemIndex() && (-1 * totalShiftedItemsState < getTotalPageNumber() - 1 || props.circular)) {
                step(-1);
            }

            props.onActiveItemChange({
                index: props.circular && props.value.length - 1 === props.activeItemIndex ? 0 : nextItemIndex
            });

            if (e.cancelable) {
                e.preventDefault();
            }
        };

        const onItemClick = (event) => {
            stopSlideShow();

            let selectedItemIndex = event.index;

            if (selectedItemIndex !== props.activeItemIndex) {
                const diff = selectedItemIndex + totalShiftedItemsState;
                let dir = 0;

                if (selectedItemIndex < props.activeItemIndex) {
                    dir = numVisibleState - diff - 1 - getMedianItemIndex();

                    if (dir > 0 && -1 * totalShiftedItemsState !== 0) {
                        step(dir);
                    }
                } else {
                    dir = getMedianItemIndex() - diff;

                    if (dir < 0 && -1 * totalShiftedItemsState < getTotalPageNumber() - 1) {
                        step(dir);
                    }
                }

                props.onActiveItemChange({
                    index: selectedItemIndex
                });
            }
        };

        const onTransitionEnd = (e) => {
            if (itemsContainerRef.current && e.propertyName === 'transform') {
                DomHandler.addClass(itemsContainerRef.current, 'p-items-hidden');
                itemsContainerRef.current.style.transition = '';
            }
        };

        const onTouchStart = (e) => {
            let touchobj = e.changedTouches[0];

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
            let touchobj = e.changedTouches[0];

            if (props.isVertical) {
                changePageOnTouch(e, touchobj.pageY - startPos.current.y);
            } else {
                changePageOnTouch(e, touchobj.pageX - startPos.current.x);
            }
        };

        const changePageOnTouch = (e, diff) => {
            if (diff < 0) {
                // left
                navForward(e);
            } else {
                // right
                navBackward(e);
            }
        };

        const getTotalPageNumber = () => {
            return props.value.length > numVisibleState ? props.value.length - numVisibleState + 1 : 0;
        };

        const createStyle = () => {
            if (!thumbnailsStyle.current) {
                thumbnailsStyle.current = DomHandler.createInlineStyle(PrimeReact.nonce);
            }

            let innerHTML = `
            .p-galleria-thumbnail-items[${attributeSelector.current}] .p-galleria-thumbnail-item {
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
                        .p-galleria-thumbnail-items[${attributeSelector.current}] .p-galleria-thumbnail-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
                }
            }

            thumbnailsStyle.current.innerHTML = innerHTML;
        };

        const calculatePosition = () => {
            if (itemsContainerRef.current && responsiveOptions.current) {
                let windowWidth = window.innerWidth;
                let matchedResponsiveData = {
                    numVisible: props.numVisible
                };

                for (let i = 0; i < responsiveOptions.current.length; i++) {
                    let res = responsiveOptions.current[i];

                    if (parseInt(res.breakpoint, 10) >= windowWidth) {
                        matchedResponsiveData = res;
                    }
                }

                if (numVisibleState !== matchedResponsiveData.numVisible) {
                    setNumVisibleState(matchedResponsiveData.numVisible);
                }
            }
        };

        useMountEffect(() => {
            if (itemsContainerRef.current) {
                attributeSelector.current = UniqueComponentId();
                itemsContainerRef.current.setAttribute(attributeSelector.current, '');
            }

            createStyle();
            calculatePosition();
            bindWindowResizeListener();
        });

        useUpdateEffect(() => {
            let totalShiftedItems = totalShiftedItemsState;

            if (prevNumVisible !== numVisibleState || prevActiveItemIndex !== props.activeItemIndex) {
                if (props.activeItemIndex <= getMedianItemIndex()) {
                    totalShiftedItems = 0;
                } else if (props.value.length - numVisibleState + getMedianItemIndex() < props.activeItemIndex) {
                    totalShiftedItems = numVisibleState - props.value.length;
                } else if (props.value.length - numVisibleState < props.activeItemIndex && numVisibleState % 2 === 0) {
                    totalShiftedItems = props.activeItemIndex * -1 + getMedianItemIndex() + 1;
                } else {
                    totalShiftedItems = props.activeItemIndex * -1 + getMedianItemIndex();
                }

                if (totalShiftedItems !== totalShiftedItemsState) {
                    setTotalShiftedItemsState(totalShiftedItems);
                }

                itemsContainerRef.current.style.transform = props.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / numVisibleState)}%, 0)` : `translate3d(${totalShiftedItems * (100 / numVisibleState)}%, 0, 0)`;

                if (prevActiveItemIndex !== props.activeItemIndex) {
                    DomHandler.removeClass(itemsContainerRef.current, 'p-items-hidden');
                    itemsContainerRef.current.style.transition = 'transform 500ms ease 0s';
                }
            }
        });

        const createItems = () => {
            return props.value.map((item, index) => {
                const firstIndex = totalShiftedItemsState * -1;
                const lastIndex = firstIndex + numVisibleState - 1;
                const isActive = firstIndex <= index && lastIndex >= index;
                const start = firstIndex === index;
                const end = lastIndex === index;
                const current = props.activeItemIndex === index;

                return <GalleriaThumbnailItem key={index} index={index} template={props.itemTemplate} item={item} active={isActive} start={start} end={end} onItemClick={onItemClick} current={current} />;
            });
        };

        const createBackwardNavigator = () => {
            if (props.showThumbnailNavigators) {
                let isDisabled = (!props.circular && props.activeItemIndex === 0) || props.value.length <= numVisibleState;
                let buttonClassName = classNames('p-galleria-thumbnail-prev p-link', {
                        'p-disabled': isDisabled
                    }),
                    iconClassName = classNames('p-galleria-thumbnail-prev-icon pi', {
                        'pi-chevron-left': !props.isVertical,
                        'pi-chevron-up': props.isVertical
                    });

                return (
                    <button className={buttonClassName} onClick={navBackward} disabled={isDisabled}>
                        <span className={iconClassName}></span>
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createForwardNavigator = () => {
            if (props.showThumbnailNavigators) {
                const isDisabled = (!props.circular && props.activeItemIndex === props.value.length - 1) || props.value.length <= numVisibleState;
                const buttonClassName = classNames('p-galleria-thumbnail-next p-link', {
                    'p-disabled': isDisabled
                });
                const iconClassName = classNames('p-galleria-thumbnail-next-icon pi', {
                    'pi-chevron-right': !props.isVertical,
                    'pi-chevron-down': props.isVertical
                });

                return (
                    <button className={buttonClassName} onClick={navForward} disabled={isDisabled}>
                        <span className={iconClassName}></span>
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createContent = () => {
            const items = createItems();
            const height = props.isVertical ? props.contentHeight : '';
            const backwardNavigator = createBackwardNavigator();
            const forwardNavigator = createForwardNavigator();

            return (
                <div className="p-galleria-thumbnail-container">
                    {backwardNavigator}
                    <div className="p-galleria-thumbnail-items-container" style={{ height: height }}>
                        <div ref={itemsContainerRef} className="p-galleria-thumbnail-items" onTransitionEnd={onTransitionEnd} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                            {items}
                        </div>
                    </div>
                    {forwardNavigator}
                </div>
            );
        };

        const content = createContent();

        return <div className="p-galleria-thumbnail-wrapper">{content}</div>;
    })
);

GalleriaThumbnailItem.displayName = 'GalleriaThumbnailItem';
GalleriaThumbnails.displayName = 'GalleriaThumbnails';
