'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CardBody.props';

export const CardBody = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent, ptmi } = instance;
        const card = getParent('Card');

        const bodyProps = mergeProps(
            {
                className: card?.cx('body')
            },
            card?.ptm('body'),
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...bodyProps}>
                {props.children}
            </Component>
        );
    }
});
