'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCardContext } from '../Card.context';
import { defaultBodyProps } from './CardBody.props';

export const CardBody = withComponent({
    name: 'CardBody',
    defaultProps: defaultBodyProps,
    setup() {
        const card = useCardContext();

        return { card };
    },
    render(instance) {
        const { props, ptmi, card } = instance;

        const rootProps = mergeProps(
            {
                className: card?.cx('body')
            },
            card?.ptm('body'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
