'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTag } from '@primereact/headless/tag';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { TagProvider } from '../Tag.context';
import { defaultRootProps } from './TagRoot.props';

export const TagRoot = withComponent({
    name: 'TagRoot',
    defaultProps: defaultRootProps,
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
