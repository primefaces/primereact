'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultButtonProps } from './AutoCompleteButton.props';

export const AutoCompleteButton = withComponent({
    name: 'AutoCompleteButton',
    defaultProps: defaultButtonProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('button'),
                onClick: autocomplete?.onButtonClick
            },
            autocomplete?.ptm('button'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
