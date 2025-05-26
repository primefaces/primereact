'use client';
import { Component } from '@primereact/core/component';
import { groupStyles } from '@primereact/styles/button';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ButtonGroupProvider } from './ButtonGroup.context';
import { defaultGroupProps } from './ButtonGroup.props';

export const ButtonGroup = withComponent({
    name: 'ButtonGroup',
    defaultProps: defaultGroupProps,
    styles: groupStyles,
    render(instance) {
        const { props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
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
