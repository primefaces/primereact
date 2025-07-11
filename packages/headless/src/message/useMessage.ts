import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useMessage.props';

export const useMessage = withHeadless({
    name: 'useMessage',
    defaultProps,
    setup: ({ props }) => {
        const [visibleState, setVisibleState] = React.useState<boolean>(true);
        const timerRef = React.useRef<NodeJS.Timeout | null>(null);

        const state = {
            visible: visibleState
        };

        // methods
        const handleClose = React.useCallback(() => {
            setVisibleState(false);

            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }

            props.onClose?.();
        }, [props.onClose]);

        // effects
        React.useEffect(() => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }

            if (typeof props.life === 'number' && props.life > 0 && visibleState) {
                timerRef.current = setTimeout(() => {
                    handleClose();
                }, props.life);
            }

            return () => {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                }
            };
        }, [props.life, visibleState, handleClose]);

        return {
            state,
            handleClose
        };
    }
});
