'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useSpeedDialContext } from '../SpeedDial.context';
import { defaultActionProps } from './SpeedDialAction.props';

export const SpeedDialAction = withComponent({
    name: 'SpeedDialAction',
    defaultProps: defaultActionProps,
    setup() {
        const speeddial = useSpeedDialContext();

        return { speeddial };
    },
    render(instance) {
        const { props, ptmi, speeddial } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: speeddial?.cx('action'),
                tabIndex: -1,
                role: 'menuitem',
                onClick: speeddial?.onItemClick,
                onKeyDown: speeddial?.onItemKeyDown
            },
            ptmi('root')
        );

        // @ts-expect-error: Button expects a type prop, but we are using it as a button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={speeddial?.ptm('button')} children={props.children} />;
    }
});
