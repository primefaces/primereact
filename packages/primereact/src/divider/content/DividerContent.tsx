'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useDividerContext } from '../Divider.context';
import { defaultContentProps } from './DividerContent.props';

export const DividerContent = withComponent({
    name: 'DividerContent',
    defaultProps: defaultContentProps,
    setup() {
        const divider = useDividerContext();

        return { divider };
    },
    render(instance) {
        const { props, ptmi, divider } = instance;

        const rootProps = mergeProps(
            {
                className: divider?.cx('content')
            },
            divider?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
