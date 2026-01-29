'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTag } from '@primereact/headless/tag';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { TagProvider } from './Tag.context';
import { defaultProps } from './Tag.props';

export const Tag = withComponent({
    name: 'Tag',
    defaultProps,
    setup(instance) {
        const tag = useTag(instance.inProps);

        return tag;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <TagProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children}></Component>
            </TagProvider>
        );
    }
});
