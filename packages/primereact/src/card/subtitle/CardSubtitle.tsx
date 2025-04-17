'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CardSubtitle.props';

export const CardSubtitle = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const card = getParent('Card');

        const subtitleProps = mergeProps(
            {
                className: card?.cx('subtitle')
            },
            card?.ptm('subtitle'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...subtitleProps}>
                {props.children}
            </Component>
        );
    }
});
