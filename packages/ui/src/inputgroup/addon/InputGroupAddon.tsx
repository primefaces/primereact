'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useInputGroupContext } from '../InputGroup.context';
import { defaultAddonProps } from './InputGroupAddon.props';

export const InputGroupAddon = withComponent({
    name: 'InputGroupAddon',
    defaultProps: defaultAddonProps,
    setup() {
        const inputgroup = useInputGroupContext();

        return { inputgroup };
    },
    render(instance) {
        const { props, ptmi, inputgroup } = instance;

        const rootProps = mergeProps(
            {
                className: inputgroup?.cx('addon')
            },
            inputgroup?.ptm('addon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
