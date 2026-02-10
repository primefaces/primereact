'use client';
import { withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { Portal } from 'primereact/portal';
import * as React from 'react';
import { useAutoCompleteContext } from '../AutoComplete.context';
import { defaultPortalProps } from './AutoCompletePortal.props';

export const AutoCompletePortal = withComponent({
    name: 'AutoComplete.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const autocomplete = useAutoCompleteContext();

        return { autocomplete };
    },
    render(instance) {
        const { props, autocomplete, ptmi } = instance;

        const containerProps = mergeProps(
            {
                className: autocomplete?.cx('portal')
            },
            autocomplete?.ptm('portal'),
            ptmi('root')
        );

        return <Portal instance={instance} attrs={containerProps} children={props.children} appendTo={autocomplete?.props.appendTo} />;
    }
});
