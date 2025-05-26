'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTagContext } from '../Tag.context';
import { defaultLabelProps } from './TagLabel.props';

export const TagLabel = withComponent({
    name: 'TagLabel',
    defaultProps: defaultLabelProps,
    setup() {
        const tag = useTagContext();

        return { tag };
    },
    render(instance) {
        const { props, ptmi, tag } = instance;

        const rootProps = mergeProps(
            {
                className: tag?.cx('label')
            },
            tag?.ptm('label'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
