import type { ThemeProps } from './Theme.types';

export const defaultProps = {
    preset: undefined,
    prefix: 'p',
    darkModeSelector: 'system',
    cssLayer: false
} satisfies ThemeProps;
