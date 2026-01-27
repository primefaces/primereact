'use client';
import { Component, withComponent } from '@primereact/core/component';
import type { useOverlayOpenChangeEvent } from '@primereact/types/shared/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { Overlay } from 'primereact/overlay';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultPortalProps } from './SelectPortal.props';

export const SelectPortal = withComponent({
    name: 'Select.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;

        const rootProps = mergeProps(
            {
                className: select?.cx('portal')
            },
            select?.ptm('portal'),
            ptmi('root')
        );

        const createPanel = () => {
            const panelProps = mergeProps(
                {
                    className: select?.cx('panel')
                },
                ptmi('panel')
            );

            return (
                <div ref={select?.overlayRef} {...panelProps}>
                    {resolve(props.children, instance)}
                </div>
            );
        };

        return (
            <Component instance={instance} attrs={rootProps}>
                <Overlay
                    ref={select?.portalRef}
                    appendTo={select?.props.appendTo}
                    target={select?.triggerRef?.current ?? undefined}
                    type="overlay"
                    open={select?.state.opened}
                    onOpenChange={({ value }: useOverlayOpenChangeEvent) => select?.changeVisibleState(value)}
                    onEnter={select?.onOverlayEnter}
                    onAfterEnter={select?.onOverlayAfterEnter}
                >
                    {createPanel()}
                </Overlay>
            </Component>
        );
    }
});
