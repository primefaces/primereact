'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useSwitchContext } from '../Switch.context';
import { defaultThumbProps } from './SwitchThumb.props';

export const SwitchThumb = withComponent({
    name: 'SwitchThumb',
    defaultProps: defaultThumbProps,
    setup() {
        const switchContext = useSwitchContext();

        return { switch: switchContext };
    },
    render(instance) {
        const { props, ptmi, switch: switchContext } = instance;

        const rootProps = mergeProps(
            {
                className: switchContext?.cx('thumb')
            },
            switchContext?.ptm('thumb'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
