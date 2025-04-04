'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { useBadge } from '@primereact/headless/badge';
import { styles } from '@primereact/styles/badge';
import type { BadgeProps } from '@primereact/types/shared/badge';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Badge.props';

export const Badge = (inProps: BadgeProps) => {
    const badge = useBadge(inProps);
    const instance = useComponent(inProps, defaultProps, styles, badge);
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
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'span'} {...rootProps} ref={elementRef}>
                {props.value}
            </Component>
        </ComponentProvider>
    );
};

Badge.displayName = 'PrimeReact.Badge';
