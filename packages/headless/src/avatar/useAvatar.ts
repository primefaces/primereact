import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useAvatar.props';
export const useAvatar = withHeadless({
    setup: ({ props }) => {
        const [onImageLoaded, setOnImageLoaded] = React.useState<boolean>(false);

        const state = {
            onImageLoaded
        };

        // element refs

        // methods

        const handleImageLoad = (src: string) => {
            if (!src) {
                setOnImageLoaded(false);

                return;
            }

            const image = new window.Image();

            image.src = src;

            image.onload = () => {
                setTimeout(() => {
                    setOnImageLoaded(true);
                }, props.delayDuration ?? 0);
            };

            image.onerror = () => {
                setOnImageLoaded(false);
            };
        };

        // effects

        return {
            state,
            // element refs

            // methods
            handleImageLoad
        };
    },
    defaultProps
});
