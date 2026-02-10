'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultClearIconProps } from './AutoCompleteClearIcon.props';

export const AutoCompleteClearIcon = withComponent({
    name: 'AutoComplete.ClearIcon',
    defaultProps: defaultClearIconProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        if (!autocomplete?.hasValue()) {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('clearIcon'),
                onClick: autocomplete?.onClearClick
            },
            autocomplete?.ptm('clearIcon'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
