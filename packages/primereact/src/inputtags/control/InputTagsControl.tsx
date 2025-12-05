'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultControlProps } from './InputTagsControl.props';

export const InputTagsControl = withComponent({
    name: 'InputTagsControl',
    defaultProps: defaultControlProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render: (instance) => {
        const { props, ptmi, inputtags } = instance;

        const rootProps = mergeProps(
            {
                className: inputtags?.cx('control')
            },
            inputtags?.ptm('control'),
            ptmi('root')
        );

        return <Component ref={inputtags?.controlRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
