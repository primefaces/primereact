'use client';
import { Component, withComponent } from '@primereact/core/component';
import { PlusIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                type: 'button',
                className: speeddial?.cx('button'),
                'aria-expanded': speeddial?.state.visible,
                'aria-haspopup': 'true',
                'aria-controls': `${speeddial?.id}_list`,
                onClick: speeddial?.onClick,
                onKeyDown: speeddial?.onTogglerKeydown
            },
            speeddial?.ptm('button'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <PlusIcon pt={speeddial?.ptm('icon')} />;
        };

        const icon = createIconElement();

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});
