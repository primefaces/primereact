'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultPanelProps } from './SelectPanel.props';

export const SelectPanel = withComponent({
    name: 'Select.Panel',
    defaultProps: defaultPanelProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, select, ptmi } = instance;

        const isVisible = select?.presence?.present && select?.presence?.mounted && !select?.presence?.exiting;

        const rootProps = mergeProps(
            {
                className: select?.cx('panel'),
                ...(isVisible && { 'data-open': '' })
            },
            select?.ptm('panel'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={select?.presence?.ref} />;
    }
});
