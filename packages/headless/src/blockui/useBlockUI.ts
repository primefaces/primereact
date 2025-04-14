import { withHeadless } from '@primereact/core/headless';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { blockBodyScroll, unblockBodyScroll } from '@primeuix/utils';
import { addClass, hasCSSAnimation } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import * as React from 'react';
import { defaultProps } from './useBlockUI.props';

export const useBlockUI = withHeadless({
    setup: ({ props, $primereact }) => {
        const [visibleState, setVisibleState] = React.useState(props.blocked);
        const activeElementRef = React.useRef<HTMLElement | null>(null);
        const maskRef = React.useRef<HTMLDivElement | null>(null);

        const block = () => {
            setVisibleState(true);
            activeElementRef.current = document.activeElement as HTMLElement | null;
        };

        const unblock = () => {
            if (maskRef.current) {
                addClass(maskRef.current, 'p-overlay-mask-leave');

                if (hasCSSAnimation(maskRef.current)) {
                    maskRef.current.addEventListener('animationend', () => {
                        removeMask();
                    });
                } else {
                    removeMask();
                }
            }
        };

        const removeMask = () => {
            if (maskRef.current) {
                ZIndex.clear(maskRef.current);
            }

            setVisibleState(false);

            if (props.fullScreen) {
                unblockBodyScroll('');

                if (activeElementRef.current) {
                    activeElementRef.current.focus();
                }
            }
        };

        const onPortalMounted = () => {
            if (props.fullScreen) {
                blockBodyScroll('');

                if (activeElementRef.current) {
                    activeElementRef.current.blur();
                }
            }

            if (props.autoZIndex && maskRef.current) {
                const key = props.fullScreen ? 'modal' : 'overlay';

                ZIndex.set(key, maskRef.current, $primereact?.config?.zIndex[key]);
            }
        };

        useMountEffect(() => {
            if (visibleState) {
                block();
            }
        });

        useUpdateEffect(() => {
            if (props.blocked) {
                block();
            } else {
                unblock();
            }
        }, [props.blocked]);

        useUnmountEffect(() => {
            if (props.fullScreen) {
                unblockBodyScroll('');
            }

            if (maskRef.current) {
                ZIndex.clear(maskRef.current);
            }
        });

        return {
            visibleState,
            maskRef,
            onPortalMounted
        };
    },
    defaultProps
});
