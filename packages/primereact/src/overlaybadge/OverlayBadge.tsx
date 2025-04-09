'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useOverlayBadge } from '@primereact/headless/overlaybadge';
import { styles } from '@primereact/styles/overlaybadge';
import { mergeProps } from '@primeuix/utils';
import { Badge } from 'primereact/badge';
import * as React from 'react';
import { defaultProps } from './OverlayBadge.props';

export const OverlayBadge = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const overlaybadge = useOverlayBadge(instance.inProps);

        return overlaybadge;
    },
    render: (instance) => {
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
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
                <Badge ref={badgeRef} value={props.value} severity={props.severity} size={props.size} pt={ptm('pcBadge')} />
            </Component>
        );
    }
});
