'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultPanelProps } from './AutoCompletePanel.props';

export const AutoCompletePanel = withComponent({
    name: 'AutoComplete.Panel',
    defaultProps: defaultPanelProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, autocomplete, ptmi } = instance;

        const isVisible = autocomplete?.presence?.present && autocomplete?.presence?.mounted && !autocomplete?.presence?.exiting;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('panel'),
                ...(isVisible && { 'data-open': '' })
            },
            autocomplete?.ptm('panel'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={autocomplete?.presence?.ref} />;
    }
});
