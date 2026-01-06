'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ButtonGroupProvider } from './ButtonGroup.context';
import { defaultProps } from './ButtonGroup.props';

export const ButtonGroup = withComponent({
    name: 'ButtonGroup',
    defaultProps,
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <ButtonGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </ButtonGroupProvider>
        );
    }
});
