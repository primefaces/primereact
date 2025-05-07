'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CardHeader.props';

export const CardHeader = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const card = getParent('Card');

        const headerProps = mergeProps(
            {
                className: card?.cx('header')
            },
            card?.ptm('header'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...headerProps}>
                {props.children}
            </Component>
        );
    }
});
