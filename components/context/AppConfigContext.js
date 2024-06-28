import { createContext, useContext, useEffect } from 'react';
import { switchTheme } from '@/components/utils/utils';
import { useLocalStorage } from '@/components/lib/hooks/useStorage';
import { PrimeReactProvider } from '@/components/lib/api/PrimeReactContext';

const getCurrentThemeName = (linkElementId) => {
    const linkElement = document.getElementById(linkElementId);
    const href = linkElement.getAttribute('href');
    const match = href.match(/\/([^/]+)\/theme\.css/);

    if (match) {
        return match[1];
    }

    return href;
};

const getThemeName = (theme, mode) => {
    if (lightOnlyThemes.includes(theme)) {
        return theme;
    }

    const [name, color] = theme.split('-');
    const fullName = [name, mode, color].filter(Boolean).join('-');

    return fullName;
};

export const inputStyles = [
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' }
];

export const scales = [12, 13, 14, 15, 16];

export const lightOnlyThemes = ['fluent-light', 'mira', 'nano'];

export const defaultAppConfig = {
    announcement: null,
    inputStyle: inputStyles[0].value,
    newsActive: false,
    ripple: true,
    scale: scales[2],
    // theme values
    appTheme: 'lara-cyan',
    primeTheme: 'lara-cyan',
    themeMode: 'light'
};

export const AppConfigContext = createContext();

export const AppConfigProvider = (props) => {
    const { children, linkElementId = 'theme-link', themeStorageKey = 'primeTheme' } = props;
    const [config, setConfig] = useLocalStorage(defaultAppConfig, 'primereact:config');
    const { inputStyle, ripple, scale, themeMode } = config;
    const theme = config[themeStorageKey];
    const darkMode = themeMode === 'dark';

    const changeScale = (step) => {
        setConfig((prev) => {
            const index = scales.indexOf(prev.scale);
            const newIndex = index + step;

            return { ...prev, scale: scales[newIndex] };
        });
    };

    const changeInputStyle = (value) => {
        setConfig((prev) => ({ ...prev, inputStyle: value }));
    };

    const switchRipple = (value) => {
        setConfig((prev) => ({ ...prev, ripple: value }));
    };

    const changeTheme = (name, color) => {
        setConfig((prev) => {
            const isMaterialTheme = name === 'md';
            const currentThemeName = isMaterialTheme && prev.compactMaterialMode ? 'mdc' : name;

            let newTheme = [currentThemeName, color].filter(Boolean).join('-');
            let newThemeMode = prev.themeMode;

            if (lightOnlyThemes.includes(name)) {
                newThemeMode = 'light';
            }

            return { ...prev, [themeStorageKey]: newTheme, themeMode: newThemeMode };
        });
    };

    const changeThemeMode = (mode) => {
        setConfig((prev) => {
            const currentTheme = prev[themeStorageKey];
            const nextThemeMode = mode ? mode : prev.themeMode === 'dark' ? 'light' : 'dark';

            if (lightOnlyThemes.includes(currentTheme)) {
                return { ...prev, themeMode: 'light' };
            }

            return { ...prev, themeMode: nextThemeMode };
        });
    };

    const switchMaterialCompactMode = (checked) => {
        setConfig((prev) => {
            const currentTheme = prev[themeStorageKey];
            const isMaterialTheme = currentTheme.startsWith('md');

            if (isMaterialTheme) {
                const [, color] = currentTheme.split('-');
                const newThemeName = checked ? 'mdc' : 'md';
                const newTheme = [newThemeName, color].join('-');

                return { ...prev, [themeStorageKey]: newTheme, compactMaterialMode: checked };
            }

            return { ...prev, compactMaterialMode: checked };
        });
    };

    const showNews = (message) => {
        setConfig((prev) => ({ ...prev, newsActive: true, announcement: message }));
    };

    const hideNews = () => {
        setConfig((prev) => ({ ...prev, newsActive: false, announcement: null }));
    };

    const isDarkModeDisabled = () => lightOnlyThemes.includes(theme);

    const isThemeActive = (name, color) => {
        const [themeName, themeColor] = theme.split('-');
        const isMaterialTheme = name === 'md';

        if (isMaterialTheme) {
            return themeName.startsWith('md') && themeColor === color;
        }

        return themeName === name && themeColor === color;
    };

    useEffect(() => {
        const themeName = getThemeName(theme, themeMode);
        const currentThemeName = getCurrentThemeName(linkElementId);

        if (currentThemeName !== themeName) {
            switchTheme(currentThemeName, themeName, linkElementId);
        }
    }, [linkElementId, theme, themeMode]);

    useEffect(() => {
        document.documentElement.style.fontSize = scale + 'px';
    }, [scale]);

    const primeReactContext = {
        inputStyle,
        ripple
    };

    const appContentContext = {
        // values
        ...config,
        darkMode,
        options: {
            inputStyles,
            scales
        },
        theme,
        // actions
        changeInputStyle,
        changeScale,
        changeTheme,
        changeThemeMode,
        hideNews,
        isDarkModeDisabled,
        isThemeActive,
        showNews,
        switchMaterialCompactMode,
        switchRipple
    };

    return (
        <PrimeReactProvider value={primeReactContext}>
            <AppConfigContext.Provider value={appContentContext}>{children}</AppConfigContext.Provider>
        </PrimeReactProvider>
    );
};

export const useAppConfig = () => useContext(AppConfigContext);
