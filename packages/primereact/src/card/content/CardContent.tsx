'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CardContent.props';

export const CardContent = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const card = getParent('Card');

        const contentProps = mergeProps(
            {
                className: card?.cx('content')
            },
            card?.ptm('content'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...contentProps}>
                {props.children}
            </Component>
        );
    }
});
