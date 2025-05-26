'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useChipContext } from '../Chip.context';
import { defaultLabelProps } from './ChipLabel.props';

export const ChipLabel = withComponent({
    name: 'ChipLabel',
    defaultProps: defaultLabelProps,
    setup() {
        const chip = useChipContext();

        return { chip };
    },
    render(instance) {
        const { props, ptmi, chip } = instance;

        const rootProps = mergeProps(
            {
                className: chip?.cx('label')
            },
            chip?.ptm('label'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
