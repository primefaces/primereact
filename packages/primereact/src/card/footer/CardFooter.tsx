'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CardFooter.props';

export const CardFooter = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const card = getParent('Card');

        const footerProps = mergeProps(
            {
                className: card?.cx('footer')
            },
            card?.ptm('footer'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...footerProps}>
                {props.children}
            </Component>
        );
    }
});
