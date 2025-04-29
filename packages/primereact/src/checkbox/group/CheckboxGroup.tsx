'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './CheckboxGroup.props';

export const CheckboxGroup = withComponent({
    name: 'CheckboxGroup',
    defaultProps,
    render: (instance) => {
        const { props, ptmi, cx, elementRef } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} asChild={props.asChild} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    }
});
