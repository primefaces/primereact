'use client';
import { Component } from '@primereact/core/component';
import type { useOverlayOpenChangeEvent } from '@primereact/types/shared/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Overlay } from 'primereact/overlay';
import * as React from 'react';
import { usePasswordContext } from '../Password.context';
import { defaultPortalProps } from './PasswordPortal.props';

export const PasswordPortal = withComponent({
    name: 'PasswordPortal',
    defaultProps: defaultPortalProps,
    setup() {
        const password = usePasswordContext();

        return { password };
    },
    render(instance) {
        const { props, ptmi, password } = instance;

        const rootProps = mergeProps(
            {
                className: password?.cx('portal')
            },
            ptmi('root')
        );

        const createPanel = () => {
            const panelProps = mergeProps(
                {
                    className: password?.cx('panel')
                },
                ptmi('panel')
            );

            return (
                <div ref={password?.overlayRef} {...panelProps}>
                    {resolve(props.children, instance)}
                </div>
            );
        };

        return (
            <Component instance={instance} attrs={rootProps}>
                <Overlay
                    ref={password?.portalRef}
                    appendTo={password?.props.appendTo}
                    target={password?.inputRef?.current?.elementRef?.current}
                    type="overlay"
                    open={password?.state.overlayVisible}
                    onOpenChange={({ value }: useOverlayOpenChangeEvent) => password?.changeVisibleState(value)}
                    onEnter={password?.onOverlayEnter}
                >
                    {createPanel()}
                </Overlay>
            </Component>
        );
    }
});
