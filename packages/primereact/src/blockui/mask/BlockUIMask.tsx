'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, isClient, mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { defaultProps } from './BlockUIMask.props';

export const BlockUIMask = withComponent({
    defaultProps,
    render: (instance) => {
        const {
            props,
            getParent,
            parent: { props: parentProps, maskRef, visibleState, onPortalMounted }
        } = instance;
        const blockUI = getParent('BlockUI');

        const appendTo = parentProps.fullScreen && isClient() ? document.body : 'self';
        let styleClass = 'p-blockui-mask p-overlay-mask p-overlay-mask-enter';

        if (parentProps.fullScreen) {
            styleClass += ' p-blockui-mask-document';
        }

        const maskProps = mergeProps(
            {
                className: cn(props.className, styleClass, blockUI?.cx('mask')),
                style: {
                    position: parentProps.fullScreen ? 'fixed' : 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                }
            },
            blockUI?.ptm('mask')
        );

        const mask = (
            <Component as={props.as || 'div'} ref={maskRef} {...maskProps}>
                {props.children}
            </Component>
        );

        return visibleState ? <Portal element={mask} appendTo={appendTo} onMounted={onPortalMounted} /> : null;
    }
});
