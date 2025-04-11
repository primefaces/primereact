'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useBadge } from '@primereact/headless/badge';
import { styles } from '@primereact/styles/badge';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Badge.props';

export const Badge = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const badge = useBadge(instance.inProps);

        return badge;
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
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'span'} {...rootProps} ref={elementRef}>
                {props.value}
            </Component>
        );
    }
});
