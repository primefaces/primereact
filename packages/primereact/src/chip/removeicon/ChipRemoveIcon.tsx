'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TimesCircleIcon } from '@primereact/icons/timescircle';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useChipContext } from '../Chip.context';
import { defaultRemoveIconProps } from './ChipRemoveIcon.props';

export const ChipRemoveIcon = withComponent({
    name: 'ChipRemoveIcon',
    defaultProps: defaultRemoveIconProps,
    setup() {
        const chip = useChipContext();

        return { chip };
    },
    render(instance) {
        const { props, ptmi, chip } = instance;

        const rootProps = mergeProps(
            {
                tabIndex: 0,
                className: chip?.cx('removeIcon'),
                onClick: chip?.close
            },
            chip?.removeIconProps,
            chip?.ptm('removeIcon'),
            ptmi('root')
        );

        return props.asChild ? <Component as={'span'} attrs={rootProps} children={props.children} /> : <TimesCircleIcon {...rootProps} />;
    }
});
