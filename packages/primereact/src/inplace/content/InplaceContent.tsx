'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useInplaceContext } from '../Inplace.context';
import { defaultContentProps } from './InplaceContent.props';

export const InplaceContent = withComponent({
    name: 'InplaceContent',
    defaultProps: defaultContentProps,
    setup() {
        const inplace = useInplaceContext();

        return { inplace };
    },
    render(instance) {
        const { props, ptmi, inplace } = instance;

        const rootProps = mergeProps(
            {
                className: inplace?.cx('content')
            },
            inplace?.ptm('content'),
            ptmi('root')
        );

        return <Component pIf={inplace?.state.active} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
