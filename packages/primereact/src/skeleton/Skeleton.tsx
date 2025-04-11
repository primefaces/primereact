'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useSkeleton } from '@primereact/headless/skeleton';
import { styles } from '@primereact/styles/skeleton';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Skeleton.props';

export const Skeleton = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const skeleton = useSkeleton(instance.inProps);

        return skeleton;
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

        const style = props.size ? { width: props.size, height: props.size, borderRadius: props.borderRadius } : { width: props.width, height: props.height, borderRadius: props.borderRadius };

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: { ...style, ...sx('root') },
                'aria-hidden': true
            },
            ptmi('root')
        );

        return <Component as={props.as || 'div'} {...rootProps} ref={elementRef} />;
    }
});
