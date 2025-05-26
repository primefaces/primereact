'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useChipContext } from '../Chip.context';
import { defaultIconProps } from './ChipIcon.props';

export const ChipIcon = withComponent({
    name: 'ChipIcon',
    defaultProps: defaultIconProps,
    setup() {
        const chip = useChipContext();

        return { chip };
    },
    render(instance) {
        const { props, ptmi, chip } = instance;

        const rootProps = mergeProps(
            {
                className: chip?.cx('icon')
            },
            chip?.ptm('icon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
