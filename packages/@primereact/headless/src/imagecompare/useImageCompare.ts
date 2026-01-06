import { withHeadless } from '@primereact/core/headless';
import { $dt } from '@primeuix/styled';
import { setCSSProperty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useImageCompare.props';

export const useImageCompare = withHeadless({
    name: 'useImageCompare',
    defaultProps,
    setup() {
        const [slideValueState, setSlideValueState] = React.useState<string | undefined>('50');
        const rightImageRef = React.useRef<HTMLImageElement>(null);

        const state = {
            slideValue: slideValueState
        };

        // methods
        const onSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!rightImageRef.current) return;

            const value = event.target.value;

            setSlideValueState(value);
            setCSSProperty(rightImageRef.current, $dt('imagecompare.scope.x').name, `${value}%`);
        };

        const registerRightImage = (element: HTMLImageElement) => {
            rightImageRef.current = element;
        };

        return {
            state,
            onSlideChange,
            registerRightImage
        };
    }
});
