'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './ScrollPanelContentContainer.props';

export const ScrollPanelContentContainer = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const scrollpanel = getParent('ScrollPanel');

        const contentContainerProps = mergeProps(
            {
                className: scrollpanel?.cx('contentContainer')
            },
            scrollpanel?.ptm('contentContainer')
        );

        return (
            <Component as={props.as || 'div'} {...contentContainerProps}>
                {props.children}
            </Component>
        );
    }
});
