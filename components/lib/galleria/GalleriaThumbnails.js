import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { useMergeProps, useMountEffect, usePrevious, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { ChevronUpIcon } from '../icons/chevronup';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';

const GalleriaThumbnailItem = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, cx } = props;

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const onItemClick = (event) => {
        props.onItemClick({
            originalEvent: event,
            index: props.index
        });
    };

    const ariaPageLabel = (value) => {
        return localeOption('aria') ? localeOption('aria').pageLabel.replace(/{page}/g, value) : undefined;
    };

    const onThumbnailKeydown = (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
            props.onItemClick({
                originalEvent: event,
                index: props.index
            });
            event.preventDefault();
        }

        switch (event.code) {
            case 'ArrowRight':
                onRightKey();
                break;

            case 'ArrowLeft':
                onLeftKey();
                break;

            case 'Home':
                onHomeKey();
                event.preventDefault();
                break;

            case 'End':
                onEndKey();
                event.preventDefault();
                break;

            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                break;

            case 'Tab':
                onTabKey();
                break;

            default:
                break;
        }
    };

    const onRightKey = () => {
        const indicators = DomHandler.find(props.itemsContainerRef.current, '[data-pc-section="thumbnailitem"]');

        const activeIndex = findFocusedIndicatorIndex();

        changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    };

    const onLeftKey = () => {
        const activeIndex = findFocusedIndicatorIndex();

        changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    };

    const onHomeKey = () => {
        const activeIndex = findFocusedIndicatorIndex();

        changedFocusedIndicator(activeIndex, 0);
    };

    const onEndKey = () => {
        const indicators = DomHandler.find(props.itemsContainerRef.current, '[data-pc-section="thumbnailitem"]');
        const activeIndex = findFocusedIndicatorIndex();

        changedFocusedIndicator(activeIndex, indicators.length - 1);
    };

    const onTabKey = () => {
        const indicators = [...DomHandler.find(props.itemsContainerRef.current, '[data-pc-section="thumbnailitem"]')];
        const highlightedIndex = indicators.findIndex((ind) => DomHandler.getAttribute(ind, 'data-p-active') === true);

        const activeIndicator = DomHandler.findSingle(props.itemsContainerRef.current, '[tabindex="0"]');

        const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);

        indicators[activeIndex].children[0].tabIndex = '-1';
        indicators[highlightedIndex].children[0].tabIndex = '0';
    };

    const findFocusedIndicatorIndex = () => {
        const indicators = [...DomHandler.find(props.itemsContainerRef.current, '[data-pc-section="thumbnailitem"]')];
        const activeIndicator = DomHandler.findSingle(props.itemsContainerRef.current, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');

        return indicators.findIndex((ind) => ind === activeIndicator.parentElement);
    };

    const changedFocusedIndicator = (prevInd, nextInd) => {
        const indicators = DomHandler.find(props.itemsContainerRef.current, '[data-pc-section="thumbnailitem"]');

        indicators[prevInd].children[0].tabIndex = '-1';
        indicators[nextInd].children[0].tabIndex = '0';
        indicators[nextInd].children[0].focus();
    };

    const content = props.template && props.template(props.item);

    const thumbnailItemProps = mergeProps(
        {
            className: classNames(props.className, cx('thumbnailItem', { subProps: props })),
            key: 'p-galleria-thumbnail-item-' + props.index,
            role: 'tab',
            'data-p-active': props.current,
            'aria-selected': props.current,
            'aria-controls': props.containerId + '_item_' + props.index,
            onKeyDown: onThumbnailKeydown,
            'data-p-galleria-thumbnail-item-current': props.current,
            'data-p-galleria-thumbnail-item-active': props.active,
            'data-p-galleria-thumbnail-item-start': props.start,
            'data-p-galleria-thumbnail-item-end': props.end
        },
        getPTOptions('thumbnailItem')
    );

    const thumbnailItemContentProps = mergeProps(
        {
            className: cx('thumbnailItemContent'),
            tabIndex: props.current ? '0' : '-1',
            'aria-label': ariaPageLabel(props.index + 1),
            'aria-current': props.current ? 'page' : undefined,
            onClick: onItemClick
        },
        getPTOptions('thumbnailItemContent')
    );

    return (
        <div {...thumbnailItemProps}>
            <div {...thumbnailItemContentProps}>{content}</div>
        </div>
    );
});

