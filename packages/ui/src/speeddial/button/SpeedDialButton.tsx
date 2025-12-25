'use client';
import { Component, withComponent } from '@primereact/core/component';
import { PlusIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useSpeedDialContext } from '../SpeedDial.context';
import { defaultButtonProps } from './SpeedDialButton.props';

export const SpeedDialButton = withComponent({
    name: 'SpeedDialButton',
    defaultProps: defaultButtonProps,
    setup() {
        const speeddial = useSpeedDialContext();

        return { speeddial };
    },
    render(instance) {
        const { props, ptmi, speeddial } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: speeddial?.cx('button'),
                'aria-expanded': speeddial?.state.visible,
                'aria-haspopup': 'true',
                'aria-controls': `${speeddial?.id}_list`,
                onClick: speeddial?.onClick,
                onKeyDown: speeddial?.onTogglerKeydown
            },
            ptmi('root')
        );

        const createIconElement = () => {
            return <PlusIcon pt={speeddial?.ptm('icon')} />;
        };

        const icon = createIconElement();

        // @ts-expect-error: Button expects a type prop, but we are using it as a button.
        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={speeddial?.ptm('button')} children={props.children ?? icon} />;
    }
});
