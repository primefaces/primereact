'use client';
import { Component, ComponentProvider, useComponent } from '@primereact/core/component';
import { useOverlayBadge } from '@primereact/headless/overlaybadge';
import { styles } from '@primereact/styles/overlaybadge';
import type { OverlayBadgeProps } from '@primereact/types/shared/overlaybadge';
import { mergeProps } from '@primeuix/utils';
import { Badge } from 'primereact/badge';
import * as React from 'react';
import { defaultProps } from './OverlayBadge.props';

export const OverlayBadge = (inProps: OverlayBadgeProps) => {
    const overlaybadge = useOverlayBadge(inProps);
    const instance = useComponent(inProps, defaultProps, styles, overlaybadge);
    const {
        id,
        props,
        ptm,
        ptmi,
        cx,
        // element refs
        elementRef
    } = instance;

    const badgeRef = React.useRef(null);

    const rootProps = mergeProps(
        {
            id,
            className: cx('root')
        },
        ptmi('root')
    );

    return (
        <ComponentProvider pIf={props.pIf} instance={instance}>
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
                <Badge ref={badgeRef} value={props.value} severity={props.severity} size={props.size} pt={ptm('pcBadge')} />
            </Component>
        </ComponentProvider>
    );
};

OverlayBadge.displayName = 'PrimeReact.OverlayBadge';
