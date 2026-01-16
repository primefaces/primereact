'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useListbox } from '@primereact/headless/listbox';
import { mergeProps, resolve, omit } from '@primeuix/utils';
import * as React from 'react';
import type { ListboxRootInstance } from '@primereact/types/shared/listbox';
import { ListboxProvider } from '../Listbox.context';
import { defaultRootProps } from './ListboxRoot.props';

export const ListboxRoot = withComponent({
    name: 'ListboxRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const listbox = (instance?.inProps?.listboxInstance as unknown as Record<PropertyKey, unknown>) ?? useListbox(omit(instance?.inProps, 'listboxInstance'));

        return listbox;
    },
    render(instance) {
        const {
            id,
            props,
            ptmi,
            ptm,
            cx,
            // refs
            firstHiddenFocusableRef,
            lastHiddenFocusableRef,
            // methods
            onFirstHiddenFocus,
            onLastHiddenFocus,
            onFocusOut
        } = instance;

        const createHiddenFocusableElement = (key: string, ref: React.Ref<HTMLSpanElement>, onFocus?: (event: React.FocusEvent) => void) => {
            const hiddenProps = mergeProps(
                {
                    className: 'p-hidden-accessible p-hidden-focusable',
                    tabIndex: !props.disabled ? props.tabIndex : -1,
                    'aria-hidden': true,
                    'data-p-hidden-accessible': true,
                    'data-p-hidden-focusable': true,
                    onFocus
                },
                ptm(key)
            );

            return <span ref={ref} {...hiddenProps} />;
        };

        const firstHiddenFocusable = createHiddenFocusableElement('firstHiddenFocusable', firstHiddenFocusableRef as React.Ref<HTMLSpanElement>, onFirstHiddenFocus as (event: React.FocusEvent) => void);
        const lastHiddenFocusable = createHiddenFocusableElement('lastHiddenFocusable', lastHiddenFocusableRef as React.Ref<HTMLSpanElement>, onLastHiddenFocus as (event: React.FocusEvent) => void);

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                onBlur: onFocusOut
            },
            ptmi('root')
        );

        // @ts-expect-error: Update resolve to handle attrs correctly
        const content = resolve(props.children, instance, rootProps);

        return (
            <ListboxProvider value={instance as unknown as ListboxRootInstance}>
                <Component instance={instance} attrs={rootProps}>
                    {firstHiddenFocusable}
                    {content}
                    {lastHiddenFocusable}
                </Component>
            </ListboxProvider>
        );
    }
});
