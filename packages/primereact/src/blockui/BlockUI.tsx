'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useBlockUI } from '@primereact/headless/blockui';
import { styles } from '@primereact/styles/blockui';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './BlockUI.props';
import { BlockUIMask } from './mask';

export const BlockUI = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const blockui = useBlockUI(instance.inProps);

        return blockui;
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
                'aria-busy': props.blocked
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
        Mask: BlockUIMask
    }
});
