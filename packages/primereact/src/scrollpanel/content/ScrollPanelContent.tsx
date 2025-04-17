'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ScrollPanelContent.props';

export const ScrollPanelContent = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const scrollpanel = getParent('ScrollPanel');

        const contentProps = mergeProps(
            {
                id: scrollpanel?.contentId,
                className: scrollpanel?.cx('content'),
                onScroll: scrollpanel?.onScroll,
                onMouseEnter: scrollpanel?.moveBar
            },
            scrollpanel?.ptm('content'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} ref={scrollpanel?.contentRef} {...contentProps}>
                {props.children}
            </Component>
        );
    }
});
