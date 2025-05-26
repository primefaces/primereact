'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useToggleButtonContext } from '../ToggleButton.context';
import { defaultIndicatorProps } from './ToggleButtonIndicator.props';

export const ToggleButtonIndicator = withComponent({
    name: 'ToggleButtonIndicator',
    defaultProps: defaultIndicatorProps,
    setup() {
        const togglebutton = useToggleButtonContext();

        return {
            togglebutton
        };
    },
    render(instance) {
        const { props, ptmi, togglebutton } = instance;

        const rootProps = mergeProps(
            {
                className: togglebutton?.cx('content')
            },
            togglebutton?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
