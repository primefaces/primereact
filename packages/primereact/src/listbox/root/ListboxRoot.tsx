'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useListbox } from '@primereact/headless/listbox';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { ListboxProvider } from '../Listbox.context';
import { defaultRootProps } from './ListboxRoot.props';

export const ListboxRoot = withComponent({
    name: 'ListboxRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const listbox = useListbox(instance?.inProps);

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

        const firstHiddenFocusable = createHiddenFocusableElement('firstHiddenFocusable', firstHiddenFocusableRef, onFirstHiddenFocus);
        const lastHiddenFocusable = createHiddenFocusableElement('lastHiddenFocusable', lastHiddenFocusableRef, onLastHiddenFocus);

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
            <ListboxProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {firstHiddenFocusable}
                    {content}
                    {lastHiddenFocusable}
                </Component>
            </ListboxProvider>
        );
    }
});
