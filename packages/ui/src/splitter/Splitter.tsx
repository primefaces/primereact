'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useSplitter } from '@primereact/headless/splitter';
import { styles } from '@primereact/styles/splitter';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { SplitterProvider } from './Splitter.context';
import { defaultProps } from './Splitter.props';
import { SplitterGutter } from './gutter';
import { SplitterPanel } from './panel';
import { SplitterThumb } from './thumb';

export const Splitter = withComponent({
    name: 'Splitter',
    defaultProps,
    styles,
    setup(instance) {
        const splitter = useSplitter(instance.inProps);

        return splitter;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                'data-p-resizing': false
            },
            ptmi('root')
        );

        return (
            <SplitterProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </SplitterProvider>
        );
    },
    components: {
        Panel: SplitterPanel,
        Gutter: SplitterGutter,
        Thumb: SplitterThumb
    }
});
