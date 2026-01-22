'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultTriggerProps } from './AutoCompleteTrigger.props';

export const AutoCompleteTrigger = withComponent({
    name: 'AutoComplete.Trigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('trigger'),
                onClick: autocomplete?.onTriggerClick
            },
            autocomplete?.ptm('trigger'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
