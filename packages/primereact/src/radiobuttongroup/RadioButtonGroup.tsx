'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { RadioButtonGroupProvider } from './RadioButtonGroup.context';
import { defaultProps } from './RadioButtonGroup.props';
import { useRadioButtonGroup } from '@primereact/headless/radiobuttongroup';

export const RadioButtonGroup = withComponent({
    name: 'RadioButtonGroup',
    defaultProps,
    setup(instance) {
        const radiobuttongroup = useRadioButtonGroup(instance.inProps);

        return radiobuttongroup;
    },
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
            <RadioButtonGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </RadioButtonGroupProvider>
        );
    }
});
