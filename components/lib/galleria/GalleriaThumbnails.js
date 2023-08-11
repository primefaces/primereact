import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useMountEffect, usePrevious, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { ChevronUpIcon } from '../icons/chevronup';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames, mergeProps } from '../utils/Utils';

const GalleriaThumbnailItem = React.memo((props) => {
    const { ptm, cx } = props;

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

    const thumbnailItemProps = mergeProps(
        {
            className: classNames(props.className, cx('thumbnailItem', { subProps: props }))
        },
        ptm('thumbnailItem')
    );

    const thumbnailItemContentProps = mergeProps(
        {
            className: cx('thumbnailItemContent'),
            tabIndex: tabIndex,
            onClick: onItemClick,
            onKeyDown: onItemKeyDown
        },
        ptm('thumbnailItemContent')
    );

    return (
        <div {...thumbnailItemProps}>
            <div {...thumbnailItemContentProps}>{content}</div>
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
        const context = React.useContext(PrimeReactContext);

        const { ptm, cx, sx } = props;

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
                thumbnailsStyle.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);
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

                    return ObjectUtils.sort(value1, value2, -1, (context && context.locale) || PrimeReact.locale, (context && context.nullSortOrder) || PrimeReact.nullSortOrder);
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

                return <GalleriaThumbnailItem key={index} index={index} template={props.itemTemplate} item={item} active={isActive} start={start} end={end} onItemClick={onItemClick} current={current} ptm={ptm} cx={cx} sx={sx} />;
            });
        };

        const createBackwardNavigator = () => {
            if (props.showThumbnailNavigators) {
                let isDisabled = (!props.circular && props.activeItemIndex === 0) || props.value.length <= numVisibleState;

                const previousThumbnailIconProps = mergeProps(
                    {
                        className: cx('previousThumbnailIcon')
                    },
                    ptm('previousThumbnailIcon')
                );
                const icon = props.isVertical ? props.prevThumbnailIcon || <ChevronUpIcon {...previousThumbnailIconProps} /> : props.prevThumbnailIcon || <ChevronLeftIcon {...previousThumbnailIconProps} />;
                const prevThumbnailIcon = IconUtils.getJSXIcon(icon, { ...previousThumbnailIconProps }, { props });
                const previousThumbnailButtonProps = mergeProps(
                    {
                        className: cx('previousThumbnailButton', { isDisabled }),
                        onClick: navBackward,
                        disabled: isDisabled
                    },
                    ptm('previousThumbnailButton')
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
                    ptm('nextThumbnailIcon')
                );
                const icon = props.isVertical ? props.nextThumbnailIcon || <ChevronDownIcon {...nextThumbnailIconProps} /> : props.nextThumbnailIcon || <ChevronRightIcon {...nextThumbnailIconProps} />;
                const nextThumbnailIcon = IconUtils.getJSXIcon(icon, { ...nextThumbnailIconProps }, { props });

                const nextThumbnailButtonProps = mergeProps(
                    {
                        className: cx('nextThumbnailButton', { isDisabled }),
                        onClick: navForward,
                        disabled: isDisabled
                    },
                    ptm('nextThumbnailButton')
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
                ptm('thumbnailContainer')
            );

            const thumbnailItemsContainerProps = mergeProps(
                {
                    className: cx('thumbnailItemsContainer'),
                    style: sx('thumbnailItemsContainer', { height })
                },
                ptm('thumbnailItemsContainer')
            );

            const thumbnailItemsProps = mergeProps(
                {
                    ref: itemsContainerRef,
                    className: cx('thumbnailItems'),
                    onTransitionEnd: onTransitionEnd,
                    onTouchStart: onTouchStart,
                    onTouchMove: onTouchMove,
                    onTouchEnd: onTouchEnd
                },
                ptm('thumbnailItems')
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
            ptm('thumbnailWrapper')
        );

        return <div {...thumbnailWrapperProps}>{content}</div>;
    })
);

GalleriaThumbnailItem.displayName = 'GalleriaThumbnailItem';
GalleriaThumbnails.displayName = 'GalleriaThumbnails';
