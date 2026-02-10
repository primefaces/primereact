'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultTriggerProps } from './SelectTrigger.props';

export const SelectTrigger = withComponent({
    name: 'Select.Trigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;

        const rootProps = mergeProps(
            {
                className: select?.cx('trigger')
            },
            select?.ptm('trigger'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={select?.setAnchorRef} />;
    }
});
