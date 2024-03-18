import * as React from 'react';
import { localeOption } from '../api/Api';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, classNames } from '../utils/Utils';

export const GalleriaItem = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const indicatorContent = React.useRef(null);

        const { ptm, cx } = props;

        const getPTOptions = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
        };

        const ariaSlideNumber = (value) => {
            return localeOption('aria') ? localeOption('aria').slideNumber.replace(/{slideNumber}/g, value) : undefined;
        };

        const ariaPageLabel = (value) => {
            return localeOption('aria') ? localeOption('aria').pageLabel.replace(/{page}/g, value) : undefined;
        };

        const next = () => {
            const nextItemIndex = props.activeItemIndex + 1;

            props.onActiveItemChange({
                index: props.circular && props.value.length - 1 === props.activeItemIndex ? 0 : nextItemIndex
            });
        };

        const prev = () => {
            const prevItemIndex = props.activeItemIndex !== 0 ? props.activeItemIndex - 1 : 0;

            props.onActiveItemChange({
                index: props.circular && props.activeItemIndex === 0 ? props.value.length - 1 : prevItemIndex
            });
        };

        const stopSlideShow = () => {
            if (props.slideShowActive && props.stopSlideShow) {
                props.stopSlideShow();
            }
        };

        const navBackward = (e) => {
            stopSlideShow();
            prev();

            if (e && e.cancelable) {
                e.preventDefault();
            }
        };

        const navForward = (e) => {
            stopSlideShow();
            next();

            if (e && e.cancelable) {
                e.preventDefault();
            }
        };

        const onIndicatorClick = (index) => {
            stopSlideShow();
            props.onActiveItemChange({
                index
            });
        };

        const onIndicatorMouseEnter = (index) => {
            if (props.changeItemOnIndicatorHover) {
                stopSlideShow();

                props.onActiveItemChange({
                    index
                });
            }
        };

        const onIndicatorKeyDown = (event, index) => {
            switch (event.code) {
                case 'Enter':
                case 'Space':
                    stopSlideShow();

                    props.onActiveItemChange({
                        index
                    });
                    event.preventDefault();
                    break;

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

                case 'Tab':
                    onTabKey();
                    break;

                case 'ArrowDown':
                case 'ArrowUp':
                case 'PageUp':
                case 'PageDown':
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        };

        const onRightKey = () => {
            const indicators = [...DomHandler.find(indicatorContent.current, '[data-pc-section="indicator"]')];
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
            const indicators = [...DomHandler.find(indicatorContent.current, '[data-pc-section="indicator"]')];
            const activeIndex = findFocusedIndicatorIndex();

            changedFocusedIndicator(activeIndex, indicators.length - 1);
        };

        const onTabKey = () => {
            const indicators = [...DomHandler.find(indicatorContent.current, '[data-pc-section="indicator"]')];
            const highlightedIndex = indicators.findIndex((ind) => DomHandler.getAttribute(ind, 'data-p-highlight') === true);

            const activeIndicator = DomHandler.findSingle(indicatorContent.current, '[data-pc-section="indicator"] > button[tabindex="0"]');
            const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);

            indicators[activeIndex].children[0].tabIndex = '-1';
            indicators[highlightedIndex].children[0].tabIndex = '0';
        };

        const findFocusedIndicatorIndex = () => {
            const indicators = [...DomHandler.find(indicatorContent.current, '[data-pc-section="indicator"]')];
            const activeIndicator = DomHandler.findSingle(indicatorContent.current, '[data-pc-section="indicator"] > button[tabindex="0"]');

            return indicators.findIndex((ind) => ind === activeIndicator.parentElement);
        };

        const changedFocusedIndicator = (prevInd, nextInd) => {
            const indicators = [...DomHandler.find(indicatorContent.current, '[data-pc-section="indicator"]')];

            indicators[prevInd].children[0].tabIndex = '-1';
            indicators[nextInd].children[0].tabIndex = '0';
            indicators[nextInd].children[0].focus();
        };

        useMountEffect(() => {
            if (props.autoPlay) {
                props.startSlideShow();
            }
        });

        const createBackwardNavigator = () => {
            if (props.showItemNavigators) {
                const isDisabled = !props.circular && props.activeItemIndex === 0;

                const previousItemIconProps = mergeProps(
                    {
                        className: cx('previousItemIcon')
                    },
                    getPTOptions('previousItemIcon')
                );
                const icon = props.itemPrevIcon || <ChevronLeftIcon {...previousItemIconProps} />;
                const itemPrevIcon = IconUtils.getJSXIcon(icon, { ...previousItemIconProps }, { props });

                const previousItemButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('previousItemButton', { isDisabled }),
                        onClick: navBackward,
                        disabled: isDisabled,
                        'data-p-disabled': isDisabled,
                        'data-pc-group-section': 'itemnavigator'
                    },
                    getPTOptions('previousItemButton')
                );

                return (
                    <button {...previousItemButtonProps}>
                        {itemPrevIcon}
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createForwardNavigator = () => {
            if (props.showItemNavigators) {
                const isDisabled = !props.circular && props.activeItemIndex === props.value.length - 1;

                const nextItemIconProps = mergeProps(
                    {
                        className: cx('nextItemIcon')
                    },
                    getPTOptions('nextItemIcon')
                );
                const icon = props.itemNextIcon || <ChevronRightIcon {...nextItemIconProps} />;
                const itemNextIcon = IconUtils.getJSXIcon(icon, { ...nextItemIconProps }, { props });

                const nextItemButtonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('nextItemButton', { isDisabled }),
                        onClick: navForward,
                        disabled: isDisabled,
                        'data-p-disabled': isDisabled,
                        'data-pc-group-section': 'itemnavigator'
                    },
                    getPTOptions('nextItemButton')
                );

                return (
                    <button {...nextItemButtonProps}>
                        {itemNextIcon}
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createCaption = () => {
            const captionProps = mergeProps(
                {
                    className: cx('caption')
                },
                getPTOptions('caption')
            );

            if (props.caption) {
                const content = props.caption(props.value[props.activeItemIndex]);

                return <div {...captionProps}>{content}</div>;
            }

            return null;
        };

        const createIndicator = (index) => {
            const key = 'p-galleria-indicator-' + index;
            const isActive = props.activeItemIndex === index;
            let indicator = props.indicator && props.indicator(index);

            const indicatorProps = mergeProps(
                {
                    className: cx('indicator', { isActive }),
                    key: key,
                    tabIndex: 0,
                    'aria-label': ariaPageLabel(index + 1),
                    'aria-selected': props.activeIndex === index,
                    'aria-controls': props.id + '_item_' + index,
                    'data-p-highlight': isActive,
                    onClick: () => onIndicatorClick(index),
                    onMouseEnter: () => onIndicatorMouseEnter(index),
                    onKeyDown: (e) => onIndicatorKeyDown(e, index)
                },
                getPTOptions('indicator')
            );

            if (!indicator) {
                indicator = (
                    <button tabIndex={props.activeIndex === index ? '0' : '-1'} type="button" className="p-link">
                        <Ripple />
                    </button>
                );
            }

            return <li {...indicatorProps}>{indicator}</li>;
        };

        const createIndicators = () => {
            if (props.showIndicators) {
                let indicators = [];
                const indicatorsProps = mergeProps(
                    {
                        className: classNames(props.indicatorsContentClassName, cx('indicators'))
                    },
                    getPTOptions('indicators')
                );

                for (let i = 0; i < props.value.length; i++) {
                    indicators.push(createIndicator(i));
                }

                return (
                    <ul ref={indicatorContent} {...indicatorsProps}>
                        {indicators}
                    </ul>
                );
            }

            return null;
        };

        const content = props.itemTemplate && props.itemTemplate(props.value[props.activeItemIndex]);
        const backwardNavigator = createBackwardNavigator();
        const forwardNavigator = createForwardNavigator();
        const caption = createCaption();
        const indicators = createIndicators();

        const itemWrapperProps = mergeProps(
            {
                ref: ref,
                className: cx('itemWrapper')
            },
            getPTOptions('itemWrapper')
        );

        const itemContainerProps = mergeProps(
            {
                className: cx('itemContainer')
            },
            getPTOptions('itemContainer')
        );

        const itemProps = mergeProps(
            {
                className: cx('item'),
                id: props.id + '_item_' + props.activeItemIndex,
                role: 'group',
                'aria-label': ariaSlideNumber(props.activeItemIndex + 1),
                'aria-roledescription': localeOption('aria') ? localeOption('aria').slide : undefined
            },
            getPTOptions('item')
        );

        return (
            <div {...itemWrapperProps}>
                <div {...itemContainerProps}>
                    {backwardNavigator}
                    <div {...itemProps}>{content}</div>
                    {forwardNavigator}
                    {caption}
                </div>

                {indicators}
            </div>
        );
    })
);

GalleriaItem.displayName = 'GalleriaItem';
