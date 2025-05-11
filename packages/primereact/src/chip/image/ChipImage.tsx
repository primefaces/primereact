'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useChipContext } from '../Chip.context';
import { defaultImageProps } from './ChipImage.props';

export const ChipImage = withComponent({
    name: 'ChipImage',
    defaultProps: defaultImageProps,
    setup() {
        const chip = useChipContext();

        return { chip };
    },
    render(instance) {
        const { props, ptmi, chip } = instance;

        const rootProps = mergeProps(
            {
                className: chip?.cx('image')
            },
            chip?.ptm('image'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
