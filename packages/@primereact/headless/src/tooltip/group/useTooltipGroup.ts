import { withHeadless } from '@primereact/core/headless';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { TimeoutState } from '@primereact/types/shared/tooltip';
import * as React from 'react';
import { defaultProps } from './useTooltipGroup.props';

export const useTooltipGroup = withHeadless({
    name: 'useTooltipGroup',
    defaultProps,
    setup: ({ props }) => {
        const { timeout, skipTimeout } = props;
        const prevTooltip = React.useRef<null | HTMLElement | undefined>(null);
        const timeoutRef = React.useRef<number | null>(null);
        const skipTimeoutRef = React.useRef<number | null>(null);
        const timeoutStateRef = React.useRef<TimeoutState>('delayed');

        const clearTimers = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };

        const scheduleTimeout = (callback?: () => void, currentTooltip?: HTMLElement) => {
            clearTimers();

            if (prevTooltip.current === null) {
                timeoutStateRef.current = skipTimeoutRef.current ? 'instant' : 'delayed';
            } else if (prevTooltip.current === currentTooltip) {
                timeoutStateRef.current = 'normal';
            } else {
                timeoutStateRef.current = 'instant';
            }

            prevTooltip.current = currentTooltip;

            if (skipTimeoutRef.current === null) {
                skipTimeoutRef.current = window.setTimeout(() => {
                    timeoutStateRef.current = 'normal';
                    skipTimeoutRef.current = null;
                }, skipTimeout || 300);
            }

            timeoutRef.current = window.setTimeout(() => {
                timeoutRef.current = null;
                prevTooltip.current = null;
                timeoutStateRef.current = 'delayed';
                callback?.();
            }, timeout || 700);
        };

        useUnmountEffect(() => {
            clearTimers();

            if (prevTooltip.current) {
                prevTooltip.current = null;
            }

            if (skipTimeoutRef.current) {
                clearTimeout(skipTimeoutRef.current);
                skipTimeoutRef.current = null;
            }
        });

        const state = {
            get timeoutState() {
                return timeoutStateRef.current;
            },
            get prevTooltip() {
                return prevTooltip.current;
            }
        };

        return {
            state,
            scheduleTimeout,
            clearTimers
        };
    }
});
