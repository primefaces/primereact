'use client';
import { Component } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { defaultIconProps } from 'primereact/tag';
import * as React from 'react';
import { useTagContext } from '../Tag.context';

export const TagIcon = withComponent({
    name: 'TagIcon',
    defaultProps: defaultIconProps,
    setup() {
        const tag = useTagContext();

        return { tag };
    },
    render(instance) {
        const { props, ptmi, tag } = instance;

        const rootProps = mergeProps(
            {
                className: cn(tag?.cx('icon'), props.children ? null : props.icon)
            },
            tag?.ptm('icon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
