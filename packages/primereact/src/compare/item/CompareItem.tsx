'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCompareContext } from '../Compare.context';
import { defaultItemProps } from './CompareItem.props';

export const CompareItem = withComponent({
    name: 'Compare.Item',
    defaultProps: defaultItemProps,
    setup() {
        const compare = useCompareContext();

        return { compare };
    },
    render(instance) {
        const { props, ptmi, compare } = instance;

        const itemProps = mergeProps(
            {
                className: compare?.cx('item'),
                style: {
                    position: 'absolute',
                    inset: 0,
                    ...compare?.getItemStyle(props.position),
                    ...compare?.sx('item')
                },
                'data-orientation': compare?.props.orientation,
                'data-dragging': compare?.state.isDragging
            },
            compare?.ptm('item'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={itemProps} children={props.children} />;
    }
});
