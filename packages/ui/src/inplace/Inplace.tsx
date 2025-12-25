'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useInplace } from '@primereact/headless/inplace';
import { styles } from '@primereact/styles/inplace';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { InplaceClose } from './close';
import { InplaceContent } from './content';
import { InplaceDisplay } from './display';
import { InplaceProvider } from './Inplace.context';
import { defaultProps } from './Inplace.props';

export const Inplace = withComponent({
    name: 'Inplace',
    defaultProps,
    styles,
    setup(instance) {
        const inplace = useInplace(instance.inProps);

        return inplace;
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
            <InplaceProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </InplaceProvider>
        );
    },
    components: {
        Display: InplaceDisplay,
        Content: InplaceContent,
        Close: InplaceClose
    }
});
