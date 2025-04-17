'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CardTitle.props';

export const CardTitle = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const card = getParent('Card');

        const titleProps = mergeProps(
            {
                className: card?.cx('title')
            },
            card?.ptm('title'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...titleProps}>
                {props.children}
            </Component>
        );
    }
});
