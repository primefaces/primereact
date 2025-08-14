'use client';
import { Component } from '@primereact/core/component';
import { useSpeedDial } from '@primereact/headless/speeddial';
import { styles } from '@primereact/styles/speeddial';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { SpeedDialProvider } from './SpeedDial.context';
import { defaultProps } from './SpeedDial.props';
import { SpeedDialAction } from './action';
import { SpeedDialButton } from './button';
import { SpeedDialItem } from './item';
import { SpeedDialList } from './list';
import { SpeedDialMask } from './mask';

export const SpeedDial = withComponent({
    name: 'SpeedDial',
    defaultProps,
    styles,
    setup(instance) {
        const speeddial = useSpeedDial(instance.inProps);

        return speeddial;
    },
    render(instance) {
        const { id, props, ptmi, cx, sx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                style: sx('root')
            },
            ptmi('root')
        );

        return (
            <SpeedDialProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </SpeedDialProvider>
        );
    },
    components: {
        Action: SpeedDialAction,
        Button: SpeedDialButton,
        Item: SpeedDialItem,
        List: SpeedDialList,
        Mask: SpeedDialMask
    }
});
