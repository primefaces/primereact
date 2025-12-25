'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useListbox } from '@primereact/headless/listbox';
import { styles } from '@primereact/styles/listbox';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { ListboxProvider } from './Listbox.context';
import { defaultProps } from './Listbox.props';
import { ListboxEmpty } from './empty';
import { ListboxFilter } from './filter/ListboxFilter';
import { ListboxFooter } from './footer';
import { ListboxHeader } from './header';
import { ListboxOption } from './option';
import { ListboxOptions } from './options';
import { ListboxSelection } from './selection';

export const Listbox = withComponent({
    name: 'Listbox',
    defaultProps,
    styles,
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
    },
    components: {
        Header: ListboxHeader,
        Options: ListboxOptions,
        Option: ListboxOption,
        Footer: ListboxFooter,
        Filter: ListboxFilter,
        Selection: ListboxSelection,
        Empty: ListboxEmpty
    }
});
