import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useAvatar.props';

export const useAvatar = withHeadless({
    name: 'useAvatar',
    defaultProps,
    setup({ props }) {
        const [loadState, setLoadState] = React.useState<boolean>(false);
        const imageRef = React.useRef<HTMLImageElement | null>(null);

        const state = {
            load: loadState
        };

        // methods
        const onImageLoad = React.useCallback(() => {
            setTimeout(() => {
                setLoadState(true);
            }, props.delayDuration ?? 0);
        }, [props.delayDuration]);

        const onImageError = React.useCallback(() => {
            setLoadState(false);
        }, []);

        const handleImageLoad = React.useCallback(
            (src?: string) => {
                if (!src) {
                    setLoadState(false);

                    return;
                }

                imageRef.current = new window.Image();
                imageRef.current.src = src;
                imageRef.current.addEventListener('load', onImageLoad);
                imageRef.current.addEventListener('error', onImageError);
            },
            [imageRef, onImageLoad, onImageError]
        );

        const handleImageUnload = React.useCallback(() => {
            setLoadState(false);
            imageRef.current?.removeEventListener('load', onImageLoad);
            imageRef.current?.removeEventListener('error', onImageError);
            imageRef.current = null;
        }, [onImageLoad, onImageError]);

        // effects
        React.useEffect(() => {
            return () => {
                handleImageUnload();
            };
        }, []);

        return {
            state,
            // methods
            handleImageLoad,
            handleImageUnload
        };
    }
});
