'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultClearIconProps } from './SelectClearIcon.props';

export const SelectClearIcon = withComponent({
    name: 'Select.ClearIcon',
    defaultProps: defaultClearIconProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;

        if (!select?.hasValue()) {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: select?.cx('clearIcon'),
                onClick: select?.onClearClick
            },
            select?.ptm('clearIcon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
