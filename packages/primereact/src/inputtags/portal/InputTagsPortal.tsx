'use client';
import { Component, withComponent } from '@primereact/core/component';
import type { useOverlayOpenChangeEvent } from '@primereact/types/shared/overlay';
import { mergeProps, resolve } from '@primeuix/utils';
import { Overlay } from 'primereact/overlay';
import * as React from 'react';
import { useInputTagsContext } from '../InputTags.context';
import { defaultPortalProps } from './InputTagsPortal.props';

export const InputTagsPortal = withComponent({
    name: 'InputTags.Portal',
    defaultProps: defaultPortalProps,
    setup() {
        const inputtags = useInputTagsContext();

        return { inputtags };
    },
    render(instance) {
        const { props, ptmi, inputtags } = instance;

        const rootProps = mergeProps(
            {
                className: inputtags?.cx('portal')
            },
            inputtags?.ptm('portal'),
            ptmi('root')
        );

        const createPanel = () => {
            const panelProps = mergeProps(
                {
                    className: inputtags?.cx('panel')
                },
                ptmi('panel')
            );

            return <div {...panelProps}>{resolve(props.children, instance)}</div>;
        };

        return (
            <Component instance={instance} attrs={rootProps}>
                <Overlay
                    ref={inputtags?.portalRef}
                    appendTo={inputtags?.props.appendTo}
                    target={inputtags?.elementRef?.current}
                    type="overlay"
                    open={inputtags?.state.overlayVisible}
                    onOpenChange={({ value }: useOverlayOpenChangeEvent) => inputtags?.changeVisibleState(value)}
                    onEnter={inputtags?.onOverlayEnter}
                    onAfterEnter={inputtags?.onOverlayAfterEnter}
                >
                    {createPanel()}
                </Overlay>
            </Component>
        );
    }
});
