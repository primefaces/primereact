'use client';
import { Component } from '@primereact/core/component';
import { tabStyles } from '@primereact/styles/tabs/TabsTab.style';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultTabProps } from './TabsTab.props';

export const TabsTab = withComponent({
    name: 'Tab',
    defaultProps: defaultTabProps,
    styles: tabStyles,
    setup(instance) {
        const { props } = instance;
        const tabs = useTabsContext();

        const active = React.useMemo(() => tabs?.isItemActive(props.value), [tabs, props.value]);

        return { tabs, active };
    },
    render(instance) {
        const { props, ptmi, cx, tabs, active, elementRef } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root'),
                tabIndex: active ? tabs?.props.tabindex : -1,
                disabled: props.disabled,
                role: 'tab',
                'data-p-active': active,
                'data-p-disabled': props.disabled,
                'aria-disabled': props.disabled,
                'aria-selected': active,
                onClick: () => {
                    if (!tabs?.props.selectOnFocus) {
                        tabs?.updateValue(props.value);
                    }
                },
                onFocus: () => {
                    if (tabs?.props.selectOnFocus) {
                        tabs?.updateValue(props.value);
                    }
                },
                onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
                    switch (event.code) {
                        case 'ArrowRight':
                            tabs?.focusTab(elementRef, tabs?.elementRef, 'next');
                            break;

                        case 'ArrowLeft':
                            tabs?.focusTab(elementRef, tabs?.elementRef, 'previous');
                            break;

                        case 'Home':
                            tabs?.focusTab(elementRef, tabs?.elementRef, 'first');
                            break;

                        case 'End':
                            tabs?.focusTab(elementRef, tabs?.elementRef, 'last');
                            break;

                        case 'PageDown':
                            tabs?.focusTab(elementRef, tabs?.elementRef, 'next');
                            break;

                        case 'PageUp':
                            tabs?.focusTab(elementRef, tabs?.elementRef, 'previous');
                            break;

                        case 'Enter':
                        case 'NumpadEnter':
                        case 'Space':
                            tabs?.updateValue(props.value);
                            break;

                        default:
                            break;
                    }
                }
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