export const GalleriaThumbnails = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const [numVisibleState, setNumVisibleState] = React.useState(props.numVisible);
        const [totalShiftedItemsState, setTotalShiftedItemsState] = React.useState(0);
        const itemsContainerRef = React.useRef(null);
        const startPos = React.useRef(null);
        const attributeSelector = React.useRef('');
        const thumbnailsStyle = React.useRef(null);
        const responsiveOptions = React.useRef(null);
        const prevNumVisible = usePrevious(numVisibleState);
        const prevActiveItemIndex = usePrevious(props.activeItemIndex);
        const context = React.useContext(PrimeReactContext);

        const { ptm, cx, sx } = props;

        const getPTOptions = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
        };

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
                document.body.setAttribute('data-p-items-hidden', 'false');
                !props.isUnstyled() && DomHandler.addClass(itemsContainerRef.current, 'p-items-hidden');
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
                thumbnailsStyle.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);
            }

            let innerHTML = `
            [data-pc-section="thumbnailitems"][${attributeSelector.current}] {
                [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100 / numVisibleState}%
                }
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
                        [data-pc-section="thumbnailitems"][${attributeSelector.current}] {
                            [data-pc-section="thumbnailitem"] {
                                flex: 1 0 ${100 / res.numVisible}%
                            }
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
                    document.body.setAttribute('data-p-items-hidden', 'false');
                    !props.isUnstyled() && DomHandler.removeClass(itemsContainerRef.current, 'p-items-hidden');
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

                return (
                    <GalleriaThumbnailItem
                        key={index}
                        index={index}
                        containerId={props.containerId}
                        itemsContainerRef={itemsContainerRef}
                        template={props.itemTemplate}
                        item={item}
                        active={isActive}
                        start={start}
                        end={end}
                        onItemClick={onItemClick}
                        current={current}
                        ptm={ptm}
                        cx={cx}
                        sx={sx}
                    />
                );
            });
        };

        const createBackwardNavigator = () => {
            if (props.showThumbnailNavigators) {
                let isDisabled = (!props.circular && props.activeItemIndex === 0) || props.value.length <= numVisibleState;

                const previousThumbnailIconProps = mergeProps(
                    {
                        className: cx('previousThumbnailIcon')
                    },
                    getPTOptions('previousThumbnailIcon')
                );
                const icon = props.isVertical ? props.prevThumbnailIcon || <ChevronUpIcon {...previousThumbnailIconProps} /> : props.prevThumbnailIcon || <ChevronLeftIcon {...previousThumbnailIconProps} />;
                const prevThumbnailIcon = IconUtils.getJSXIcon(icon, { ...previousThumbnailIconProps }, { props });
                const previousThumbnailButtonProps = mergeProps(
                    {
                        className: cx('previousThumbnailButton', { isDisabled }),
                        onClick: navBackward,
                        type: 'button',
                        disabled: isDisabled,
                        'data-p-disabled': isDisabled,
                        'aria-label': localeOption('aria') ? localeOption('aria').previousPageLabel : undefined,
                        'data-pc-group-section': 'thumbnailnavigator'
                    },
                    getPTOptions('previousThumbnailButton')
                );

                return (
                    <button {...previousThumbnailButtonProps}>
                        {prevThumbnailIcon}
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createForwardNavigator = () => {
            if (props.showThumbnailNavigators) {
                const isDisabled = (!props.circular && props.activeItemIndex === props.value.length - 1) || props.value.length <= numVisibleState;

                const nextThumbnailIconProps = mergeProps(
                    {
                        className: cx('nextThumbnailIcon')
                    },
                    getPTOptions('nextThumbnailIcon')
                );
                const icon = props.isVertical ? props.nextThumbnailIcon || <ChevronDownIcon {...nextThumbnailIconProps} /> : props.nextThumbnailIcon || <ChevronRightIcon {...nextThumbnailIconProps} />;
                const nextThumbnailIcon = IconUtils.getJSXIcon(icon, { ...nextThumbnailIconProps }, { props });

                const nextThumbnailButtonProps = mergeProps(
                    {
                        className: cx('nextThumbnailButton', { isDisabled }),
                        disabled: isDisabled,
                        type: 'button',
                        'aria-label': localeOption('aria') ? localeOption('aria').nextPageLabel : undefined,
                        onClick: navForward,
                        'data-p-disabled': isDisabled,
                        'data-pc-group-section': 'thumbnailnavigator'
                    },
                    getPTOptions('nextThumbnailButton')
                );

                return (
                    <button {...nextThumbnailButtonProps}>
                        {nextThumbnailIcon}
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

            const thumbnailContainerProps = mergeProps(
                {
                    className: cx('thumbnailContainer')
                },
                getPTOptions('thumbnailContainer')
            );

            const thumbnailItemsContainerProps = mergeProps(
                {
                    className: cx('thumbnailItemsContainer'),
                    style: sx('thumbnailItemsContainer', { height })
                },
                getPTOptions('thumbnailItemsContainer')
            );

            const thumbnailItemsProps = mergeProps(
                {
                    ref: itemsContainerRef,
                    className: cx('thumbnailItems'),
                    role: 'tablist',
                    onTransitionEnd: onTransitionEnd,
                    onTouchStart: onTouchStart,
                    onTouchMove: onTouchMove,
                    onTouchEnd: onTouchEnd
                },
                getPTOptions('thumbnailItems')
            );

            return (
                <div {...thumbnailContainerProps}>
                    {backwardNavigator}
                    <div {...thumbnailItemsContainerProps}>
                        <div {...thumbnailItemsProps}>{items}</div>
                    </div>
                    {forwardNavigator}
                </div>
            );
        };

        const content = createContent();

        const thumbnailWrapperProps = mergeProps(
            {
                className: cx('thumbnailWrapper')
            },
            getPTOptions('thumbnailWrapper')
        );

        return <div {...thumbnailWrapperProps}>{content}</div>;
    })
);

GalleriaThumbnailItem.displayName = 'GalleriaThumbnailItem';
GalleriaThumbnails.displayName = 'GalleriaThumbnails';
