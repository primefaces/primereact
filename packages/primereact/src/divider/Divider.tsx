'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useDivider } from '@primereact/headless/divider';
import { styles } from '@primereact/styles/divider';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Divider.props';
import { DividerContent } from './content';

export const Divider = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const divider = useDivider(instance.inProps);

        return divider;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            cx,
            sx,
            // element refs
            elementRef
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root'),
                role: 'separator',
                'aria-orientation': props.layout
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
        Content: DividerContent
    }
});
