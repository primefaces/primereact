'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useToolbar } from '@primereact/headless/toolbar';
import { styles } from '@primereact/styles/toolbar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Toolbar.props';
import { ToolbarCenter } from './center';
import { ToolbarEnd } from './end';
import { ToolbarStart } from './start';

export const Toolbar = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const toolbar = useToolbar(instance.inProps);

        return toolbar;
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
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Start: ToolbarStart,
        Center: ToolbarCenter,
        End: ToolbarEnd
    }
});
