'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useStyleClass } from '@primereact/headless/styleclass';
import * as React from 'react';
import { StyleClassProvider } from './StyleClass.context';
import { defaultProps } from './StyleClass.props';

export const StyleClass = withComponent({
    name: 'StyleClass',
    defaultProps,
    setup(instance) {
        const styleclass = useStyleClass(instance?.inProps);

        return styleclass;
    },
    render(instance) {
        const { props, ptmi } = instance;

        return (
            <StyleClassProvider value={instance}>
                <Component instance={instance} attrs={ptmi('root')} children={props.children} />
            </StyleClassProvider>
        );
    }
});
