'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CardCaption.props';

export const CardCaption = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const card = getParent('Card');

        const captionProps = mergeProps(
            {
                className: card?.cx('caption')
            },
            card?.ptm('caption'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...captionProps}>
                {props.children}
            </Component>
        );
    }
});
