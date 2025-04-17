import { withHeadless } from '@primereact/core/headless';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { isClient } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './usePortal.props';

export const usePortal = withHeadless({
    setup: ({ props }) => {
        const [mountedState, setMountedState] = React.useState<boolean | undefined>(props.visible && isClient());

        useMountEffect(() => {
            if (isClient() && !mountedState) {
                setMountedState(true);

                if (props.onMounted) {
                    props.onMounted();
                }
            }
        });

        useUpdateEffect(() => {
            if (props.onMounted) {
                props.onMounted();
            }
        }, [mountedState]);

        useUnmountEffect(() => {
            if (props.onUnmounted) {
                props.onUnmounted();
            }
        });

        return {
            mountedState
        };
    },
    defaultProps
});
