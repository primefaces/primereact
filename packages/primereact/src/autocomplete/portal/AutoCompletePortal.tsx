'use client';
import { Component, withComponent } from '@primereact/core/component';
import type { useOverlayOpenChangeEvent } from '@primereact/types/shared/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { Overlay } from 'primereact/overlay';
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
        const { props, ptmi, autocomplete } = instance;

        const rootProps = mergeProps(
            {
                className: autocomplete?.cx('portal')
            },
            autocomplete?.ptm('portal'),
            ptmi('root')
        );

        const createPanel = () => {
            const panelProps = mergeProps(
                {
                    className: autocomplete?.cx('panel')
                },
                ptmi('panel')
            );

            return <div {...panelProps}>{resolve(props.children, instance)}</div>;
        };

        return (
            <Component instance={instance} attrs={rootProps}>
                <Overlay
                    ref={autocomplete?.portalRef}
                    appendTo={autocomplete?.props.appendTo}
                    target={autocomplete?.inputRef?.current?.elementRef?.current}
                    type="overlay"
                    open={autocomplete?.state.opened}
                    onOpenChange={({ value }: useOverlayOpenChangeEvent) => autocomplete?.changeVisibleState(value)}
                    onEnter={autocomplete?.onOverlayEnter}
                    onAfterEnter={autocomplete?.onOverlayAfterEnter}
                >
                    {createPanel()}
                </Overlay>
            </Component>
        );
    }
});
