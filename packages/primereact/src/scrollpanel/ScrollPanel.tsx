'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useScrollPanel } from '@primereact/headless/scrollpanel';
import { styles } from '@primereact/styles/scrollpanel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ScrollPanel.props';
import { ScrollPanelContent } from './content';

export const ScrollPanel = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const scrollPanel = useScrollPanel(instance.inProps);

        return scrollPanel;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            ptm,
            cx,
            // element refs
            elementRef
        } = instance;

        const { contentId, xBarRef, yBarRef, lastScrollLeft, lastScrollTop, onXBarMouseDown, onYBarMouseDown, onFocus, onBlur, onKeyDown, onKeyUp } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        const createContentContainer = () => {
            const contentContainerProps = mergeProps(
                {
                    className: cx('contentContainer')
                },
                ptm('contentContainer')
            );

            return <div {...contentContainerProps}>{props.children}</div>;
        };

        const createXBar = () => {
            const xBarProps = mergeProps(
                {
                    className: cx('barx'),
                    tabIndex: 0,
                    role: 'scrollbar',
                    'aria-orientation': 'horizontal',
                    'aria-controls': contentId,
                    'aria-valuenow': lastScrollLeft,
                    onMouseDown: onXBarMouseDown,
                    onKeyDown,
                    onKeyUp,
                    onFocus,
                    onBlur,
                    'data-pc-group-section': 'bar'
                },
                ptm('xBar')
            );

            return <div ref={xBarRef} {...xBarProps} />;
        };

        const createYBar = () => {
            const yBarProps = mergeProps(
                {
                    className: cx('bary'),
                    tabIndex: 0,
                    role: 'scrollbar',
                    'aria-orientation': 'vertical',
                    'aria-controls': contentId,
                    'aria-valuenow': lastScrollTop,
                    onMouseDown: onYBarMouseDown,
                    onKeyDown,
                    onKeyUp,
                    onFocus,
                    onBlur,
                    'data-pc-group-section': 'bar'
                },
                ptm('xBar')
            );

            return <div ref={yBarRef} {...yBarProps} />;
        };

        const contentContainer = createContentContainer();
        const xBar = createXBar();
        const yBar = createYBar();

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {contentContainer}
                {xBar}
                {yBar}
            </Component>
        );
    },
    components: {
        Content: ScrollPanelContent
    }
});
