'use client';
import { Component } from '@primereact/core/component';
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { ChevronLeftIcon } from '@primereact/icons/chevronleft';
import { ChevronRightIcon } from '@primereact/icons/chevronright';
import { listStyles } from '@primereact/styles/tabs/TabsList.style';
import { getWidth, isRTL, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultListProps } from './TabsList.props';

export const TabsList = withComponent({
    name: 'TabList',
    defaultProps: defaultListProps,
    styles: listStyles,
    setup() {
        const tabs = useTabsContext();

        return { tabs };
    },
    render(instance) {
        const { props, ptmi, tabs, cx } = instance;
        const [prevButtonEnabled, setPrevButtonEnabled] = React.useState<boolean>(false);
        const [nextButtonEnabled, setNextButtonEnabled] = React.useState<boolean>(false);
        const listRef = React.useRef<HTMLDivElement>(null);
        const contentRef = React.useRef<HTMLDivElement>(null);
        const prevButtonRef = React.useRef<HTMLButtonElement>(null);
        const nextButtonRef = React.useRef<HTMLButtonElement>(null);
        const resizeObserver = React.useRef<ResizeObserver | null>(null);

        const updateButtonState = () => {
            if (!contentRef.current || !listRef.current) return;

            const content = contentRef.current;
            const list = listRef.current;
            const { scrollWidth, offsetWidth } = content;
            const scrollLeft = Math.abs(content.scrollLeft);
            const width = getWidth(content);

            setPrevButtonEnabled(scrollLeft !== 0);
            setNextButtonEnabled(list.offsetWidth >= offsetWidth && parseInt(scrollLeft) !== scrollWidth - width);
        };

        const onPrevButtonClick = () => {
            const content = contentRef.current;

            if (!content) return;

            const buttonWidths = getVisibleButtonWidths();
            const width = getWidth(content) - buttonWidths;
            const currentScrollLeft = Math.abs(content.scrollLeft);
            const scrollStep = width * 0.8;
            const targetScrollLeft = currentScrollLeft - scrollStep;
            const scrollLeft = Math.max(targetScrollLeft, 0);

            content.scrollLeft = isRTL(content) ? -1 * scrollLeft : scrollLeft;
        };

        const onNextButtonClick = () => {
            const content = contentRef.current;

            if (!content) return;

            const buttonWidths = getVisibleButtonWidths();
            const width = getWidth(content) - buttonWidths;
            const currentScrollLeft = Math.abs(content.scrollLeft);
            const scrollStep = width * 0.8;
            const targetScrollLeft = currentScrollLeft + scrollStep;
            const maxScrollLeft = content.scrollWidth - width;
            const scrollLeft = Math.min(targetScrollLeft, maxScrollLeft);

            content.scrollLeft = isRTL(content) ? -1 * scrollLeft : scrollLeft;
        };

        const getVisibleButtonWidths = () => {
            const [prevButton, nextButton] = [prevButtonRef.current, nextButtonRef.current];
            let width = 0;

            if (prevButton && nextButton) {
                width = (prevButton?.offsetWidth || 0) + (nextButton?.offsetWidth || 0);
            }

            return width;
        };

        const bindResizeObserver = () => {
            if (!listRef.current) return;

            resizeObserver.current = new ResizeObserver(() => updateButtonState());
            resizeObserver.current.observe(listRef.current);
        };

        const unbindResizeObserver = () => {
            if (!listRef.current) return;

            resizeObserver.current?.unobserve(listRef.current);
            resizeObserver.current = null;
        };

        useMountEffect(() => {
            if (tabs?.props.showNavigators) {
                updateButtonState();
                bindResizeObserver();
            }
        });

        useUnmountEffect(() => {
            unbindResizeObserver();
        });

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            tabs?.ptm('list'),
            ptmi('root')
        );

        const createContentElement = () => {
            const contentProps = mergeProps(
                {
                    className: cx('content'),
                    ref: contentRef,
                    onScroll: (event: React.UIEvent<HTMLDivElement>) => {
                        if (tabs?.props?.scrollable) {
                            updateButtonState();
                        }

                        event.preventDefault();
                    }
                },
                ptmi('content')
            );

            const listProps = mergeProps(
                {
                    className: cx('tabList'),
                    ref: listRef
                },
                ptmi('tabList')
            );

            return (
                <>
                    {prevButtonEnabled && (
                        <button
                            type="button"
                            className={cx('prevButton')}
                            aria-label={props.prevButtonAriaLabel}
                            tabIndex={tabs?.props.tabindex}
                            style={{
                                zIndex: 50
                            }}
                            onClick={onPrevButtonClick}
                            {...ptmi('prevButton')}
                            data-pc-group-section="navigator"
                            ref={prevButtonRef}
                            disabled={!prevButtonEnabled}
                        >
                            <ChevronLeftIcon />
                        </button>
                    )}
                    <div {...contentProps}>
                        <div {...listProps}>{props.children}</div>
                    </div>
                    {nextButtonEnabled && (
                        <button
                            type="button"
                            className={cx('nextButton')}
                            aria-label={props.nextButtonAriaLabel}
                            tabIndex={tabs?.props.tabindex}
                            onClick={onNextButtonClick}
                            {...ptmi('nextButton')}
                            style={{
                                zIndex: 50
                            }}
                            data-pc-group-section="navigator"
                            ref={nextButtonRef}
                            disabled={!nextButtonEnabled}
                        >
                            <ChevronRightIcon />
                        </button>
                    )}
                </>
            );
        };

        const content = createContentElement();

        return (
            <Component instance={instance} attrs={rootProps}>
                {content}
            </Component>
        );
    }
});
