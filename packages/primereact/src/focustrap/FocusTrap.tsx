'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useFocusTrap } from '@primereact/headless/focustrap';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { FocusTrapProvider } from './FocusTrap.context';
import { defaultProps } from './FocusTrap.props';

export const FocusTrap = withComponent({
    name: 'FocusTrap',
    defaultProps,
    setup(instance) {
        const focustrap = useFocusTrap(instance.inProps);

        return focustrap;
    },
    render(instance) {
        const { props, cx, ptmi, ptm, firstHiddenElementRef, lastHiddenElementRef, onFirstHiddenFocus, onLastHiddenFocus, containerRef } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root')
            },
            ptmi('root')
        );

        const HiddenElement = ({ ref, style, ...props }: React.ComponentProps<'span'>) => {
            const hiddenElementProps = mergeProps(
                {
                    tabIndex: 0,
                    role: 'presentation',
                    'aria-hidden': true,
                    'data-focus-trap-hidden': '',
                    style: {
                        border: '0',
                        clip: 'rect(0 0 0 0)',
                        height: '1px',
                        margin: '-1px',
                        opacity: 0,
                        overflow: 'hidden',
                        padding: 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                        whiteSpace: 'nowrap',
                        width: '1px',
                        ...style
                    },
                    ...props
                },
                ptm('hiddenElement')
            );

            return <span ref={ref} {...hiddenElementProps} />;
        };

        return (
            <FocusTrapProvider value={instance}>
                <React.Fragment>
                    <HiddenElement ref={firstHiddenElementRef} onFocus={onFirstHiddenFocus} />
                    <Component attrs={rootProps} instance={instance} children={props.children} ref={containerRef} />
                    <HiddenElement ref={lastHiddenElementRef} onFocus={onLastHiddenFocus} />
                </React.Fragment>
            </FocusTrapProvider>
        );
    }
});
