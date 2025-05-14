'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useSplitter } from '@primereact/headless/splitter';
import { styles } from '@primereact/styles/splitter';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Splitter.props';
import { SplitterGutter } from './gutter';
import { SplitterPanel } from './panel';

export const Splitter = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const splitter = useSplitter(instance.inProps);

        return splitter;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            cx,
            // element refs
            elementRef
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                'data-p-resizing': false
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Panel: SplitterPanel,
        Gutter: SplitterGutter
    }
});
