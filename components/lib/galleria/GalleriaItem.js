import * as React from 'react';
import { useMountEffect } from '../hooks/Hooks';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { ChevronRightIcon } from '../icons/chevronright';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, classNames, mergeProps } from '../utils/Utils';

export const GalleriaItem = React.memo(
    React.forwardRef((props, ref) => {
        const { ptm, cx } = props;

        const getPTOptions = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
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
            if (event.which === 13) {
                stopSlideShow();

                props.onActiveItemChange({
                    index
                });
            }
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
                        'data-p-disabled': isDisabled
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
                        'data-p-disabled': isDisabled
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
                    onClick: () => onIndicatorClick(index),
                    onMouseEnter: () => onIndicatorMouseEnter(index),
                    onKeyDown: (e) => onIndicatorKeyDown(e, index),
                    'data-p-highlight': isActive
                },
                getPTOptions('indicator')
            );

            if (!indicator) {
                indicator = (
                    <button type="button" tabIndex={-1} className="p-link">
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

                return <ul {...indicatorsProps}>{indicators}</ul>;
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
                className: cx('item')
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
