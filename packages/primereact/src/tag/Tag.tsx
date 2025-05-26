'use client';
import { Component } from '@primereact/core/component';
import { useTag } from '@primereact/headless/tag';
import { styles } from '@primereact/styles/tag';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { TagIcon } from './icon';
import { TagLabel } from './label';
import { TagProvider } from './Tag.context';
import { defaultProps } from './Tag.props';

export const Tag = withComponent({
    name: 'Tag',
    defaultProps,
    styles,
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
    },
    components: {
        Icon: TagIcon,
        Label: TagLabel
    }
});
